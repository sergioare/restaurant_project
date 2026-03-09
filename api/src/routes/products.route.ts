import { Router } from "express";
import { Product, ProductCustomization } from "../models/cart.model";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json([] as Product[]);
});

router.get("/customizations/:productId", (req, res) => {
  res.status(200).json({} as ProductCustomization);
});

export default router;
