"use client";
import Header from "@/components/molecules/Header";
import ShoppingCart from "@/components/molecules/ShoppingCart";

import { DefaultLayoutProps } from "./defaultLayout.model";
import { DefaultLayoutLocalStyles } from "./defaultLayout.styles";

const DefaultLayoutComponent = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <div className="container">
        <Header />
        <main className="content">
          {children}
          <ShoppingCart />
        </main>
      </div>
      <style jsx>{DefaultLayoutLocalStyles}</style>
    </>
  );
};

export default DefaultLayoutComponent;
