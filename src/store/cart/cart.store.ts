import { create } from "zustand";

import { Product } from "@/services/models/product";

import { CartItem, CartState, CartStore } from "./cart.model";
import { calculateTotals } from "./cart.utils";
import { MENU_MOCK } from "../products/products.store";

const FAKE_CART_ITEMS: CartItem[] = [
  {
    ...MENU_MOCK[0],
    quantity: 2,
  },
  {
    ...MENU_MOCK[1],
    quantity: 1,
  },
  {
    ...MENU_MOCK[2],
    quantity: 3,
  },
];

const initialState: CartState = {
  items: FAKE_CART_ITEMS,
  isOpen: false,
  totalItems: 0,
  totalPriceInCents: 0,
};

const useCartStore = create<CartStore>((set) => ({
  ...initialState,

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (open: boolean) => set({ isOpen: open }),

  addToCart: (product: Product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);
      let newItems: CartItem[];

      if (existingItem) {
        newItems = state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        newItems = [...state.items, { ...product, quantity: 1 }];
      }

      return {
        ...state,
        items: newItems,
        ...calculateTotals(newItems),
        isOpen: true,
      };
    });
  },

  removeFromCart: (productId: string | number) => {
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== productId);
      return { ...state, items: newItems, ...calculateTotals(newItems) };
    });
  },

  updateQuantity: (productId: string | number, quantity: number) => {
    set((state) => {
      if (quantity <= 0) {
        const newItems = state.items.filter((item) => item.id !== productId);
        return { ...state, items: newItems, ...calculateTotals(newItems) };
      }

      const newItems = state.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      );

      return { ...state, items: newItems, ...calculateTotals(newItems) };
    });
  },

  clearCart: () => set(initialState),
}));

export default useCartStore;
