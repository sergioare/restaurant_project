import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const CardStyles = css`
  .card {
    background-color: ${colors.primary[50]};
    border-radius: 1rem;
    padding: 20px;
    transition: all 0.3s ease;
    width: 100%;
    cursor: pointer;
    overflow: hidden;
  }

  .card--default {
    border: 1px solid ${colors.gray[200]};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
  }

  .card--outlined {
    border: 2px solid ${colors.gray[200]};
  }

  .card--elevated {
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .card:active {
    transform: translateY(-1px);
    background: ${colors.gray[50]};
  }
`;

export default CardStyles;
