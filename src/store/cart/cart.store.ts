import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/services/models/product";

import { CartItem, CartState, CartStore } from "./cart.model";
import { calculateTotals, generateCustomizationHash } from "./cart.utils";

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

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
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
          const customizationHash = generateCustomizationHash(
            product.id,
            selectedOptions,
          );

          const existingItemIndex = state.items.findIndex(
            (item) => item.customizationHash === customizationHash,
          );

          let newItems: CartItem[];

          if (existingItemIndex > -1) {
            newItems = state.items.map((item, index) =>
              index === existingItemIndex
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
                customizationHash,
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
            const newItems = state.items.filter(
              (item) => item.id !== productId,
            );
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

      editCartItem: (
        oldHash: string,
        updatedItem: CartItem,
        newPriceInCents?: number,
      ) => {
        set((state) => {
          const newHash = generateCustomizationHash(
            updatedItem.id,
            updatedItem.selectedOptions,
          );

          const existingIndex = state.items.findIndex(
            (i) =>
              i.customizationHash === newHash &&
              i.customizationHash !== oldHash,
          );

          let newItems: CartItem[];

          if (existingIndex > -1) {
            newItems = state.items
              .filter((i) => i.customizationHash !== oldHash)
              .map((item) => {
                if (item.customizationHash === newHash) {
                  return {
                    ...item,
                    quantity: item.quantity + updatedItem.quantity,
                    priceInCents: newPriceInCents ?? updatedItem.priceInCents,
                  };
                }
                return item;
              });
          } else {
            newItems = state.items.map((item) =>
              item.customizationHash === oldHash
                ? {
                    ...updatedItem,
                    customizationHash: newHash,
                    priceInCents: newPriceInCents ?? updatedItem.priceInCents,
                  }
                : item,
            );
          }
          return {
            ...state,
            items: newItems,
            totalCart: calculateTotals(newItems, state),
          };
        });
      },
    }),
    {
      name: "restaurant-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        items: state.items,
        isServiceFeeEnabled: state.isServiceFeeEnabled,
        serviceFeePercentage: state.serviceFeePercentage,
        totalCart: state.totalCart,
      }),
    },
  ),
);

export default useCartStore;
