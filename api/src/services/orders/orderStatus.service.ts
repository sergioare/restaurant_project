import { v4 as uuidv4 } from "uuid";
import { OrderStatus } from "../../models/order.model";
import { db, Timestamp } from "../firebase.service";
import {
  EventType,
  FirestoreTimestamp,
  OrderEvent,
} from "../../models/events.model";

type StatusUpdateResult = {
  orderId: string;
  newStatus: OrderStatus;
  previousStatus: OrderStatus;
};

export const updateOrderStatus = async (
  orderId: string,
  newStatus: OrderStatus,
  userId: string,
  correlationId: string,
): Promise<StatusUpdateResult> => {
  try {
    return await db.runTransaction(async (transaction) => {
      const orderRef = db.collection("orders").doc(orderId);
      const orderDoc = await transaction.get(orderRef);

      if (!orderDoc.exists) {
        throw new Error("ERROR_ORDER_NOT_FOUND");
      }

      const orderData = orderDoc.data();
      const previousStatus = orderData?.status as OrderStatus;
      const orderType: EventType = "ORDER_STATUS_CHANGED";

      const serverTime: FirestoreTimestamp = Timestamp;

      const eventId = uuidv4();
      const eventRef = db.collection("order_events").doc(eventId);

      transaction.update(orderRef, {
        status: newStatus,
        updatedAt: serverTime,
      });

      const statusEvent: OrderEvent = {
        eventId,
        orderId,
        userId,
        type: orderType,
        source: "worker",
        correlationId,
        timestamp: serverTime,
        payload: {
          newStatus,
          previousStatus,
          updatedBy: userId,
        },
      };

      transaction.set(eventRef, statusEvent);

      return { orderId, newStatus, previousStatus };
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "UNKNOWN_UPDATE_ERROR";
    console.error(`Order Status Service Error [${orderId}]:`, message);
    throw error;
  }
};
