import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const SelectStyles = css`
  .customSelect {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .customSelect__icon {
    position: absolute;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .customSelect.hasIcon.icon--left .customSelect__icon {
    left: 0.625rem;
  }
  .customSelect.hasIcon.icon--left .value {
    padding-left: 2.25rem;
  }
  .customSelect.hasIcon.icon--right .customSelect__icon {
    right: 0.625rem;
  }

  .customSelect.hasIcon.icon--right .value {
    padding-right: 2.25rem;
  }

  .customSelect__control {
    font-family: "DM Sans", sans-serif;
    width: 100%;
    min-width: 10.5rem;
    height: 3rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border: 1.5px solid ${colors.gray[200]};
    background-color: ${colors.primary[50]};
    outline: none;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .customSelect__control.disabled {
    background-color: ${colors.gray[200]};
    cursor: not-allowed;
  }

  .value.placeholder {
    color: var(--color-gray-400);
  }

  .select__dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${colors.primary[100]};
    border: 1px solid ${colors.buttons.orange};
    border-radius: 1rem;
    box-shadow:
      0 0 0 1px hsla(0, 0%, 0%, 0.1),
      0 0.25rem 0.6875rem hsla(0, 0%, 0%, 0.1);
    font-size: 0.875rem;
    overflow: hidden;
    max-height: 13rem;
    overflow-y: auto;
    line-height: 2.5rem;
    margin-top: 0.25rem;
    z-index: 1000;
    margin: 0;
    padding: 0.5rem 0;
    box-sizing: border-box;
  }
  .select__dropdown :global(.select__dropdown--loading),
  .select__dropdown :global(.select__dropdown--empty) {
    padding: 0.5rem 0.75rem;
    text-align: center;
    color: ${colors.gray[400]};
    font-size: 0.875rem;
    line-height: 1.5;
    box-sizing: border-box;
  }

  .select__dropdown :global(.select__dropdown--loading) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 3.125rem;
  }

  .select__dropdown :global(.select__option) {
    padding: 1rem 0.75rem;
    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.5;
    color: ${colors.primary[800]};
    background-color: transparent;
    user-select: none;
    outline: none;
    border: none;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
    transition: background-color 0.1s ease-out;
    display: block;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
  }

  .select__dropdown :global(.select__option:hover) {
    background-color: ${colors.buttons.orange};
    color: white;
    cursor: pointer;
  }

  .select__dropdown :global(.select__option:focus) {
    background-color: ${colors.buttons.orange};
    outline: none;
  }

  .select__dropdown :global(.select__option[aria-disabled="true"]) {
    background-color: ${colors.gray[50]};
    color: ${colors.gray[400]};
    cursor: not-allowed;
    font-style: italic;
  }

  .select__dropdown :global(.select__option[aria-disabled="true"]:hover) {
    background-color: ${colors.gray[50]};
    cursor: not-allowed;
  }

  .select__dropdown::-webkit-scrollbar {
    width: 0.5rem;
    height: 0px;
  }

  .select__dropdown::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0;
  }

  .select__dropdown::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[300]};
    border-radius: 0.25rem;
    border: 2px solid ${colors.primary[100]};
  }

  .select__dropdown::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.gray[400]};
  }

  .select__dropdown {
    scrollbar-width: thin;
    scrollbar-color: ${colors.gray[300]} transparent;
  }

  .select__dropdown :global(.select__dropdown--empty) {
    color: ${colors.gray[400]};
    font-style: italic;
  }
`;

export default SelectStyles;
