import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

export const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // check if the token is provided
  if (!token)
    return res.status(401).json({
      success: false,
      result: {
        response: "Unauthorized",
        message: "No token provided.",
      },
    });

  // verify the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({
        success: false,
        result: {
          response: "Forbidden",
          message: "Access to this site is forbidden. Invalid or expired token.",
        },
      });
    req.user = user;
  next();

  });

};
