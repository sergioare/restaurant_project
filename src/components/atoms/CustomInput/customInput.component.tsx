"use client";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

import { RenderDropdownContent } from "./components/dropDown.component";
import { CustomInputProps, OptionProps } from "./customInput.model";
import { CustomInputStyles } from "./customInput.styles";

export const CustomInput = ({
  value = "",
  placeholder = "",
  icon,
  iconPosition = "left",
  onChange,
  className = "",
  options,
  isLoadingOptions,
  onOptionSelect,
  disabled = false,
}: CustomInputProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const hasIcon = Boolean(icon);

  const handleSelect = useCallback(
    (option: OptionProps, onChange: (value: string) => void) => {
      onChange(option.label);
      if (onOptionSelect) onOptionSelect(option);
      setShowDropdown(false);
    },
    [onOptionSelect],
  );

  const dropdownProps = {
    onChange: onChange || (() => {}),
    handleSelect,
    options,
    isLoadingOptions,
  };

  useEffect(() => {
    if (!showDropdown) return () => {};

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  return (
    <div
      className={`customInput ${hasIcon ? "hasIcon" : ""} icon--${iconPosition} ${className}`}
      ref={containerRef}
    >
      {icon && <div className="customInput__icon">{icon}</div>}

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange?.(e.target.value);
          if (options) {
            setShowDropdown(true);
          }
        }}
      />

      {showDropdown && !disabled && options && (
        <div className="input__dropdown" role="listbox">
          {RenderDropdownContent(dropdownProps)}
        </div>
      )}

      <style jsx>{CustomInputStyles}</style>
    </div>
  );
};
