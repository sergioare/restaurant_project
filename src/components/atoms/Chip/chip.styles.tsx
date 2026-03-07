import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors, typography } = theme;

export const ChipStyles = css`
  .chip {
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    width: var(--width);
    min-width: 1.75rem;
    height: 1.75rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: var(--shrink);
    font-weight: ${typography.weight.regular};
  }
  .chip--small,
  .chip--large {
    font-size: 0.75rem;
  }
  .chip--medium {
    font-size: 0.875rem;
  }
  .chip--color--default {
    background-color: ${colors.chips.custom};
    color: ${colors.primary[800]};
  }
`;
