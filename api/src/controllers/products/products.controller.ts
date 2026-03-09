import { Request, Response } from "express";
import * as ProductService from "../../services/products/product.service";

export const getProducts = async (
  _req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const products = await ProductService.getAllProducts();

    return res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Could not retrieve the menu at this time.",
    });
  }
};

export const getCustomizations = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const customizations = await ProductService.getProductCustomizations(
      String(productId),
    );

    if (!customizations) {
      return res.status(404).json({
        error: "Not Found",
        message: "No customizations found for this product.",
      });
    }

    return res.status(200).json(customizations);
  } catch (error) {
    console.error("Error fetching customizations:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
