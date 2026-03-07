import React from "react";

import { CardComponent } from "./card.component";
import { CardProps } from "./card.modules";

export const CardContainer: React.FC<CardProps> = (props) => {
  return <CardComponent {...props} />;
};
