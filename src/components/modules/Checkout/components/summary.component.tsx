"use client";

import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@/components/atoms/Button";
import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";
import { useAppContext } from "@/context/appContext";
import { CheckoutRequest } from "@/services/models/orders";
import orderService from "@/services/modules/orders";
import useCartStore from "@/store/cart/cart.store";
import useEventStore from "@/store/events/events.store";
import { formatPriceFromCents } from "@/utils/constants/formatPrice";
import { theme } from "@/utils/ThemeProvider";

import CheckoutStyles from "../checkout.styles";

const { colors } = theme;

const SummaryComponent = () => {
  const {
    items,
    totalCart,
    taxRate,
    isServiceFeeEnabled,
    serviceFeePercentage,
    setServiceFeeEnabled,
    clearCart,
  } = useCartStore();

  const { user } = useAppContext();
  const { events, clearEvents } = useEventStore();

  const router = useRouter();

  const handlePlaceOrder = async () => {
    const orderData: CheckoutRequest = {
      items: items,
      userId: user?._id ?? "",
      email: user?.email ?? "",
      name: user?.name ?? "",
      phone: `+${user?.diallingCode ?? undefined} ${user?.phoneNumber ?? undefined}`,
      correlationId: uuidv4(),
      config: { taxRate, isServiceFeeEnabled, serviceFeePercentage },
      localEvents: events,
      customerType: "customer",
    };

    try {
      const response = await orderService.createOrder(orderData);

      if (response.orderId) {
        clearEvents();
        clearCart();
        router.push(`/checkout/${response.orderId}`);
      }
    } catch (error) {
      console.error("Error al procesar la orden:", error);
    }
  };
  return (
    <>
      <aside className="checkout__sidebar">
        <Card>
          <div className="summary__container">
            <div className="summary__title-bar">
              <Typography variant="p2" weight="bold" color={colors.gray[600]}>
                PAYMENT SUMMARY
              </Typography>
            </div>

            <div className="summary__content">
              <div className="summary__item">
                <Typography variant="p2">ORDER SUMMARY</Typography>
                <Typography variant="p2" weight="bold">
                  {formatPriceFromCents(totalCart.subtotal)}
                </Typography>
              </div>

              <div className="summary__dashed-divider" />

              <div className="tip__section">
                <Typography variant="p3" weight="bold" color={colors.gray[600]}>
                  GRATUITY ({serviceFeePercentage * 100}%)
                </Typography>

                <div className="tip__options">
                  <div
                    className={`radio__row ${isServiceFeeEnabled ? "--selected" : ""}`}
                    onClick={() => setServiceFeeEnabled(true)}
                  >
                    <div className="selection-indicator --single">
                      {isServiceFeeEnabled && <div className="indicator-dot" />}
                    </div>
                    <Typography variant="p2">Yes, add tip</Typography>
                  </div>

                  <div
                    className={`radio__row ${!isServiceFeeEnabled ? "--selected" : ""}`}
                    onClick={() => setServiceFeeEnabled(false)}
                  >
                    <div className="selection-indicator --single">
                      {!isServiceFeeEnabled && (
                        <div className="indicator-dot" />
                      )}
                    </div>
                    <Typography variant="p2">No, thanks</Typography>
                  </div>
                </div>
              </div>

              <div className="summary__dashed-divider" />

              <div className="summary__item">
                <Typography variant="p2">SUBTOTAL</Typography>
                <Typography variant="p2" weight="bold">
                  {formatPriceFromCents(totalCart.subtotal)}
                </Typography>
              </div>

              {isServiceFeeEnabled && (
                <div className="summary__item">
                  <Typography variant="p2">SERVICE FEE</Typography>
                  <Typography variant="p2" weight="bold">
                    {formatPriceFromCents(totalCart.serviceFee)}
                  </Typography>
                </div>
              )}

              <div className="summary__item">
                <Typography variant="p2">TAX ({taxRate * 100}%)</Typography>
                <Typography variant="p2" weight="bold">
                  {formatPriceFromCents(totalCart.tax)}
                </Typography>
              </div>

              <div className="summary__solid-divider" />

              <div className="summary__total-row">
                <Typography variant="p1" weight="bold">
                  GRAND TOTAL
                </Typography>
                <Typography
                  variant="p2"
                  weight="bold"
                  color={colors.buttons.orange}
                >
                  {formatPriceFromCents(totalCart.total)}
                </Typography>
              </div>

              <Button
                variant="contained"
                fullWidth
                disabled={items.length === 0}
                onClick={handlePlaceOrder}
              >
                <Typography variant="p2" weight="bold">
                  PLACE ORDER
                </Typography>
              </Button>
            </div>
          </div>
        </Card>
      </aside>
      <style jsx>{CheckoutStyles}</style>
    </>
  );
};

export default SummaryComponent;
