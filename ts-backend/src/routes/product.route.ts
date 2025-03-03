import express from "express";
import { createProduct, getProducts } from "../controllers/product.controller";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct)

export default router;
