import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const TabsStyles = css`
  .tabs-container {
    display: inline-flex;
    background-color: transparent;
    padding: 0.25rem;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .tabs-container :global(.active__tabs) {
    background-color: ${colors.buttons.orange};
    border-radius: 0.5rem;
  }
`;
export default TabsStyles;
