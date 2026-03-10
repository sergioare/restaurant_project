"use client";

import { useEffect, useState, useCallback } from "react";

import { useParams } from "next/navigation";

import orderService from "@/services/modules/orders";

import OrderStatusComponent from "./orderStatus.component";
import { OrderStatusProps } from "./orderStatus.model";

const OrderStatusContainer = () => {
  const params = useParams();
  const id = params?.id as string;

  const [orderData, setOrderData] = useState<OrderStatusProps | undefined>();

  const fetchOrder = useCallback(async (orderId: string) => {
    try {
      const response = await orderService.getOrderTimeline(orderId);
      setOrderData(response);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const executeFetch = async () => {
      if (!id) return;

      if (isMounted) {
        await fetchOrder(id);
      }
    };

    executeFetch();

    return () => {
      isMounted = false;
    };
  }, [id, fetchOrder]);

  if (!orderData) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <span className="status-pulse">Loading order details...</span>
      </div>
    );
  }

  return <OrderStatusComponent {...orderData} />;
};

export default OrderStatusContainer;
