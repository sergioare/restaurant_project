import { CartConfig, CartItem } from "../models/cart.model";

const calculateOrderTotals = (items: CartItem[], config: CartConfig) => {
  const { serviceFeePercentage, isServiceFeeEnabled, taxRate } = config;

  const subtotalCents = items.reduce((acc, item) => {
    return acc + item.priceInCents * item.quantity;
  }, 0);

  const taxCents = Math.round(subtotalCents * taxRate);

  const serviceFeeCents =
    isServiceFeeEnabled && items.length > 0
      ? Math.round(subtotalCents * serviceFeePercentage)
      : 0;

  const totalCents = subtotalCents + taxCents + serviceFeeCents;

  return {
    subtotalCents,
    taxCents,
    serviceFeeCents,
    totalCents,
  };
};

export { calculateOrderTotals };
