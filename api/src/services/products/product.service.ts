import { Product, ProductCustomization } from "../../models/product.model";
import { db } from "../firebase.service";

export const getAllProducts = async (): Promise<Product[]> => {
  const snapshot = await db
    .collection("products")
    .where("metadata.isActive", "==", true)
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
    } as Product;
  });
};

export const getProductCustomizations = async (
  productId: string,
): Promise<ProductCustomization | null> => {
  const snapshot = await db
    .collection("product_customizations")
    .where("productId", "==", productId)
    .limit(1)
    .get();

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  return {
    ...doc.data(),
    id: doc.id,
  } as ProductCustomization;
};
