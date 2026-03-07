import React from "react";

import { CardProps } from "./card.modules";
import CardStyles from "./card.styles";

export const CardComponent: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  return (
    <>
      <div className={`card card--${variant} ${className}`}>{children}</div>
      <style jsx>{CardStyles}</style>
    </>
  );
};
