import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const CheckoutStyles = css`
  .checkout__container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    background-color: ${colors.primary[50]};
    align-items: flex-start;
  }

  .checkout__main {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .checkout__sidebar {
    flex: 1;
    position: sticky;
    top: 2rem;
  }

  .section__header {
    padding: 1.5rem;
    display: flex;
    border-bottom: 1px solid ${colors.gray[200]};
  }

  .section__header.--collapsed {
    border-bottom: none;
  }

  .section__content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .location__address-box {
    background-color: ${colors.gray[50]};
    padding: 1rem;
    border-radius: 4px;
    margin-top: 0.5rem;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .radio__row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    margin-top: 1rem;
  }

  .selection-indicator {
    width: 20px;
    height: 20px;
    border: 2px solid ${colors.gray[300]};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .selection-indicator.--single {
    border-radius: 50%;
  }

  .--selected .selection-indicator {
    border-color: ${colors.buttons.orange};
  }

  .indicator-dot {
    width: 10px;
    height: 10px;
    background-color: ${colors.buttons.orange};
    border-radius: inherit;
  }

  .datetime__details {
    display: flex;
    gap: 1rem;
    margin-left: calc(20px + 0.75rem);
    margin-top: 0.5rem;
    opacity: 0.8;
  }

  .pickup__fields-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .radio__row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .summary__title-bar {
    background-color: ${colors.gray[100]};
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid ${colors.gray[200]};
  }

  .summary__content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .summary__total-row {
    display: flex;
    justify-content: space-between;
  }

  .summary__item {
    display: flex;
    justify-content: space-between;
  }

  .summary__dashed-divider {
    border-top: 1px dashed ${colors.gray[300]};
    margin: 0.5rem 0;
  }

  .summary__solid-divider {
    border-top: 2px solid ${colors.gray[100]};
    margin: 1rem 0;
  }
`;

export default CheckoutStyles;
