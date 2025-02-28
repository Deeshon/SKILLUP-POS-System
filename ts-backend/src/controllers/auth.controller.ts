import dotenv from "dotenv";
import cloudinary from "../config/cloudinary.config.js";
import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../config/db.config.js";

dotenv.config({ path: "./.env" });

// POST test upload
// export const createUser = async (req: Request, res: Response) => {
//   try {
//     // Upload image to cloudinary
//     const result = await cloudinary.uploader.upload(req.file?.path as string, {
//       folder: "swift_pos_images",
//     });

//     // Retrieve the image url from Cloudinary
//     const imageUrl = result.secure_url;

//     const userDetails = {
//       username: req.body.username,
//       email: req.body.email,
//       profileImageUrl: imageUrl,
//     };

//     const createdUser = await prisma.user.create({
//       data: userDetails,
//     });

//     res.json({
//       message: "User created",
//       createdUser,
//     });
//   } catch (error: any) {
//     console.error(error.message);
//   }
// };

// POST register company
export const registerCompany = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { name, email, phone, location, companyLogoUrl } = req.body;

    // check for existing company with provided name
    const existingCompanyName = await prisma.company.findUnique({
      where: { name: req.body.name },
    });

    if (existingCompanyName) {
      return res.status(500).json({
        success: false,
        result: {
          response: "Internal Server Error",
          message: `Company with name ${name} already exists.`,
        },
      });
    }

    // check for existing company with provided email
    const existingCompanyEmail = await prisma.company.findUnique({
      where: { email: req.body.email },
    });

    if (existingCompanyEmail) {
      return res.status(500).json({
        success: false,
        result: {
          response: "Internal Server Error",
          message: `Company with email ${email} already exists.`,
        },
      });
    }

    // upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file?.path as string, {
      folder: "swift_pos_images",
    });

    // retrieve image url from cloudinary
    const imageUrl = result.secure_url;

    const company = {
      name,
      email,
      phone,
      location,
      companyLogoUrl: imageUrl,
    };

    const createdCompany = await prisma.company.create({ data: company });

    return res.status(201).json({
      success: true,
      result: {
        response: createdCompany,
        message: "Company created successfully!",
      },
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      result: {
        response: "Internal Server Error",
        message: err.message,
      },
    });
  }
};

// POST register
export const registerUser = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      username,
      password,
      role,
      companyId,
      profileImageUrl,
    } = req.body;

    // check if a user with provided email already exists
    const checkUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (checkUser) {
      return res.status(500).json({
        success: false,
        result: {
          response: "Internal Server Error",
          message: "A user with the provided email already exists.",
        },
      });
    }

    // upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file?.path as string, {
      folder: 'swift_pos_images'
    })

    // retrieve image url from cloudinary
    const imageUrl = result.secure_url;

    // hash password
    const hashedPwd = await bcrypt.hash(password, 10);

    const user = {
      name,
      email,
      phone,
      username,
      password: hashedPwd,
      role,
      companyId,
      profileImageUrl: imageUrl,
    };

    // insert user to the database
    const createdUser = await prisma.user.create({ data: user });

    res.status(201).json({
      success: true,
      result: {
        response: createdUser,
        message: "User created successfully!",
      },
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      result: {
        response: "Internal Server Error",
        message: err.message,
      },
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // check if the user exists
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(500).json({
        success: false,
        result: {
          response: "Internal Server Error",
          message: "User not found. Please recheck your entered email.",
        },
      });
    }

    // check if the passwords match
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(500).json({
        success: false,
        result: {
          response: "Internal Server Error",
          message: "Invalid Password.",
        },
      });
    }

    // generate access token and refresh tokens
    const payload = { ...user, iat: Math.floor(Date.now() / 1000) };
    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET as string,
      {
        expiresIn: "30s",
      }
    );
    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET as string,
      {
        expiresIn: "1min",
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    return res.status(200).json({
      success: true,
      result: {
        response: accessToken,
        refreshToken: refreshToken,
        message: "User logged in successfully.",
      },
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      result: {
        response: "Internal Server Error.",
        message: err.message,
      },
    });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;

  // check if the refresh token is provided in the cookie
  if (!refreshToken)
    return res.status(403).json({
      success: false,
      result: {
        response: "Forbidden. No refresh token in the response.",
      },
    });

  // validate the refresh token
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err)
        return res.status(403).json({
          success: false,
          result: {
            response: "Forbidden. Invalid or expired refresh token",
          },
        });

      const payload = { ...user, iat: Math.floor(Date.now() / 1000) };
      delete payload.exp;

      const newAccessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET as string,
        {
          expiresIn: "20s",
        }
      );

      res.status(200).json({
        success: true,
        result: {
          response: "New access token granted.",
          message: newAccessToken,
        },
      });
    }
  );
};

export const getUsers = async (req: Request, res: Response): Promise<any> => {
  const users = await prisma.user.findMany();
  return res.json({
    success: true,
    result: {
      response: users,
    },
  });
};
