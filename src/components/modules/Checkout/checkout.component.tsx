"use client";

import { useHasHydrated } from "@/utils/hooks/hydratated";

import CheckoutStyles from "./checkout.styles";
import PickUpLocation from "./components/pickupLocation.component";
import Summary from "./components/summary.component";

const CheckoutComponent = () => {
  const hasHydrated = useHasHydrated();

  if (!hasHydrated) return null;
  return (
    <div className="checkout__container">
      <PickUpLocation />
      <Summary />
      <style jsx>{CheckoutStyles}</style>
    </div>
  );
};

export default CheckoutComponent;
