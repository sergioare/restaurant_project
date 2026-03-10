type OrderStatusProps = {
  orderId: string;
  status: "ORDER_PLACED" | "PREPARING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  totalCents: number;
  subtotalCents: number;
  taxCents: number;
  serviceFeeCents: number;
  createdAt: string;
  customerType: string;
};

export type { OrderStatusProps };
