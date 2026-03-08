import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;
const HeaderStyles = css`
  .navbar {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 4.37rem;
    padding: 1.5rem 2rem;
    z-index: 12;
    gap: 1rem;
    background: ${colors.primary[100]};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }
  .navbar__content {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }
  .navbar__branding {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
  }
  .navbar__icon {
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar__right,
  .navbar__right__menu {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  .navbar__right__menu {
    cursor: pointer;
  }
  .navbar__right__menu--user {
    color: ${colors.primary[100]};
  }

  .navbar__right :global(.active__cart) {
    background-color: ${colors.buttons.orange};
    border-radius: 0.5rem;
  }
`;
export default HeaderStyles;
