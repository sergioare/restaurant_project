import { Product } from "@/services/models/product";

export type CartItem = Product & {
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPriceInCents: number;
};

export type CartActions = {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setIsOpen: (open: boolean) => void;
};

export type CartStore = CartState & CartActions;
