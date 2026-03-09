import { ProductCustomization } from "@/services/models/product";

import { Product, SortBy } from "./products.model";

export const sortProducts = (
  products: Product[],
  sortBy: SortBy,
): Product[] => {
  const sorted = [...products];

  switch (sortBy) {
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));

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

export const MENU_MOCK: Product[] = [
  {
    id: "eb0bcf16-b366-42ae-a9ce-148cc4499405",
    name: "Signature Bacon Burger",
    price: 12.5,
    priceInCents: 1250,
    description:
      "Double premium beef patty, melted cheddar cheese, crispy smoked bacon, and our secret house sauce on a handcrafted brioche bun.",
    badge: "customizable",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    category: "burgers",
    sku: "FK-BUR-001",
    tags: ["bestseller", "meat", "premium"],
    stats: {
      rating: 4.8,
      reviewsCount: 124,
    },
    promotions: {
      hasDiscount: true,
      discountPercentage: 10,
      clearPriceInCents: 1125,
    },
    metadata: {
      createdAt: "2026-03-06T19:14:45Z",
      updatedAt: "2026-03-06T19:14:45Z",
      createdBy: "admin_01",
      isActive: true,
      isCustomizable: true,
      customizationId: "eb423a5f-0c4b-4e7a-a503-a2dffb764881",
      stock: 10,
    },
  },
  {
    id: "85cc5cf1-f06f-4db9-9f8e-3bd77fa89665",
    name: "Extreme Pepperoni Pizza",
    price: 18.0,
    priceInCents: 1800,
    description:
      "48-hour fermented dough, San Marzano tomato sauce, premium mozzarella, and a double layer of authentic Italian pepperoni.",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
    category: "pizzas",
    sku: "FK-PIZ-002",
    tags: ["classic", "italian", "top-rated"],
    stats: {
      rating: 4.9,
      reviewsCount: 89,
    },
    promotions: {
      hasDiscount: false,
    },
    metadata: {
      createdAt: "2026-03-06T19:15:00Z",
      updatedAt: "2026-03-06T19:15:00Z",
      createdBy: "admin_01",
      isActive: true,
      isCustomizable: false,
      stock: 20,
    },
  },
  {
    id: "38ce6017-fe22-4bc6-af98-b3eec84c03cf",
    name: "Crunchy Chicken Wrap",
    price: 9.9,
    priceInCents: 990,
    description:
      "Panko-breaded chicken strips, fresh lettuce mix, ripe tomatoes, and a touch of chipotle mayo wrapped in a toasted wheat tortilla.",
    badge: "customizable",
    image:
      "https://images.unsplash.com/photo-1626700051175-656a433b1140?q=80&w=800&auto=format&fit=crop",
    category: "wraps",
    sku: "FK-WRA-003",
    tags: ["chicken", "crunchy", "fresh"],
    stats: {
      rating: 4.5,
      reviewsCount: 56,
    },
    promotions: {
      hasDiscount: true,
      discountPercentage: 15,
      clearPriceInCents: 842,
    },
    metadata: {
      createdAt: "2026-03-06T19:16:10Z",
      updatedAt: "2026-03-06T19:16:10Z",
      createdBy: "admin_02",
      isActive: true,
      isCustomizable: true,
      customizationId: "7d24168a-99c0-4deb-a835-0a7015728b19",
      stock: 5,
    },
  },
  {
    id: "bb24135f-ca9e-44f5-a5f3-875a0cd2a894",
    name: "BBQ Ribs Platter",
    price: 22.0,
    priceInCents: 2200,
    description:
      "Pork ribs slow-cooked for 12 hours at low temperature, glazed with artisanal BBQ sauce, served with golden crispy fries.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    category: "sides",
    sku: "FK-SID-004",
    tags: ["pork", "bbq", "large-portion"],
    stats: {
      rating: 4.7,
      reviewsCount: 210,
    },
    promotions: {
      hasDiscount: false,
    },
    metadata: {
      createdAt: "2026-03-06T19:17:25Z",
      updatedAt: "2026-03-06T19:17:25Z",
      createdBy: "admin_01",
      isActive: true,
      isCustomizable: false,
      stock: 15,
    },
  },
  {
    id: "b621b806-9ab1-4508-9519-24c0c39f645f",
    name: "Al Pastor Style Tacos",
    price: 11.5,
    priceInCents: 1150,
    description:
      "Three tacos with achiote-marinated pork, grilled pineapple, fresh onion, and cilantro on freshly made corn tortillas.",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop",
    category: "tacos",
    sku: "FK-TAC-005",
    tags: ["mexican", "pork", "traditional"],
    stats: {
      rating: 4.8,
      reviewsCount: 342,
    },
    promotions: {
      hasDiscount: false,
    },
    metadata: {
      createdAt: "2026-03-06T19:18:40Z",
      updatedAt: "2026-03-06T19:18:40Z",
      createdBy: "admin_02",
      isActive: true,
      isCustomizable: false,
      stock: 7,
    },
  },
  {
    id: "2bf46b3e-626e-418d-b65a-85a403a93f0f",
    name: "Loaded Cheese Fries",
    price: 7.5,
    priceInCents: 750,
    description:
      "Rustic cut fries smothered in a melted cheese blend, topped with jalapeño slices and freshly chopped green onions.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
    category: "sides",
    sku: "FK-SID-006",
    tags: ["cheesy", "spicy", "sharing"],
    stats: {
      rating: 4.3,
      reviewsCount: 88,
    },
    promotions: {
      hasDiscount: false,
    },
    metadata: {
      createdAt: "2026-03-06T19:19:55Z",
      updatedAt: "2026-03-06T19:19:55Z",
      createdBy: "admin_01",
      isActive: true,
      isCustomizable: false,
      stock: 12,
    },
  },
  {
    id: "9aa4d5ab-1f9e-4155-87f3-9d5f25c68ce6",
    name: "Veggie Falafel Burger",
    price: 10.5,
    priceInCents: 1050,
    description:
      "Spiced chickpea patty, roasted pepper hummus, fresh arugula, and red onion on a toasted whole grain bun.",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80",
    category: "burgers",
    sku: "FK-BUR-007",
    tags: ["vegetarian", "healthy", "middle-eastern"],
    stats: {
      rating: 4.6,
      reviewsCount: 42,
    },
    promotions: {
      hasDiscount: false,
    },
    metadata: {
      createdAt: "2026-03-06T19:21:05Z",
      updatedAt: "2026-03-06T19:21:05Z",
      createdBy: "admin_02",
      isActive: true,
      isCustomizable: false,
      stock: 18,
    },
  },
];

