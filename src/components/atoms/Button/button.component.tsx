"use client";
import React from "react";

import { CircularProgress, CircularProgressProps } from "@mui/material";

import { buttonStyles } from "./button.styles";
import { Typography } from "../Typography";

type Variant = "contained" | "outlined" | "white";

const spinnerColor: { [key in Variant]: CircularProgressProps["color"] } = {
  contained: "inherit",
  outlined: "primary",
  white: "primary",
};

export type ButtonProps = {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: Variant;
  size?: "small" | "medium" | "large" | "extra-small";
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.MouseEventHandler;
  children?: string;
  className?: string;
  loading?: boolean;
  fullWidth?: boolean;
  textClassName?: string;
};

export const Button = (props: ButtonProps) => {
  const {
    icon = null,
    iconPosition = "left",
    size = "small",
    variant = "contained",
    disabled = false,
    type = "button",
    onClick,
    children,
    className = "",
    loading,
    fullWidth = false,
    textClassName = "",
  } = props;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) onClick(e);
  };

  const fullWidthStyles = fullWidth ? "buttonComponent__fullWidth" : "";
  const leftStyles =
    icon && iconPosition === "left" ? `buttonWithIconLeft__${size}` : "";
  const rightStyles =
    icon && iconPosition === "right" ? `buttonWithIconRight__${size}` : "";
  const styles = `buttonComponent buttonComponent__${size} buttonComponent__${variant} ${leftStyles} ${rightStyles} ${fullWidthStyles}`;

  return (
    <div className={`container ${className} ${fullWidthStyles}`}>
      <button
        type={type}
        className={styles}
        onClick={handleClick}
        disabled={disabled}
      >
        <div className="buttonComponent__content">
          {icon && iconPosition === "left" && (
            <div className={`buttonIcon ${children ? "buttonIcon--left" : ""}`}>
              {!loading ? (
                icon
              ) : (
                <CircularProgress
                  disableShrink
                  size={20}
                  thickness={5}
                  color={spinnerColor[variant]}
                  style={{ marginRight: "0.25rem" }}
                />
              )}
            </div>
          )}

          <Typography variant="p1" weight="semibold" className={textClassName}>
            {children}
          </Typography>

          {!!icon && iconPosition === "right" && (
            <div
              className={`buttonIcon ${children ? "buttonIcon--right" : ""}`}
            >
              {icon}
            </div>
          )}
        </div>
      </button>

      <style jsx>{buttonStyles}</style>
    </div>
  );
};
