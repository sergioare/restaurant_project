import { v4 as uuidv4 } from "uuid";
import { CheckoutRequest } from "../../models/cart.model";
import { db, Timestamp } from "../firebase.service";
import { FirestoreTimestamp, OrderEvent } from "../../models/events.model";
import { calculateOrderTotals } from "../../utils/calculateOrderTotals";
import { Order } from "../../models/order.model";

export const processCheckout = async (
  orderData: CheckoutRequest,
  correlationId: string,
  idempotencyKey: string,
) => {
  try {
    return await db.runTransaction(async (transaction) => {
      const idempotencyRef = db
        .collection("idempotency_keys")
        .doc(idempotencyKey);
      const idempotencyDoc = await transaction.get(idempotencyRef);

      if (idempotencyDoc.exists) {
        const existingData = idempotencyDoc.data();
        throw new Error(`DUPLICATE_REQUEST_DETECTED:${existingData?.orderId}`);
      }

      const orderId = uuidv4();
      const eventId = uuidv4();
      const serverTime: FirestoreTimestamp = Timestamp;

      const totals = calculateOrderTotals(orderData.items, orderData.config);

      const orderRef = db.collection("orders").doc(orderId);
      const eventRef = db.collection("order_events").doc(eventId);

      const orderRecord: Order = {
        orderId,
        userId: orderData.userId,
        customerType: orderData.customerType,
        status: "ORDER_PLACED",
        ...totals,
        createdAt: serverTime,
      };

      const eventRecord: OrderEvent = {
        userId: orderData.userId,
        eventId,
        orderId,
        type: "ORDER_PLACED",
        source: "api",
        correlationId,
        timestamp: serverTime,
        payload: {
          customerType: orderData.customerType,
          email: orderData.email,
          name: orderData.name,
          items: orderData.items,
          ...totals,

          idempotencyKey,
        },
      };

      transaction.set(orderRef, orderRecord);
      transaction.set(eventRef, eventRecord);
      transaction.set(idempotencyRef, {
        orderId,
        usedAt: serverTime,
      });

      return { orderId, ...totals };
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "UNKNOWN_SERVICE_ERROR";
    console.error("Order Service Error:", errorMessage);
    throw error;
  }
};
