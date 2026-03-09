import React from "react";

import { Typography } from "@/components/atoms/Typography";
import { CustomSection } from "@/services/models/product";
import { formatPriceFromCents } from "@/utils/constants/formatPrice";
import { theme } from "@/utils/ThemeProvider";

import DetailProductStyles from "../detailProduct.styles";

const { colors } = theme;

type RenderOptionsProps = {
  section: CustomSection;
  selectedOptions: Record<string, unknown>;
  setSelectedOptions: React.Dispatch<
    React.SetStateAction<Record<string, unknown>>
  >;
};

const RenderOptions = ({
  section,
  selectedOptions,
  setSelectedOptions,
}: RenderOptionsProps) => {
  const handleOptionChange = (
    sectionId: string,
    optionId: string,
    type: "single" | "multiple",
  ) => {
    setSelectedOptions((prev) => {
      if (type === "single") {
        return { ...prev, [sectionId]: optionId };
      } else {
        const current = (prev[sectionId] as string[]) || [];
        const next = current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : [...current, optionId];
        return { ...prev, [sectionId]: next };
      }
    });
  };
  return (
    <>
      <div className="customize__options-list">
        {section.options.map((option) => {
          const isSelected =
            section.type === "single"
              ? selectedOptions[section.id] === option.id
              : (selectedOptions[section.id] as string[])?.includes(option.id);

          return (
            <div
              key={option.id}
              className={`customize__item ${isSelected ? "--selected" : ""}`}
              onClick={() =>
                handleOptionChange(section.id, option.id, section.type)
              }
            >
              <div className="customize__item-info">
                <div className={`selection-indicator --${section.type}`}>
                  {isSelected && <div className="indicator-dot" />}
                </div>
                <Typography variant="p2">{option.name}</Typography>
              </div>

              {option.priceInCents > 0 && (
                <Typography
                  variant="p3"
                  weight="bold"
                  color={colors.buttons.orange}
                >
                  {formatPriceFromCents(option.priceInCents)}
                </Typography>
              )}
            </div>
          );
        })}
      </div>
      <style jsx>{DetailProductStyles}</style>
    </>
  );
};

export default RenderOptions;