export const CUSTOMIZATIONS_MOCK: ProductCustomization[] = [
  {
    id: "eb423a5f-0c4b-4e7a-a503-a2dffb764881",
    productId: "eb0bcf16-b366-42ae-a9ce-148cc4499405",
    sections: [
      {
        id: "burger-meat",
        title: "Doneness (Cooking point)",
        type: "single",
        minOptions: 1,
        options: [
          { id: "rare", name: "Rare", priceInCents: 0 },
          { id: "medium", name: "Medium (Pink center)", priceInCents: 0 },
          { id: "well-done", name: "Well Done", priceInCents: 0 },
        ],
      },
      {
        id: "cheese-upgrade",
        title: "Cheese Lover",
        type: "single",
        options: [
          { id: "std-cheddar", name: "Standard Cheddar", priceInCents: 0 },
          {
            id: "blue-cheese",
            name: "Upgrade to Blue Cheese",
            priceInCents: 150,
          },
          {
            id: "vegan-cheese",
            name: "Vegan Cheese Substitute",
            priceInCents: 200,
          },
        ],
      },
      {
        id: "extra-toppings",
        title: "Add extra toppings",
        type: "multiple",
        options: [
          {
            id: "extra-bacon",
            name: "Extra Crispy Bacon (2 strips)",
            priceInCents: 180,
          },
          { id: "egg", name: "Fried Egg", priceInCents: 120 },
          {
            id: "caramelized-onions",
            name: "Caramelized Onions",
            priceInCents: 80,
          },
          { id: "jalapenos", name: "Spicy Jalapeños", priceInCents: 50 },
        ],
      },
      {
        id: "make-it-combo",
        title: "Make it a Combo?",
        type: "single",
        options: [
          { id: "no-combo", name: "No, just the burger", priceInCents: 0 },
          { id: "combo-fries", name: "Add Fries & Soda", priceInCents: 450 },
          {
            id: "combo-salad",
            name: "Add Side Salad & Juice",
            priceInCents: 550,
          },
        ],
      },
      {
        id: "instructions",
        title: "Special Requests",
        type: "multiple",
        options: [
          { id: "no-onion", name: "No Onion", priceInCents: 0 },
          { id: "no-salt", name: "No Salt on Fries", priceInCents: 0 },
          { id: "cut-half", name: "Cut in half", priceInCents: 0 },
        ],
      },
    ],
  },
  {
    id: "7d24168a-99c0-4deb-a835-0a7015728b19",
    productId: "38ce6017-fe22-4bc6-af98-b3eec84c03cf",
    sections: [
      {
        id: "tortilla-type",
        title: "Choose your Wrap",
        type: "single",
        minOptions: 1,
        options: [
          { id: "flour", name: "Flour Tortilla", priceInCents: 0 },
          { id: "whole-wheat", name: "Whole Wheat", priceInCents: 50 },
          {
            id: "lettuce-wrap",
            name: "Lettuce Wrap (Low Carb)",
            priceInCents: 100,
          },
        ],
      },
      {
        id: "sauce-level",
        title: "Spiciness Level",
        type: "single",
        options: [
          { id: "mild", name: "Mild (Just flavor)", priceInCents: 0 },
          { id: "medium-hot", name: "Medium (Little kick)", priceInCents: 0 },
          { id: "atomic", name: "Atomic (Chipotle focus)", priceInCents: 50 },
        ],
      },
      {
        id: "wrap-extras",
        title: "Add more crunch",
        type: "multiple",
        options: [
          { id: "nacho-strips", name: "Nacho Strips inside", priceInCents: 70 },
          { id: "extra-guac", name: "Extra Guacamole", priceInCents: 150 },
          { id: "pickled-veg", name: "Pickled Vegetables", priceInCents: 40 },
        ],
      },
    ],
  },
];
