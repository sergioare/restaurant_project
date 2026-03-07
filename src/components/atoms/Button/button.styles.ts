import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

export const buttonStyles = css`
  .buttonComponent {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: none;
    background: ${colors.primary[100]};
    color: ${colors.primary[900]};
    width: auto;
    justify-content: space-around;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .buttonComponent:disabled,
  .buttonComponent__outlined:disabled {
    background: ${colors.primary[300]};
    color: ${colors.primary[900]};
    cursor: not-allowed;
  }

  .buttonComponent__outlined {
    border: 1px solid ${colors.gray[300]};
    color: ${colors.primary[900]};
    background: transparent;
  }

  .buttonComponent__outlined:hover {
    border-color: ${colors.gray[200]};
    background: ${colors.buttons.yellow};
  }

  .buttonComponent__outlined:hover p {
    color: inherit;
  }

  .buttonComponent__white {
    color: ${colors.primary[900]};
    background: ${colors.primary[100]};
    padding: 0 !important;
  }
  .buttonComponent__white:focus {
    background: transparent;
  }
  .buttonComponent__extra-small {
    height: 1.7rem;
  }
  .buttonComponent__extra-small div .lib_Typography-p1 {
    font-size: 0.55rem;
    line-height: 1rem;
  }
  .buttonComponent__extra-small > .buttonIcon > :first-child {
    font-size: 0.5rem;
  }
  .buttonComponent__small {
    max-height: 2rem;
  }
  .buttonComponent__small div .lib_Typography-p1 {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .buttonComponent__small > .buttonIcon > :first-child {
    font-size: 1.125rem;
  }

  .buttonComponent__medium {
    height: fit-content;
    max-height: 2.5rem;
    padding: 0.375rem 1.5rem;
  }
  .buttonComponent__medium div .lib_Typography-p1 {
    font-size: 1rem;
  }
  .buttonComponent__medium > .buttonIcon > :first-child {
    font-size: 1.5rem;
  }

  .buttonComponent__large {
    height: 3rem;
    padding: 0.625rem 1.875rem;
  }
  .buttonComponent__large div .lib_Typography-p1 {
    font-size: 1.25rem;
  }
  .buttonComponent__large > .buttonIcon > :first-child {
    font-size: 1.875rem;
  }

  .buttonIcon--left {
    margin-right: 0.313rem;
  }

  .buttonIcon--right {
    margin-left: 0.313rem;
  }

  .buttonWithIconLeft__small,
  .buttonWithIconRight__small {
    padding: 0.25rem 0.375rem;
  }

  .buttonWithIconLeft__medium,
  .buttonWithIconRight__medium {
    padding: 0.375rem 0.625rem;
  }

  .buttonWithIconLeft__large,
  .buttonWithIconRight__large {
    padding: 0.625rem 1rem;
  }

  .buttonComponent__content,
  .buttonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttonComponent__fullWidth {
    width: 100%;
  }

  .buttonComponent__extra-small :global(.lib > .base) {
    font-size: 0.75rem;
  }
`;
