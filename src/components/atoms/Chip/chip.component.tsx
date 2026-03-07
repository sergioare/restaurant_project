import { Typography } from "../Typography";
import { ChipProps } from "./chip.model";
import { ChipStyles } from "./chip.styles";

export const ChipComponent = ({
  title,
  fullWidth,
  color = "default",
  size = "small",
}: ChipProps) => {
  const cssVariables = {
    "--width": fullWidth ? "100%" : "fit-content",
    "--shrink": fullWidth ? "1" : "0",
  } as React.CSSProperties;

  return (
    <>
      <div
        style={cssVariables}
        className={`chip chip--color--${color} chip--size--"${size}"`}
      >
        <Typography variant="p3" weight="bold">
          {title}
        </Typography>
      </div>
      <style jsx>{ChipStyles}</style>
    </>
  );
};
