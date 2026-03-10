import api from "@/utils/api/api.client";
import { PRODUCTS_SERVICE_URL } from "@/utils/constants/url.constants";

const productsService = {
  getProducts: async () => {
    const { data } = await api.get(PRODUCTS_SERVICE_URL);
    return data;
  },

  getCustomizations: async (productId: string) => {
    const { data } = await api.get(
      `${PRODUCTS_SERVICE_URL}/customizations/${productId}`,
    );
    return data;
  },
};

export default productsService;
