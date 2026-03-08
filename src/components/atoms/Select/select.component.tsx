"use client";
import { useCallback, useEffect, useRef, useState } from "react";

import { OptionProps, SelectProps } from "./select.model";
import SelectStyles from "./select.styles";

const SelectComponent = ({
  value = "",
  placeholder = "Select option",
  icon,
  iconPosition = "left",
  options,
  onChange,
  onOptionSelect,
  disabled = false,
  className = "",
}: SelectProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const hasIcon = Boolean(icon);

  const handleSelect = useCallback(
    (option: OptionProps) => {
      onChange?.(option.value);
      onOptionSelect?.(option);
      setShowDropdown(false);
    },
    [onChange, onOptionSelect],
  );

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    if (!showDropdown) return;

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
      className={`customSelect ${hasIcon ? "hasIcon" : ""} icon--${iconPosition} ${className}`}
      ref={containerRef}
    >
      {icon && <div className="customSelect__icon">{icon}</div>}

      <div
        className={`customSelect__control ${disabled ? "disabled" : ""}`}
        onClick={() => {
          if (!disabled) setShowDropdown(!showDropdown);
        }}
      >
        <span className={`value ${!selectedOption ? "placeholder" : ""}`}>
          {selectedOption?.label || placeholder}
        </span>
      </div>

      {showDropdown && !disabled && (
        <div className="select__dropdown" role="listbox">
          {options.length > 0 ? (
            options.map((option) => (
              <div
                aria-selected
                key={option.value}
                className="select__option"
                role="option"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="select__dropdown--empty">No results found</div>
          )}
        </div>
      )}

      <style jsx>{SelectStyles}</style>
    </div>
  );
};

export default SelectComponent;
