import { OrderEvent } from "./events.model";
import { CustomerType } from "./order.model";
import { Product } from "./product.model";

type LocalOrderEvent = Omit<OrderEvent, "orderId" | "userId"> & {
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

type CartItem = Product & {
  quantity: number;
  selectedOptions?: Record<string, unknown>;
  customizationHash?: string;
};

type CartConfig = {
  serviceFeePercentage: number;
  isServiceFeeEnabled: boolean;
  taxRate: number;
};

export { CheckoutRequest, CartItem, CartConfig, LocalOrderEvent };
