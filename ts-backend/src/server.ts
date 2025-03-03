import express, { json } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route";
import allRouter from "./routes/all.route";
import productRouter from './routes/product.route'

// configure env file
dotenv.config({ path: "./.env" });

const app = express();
app.use(
    cors({
      origin: ["http://localhost:5173", "http://localhost:5174" ],
      methods: ["GET", "POST", "PUT", "DELETE"], 
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );
app.use(json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use("/api/auth", authRouter);
app.use("/api/all", allRouter);
app.use("/api/products", productRouter);

app.get("/home", (req, res) => {
  res.json({ message: "welcome to home" });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started on port: ${process.env.SERVER_PORT}`);
});
