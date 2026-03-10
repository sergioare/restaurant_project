import {
  Category,
  Product,
  ProductCustomization,
} from "@/services/models/product";

type SortBy = "name" | "category" | "price" | "rating";

type ProductState = {
  products: Product[];
  paginatedProducts: Product[];
  sortBy: SortBy;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  isLoading: boolean;
  searchTerm: string;
  selectedProduct: Product | null;
  activeCategory: Category | "all";
  isProductDetailOpen: boolean;
  customizations: ProductCustomization[];
  isLoadingCustom: boolean;
  isEditingProduct: boolean;
};

type ProductActions = {
  fetchProducts: () => Promise<void>;
  setSortBy: (sortBy: SortBy) => void;
  setPage: (page: number) => void;
  setSearchTerm: (term: string) => void;
  setSelectedProduct: (product: Product | null) => void;
  setActiveCategory: (category: Category | "all") => void;
  toggleProductDetail: () => void;
  setIsProductDetailOpen: (open: boolean) => void;
  fetchCustomization: (productId: string) => Promise<void>;
  setIsEditingProduct: (value: boolean) => void;
};

export type { ProductState, ProductActions, SortBy, Product };
