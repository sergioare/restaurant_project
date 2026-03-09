import axios, { AxiosRequestConfig } from "axios";
import { setupCache } from "axios-cache-interceptor";

import { configureCacheInterceptor } from "./interceptors/configureCache";
import errorInterceptors from "./interceptors/errorInterceptor";

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

const api = setupCache(axios.create(config), {
  staleIfError: false,
  ttl: 1000 * 60 * 5,
});

configureCacheInterceptor(api);
errorInterceptors(api);

export default api;
