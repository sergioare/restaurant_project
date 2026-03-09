import { Router } from "express";
import * as OrderController from "../controllers/orders/orders.controller";
import * as TimelineController from "../controllers/orders/timeline.controller";
import * as OrderStatusController from "../controllers/orders/orderStatus.controller";

const router = Router();

router.post("/", OrderController.createOrder);

router.get("/:orderId", (req, res) => {
  res.status(200).json({ message: "Draft: Order Status" });
});

router.get("/:orderId/timeline", TimelineController.getTimeline);

router.patch("/:orderId/status", OrderStatusController.updateStatus);

export default router;
