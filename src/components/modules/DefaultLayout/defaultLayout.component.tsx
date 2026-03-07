"use client";
import Header from "@/components/molecules/Header";

import { DefaultLayoutProps } from "./defaultLayout.model";
import { DefaultLayoutLocalStyles } from "./defaultLayout.styles";

const DefaultLayoutComponent = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <div className="container">
        <Header />
        <main className="content">{children}</main>
      </div>
      <style jsx>{DefaultLayoutLocalStyles}</style>
    </>
  );
};

export default DefaultLayoutComponent;
