import { AxiosCacheInstance } from "axios-cache-interceptor";
import { v4 as uuidv4 } from "uuid";

import { withoutCache } from "./cachePages";

export const configureCacheInterceptor = (instance: AxiosCacheInstance) => {
  instance.interceptors.request.use((request) => {
    const requestId = request.id as string;

    const isOrderFlow =
      requestId?.startsWith("orderService") ||
      requestId?.startsWith("cartService");

    if (isOrderFlow) {
      request.headers["X-Correlation-Id"] = uuidv4();
      if (
        request.method?.toLowerCase() === "post" ||
        request.method?.toLowerCase() === "put"
      ) {
        request.headers["Idempotency-Key"] = uuidv4();
      }
    }

    if (request.cache === false) return request;

    const hasCache = !withoutCache.some(
      (serviceName) => requestId === serviceName,
    );

    if (!hasCache) {
      request.cache = false;
    }

    return request;
  });
};
