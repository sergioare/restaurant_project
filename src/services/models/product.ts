type Category = "burgers" | "pizzas" | "wraps" | "sides" | "tacos" | "drinks";

type Metadata = {
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  isActive: boolean;
  isFeatured: boolean;
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
  title: string;
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

export type { Product, Category };
