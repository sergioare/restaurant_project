import css from "styled-jsx/css";

import { theme } from "@/utils/ThemeProvider";

const { name: fontFamily, weight } = theme.typography;
const { regular, semibold, bold } = weight;

export const TypographyLocalStyles = css`
  /* General */
  .lib {
    display: block;
  }

  .lib > :global(.base) {
    font-family: "${fontFamily}", "PlayFair Display", sans-serif;
    margin: 0;
  }

  .lib > :global(.isColor) {
    color: var(--selected-color);
  }

  /* Headings */
  .lib > :global(.h1) {
    font-size: 2.25rem;
    line-height: 3rem;
    font-weight: ${bold};
  }
  .lib > :global(.h2) {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: ${bold};
  }
  .lib > :global(.h3) {
    font-size: 1.75rem;
    line-height: 2.5rem;
    font-weight: ${bold};
  }
  .lib > :global(.h4) {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: ${semibold};
  }
  .lib > :global(.h5) {
    font-size: 1.375rem;
    line-height: 2rem;
    font-weight: ${semibold};
  }
  .lib > :global(.h6) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: ${semibold};
  }

  /* Subtitles */
  .lib > :global(.s1) {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: ${semibold};
  }
  .lib > :global(.s2) {
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: ${semibold};
  }

  /* Paragraphs */
  .lib > :global(.p1) {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: ${regular};
  }
  .lib > :global(.p2) {
    font-size: 0.875rem;
    line-height: 1.125rem;
    font-weight: ${regular};
  }

  .lib > :global(.p3) {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: ${regular};
  }
`;
