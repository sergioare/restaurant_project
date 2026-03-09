const typography = {
  name: "Playfair Display , DM Sans",
  src: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap",
  weight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
};

const colors = {
  buttons: {
    orange: "#e64d19",
    yellow: "#F3B52A",
  },

  primary: {
    50: "#ffffff",
    100: "#FDFBF9",
    200: "#f3f4f6",
    300: "#F2EDE4",
    400: "#8c7b73",
    800: "#372b25",
    900: "#251d18",
  },

  chips: {
    custom: "#f1ebe4",
  },

  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#9ca3af",
    400: "#6b7280",
    500: "#4b5563",
    900: "#111827",
  },

  error: {
    100: "#FFEBEE",
    200: "#C62828",
  },

  auxiliary: {
    gold: "#FFB800",
  },
};

const mediaQueries = {
  mobile: "320px",
  mobileL: "425px",
  tablet: "768px",
  desktop: "1024px",
  desktop_medium: "1280px",
};

export type Theme = typeof theme;
export const theme = { colors, mediaQueries, typography };
