import { theme } from "./themeProvider.constants";
import { CssVariable } from "./themeProvider.models";

export const getColors = () => {
  const categories = Object.entries(theme.colors);

  const mappedColors = categories.flatMap(([category, categoryValue]) => {
    const colors = Object.entries(categoryValue);

    const colorsWithValue = colors.map<CssVariable>(([name, value]) => [
      `--${category}-${name}-color`,
      value,
    ]);

    return colorsWithValue;
  });

  const convertedColors = Object.fromEntries(mappedColors);

  return convertedColors;
};

export const getTypography = () => {
  const fontFamily = `'${theme.typography.name}', Playfair Display, Dm Sans, sans-serif`;

  const weights = Object.entries(theme.typography.weight);
  const mappedWeights = weights.map<CssVariable>(([name, value]) => [
    `--${name}-weight`,
    value,
  ]);

  const convertedWeights = Object.fromEntries(mappedWeights);

  return { ...convertedWeights, "--font-family": fontFamily };
};
