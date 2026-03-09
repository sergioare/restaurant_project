import { FirestoreTimestamp } from "./events.model";

type CustomerType = "guest" | "customer";

type OrderStatus =
  | "ORDER_PLACED"
  | "PREPARING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

type Order = {
  orderId: string;
  userId: string;
  customerType: CustomerType;
  status: OrderStatus;
  subtotalCents: number;
  taxCents: number;
  serviceFeeCents: number;
  totalCents: number;
  createdAt: FirestoreTimestamp;
  updatedAt?: FirestoreTimestamp;
};

export type { Order, OrderStatus, CustomerType };
