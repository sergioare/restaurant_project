import { Order } from "../../models/order.model";
import { db } from "../firebase.service";

export const getOrderTimeline = async (
  orderId: string,
): Promise<Partial<Order>> => {
  try {
    const snapshot = await db
      .collection("orders")
      .where("orderId", "==", orderId)
      .limit(1)
      .get();

    if (snapshot.empty) {
      console.log(`Order ${orderId} not found in DB`);
      return {} as Order;
    }

    const doc = snapshot.docs[0];
    const data = doc.data();

    return {
      orderId: data.orderId,
      userId: data.userId,
      status: data.status,
      subtotalCents: data.subtotalCents,
      taxCents: data.taxCents,
      serviceFeeCents: data.serviceFeeCents,
      totalCents: data.totalCents,
      createdAt: data.createdAt?.toDate
        ? data.createdAt.toDate()
        : data.createdAt,
      customerType: data.customerType,
    } as Partial<Order>;
  } catch (error) {
    console.error("Timeline Service Error:", error);
    throw new Error("COULD_NOT_RETRIEVE_ORDER");
  }
};
