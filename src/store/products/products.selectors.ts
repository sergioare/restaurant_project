import { includesSearchTerm } from "@/utils/constants/normilizeText";
import { getTotalPages, paginate } from "@/utils/constants/pagination";

import { ProductState, Product } from "./products.model";
import { sortProducts } from "./products.utils";

const filterProductsBySearch = (
  products: Product[],
  searchTerm: string,
): Product[] => {
  if (!searchTerm.trim()) return products;

  return products.filter((product) => {
    const match =
      includesSearchTerm(product.name, searchTerm) ||
      includesSearchTerm(product.tags, searchTerm) ||
      includesSearchTerm(product.category, searchTerm);

    return match;
  });
};

export const selectProducts = (state: ProductState) => {
  const {
    products,
    searchTerm,
    sortBy,
    currentPage,
    pageSize,
    activeCategory,
  } = state;

  const categoryFiltered =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const totalPages = getTotalPages(categoryFiltered.length, pageSize);
  const searched = filterProductsBySearch(categoryFiltered, searchTerm);
  const sorted = sortProducts(searched, sortBy);

  return {
    paginatedProducts: paginate(sorted, currentPage, pageSize),
    totalPages,
  };
};
