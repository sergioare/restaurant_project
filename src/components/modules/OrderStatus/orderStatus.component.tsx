"use client";

import React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import PersonIcon from "@mui/icons-material/Person";
import RestaurantIcon from "@mui/icons-material/Restaurant";

import { Card } from "@/components/atoms/Card";
import { Typography } from "@/components/atoms/Typography";
import { formatPriceFromCents } from "@/utils/constants/formatPrice";
import { theme } from "@/utils/ThemeProvider";

import { OrderStatusProps } from "./orderStatus.model";
import OrderStatusStyles from "./orderStatus.styles";

const { colors } = theme;

const OrderStatusComponent = (props: OrderStatusProps) => {
  const {
    orderId,
    status,
    subtotalCents,
    taxCents,
    totalCents,
    serviceFeeCents,
    customerType,
  } = props;
  const statusConfig: Record<
    string,
    { label: string; color: string; icon: React.ReactNode }
  > = {
    ORDER_PLACED: {
      label: "ORDER PLACED",
      color: colors.buttons.orange,
      icon: <AccessTimeIcon sx={{ fontSize: 20 }} />,
    },
    PREPARING: {
      label: "PREPARING",
      color: "#2196F3",
      icon: <RestaurantIcon sx={{ fontSize: 20 }} />,
    },
    SHIPPED: {
      label: "OUT FOR DELIVERY",
      color: "#9C27B0",
      icon: <DeliveryDiningIcon sx={{ fontSize: 20 }} />,
    },
    DELIVERED: {
      label: "DELIVERED",
      color: "#4CAF50",
      icon: <CheckCircleIcon sx={{ fontSize: 20 }} />,
    },
    CANCELLED: {
      label: "CANCELLED",
      color: "#F44336",
      icon: <CancelIcon sx={{ fontSize: 20 }} />,
    },
  };

  const currentStatus = statusConfig[status] || statusConfig.ORDER_PLACED;

  return (
    <>
      <aside className="checkout__sidebar">
        <Card>
          <div className="summary__container">
            {/* Dynamic Status Header */}
            <div
              className="summary__title-bar"
              style={{
                backgroundColor: `${currentStatus.color}15`,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px",
                borderLeft: `4px solid ${currentStatus.color}`,
              }}
            >
              <span style={{ color: currentStatus.color, display: "flex" }}>
                {currentStatus.icon}
              </span>
              <Typography
                variant="p2"
                weight="bold"
                color={currentStatus.color}
              >
                {currentStatus.label}
              </Typography>
            </div>

            <div className="summary__content">
              <div style={{ marginBottom: "20px" }}>
                <Typography variant="p3" color={colors.gray[600]} weight="bold">
                  ORDER IDENTIFIER
                </Typography>
                <Typography variant="p3">{orderId}</Typography>
              </div>

              <div className="summary__dashed-divider" />

              <div className="summary__item">
                <Typography variant="p2">ITEMS SUBTOTAL</Typography>
                <Typography variant="p2" weight="bold">
                  {formatPriceFromCents(subtotalCents)}
                </Typography>
              </div>

              <div className="summary__item">
                <Typography variant="p2">GRATUITY (SERVICE FEE)</Typography>
                <Typography variant="p2" weight="bold">
                  {formatPriceFromCents(serviceFeeCents)}
                </Typography>
              </div>

              <div className="summary__item">
                <Typography variant="p2">TAX ESTIMATE</Typography>
                <Typography variant="p2" weight="bold">
                  {formatPriceFromCents(taxCents)}
                </Typography>
              </div>

              <div className="summary__solid-divider" />

              <div className="summary__total-row" style={{ marginTop: "8px" }}>
                <Typography variant="p1" weight="bold">
                  GRAND TOTAL
                </Typography>
                <Typography
                  variant="p1"
                  weight="bold"
                  color={colors.buttons.orange}
                >
                  {formatPriceFromCents(totalCents)}
                </Typography>
              </div>

              <div className="summary__dashed-divider" />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "16px",
                  justifyContent: "center",
                  opacity: 0.8,
                }}
              >
                <PersonIcon sx={{ fontSize: 16, color: colors.gray[500] }} />
                <Typography variant="p3" color={colors.gray[600]}>
                  Ordered as:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {customerType.toUpperCase()}
                  </span>
                </Typography>
              </div>
            </div>
          </div>
        </Card>
      </aside>
      <style jsx>{OrderStatusStyles}</style>
    </>
  );
};

export default OrderStatusComponent;
