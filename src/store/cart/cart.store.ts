import { create } from "zustand";

import { Product } from "@/services/models/product";

import { CartItem, CartState, CartStore } from "./cart.model";
import { calculateTotals } from "./cart.utils";

const initialState: CartState = {
  items: [],
  isOpen: false,
  totalItems: 0,
  totalPriceInCents: 0,
  serviceFeePercentage: 0.05,
  isServiceFeeEnabled: true,
  taxRate: 0.1,
  totalCart: {
    subtotal: 0,
    tax: 0,
    serviceFee: 0,
    total: 0,
  },
};

const useCartStore = create<CartStore>((set) => ({
  ...initialState,

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (open: boolean) => set({ isOpen: open }),

  addToCart: (
    product: Product,
    quantity: number = 1,
    selectedOptions?: Record<string, unknown>,
    newPriceInCents?: number,
  ) => {
    set((state) => {
      const optionsString = selectedOptions
        ? JSON.stringify(selectedOptions)
        : "";
      const itemUniqueId = `${product.id}-${optionsString}`;

      const existingItem = state.items.find(
        (item) =>
          `${item.id}-${JSON.stringify(item.selectedOptions || {})}` ===
          itemUniqueId,
      );

      let newItems: CartItem[];

      if (existingItem) {
        newItems = state.items.map((item) =>
          `${item.id}-${JSON.stringify(item.selectedOptions || {})}` ===
          itemUniqueId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        newItems = [
          ...state.items,
          {
            ...product,
            priceInCents: newPriceInCents ?? product.priceInCents,
            quantity,
            selectedOptions,
          },
        ];
      }

      return {
        ...state,
        items: newItems,
        totalCart: calculateTotals(newItems, state),
        isOpen: true,
      };
    });
  },

  removeFromCart: (productId: string | number) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== productId);
      return {
        ...state,
        items: newItems,
        totalCart: calculateTotals(newItems, state),
      };
    });
  },

  updateQuantity: (productId: string | number, quantity: number) => {
    set((state) => {
      if (quantity <= 0) {
        const newItems = state.items.filter((item) => item.id !== productId);
        return {
          ...state,
          items: newItems,
          totalCart: calculateTotals(newItems, state),
        };
      }

      const newItems = state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      );

      return {
        ...state,
        items: newItems,
        totalCart: calculateTotals(newItems, state),
      };
    });
  },

  clearCart: () => set(initialState),

  setServiceFeeEnabled: (enabled) => {
    set((state) => ({
      isServiceFeeEnabled: enabled,
      totalCart: calculateTotals(state.items, {
        ...state,
        isServiceFeeEnabled: enabled,
      }),
    }));
  },

  setServiceFeePercentage: (percentage) => {
    set((state) => ({
      serviceFeePercentage: percentage,
      ...calculateTotals(state.items, {
        ...state,
        serviceFeePercentage: percentage,
      }),
    }));
  },
}));

export default useCartStore;
