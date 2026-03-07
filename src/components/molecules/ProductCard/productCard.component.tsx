import React from "react";

import Image from "next/image";

import { Card } from "@/components/atoms/Card";
import Chip from "@/components/atoms/Chip";
import { Typography } from "@/components/atoms/Typography";
import { formatPrice } from "@/utils/constants/formatPrice";
import { theme } from "@/utils/ThemeProvider";

import { ProductCardProps } from "./productCard.modules";
import ProductCardStyles from "./productCard.styles";

const { colors } = theme;

export const ProductCardComponent: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  badge,
  image,
}) => {
  return (
    <div className="product__card--container">
      <Card>
        <div className="card__image-container">
          {image ? (
            <Image
              src={image}
              alt="Product Image"
              fill
              style={{ objectFit: "fill" }}
            />
          ) : (
            <span className="card__emoji">🥗</span>
          )}
        </div>

        <div className="card__body">
          <div className="card__header-row">
            <Typography variant="h6">{title}</Typography>
            <Typography
              variant="p2"
              weight="bold"
              color={colors.buttons.orange}
            >
              {formatPrice(price)}
            </Typography>
          </div>

          <Typography
            variant="p2"
            color={colors.primary[400]}
            className="product__card--description"
          >
            {description}
          </Typography>

          <Chip title={badge} size="small" />
        </div>
      </Card>
      <style jsx>{ProductCardStyles}</style>
    </div>
  );
};
