const formatPrice = (price: number) => {
  const numericPrice = Number(price);

  if (isNaN(numericPrice)) {
    return "$0.00";
  }

  return `$${numericPrice.toFixed(2)}`;
};

export { formatPrice };
