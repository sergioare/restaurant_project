import { CartConfig, CartItem } from "@/store/cart/cart.model";

type CustomerType = "guest" | "customer";
type EventType =
  | "CART_ITEM_ADDED"
  | "CART_ITEM_UPDATED"
  | "CART_ITEM_REMOVED"
  | "PRICING_CALCULATED"
  | "ORDER_PLACED"
  | "ORDER_STATUS_CHANGED"
  | "VALIDATION_FAILED"
  | "STOCK_LIMIT_REACHED";

type OrderStatus =
  | "ORDER_PLACED"
  | "PREPARING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

type OrderEvent = {
  eventId: string; // UUID
  orderId: string;
  userId: string;
  type: Partial<EventType>;
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
type LocalOrderEvent = Partial<OrderEvent> & {
  orderId?: string;
  userId?: string;
};
type CheckoutRequest = {
  items: CartItem[];
  userId: string;
  email: string;
  name: string;
  phone: string;
  correlationId: string;
  config: CartConfig;
  localEvents?: LocalOrderEvent[];
  customerType: CustomerType;
};

export type { OrderEvent, CheckoutRequest, OrderStatus, CustomerType };
