import React, { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
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
  name,
  price,
  description,
  badge,
  image,
  rating,
  handleClick,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="product__card--container">
      <Card onClick={handleClick}>
        <div className="card__image-container">
          {image && !imgError ? (
            <Image
              src={image}
              alt={name}
              fill
              style={{ objectFit: "cover" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="card__emoji">🥗</span>
          )}
        </div>

        <div className="card__body">
          <div className="card__header-row">
            <Typography variant="h6">{name}</Typography>
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

          <div className="product__card--footer-section">
            <div className="product__card--rating">
              <StarIcon
                fontSize="small"
                sx={{ color: colors.auxiliary.gold }}
              />
              <Typography
                variant="p2"
                color={colors.primary[400]}
                weight="semibold"
              >
                {rating}
              </Typography>
            </div>
            {badge && <Chip title={badge} size="small" />}
          </div>
        </div>
      </Card>
      <style jsx>{ProductCardStyles}</style>
    </div>
  );
};
