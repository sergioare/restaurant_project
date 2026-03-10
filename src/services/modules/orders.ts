import { v4 as uuidv4 } from "uuid";

import api from "@/utils/api/api.client";
import { ORDERS_SERVICE_URL } from "@/utils/constants/url.constants";

import { CheckoutRequest } from "../models/orders";

const orderService = {
  createOrder: async (orderRequest: CheckoutRequest) => {
    const { data } = await api.post(ORDERS_SERVICE_URL, orderRequest, {
      headers: {
        "X-Correlation-Id": orderRequest.correlationId,
        "Idempotency-Key": uuidv4(),
      },
    });
    return data;
  },
};

export default orderService;
