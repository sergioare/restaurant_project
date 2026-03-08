const foodTabs = [
  { value: "all", label: "All" },
  { value: "burgers", label: "Burgers" },
  { value: "pizzas", label: "Pizzas" },
  { value: "wraps", label: "Wraps" },
  { value: "tacos", label: "Tacos" },
  { value: "sides", label: "Sides" },
  { value: "drinks", label: "Drinks" },
] as const;

const filterOptions = [
  { label: "Rating", value: "rating", id: "rating" },
  { label: "Name", value: "name", id: "name" },
  { label: "Category", value: "category", id: "category" },
  { label: "Price", value: "price", id: "price" },
];

export { foodTabs, filterOptions };
