"use client";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import { Typography } from "@/components/atoms/Typography";
import useCartStore from "@/store/cart/cart.store";

import ShoppingCartStyles from "./shoppingCart.styles";

import { formatPriceFromCents } from "@/store/cart/cart.utils";

const ShoppingCartComponent = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    totalPriceInCents,
    updateQuantity,
    removeFromCart,
  } = useCartStore();

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div
        className={`cart__backdrop ${isOpen ? "is__open" : ""}`}
        onClick={handleClose}
      />

      <div className={`cart__sidebar ${isOpen ? "is__open" : ""}`}>
        <div className="cart__header">
          <Typography variant="h6">Tu Carrito ({items.length})</Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>

        <div className="cart__content">
          {items.length === 0 ? (
            <div className="cart__empty">
              <Typography variant="p1">Tu carrito está vacío</Typography>
            </div>
          ) : (
            <Stack spacing={3}>
              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space__between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="p1">{item.name}</Typography>
                    <Typography variant="p2" color="text.secondary">
                      {formatPriceFromCents(item.priceInCents)} c/u
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ minWidth: "32px", p: 0 }}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ minWidth: "32px", p: 0 }}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                    <IconButton
                      color="error"
                      onClick={() => removeFromCart(item.id)}
                      sx={{ ml: 1 }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </Stack>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart__footer">
            <div className="cart__total__row">
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" color="primary">
                {formatPriceFromCents(totalPriceInCents)}
              </Typography>
            </div>
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ borderRadius: 2, textTransform: "none", fontWeight: "600" }}
            >
              Finalizar Compra
            </Button>
          </div>
        )}
      </div>

      <style jsx>{ShoppingCartStyles}</style>
    </>
  );
};

export default ShoppingCartComponent;
