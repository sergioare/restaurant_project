import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const ShoppingCartStyles = css`
  .cart__backdrop {
    position: fixed;
    top: 4.37rem;
    left: 0;
    width: 100%;
    height: calc(100vh - 4.37rem);
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .cart__backdrop.is__open {
    opacity: 1;
    visibility: visible;
  }

  .cart__sidebar {
    position: fixed;
    top: 4.37rem;
    right: -100%;
    width: 100%;
    max-width: 30rem;
    height: calc(100vh - 4.37rem);
    background-color: ${colors.primary[50]};
    z-index: 101;
    display: flex;
    flex-direction: column;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -15px 0 40px rgba(0, 0, 0, 0.18);
  }

  .cart__sidebar.is__open {
    right: 0;
  }

  .cart__header {
    padding: 1.25rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.primary[100]};
  }

  .cart__content {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem 1rem;
    background-color: ${colors.primary[100]};
  }

  .cart__empty {
    text-align: center;
    margin-top: 5rem;
    font-style: italic;
  }
  .cart__item--container {
    display: flex;
    justify-content: space-between;
  }
  .cart__item-info {
    flex: 1;
    padding-right: 1.5rem;
  }
  .cart__item-options {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 1.2;
  }
  .cart__item-quantity {
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    flex-direction: column;
  }
  .quantity__selector--buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .cart__footer {
    padding: 1.5rem 1rem;
    border-top: 1px solid ${colors.gray[100]};
    background-color: ${colors.primary[50]};
  }

  .cart__total__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .quantity__selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7rem;
    height: 2rem;
    border: 1px solid ${colors.gray[300]};
    border-radius: 0.5rem;
    padding: 0 4px;
  }
  @media (max-width: 600px) {
    .cart__sidebar {
      max-width: 100%;
    }
  }
`;

export default ShoppingCartStyles;
