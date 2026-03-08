import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

export const CustomInputStyles = css`
  .customInput {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .customInput input {
    width: 100%;
    min-width: 16.5rem;
    height: 3rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border: 1.5px solid ${colors.gray[200]};
    outline: none;
    font-size: 0.875rem;
  }
  .customInput__icon {
    position: absolute;
    display: flex;
    align-items: center;
    pointer-events: none;
  }
  .customInput.hasIcon.icon--left .customInput__icon {
    left: 0.625rem;
  }
  .customInput.hasIcon.icon--left input {
    padding-left: 2.25rem;
  }
  .customInput.hasIcon.icon--right .customInput__icon {
    right: 0.625rem;
  }

  .customInput.hasIcon.icon--right input {
    padding-right: 2.25rem;
  }
  .customInput input::placeholder {
    color: ${colors.gray[300]};
  }

  .input__dropdown {
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

  .input__dropdown :global(.input__dropdown--loading),
  .input__dropdown :global(.input__dropdown--empty) {
    padding: 0.5rem 0.75rem;
    text-align: center;
    color: ${colors.gray[400]};
    font-size: 0.875rem;
    line-height: 1.5;
    box-sizing: border-box;
  }

  .input__dropdown :global(.input__dropdown--loading) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 3.125rem;
  }

  .input__dropdown :global(.input__dropdown--option) {
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

  .input__dropdown :global(.input__dropdown--option:hover) {
    background-color: ${colors.buttons.orange};
    color: white;
    cursor: pointer;
  }

  .input__dropdown :global(.input__dropdown--option:focus) {
    background-color: ${colors.buttons.orange};
    outline: none;
  }

  .input__dropdown :global(.input__dropdown--option[aria-disabled="true"]) {
    background-color: ${colors.gray[50]};
    color: ${colors.gray[400]};
    cursor: not-allowed;
    font-style: italic;
  }

  .input__dropdown
    :global(.input__dropdown--option[aria-disabled="true"]:hover) {
    background-color: ${colors.gray[50]};
    cursor: not-allowed;
  }

  .input__dropdown::-webkit-scrollbar {
    width: 0.5rem;
    height: 0px;
  }

  .input__dropdown::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0;
  }

  .input__dropdown::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[300]};
    border-radius: 0.25rem;
    border: 2px solid ${colors.primary[100]};
  }

  .input__dropdown::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.gray[400]};
  }

  .input__dropdown {
    scrollbar-width: thin;
    scrollbar-color: ${colors.gray[300]} transparent;
  }

  .input__dropdown :global(.input__dropdown--empty) {
    color: ${colors.gray[400]};
    font-style: italic;
  }
`;
