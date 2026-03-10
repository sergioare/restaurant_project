import { OrderEvent } from "../../models/events.model";
import { db } from "../firebase.service";

export const getOrderTimeline = async (
  orderId: string,
): Promise<OrderEvent[]> => {
  try {
    const eventsSnapshot = await db
      .collection("orders")
      .where("orderId", "==", orderId)
      .orderBy("timestamp", "asc")
      .get();

    if (eventsSnapshot.empty) {
      return [];
    }

    const events: OrderEvent[] = eventsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        eventId: data.eventId,
        orderId: data.orderId,
        userId: data.userId,
        type: data.type,
        source: data.source,
        correlationId: data.correlationId,
        timestamp: data.timestamp.toDate(),
        payload: data.payload,
      } as OrderEvent;
    });

    return events;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "UNKNOWN_TIMELINE_SERVICE_ERROR";
    console.error("Timeline Service Error:", errorMessage);
    throw new Error("COULD_NOT_RETRIEVE_TIMELINE");
  }
};
