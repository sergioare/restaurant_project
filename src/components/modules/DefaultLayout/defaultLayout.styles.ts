import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { colors, mediaQueries } = theme;
export const DefaultLayoutLocalStyles = css`
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${colors.primary[100]};
    scroll-behavior: smooth;
  }
  .content {
    width: 100%;
    min-height: calc(100vh - 10rem);
    padding: 1rem 1rem 4rem 1rem;
    margin: 0 auto;
    overflow: hidden;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .content {
      padding: 1rem 3rem 3rem;
    }
  }
  @media screen and (min-width: ${mediaQueries.desktop}) {
    .content {
      padding: 1rem 2rem 4rem 2rem;
    }
  }
`;
