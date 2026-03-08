import { CartItem } from "./cart.model";

const calculateTotals = (items: CartItem[]) => ({
  totalItems: items.reduce((acc, item) => acc + item.quantity, 0),
  totalPriceInCents: items.reduce(
    (acc, item) => acc + item.priceInCents * item.quantity,
    0,
  ),
});

const formatPriceFromCents = (
  priceInCents: number,
  currency: string = "USD",
): string => {
  const amount = (priceInCents || 0) / 100;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export { calculateTotals, formatPriceFromCents };
