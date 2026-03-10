import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const OrderStatusStyles = css`
  .checkout__sidebar {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  .summary__container {
    display: flex;
    flex-direction: column;
  }

  .summary__title-bar {
    border-radius: 8px 8px 0 0;
    margin-bottom: 8px;
    transition: all 0.3s ease;
  }

  .summary__content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .summary__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Dividers */
  .summary__dashed-divider {
    width: 100%;
    height: 1px;
    border-top: 1px dashed ${colors.gray[300]};
    margin: 8px 0;
  }

  .summary__solid-divider {
    width: 100%;
    height: 1px;
    background-color: ${colors.gray[200]};
    margin: 12px 0;
  }

  /* Order Info Block */
  .order-info__header {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .summary__total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
  }

  /* Tip/Radio Options (Reusable from your previous component) */
  .tip__options {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  }

  .radio__row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid ${colors.gray[200]};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .radio__row:hover {
    background-color: ${colors.gray[50]};
  }

  .radio__row.--selected {
    border-color: ${colors.buttons.orange};
    background-color: ${colors.buttons.orange}05;
  }

  /* Custom Radio Indicator */
  .selection-indicator {
    width: 18px;
    height: 18px;
    border: 2px solid ${colors.gray[400]};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .radio__row.--selected .selection-indicator {
    border-color: ${colors.buttons.orange};
  }

  .indicator-dot {
    width: 10px;
    height: 10px;
    background-color: ${colors.buttons.orange};
    border-radius: 50%;
  }

  /* Status Animations (Optional for the indicator) */
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .status-pulse {
    animation: pulse 2s infinite ease-in-out;
  }
`;

export default OrderStatusStyles;
