import { Request, Response } from "express";
import { CheckoutRequest } from "../../models/cart.model";
import * as OrderService from "../../services/orders/order.service";
import { db } from "../../services/firebase.service";
import { OrderEvent } from "../../models/events.model";
import * as EventSyncService from "../../services/orders/eventsSync.service";
import { CustomerType } from "../../models/order.model";
import { Timestamp } from "firebase-admin/firestore";

export const createOrder = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const payloadSize: number = Buffer.byteLength(JSON.stringify(req.body));
    if (payloadSize > 16384) {
      return res.status(400).json({
        error: "Payload Too Large",
        message:
          "The request body exceeds the 16KB limit allowed for Sun Fu Wok orders.",
      });
    }
    const {
      items,
      config,
      userId,
      email,
      localEvents,
      name,
      phone,
    }: CheckoutRequest = req.body;
    const correlationId = req.headers["x-correlation-id"] as string | undefined;
    const idempotencyKey = req.headers["idempotency-key"] as string | undefined;

    if (!correlationId || !idempotencyKey) {
      return res.status(400).json({
        error: "Bad Request",
        message:
          "Tracing headers (X-Correlation-Id and Idempotency-Key) are mandatory.",
      });
    }

    const nowDate = Timestamp.now();

    let finalUserId = userId;
    let customerType: CustomerType = "guest";

    if (!finalUserId && email) {
      const userDocId = `guest_${email.toLowerCase()}`;
      const userRef = db.collection("users").doc(userDocId);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        await userRef.set({
          email: email.toLowerCase(),
          name: name || "Guest Customer",
          phone: phone || null,
          role: "customer",
          isGuest: true,
          createdAt: nowDate,
          lastSeen: nowDate,
        });
        customerType = "guest";
      } else {
        const userData = userDoc.data();
        await userRef.update({ lastSeen: nowDate });
        customerType = userData?.isGuest ? "guest" : "customer";
      }

      finalUserId = userDocId;
    }

    if (localEvents && localEvents.length > 0) {
      const enrichedEvents: OrderEvent[] = localEvents.map((event: any) => ({
        ...event,
        userId: finalUserId,
        correlationId,
        // timestamp: Timestamp.fromDate(event.timestamp),
        source: "web",
      }));

      await EventSyncService.syncPendingEvents(enrichedEvents);
    }

    const checkoutData: CheckoutRequest = {
      userId: finalUserId,
      items,
      config,
      email,
      name,
      phone,
      correlationId,
      customerType,
    };

    const result = await OrderService.processCheckout(
      checkoutData,
      correlationId,
      idempotencyKey,
    );

    return res.status(202).json({
      status: "Accepted",
      orderId: result.orderId,
      totalCents: result.totalCents,
      correlationId,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message.startsWith("DUPLICATE_REQUEST_DETECTED")) {
        const existingOrderId = error.message.split(":")[1];
        return res.status(409).json({
          error: "Conflict",
          message: "This order has already been processed.",
          orderId: existingOrderId,
        });
      }

      console.error("Controller Error - createOrder:", error.message);
    }

    return res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred while placing your order.",
    });
  }
};
