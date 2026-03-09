"use client";
import React from "react";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";
import useCartStore from "@/store/cart/cart.store";
import { getSelectedOptionsText } from "@/store/cart/cart.utils";
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

  const router = useRouter();
  const handleClose = () => setIsOpen(false);

  const handleCheckout = () => {
    setIsOpen(false);
    router.push("/checkout");
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
                        {getSelectedOptionsText(item)?.map((text, idx) => (
                          <Typography
                            key={idx}
                            variant="p3"
                            color={colors.buttons.orange}
                          >
                            {text}
                          </Typography>
                        ))}
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
                    <Typography variant="p2" color="text.secondary">
                      {formatPriceFromCents(item.priceInCents)}
                    </Typography>
                    <div className="quantity__selector--buttons">
                      <div className="quantity__selector">
                        <IconButton
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
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
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          size="small"
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                      </div>
                      <IconButton
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                        sx={{ ml: 1 }}
                      >
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
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
