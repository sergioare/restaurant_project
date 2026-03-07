"use client";

import { useEffect } from "react";

import { ProductCard } from "@/components/molecules/ProductCard";
import Tabs from "@/components/molecules/Tabs";
import useProductStore from "@/store/products/products.store";

export default function Home() {
  const activeCategory = useProductStore((s) => s.activeCategory);
  const setActiveCategory = useProductStore((s) => s.setActiveCategory);
  const paginatedProducts = useProductStore((s) => s.paginatedProducts);

  const fetchProducts = useProductStore((s) => s.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const foodTabs = [
    { value: "all", label: "All", icon: "🍽️" },
    { value: "burgers", label: "Burgers", icon: "🍔" },
    { value: "pizzas", label: "Pizzas", icon: "🍕" },
    { value: "wraps", label: "Wraps", icon: "🌯" },
    { value: "tacos", label: "Tacos", icon: "🌮" },
    { value: "sides", label: "Sides", icon: "🍟" },
    { value: "drinks", label: "Drinks", icon: "🥤" },
  ] as const;
  return (
    <div>
      <Tabs
        tabs={foodTabs}
        activeTab={activeCategory}
        onChange={setActiveCategory}
      />
      {paginatedProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
          badge={product.badge}
        />
      ))}
    </div>
  );
}
