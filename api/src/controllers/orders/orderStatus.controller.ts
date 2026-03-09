import { Request, Response } from "express";
import { OrderStatus } from "../../models/order.model";
import * as OrderStatusService from "../../services/orders/orderStatus.service";

export const updateStatus = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { orderId } = req.params;
    const { newStatus, adminId } = req.body;
    const correlationId =
      (req.headers["x-correlation-id"] as string) || `manual-${Date.now()}`;

    if (!orderId || !newStatus || !adminId) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Missing required fields: orderId, newStatus, or adminId.",
      });
    }

    const result = await OrderStatusService.updateOrderStatus(
      String(orderId),
      newStatus as OrderStatus,
      adminId,
      correlationId,
    );

    return res.status(200).json({
      status: "Success",
      message: `Order ${orderId} successfully moved from ${result.previousStatus} to ${result.newStatus}.`,
      data: result,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "ERROR_ORDER_NOT_FOUND") {
      return res
        .status(404)
        .json({ error: "Not Found", message: "Order does not exist." });
    }

    console.error("Controller Error - updateStatus:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "Could not update order status at this time.",
    });
  }
};
