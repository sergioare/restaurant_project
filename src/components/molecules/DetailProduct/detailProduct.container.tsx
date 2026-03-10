import { useEffect } from "react";

import Spinner from "@/components/atoms/Spinner/spinner.component";
import useProductStore from "@/store/products/products.store";

import DetailProductComponent from "./detailProduct.component";

const DetailProductContainer = () => {
  const { selectedProduct, fetchCustomization, isLoadingCustom } =
    useProductStore();

  useEffect(() => {
    if (!selectedProduct) return;
    if (!selectedProduct.metadata.isCustomizable) return;
    fetchCustomization(selectedProduct.id);
  }, [fetchCustomization, selectedProduct]);

  if (!selectedProduct) return null;
  if (isLoadingCustom) return <Spinner />;

  return <DetailProductComponent />;
};

export default DetailProductContainer;
