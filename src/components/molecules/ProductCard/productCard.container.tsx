import React from "react";

import { ProductCardComponent } from "./productCard.component";
import { ProductCardProps } from "./productCard.modules";

export const ProductCardContainer: React.FC<ProductCardProps> = (props) => {
  return <ProductCardComponent {...props} />;
};
