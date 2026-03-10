import { Product } from "@/services/models/product";

export type CartItem = Product & {
  quantity: number;
  selectedOptions?: Record<string, unknown>;
};

export type CartState = CartConfig & {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPriceInCents: number;
  totalCart: CartTotal;
};

export type CartActions = {
  addToCart: (
    product: Product,
    quantity?: number,
    selectedOptions?: Record<string, unknown>,
    newPriceInCents?: number,
  ) => void;
  removeFromCart: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setIsOpen: (open: boolean) => void;
  setServiceFeeEnabled: (enabled: boolean) => void;
  setServiceFeePercentage: (percentage: number) => void;
  editCartItem: (
    oldHash: string,
    item: CartItem,
    newPriceInCents?: number,
  ) => void;
};

type CartConfig = {
  serviceFeePercentage: number;
  isServiceFeeEnabled: boolean;
  taxRate: number;
};

type CartTotal = {
  subtotal: number;
  tax: number;
  serviceFee: number;
  total: number;
};

type CartStore = CartState & CartActions;

export type { CartConfig, CartStore };
