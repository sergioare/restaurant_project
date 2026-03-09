import { AxiosError, AxiosInstance } from "axios";

const errorInterceptors = (instance: AxiosInstance) =>
  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

export default errorInterceptors;
