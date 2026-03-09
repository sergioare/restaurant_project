import { OrderEvent } from "../../models/events.model";
import { db } from "../firebase.service";

export const syncPendingEvents = async (
  events: OrderEvent[],
): Promise<void> => {
  const batch = db.batch();

  events.forEach((event) => {
    const eventRef = db.collection("order_events").doc(event.eventId);
    batch.set(eventRef, event);
  });

  await batch.commit();
};
