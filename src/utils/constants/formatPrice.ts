const formatPrice = (price: number | undefined) => {
  const numericPrice = Number(price);

  if (isNaN(numericPrice)) {
    return "$0.00";
  }

  return `$${numericPrice.toFixed(2)}`;
};

const formatPriceFromCents = (
  priceInCents: number | undefined,
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

export { formatPrice, formatPriceFromCents };
