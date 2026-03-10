"use client";
import React from "react";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import { CartItem } from "@/store/cart/cart.model";
import useCartStore from "@/store/cart/cart.store";
import { getSelectedOptionsText } from "@/store/cart/cart.utils";
import useEventStore from "@/store/events/events.store";
import useProductStore from "@/store/products/products.store";
import { formatPriceFromCents } from "@/utils/constants/formatPrice";
import { theme } from "@/utils/ThemeProvider";

import ShoppingCartStyles from "./shoppingCart.styles";

const { colors } = theme;
const ShoppingCartComponent = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    totalCart,
    updateQuantity,
    removeFromCart,
  } = useCartStore();

  const { addEvent } = useEventStore();

  const {
    customizations,
    toggleProductDetail,
    setSelectedProduct,
    setIsEditingProduct,
  } = useProductStore();

  const router = useRouter();
  const handleClose = () => setIsOpen(false);

  const handleCheckout = () => {
    setIsOpen(false);
    router.push("/checkout");
  };

  const handleUpdateQuantity = (item: CartItem, newQuantity: number) => {
    const stockAvailable = item.metadata?.stock ?? 0;

    const eventPayload = {
      name: item.name,
      quantity: newQuantity,
      selectedOptions: item.selectedOptions,
      basePrice: item.priceInCents,
      totalInCents: item.priceInCents * newQuantity,
      productId: item.id,
    };
    if (newQuantity > item.quantity && newQuantity > stockAvailable) {
      addEvent("STOCK_LIMIT_REACHED", {
        ...eventPayload,
        attemptedQuantity: newQuantity,
        currentStock: stockAvailable,
        sku: item.sku,
      });

      return;
    }

    if (newQuantity <= 0) {
      addEvent("CART_ITEM_REMOVED", {
        ...eventPayload,
        sku: item.sku,
        reason: "quantity_zero",
      });
    } else {
      addEvent("CART_ITEM_UPDATED", {
        oldQuantity: item.quantity,
        newQuantity,
        sku: item.sku,
        reason: "quantity_updated",
      });
    }

    updateQuantity(item.id, newQuantity);
  };

  const handleRemoveFromCart = (item: CartItem) => {
    addEvent("CART_ITEM_REMOVED", {
      name: item.name,
      finalQuantity: item.quantity,
      selectedOptions: item.selectedOptions,
      reason: "removed_from_cart",
      basePrice: item.priceInCents,
      productId: item.id,
      sku: item.sku,
    });

    removeFromCart(item.id);
  };

  const handleEditCartItem = (item: CartItem) => {
    setSelectedProduct(item);
    setIsEditingProduct(true);
    toggleProductDetail();
    handleClose();
  };

  return (
    <>
      <div
        className={`cart__backdrop ${isOpen ? "is__open" : ""}`}
        onClick={handleClose}
      />

      <div className={`cart__sidebar ${isOpen ? "is__open" : ""}`}>
        <div className="cart__header">
          <Typography variant="h4" color={colors.buttons.orange}>
            Cart ({items.length})
          </Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>

        <div className="cart__content">
          {items.length === 0 ? (
            <div className="cart__empty">
              <Typography variant="p1" color={colors.gray[400]}>
                Your bag is empty
              </Typography>
            </div>
          ) : (
            <Stack spacing={3}>
              {items.map((item) => (
                <div
                  className="cart__item--container"
                  key={item.id + JSON.stringify(item.selectedOptions || {})}
                >
                  <div className="cart__item-info">
                    <Typography
                      variant="p2"
                      weight="bold"
                      color={colors.primary[800]}
                    >
                      {item.name}
                    </Typography>
                    {item.selectedOptions &&
                    Object.keys(item.selectedOptions).length > 0 ? (
                      <div className="cart__item-options">
                        {getSelectedOptionsText(item, customizations)?.map(
                          (text, idx) => (
                            <Typography
                              key={idx}
                              variant="p3"
                              color={colors.buttons.orange}
                            >
                              {text}
                            </Typography>
                          ),
                        )}
                      </div>
                    ) : (
                      <div className="cart__item-options">
                        <Typography variant="p3" color={colors.primary[900]}>
                          {item.description}
                        </Typography>
                      </div>
                    )}
                  </div>

                  <div className="cart__item-quantity">
                    <div className="cart__item-price">
                      <Typography variant="p2" color="text.secondary">
                        {formatPriceFromCents(item.priceInCents)}
                      </Typography>
                    </div>
                    <div className="quantity__selector--buttons">
                      <div className="quantity__selector">
                        <IconButton
                          onClick={() =>
                            handleUpdateQuantity(item, item.quantity - 1)
                          }
                          size="small"
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>

                        <Typography variant="p2" weight="bold">
                          {item.quantity}
                        </Typography>

                        <IconButton
                          onClick={() =>
                            handleUpdateQuantity(item, item.quantity + 1)
                          }
                          size="small"
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </div>
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                      {item.metadata?.isCustomizable && (
                        <IconButton onClick={() => handleEditCartItem(item)}>
                          <EditIcon
                            fontSize="small"
                            sx={{ color: colors.primary[400] }}
                          />
                        </IconButton>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Stack>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart__footer">
            <div className="cart__total__row">
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="p2" color="primary">
                {formatPriceFromCents(totalCart.subtotal)}
              </Typography>
            </div>
            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleCheckout}
            >
              <Typography variant="p2" weight="bold">
                Checkout
              </Typography>
            </Button>
          </div>
        )}
      </div>

      <style jsx>{ShoppingCartStyles}</style>
    </>
  );
};

export default ShoppingCartComponent;
