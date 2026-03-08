import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const ProductCardStyles = css`
  .product__card--container {
    max-width: 26.7rem;
    height: 100%;
  }

  .card__image-container {
    position: relative;
    overflow: hidden;
    background-color: ${colors.primary[300]};
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -1.25rem -1.25rem 0 -1.25rem;
    border-bottom: 1px solid ${colors.gray[200]};
  }

  .card__body :global(.product__card--description) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .card__emoji {
    font-size: 3rem;
  }

  .card__body {
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card__header-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export default ProductCardStyles;
