import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const ShoppingCartStyles = css`
  .cart__backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    max-width: 30rem;
    height: 100%;
    background-color: #ffffff;
    z-index: 101;
    display: flex;
    flex-direction: column;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -4px 0px 15px rgba(0, 0, 0, 0.1);
  }

  .cart__sidebar.is__open {
    right: 0;
  }

  .cart__header {
    padding: 1.25rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
  }

  .cart__content {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem 1rem;
  }

  .cart__empty {
    text-align: center;
    margin-top: 5rem;
    color: #9e9e9e;
  }

  .cart__footer {
    padding: 1.5rem 1rem;
    border-top: 1px solid #f0f0f0;
    background-color: #ffffff;
  }

  .cart__total__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 600px) {
    .cart__sidebar {
      max-width: 100%;
    }
  }
`;

export default ShoppingCartStyles;
