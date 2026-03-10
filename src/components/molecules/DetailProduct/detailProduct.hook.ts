import React from "react";

import useProductStore from "@/store/products/products.store";

type UseDetailProductProps = {
  selectedOptions: Record<string, unknown>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

const useDetailProduct = ({
  selectedOptions,
  setError,
}: UseDetailProductProps) => {
  const { selectedProduct, customizations } = useProductStore();

  const currentCustomization = customizations.find(
    (custom) => custom?.id === selectedProduct?.metadata?.customizationId,
  );

  const calculateExtraPrice = () => {
    let extra = 0;
    if (!currentCustomization) return 0;

    currentCustomization.sections.forEach((section) => {
      const selected = selectedOptions[section.id];
      if (!selected) return;

      if (section.type === "single") {
        const option = section.options.find((o) => o.id === selected);
        if (option) extra += option.priceInCents;
      } else {
        (selected as string[]).forEach((id) => {
          const option = section.options.find((o) => o.id === id);
          if (option) extra += option.priceInCents;
        });
      }
    });
    return extra;
  };

  const validateCustomizations = (): boolean => {
    if (!currentCustomization) return true;

    for (const section of currentCustomization.sections) {
      const selection = selectedOptions[section.id];

      if (section.type === "single") {
        if (!selection) {
          setError(`Please select an option for: ${section.title}`);
          return false;
        }
      } else {
        const selectedCount = (selection as string[])?.length || 0;
        const minRequired = section.minOptions || 0;

        if (selectedCount < minRequired) {
          setError(
            `Please select at least ${minRequired} options for: ${section.title}`,
          );
          return false;
        }
      }
    }

    setError(null);
    return true;
  };

  return { calculateExtraPrice, validateCustomizations, currentCustomization };
};

export default useDetailProduct;
