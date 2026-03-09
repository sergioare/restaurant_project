import { CartItem } from "./cart.model";
import { Timestamp, FieldValue } from "firebase-admin/firestore";
import { CustomerType, OrderStatus } from "./order.model";

type EventType =
  | "CART_ITEM_ADDED"
  | "CART_ITEM_UPDATED"
  | "CART_ITEM_REMOVED"
  | "PRICING_CALCULATED"
  | "ORDER_PLACED"
  | "ORDER_STATUS_CHANGED"
  | "VALIDATION_FAILED";

type OrderEvent = {
  eventId: string; // UUID
  timestamp: FirestoreTimestamp; // ISO 8601
  orderId: string;
  userId: string;
  type: EventType;
  source: "web" | "api" | "worker";
  correlationId: string;
  payload: {
    customerType?: CustomerType;
    email?: string;
    items?: CartItem[];
    totalInCents?: number;
    reason?: string;
    newStatus?: OrderStatus;
    previousStatus?: OrderStatus;
    [key: string]: unknown;
  };
};

type FirestoreTimestamp = Timestamp | FieldValue;

export { EventType, OrderEvent, FirestoreTimestamp };
