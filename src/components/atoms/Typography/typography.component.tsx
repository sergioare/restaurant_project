import { theme } from "@/utils/ThemeProvider";

import { Variant, Weight } from "./typography.models";
import { TypographyLocalStyles } from "./typography.styles";

const { typography } = theme;

export type TypographyProps = {
  variant?: Variant;
  color?: string;
  weight?: Weight;
  className?: string;
  children?: string | React.ReactNode;
};

export const Typography = (props: TypographyProps) => {
  const {
    variant = "h3",
    color = "",
    weight,
    className = "",
    children,
  } = props;

  const baseProps = {
    className: `base ${variant} isColor`,
    ...(weight && { style: { fontWeight: typography.weight[weight] } }),
  };

  const variants = {
    h1: <h1 {...baseProps}>{children}</h1>,
    h2: <h2 {...baseProps}>{children}</h2>,
    h3: <h3 {...baseProps}>{children}</h3>,
    h4: <h4 {...baseProps}>{children}</h4>,
    h5: <h5 {...baseProps}>{children}</h5>,
    h6: <h6 {...baseProps}>{children}</h6>,
    s1: <p {...baseProps}>{children}</p>,
    s2: <p {...baseProps}>{children}</p>,
    p1: <p {...baseProps}>{children}</p>,
    p2: <p {...baseProps}>{children}</p>,
    p3: <p {...baseProps}>{children}</p>,
  };

  const CssVariables = {
    "--selected-color": color || "inherit",
  } as React.CSSProperties;

  return (
    <span style={CssVariables} className={`lib ${className}`}>
      {variants[variant]}

      <style jsx>{TypographyLocalStyles}</style>
    </span>
  );
};
