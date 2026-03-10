import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

import Chip from "@/components/atoms/Chip";
import { Typography } from "@/components/atoms/Typography";
import useCartStore from "@/store/cart/cart.store";
import useEventStore from "@/store/events/events.store";
import useProductStore from "@/store/products/products.store";
import { formatPriceFromCents } from "@/utils/constants/formatPrice";
import { theme } from "@/utils/ThemeProvider";

import RenderButtons from "./components/renderButtons.component";
import RenderOptions from "./components/renderOptions.component";
import useDetailProduct from "./detailProduct.hook";
import DetailProductStyles from "./detailProduct.styles";

const { colors } = theme;

const DetailProductComponent = () => {
  const { isProductDetailOpen, selectedProduct, setIsProductDetailOpen } =
    useProductStore();

  const { addEvent } = useEventStore();

  const { addToCart, items: cartItems } = useCartStore();

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, unknown>
  >({});

  const { calculateExtraPrice, validateCustomizations, currentCustomization } =
    useDetailProduct({
      selectedOptions,
      setError,
    });

  const itemInCart = cartItems.find((item) => item.id === selectedProduct?.id);
  const quantityInCart = itemInCart ? itemInCart.quantity : 0;
  const realAvailableStock =
    (selectedProduct?.metadata?.stock ?? 0) - quantityInCart;

  const isCustomizable = selectedProduct?.metadata?.isCustomizable
    ? "--custom"
    : "--not-custom";

  const handleClose = () => {
    setIsProductDetailOpen(false);
    setQuantity(1);
    setError(null);
  };
  const handleIncrement = () => {
    if (quantity < realAvailableStock) {
      setQuantity((prev) => prev + 1);
      setError(null);
    } else {
      if (realAvailableStock <= 0) {
        setError("You already have all available units in your cart");
      } else {
        setError(`Only ${realAvailableStock} more units available`);
      }
    }
  };
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    setError(null);
  };

  const totalUnitWeight =
    (selectedProduct?.priceInCents || 0) + calculateExtraPrice();
  const finalTotalPrice = totalUnitWeight * quantity;

  const handleAddWithQuantity = () => {
    if (!validateCustomizations()) return;
    if (selectedProduct) {
      addToCart(selectedProduct, quantity, selectedOptions, totalUnitWeight);

      const eventPayload = {
        name: selectedProduct.name,
        quantity,
        selectedOptions,
        basePrice: selectedProduct.priceInCents,
        totalInCents: finalTotalPrice,
      };
      addEvent("CART_ITEM_ADDED", eventPayload);
      setSelectedOptions({});
      handleClose();
    }
  };

  return (
    <div>
      <div
        className={`detailProduct__backdrop ${isProductDetailOpen ? "is__open" : ""}`}
        onClick={handleClose}
      />

      <div
        className={`detailProduct__modal ${isProductDetailOpen ? "is__open" : ""} ${isCustomizable}`}
      >
        <div className="detailProduct__header">
          <Typography variant="h4" weight="bold" color={colors.buttons.orange}>
            {selectedProduct?.name}
          </Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>

        <div className={`detailProduct__body  ${isCustomizable}`}>
          <div className="detailProduct__media-section">
            <div className="detailProduct__image-container">
              {selectedProduct?.image && !imgError ? (
                <Image
                  src={selectedProduct?.image}
                  alt={selectedProduct?.name}
                  fill
                  sizes="430px"
                  priority
                  style={{ objectFit: "cover" }}
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="card__emoji">🥗</span>
              )}
            </div>

            <div className="detailProduct__description-box">
              <Typography variant="p2" color={colors.primary[400]}>
                {selectedProduct?.description}
              </Typography>
            </div>
          </div>

          <div className="detailProduct__info">
            <div className="detailProduct__price-section">
              <Typography
                variant="p2"
                weight="bold"
                color={colors.buttons.orange}
              >
                {formatPriceFromCents(totalUnitWeight)} Per unit
              </Typography>

              {selectedProduct?.badge && (
                <Chip title={selectedProduct?.badge} size="small" />
              )}
            </div>

            <div className="detailProduct__customize--section">
              {currentCustomization?.sections.map((section) => (
                <div key={section.id} className="customize__group">
                  <div className="customize__group-header">
                    <Typography variant="p2" weight="bold">
                      {section.title}
                    </Typography>
                    {section.minOptions && (
                      <Typography variant="p3" color={colors.buttons.orange}>
                        * Required
                      </Typography>
                    )}
                  </div>

                  <RenderOptions
                    section={section}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                  />
                </div>
              ))}
            </div>

            <RenderButtons
              quantity={quantity}
              finalTotalPrice={finalTotalPrice}
              error={error}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              handleAddWithQuantity={handleAddWithQuantity}
            />
          </div>
        </div>
      </div>

      <style jsx>{DetailProductStyles}</style>
    </div>
  );
};

export default DetailProductComponent;
