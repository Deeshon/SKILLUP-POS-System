import { Request, Response } from "express";
import prisma from "../config/db.config";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    // get all products from the database
    const products = await prisma.product.findMany();

    return res.status(200).json({
      success: true,
      result: {
        response: products,
        message: "Products fetched successfully.",
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

export const createProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const createdProduct = await prisma.product.create({ data: req.body });

    return res.status(201).json({
      success: true,
      result: {
        response: createdProduct,
        message: `Product with SKU ${createdProduct.sku} created successfully.`,
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
