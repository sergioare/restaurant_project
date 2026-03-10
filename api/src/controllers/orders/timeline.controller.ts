import { Request, Response } from "express";
import * as TimelineService from "../../services/orders/timeline.service";

export const getTimeline = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Order ID is required to fetch the timeline.",
      });
    }

    const timeline = await TimelineService.getOrderTimeline(String(orderId));

    if (timeline.orderId === undefined) {
      return res.status(404).json({
        error: "Not Found",
        message: "No events found for the provided Order ID.",
      });
    }

    return res.status(200).json({
      ...timeline,
      orderId,
    });
  } catch (error) {
    console.error("Controller Error - getTimeline:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An error occurred while retrieving the order history.",
    });
  }
};
