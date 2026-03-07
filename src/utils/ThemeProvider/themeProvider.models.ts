import { theme } from "./themeProvider.constants";

export type Typography = typeof theme.typography;
export type Colors = typeof theme.colors;
export type MediaQueries = typeof theme.mediaQueries;

export type CssVariable = [`--${string}`, string];
export type CssVariables = { [key: `--${string}`]: string };
