type Category = "burgers" | "pizzas" | "wraps" | "sides" | "tacos" | "drinks";

type Metadata = {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  isActive: boolean;
  stock: number;
  isCustomizable: boolean;
  customizationId?: string;
};

type Stats = {
  rating: number;
  reviewsCount: number;
};

type Promotions = {
  hasDiscount: boolean;
  discountPercentage?: number;
  clearPriceInCents?: number;
};

type Product = {
  id: string;
  name: string;
  price: number;
  priceInCents: number;
  description: string;
  badge?: string;
  image: string;
  category: Category;
  sku: string;
  tags: string[];
  stats: Stats;
  promotions: Promotions;
  metadata: Metadata;
};

type CustomizationType = "single" | "multiple";

type CustomOption = {
  id: string;
  name: string;
  priceInCents: number;
};

type CustomSection = {
  id: string;
  title: string;
  type: CustomizationType;
  minOptions?: number;
  maxOptions?: number;
  options: CustomOption[];
};

type ProductCustomization = {
  id: string;
  productId: string;
  sections: CustomSection[];
};

export type { Product, Category, ProductCustomization, CustomSection };
