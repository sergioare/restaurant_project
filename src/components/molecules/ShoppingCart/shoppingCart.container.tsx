import { useHasHydrated } from "@/utils/hooks/hydratated";

import ShoppingCartComponent from "./shoppingCart.component";

const ShoppingCartContainer = () => {
  const hasHydrated = useHasHydrated();

  if (!hasHydrated) return null;
  return <ShoppingCartComponent />;
};

export default ShoppingCartContainer;
