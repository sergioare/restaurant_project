"use client";
import { useEffect, useMemo, useState } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/SearchOutlined";

import { CustomInputProps } from "@/components/atoms/CustomInput/customInput.model";
import { SelectProps } from "@/components/atoms/Select/select.model";
import { SortBy } from "@/store/products/products.model";
import useProductStore from "@/store/products/products.store";
import { theme } from "@/utils/ThemeProvider";

import LandingComponent from "./landing.component";
import { filterOptions } from "./landing.utils";
const { colors } = theme;

const LandingContainer = () => {
  const searchTerm = useProductStore((state) => state.searchTerm);
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);
  const fetchProducts = useProductStore((s) => s.fetchProducts);
  const paginatedProducts = useProductStore((s) => s.paginatedProducts);
  const setSortBy = useProductStore((s) => s.setSortBy);

  const [searchLocal, setSearchLocal] = useState(searchTerm);
  const [sortLocalBy, setSortLocalBy] = useState("rating");

  const options = useMemo(() => {
    return paginatedProducts.map((product) => ({
      id: product.id,
      label: product.name,
      value: product.name,
    }));
  }, [paginatedProducts]);

  const searchInput: CustomInputProps = {
    value: searchLocal,
    onChange: (value: string) => setSearchLocal(value),
    placeholder: "Buscar",
    iconPosition: "right",
    icon: <SearchIcon sx={{ color: colors.gray[300] }} />,
    options,
    onOptionSelect: (option) => {
      setSearchLocal(option.label);
    },
  };

  const selectProps: SelectProps = {
    value: sortLocalBy,
    onChange: (value: string) => setSortLocalBy(value),
    options: filterOptions,
    iconPosition: "right",
    icon: <ArrowDropDownIcon sx={{ color: colors.gray[300] }} />,
    onOptionSelect: (option) => {
      setSortBy(option.value as SortBy);
    },
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(searchLocal);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchLocal, setSearchTerm]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <LandingComponent searchInput={searchInput} selectProps={selectProps} />
  );
};

export default LandingContainer;
