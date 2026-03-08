import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors } = theme;

const LandingStyles = css`
  .landing__filters {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
    gap: 1rem;
  }
  .landing__filters--sort,
  .landing__filters--sort-left {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .landing__filters--sort {
    width: 100%;
  }

  .landing__products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-auto-rows: max-content;
    gap: 1rem;
    margin-top: 2rem;
    align-items: start;
  }
`;

export default LandingStyles;
