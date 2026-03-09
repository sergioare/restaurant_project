import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const DetailProductStyles = css`
  .detailProduct__backdrop {
    position: fixed;
    top: 4.37rem;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .detailProduct__backdrop.is__open {
    opacity: 1;
    visibility: visible;
  }

  .detailProduct__modal {
    position: fixed;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    max-width: 50rem;
    max-height: 80vh;
    background-color: ${colors.primary[50]};
    border-radius: 1rem;
    z-index: 101;
    display: flex;
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    overflow: hidden;
  }

  .detailProduct__modal.--custom {
    width: 90%;
  }

  .detailProduct__modal.is__open {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
  }
  .detailProduct__header {
    padding: 0 1rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${colors.gray[200]};
  }
  .detailProduct__body {
    display: grid;
    gap: 2rem;
    align-items: start;
    padding: 2rem 1rem;
    height: 100%;
    overflow: hidden;
  }

  .detailProduct__body.--custom {
    grid-template-columns: 1fr 1.5fr;
  }
  .detailProduct__body.--not-custom {
    grid-template-columns: 1fr;
  }
  .detailProduct__media-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .detailProduct__image-container {
    position: relative;
    width: 75%;
    max-width: 12rem;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
    overflow: hidden;
    background-color: ${colors.primary[300]};
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .detailProduct__description-box {
    padding: 0.5rem 0;
  }

  .detailProduct__info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;
  }

  .detailProduct__price-section {
    padding: 1rem;
    background-color: ${colors.gray[200]};
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .detailProduct__customize--section {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    overflow-y: auto !important;
    flex: 1;
  }

  .detailProduct__customize--section::-webkit-scrollbar {
    width: 0.35rem;
  }
  .detailProduct__customize--section::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[300]};
    border-radius: 0.7rem;
  }

  .customize__group {
    margin-bottom: 1rem;
    padding-right: 1rem;
  }

  .customize__group-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    position: sticky;
    top: 0;
    background-color: ${colors.primary[50]};
    z-index: 2;
    padding: 4px 0;
  }

  .customize__options-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .customize__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid ${colors.gray[200]};
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .customize__item:hover {
    background-color: ${colors.gray[100]};
  }

  .customize__item.--selected {
    border-color: ${colors.buttons.orange};
    background-color: rgba(230, 77, 25, 0.05);
  }

  .customize__item-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .selection-indicator {
    width: 20px;
    height: 20px;
    border: 2px solid ${colors.gray[300]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .selection-indicator.--single {
    border-radius: 50%;
  }
  .selection-indicator.--multiple {
    border-radius: 4px;
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

  .detailProduct__quantity-wrapper {
    display: flex;
    flex-direction: column;
  }
  .detailProduct__quantity-selectors {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .quantity__selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    height: 40px;
    border: 1px solid ${colors.gray[300]};
    border-radius: 8px;
    padding: 0 4px;
  }
  .detailProduct__error {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .card__emoji {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    .detailProduct__body {
      grid-template-columns: 1fr;
    }
    .detailProduct__info {
      padding-left: 0;
    }
  }
`;

export default DetailProductStyles;
