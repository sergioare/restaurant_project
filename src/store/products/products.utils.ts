import { Product, SortBy } from "./products.model";

export const sortProducts = (
  products: Product[],
  sortBy: SortBy,
): Product[] => {
  const sorted = [...products];

  switch (sortBy) {
    case "name":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    case "category":
      return sorted.sort((a, b) => a.category.localeCompare(b.category));

    case "price":
      return sorted.sort((a, b) => a.price - b.price);

    case "rating":
      return sorted.sort((a, b) => b.stats.rating - a.stats.rating);

    default:
      return sorted;
  }
};
