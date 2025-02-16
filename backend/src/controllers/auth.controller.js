import bcrypt from "bcrypt";
import supabase from "../config/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

// POST register
export const register = async (req, res) => {
  try {
    // check if a user with email already exists
    const { data: checkUser } = await supabase
      .from("users")
      .select("email")
      .eq("email", req.body.email)
      .single();

    if (checkUser?.email) {
      return res.status(500).json({
        success: false,
        result: {
          response: "Internal Server Error",
          message: "A user with the provided email already exists.",
        },
      });
    }

    // hash password
    const hashedPwd = await bcrypt.hash(req.body.password, 10);

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPwd,
      role: "admin",
    };

    // insert user to the database
    const { data, error, status } = await supabase.from("users").insert(user);

    if (error) {
      return res.status(status).json({
        success: false,
        result: {
          response: "Internal Server Error",
          message: error.message,
        },
      });
    }

    res.json({
      success: true,
      response: "User registered successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      result: {
        response: "Internal Server Error",
        message: err.message,
      },
    });
  }
};

export const login = async (req, res) => {
  try {
    // check if the user exists
    const { data: user } = await supabase
      .from("users")
      .select()
      .eq("email", req.body.email)
      .single();
      
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
    if (!(await bcrypt.compare(req.body.password, user.password))) {
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
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "20s",
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1min",
    });

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
  } catch (err) {
    return res.status(500).json({
      success: false,
      result: {
        response: "Internal Server Error.",
        message: err.message,
      },
    });
  }
};

export const refreshToken = async (req, res) => {
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
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({
        success: false,
        result: {
          response: "Forbidden. Invalid or expired refresh token",
        },
      });

    const payload = { ...user, iat: Math.floor(Date.now() / 1000) };
    delete payload.exp;

    const newAccessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "20s",
    });

    res.status(200).json({
      success: true,
      result: {
        response: "New access token granted.",
        message: newAccessToken,
      },
    });
  });
};

export const getUsers = async (req, res) => {
  const { data: users } = await supabase.from("users").select("*");
  return res.json({
    success: true,
    result: {
      response: users,
    },
  });
};
