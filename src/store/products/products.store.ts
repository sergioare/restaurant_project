import { create } from "zustand";

import { Category, Product } from "@/services/models/product";
import productsService from "@/services/modules/products";

import type { ProductState, ProductActions, SortBy } from "./products.model";
import { selectProducts } from "./products.selectors";

const initialState: ProductState = {
  products: [],
  paginatedProducts: [],
  isLoading: false,
  sortBy: "rating",
  currentPage: 1,
  totalPages: 1,
  pageSize: 10,
  searchTerm: "",
  selectedProduct: null,
  activeCategory: "all",
  isProductDetailOpen: false,
  customizations: [],
  isLoadingCustom: false,
  isEditingProduct: false,
};

const useProductStore = create<ProductState & ProductActions>((set, get) => ({
  ...initialState,

  fetchProducts: async () => {
    try {
      if (get().products.length > 0) return;
      set({ isLoading: true });
      const data = await productsService.getProducts();

      set((state) => {
        const nextState = {
          ...state,
          products: data,
          isLoading: false,
        };

        const { paginatedProducts, totalPages } = selectProducts(nextState);

        return {
          ...nextState,
          paginatedProducts,
          totalPages,
        };
      });
    } catch (error) {
      set({ isLoading: false });
      console.error("Error fetching products:", error);
    }
  },

  setSortBy: (sortBy: SortBy) => {
    set((state) => {
      const nextState = {
        ...state,
        sortBy,
        currentPage: 1,
      };
      const { paginatedProducts } = selectProducts(nextState);

      return {
        ...nextState,
        paginatedProducts,
      };
    });
  },

  setPage: (page: number) => {
    set((state) => {
      const nextState = {
        ...state,
        currentPage: page,
      };

      const { paginatedProducts } = selectProducts(nextState);

      return {
        ...nextState,
        paginatedProducts,
      };
    });
  },

  setSearchTerm: (term: string) => {
    set((state) => {
      const nextState = {
        ...state,
        searchTerm: term,
        currentPage: 1,
      };

      const { paginatedProducts } = selectProducts(nextState);

      return {
        ...nextState,
        paginatedProducts,
      };
    });
  },

  setSelectedProduct: (product: Product | null) => {
    set((state) => {
      const nextState = {
        ...state,
        currentPage: 1,
        selectedProduct: product,
      };
      const { paginatedProducts } = selectProducts(nextState);

      return {
        ...nextState,
        paginatedProducts,
      };
    });
  },

  setActiveCategory: (category: Category | "all") => {
    set((state) => {
      const nextState = {
        ...state,
        activeCategory: category,
        currentPage: 1,
        searchTerm: "",
        sortBy: "rating" as const,
      };
      const { paginatedProducts, totalPages } = selectProducts(nextState);

      return {
        ...nextState,
        paginatedProducts,
        totalPages,
      };
    });
  },

  toggleProductDetail: () =>
    set((state) => ({ isProductDetailOpen: !state.isProductDetailOpen })),
  setIsProductDetailOpen: (open: boolean) => set({ isProductDetailOpen: open }),

  fetchCustomization: async (productId: string) => {
    const alreadyLoaded = get().customizations.some(
      (c) => c?.productId === productId,
    );

    if (alreadyLoaded) return;
    set({ isLoadingCustom: true });

    try {
      const response = await productsService.getCustomizations(productId);

      if (!response) {
        set({ isLoadingCustom: false });
        return;
      }

      set((state) => ({
        customizations: [
          ...state.customizations.filter(Boolean),
          { ...response },
        ],
        isLoadingCustom: false,
      }));
    } catch (error) {
      console.error("Error fetching customizations:", error);
      set({ isLoadingCustom: false });
    }
  },

  setIsEditingProduct: (isEditing: boolean) => {
    set({ isEditingProduct: isEditing });
  },
}));

export default useProductStore;
