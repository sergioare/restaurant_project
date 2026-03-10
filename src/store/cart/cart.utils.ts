import { ProductCustomization } from "@/services/models/product";

import { CartConfig, CartItem } from "./cart.model";

const calculateTotals = (items: CartItem[], config: CartConfig) => {
  const { serviceFeePercentage, isServiceFeeEnabled, taxRate } = config;

  const subtotal = items.reduce((acc, item) => {
    return acc + item.priceInCents * item.quantity;
  }, 0);

  const tax = Math.round(subtotal * taxRate);

  const serviceFee =
    isServiceFeeEnabled && items.length > 0
      ? Math.round(subtotal * serviceFeePercentage)
      : 0;

  const total = subtotal + tax + serviceFee;

  return {
    subtotal,
    tax,
    serviceFee,
    total,
  };
};

const getSelectedOptionsText = (
  item: CartItem,
  customizations: ProductCustomization[],
) => {
  if (!item.selectedOptions) return null;

  const customization = customizations.find(
    (c) => c.id === item.metadata?.customizationId,
  );

  if (!customization) return null;

  const summary: string[] = [];

  customization.sections.forEach((section) => {
    const selected = item.selectedOptions![section.id];
    if (!selected) return;

    if (typeof selected === "string") {
      const option = section.options.find((o) => o.id === selected);
      if (option) summary.push(`${section.title}: ${option.name}`);
    } else if (Array.isArray(selected) && selected.length > 0) {
      const names = section.options
        .filter((o) => selected.includes(o.id))
        .map((o) => o.name);
      summary.push(`${section.title}: ${names.join(", ")}`);
    }
  });

  return summary;
};

const generateCustomizationHash = (
  productId: string,
  selectedOptions?: Record<string, unknown>,
): string => {
  if (!selectedOptions || Object.keys(selectedOptions).length === 0) {
    return productId;
  }

  const sortedOptionsString = Object.keys(selectedOptions)
    .sort()
    .map((sectionId) => {
      const val = selectedOptions[sectionId];
      const valueString = Array.isArray(val) ? [...val].sort().join(",") : val;
      return `${sectionId}:${valueString}`;
    })
    .join("|");

  return `${productId}#${sortedOptionsString}`;
};
export { calculateTotals, getSelectedOptionsText, generateCustomizationHash };
