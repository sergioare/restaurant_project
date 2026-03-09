import { Router } from "express";
import { CartItem } from "../models/cart.model";

const router = Router();

router.post("/", (req, res) => {
  const { items, correlationId } = req.body as {
    items: CartItem[];
    correlationId: string;
  };

  res.status(202).json({ orderId: "uuid", correlationId, items });
});

router.get("/:orderId", (req, res) => {
  res.status(200).json({ message: "Draft: Order Status" });
});

router.get("/:orderId/timeline", (req, res) => {
  res.status(200).json({ timeline: [] });
});

export default router;
