import { Router } from "express";
import * as ProductController from "../controllers/products/products.controller";

const router = Router();

router.get("/", ProductController.getProducts);

router.get("/customizations/:productId", ProductController.getCustomizations);

export default router;
