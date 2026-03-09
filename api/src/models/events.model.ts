import { CartItem } from "./cart.model";

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
  timestamp: string; // ISO 8601
  orderId: string;
  userId: string; // mock user
  type: EventType;
  source: "web" | "api" | "worker";
  correlationId: string;
  payload: {
    items?: CartItem[];
    totalInCents?: number;
    reason?: string;
    [key: string]: unknown;
  };
};

type Order = {
  orderId: string;
  userId: string;
  status: "PENDING" | "ORDER_PLACED" | "COMPLETED" | "CANCELLED";
  totalCents: number;
  createdAt: string;
};

export { EventType, OrderEvent, Order };
