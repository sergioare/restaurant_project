import type { Metadata } from "next";
import Head from "next/head";

import DefaultLayout from "@/components/modules/DefaultLayout";
import { ContextProvider } from "@/context/appContext";
export const metadata: Metadata = {
  title: "Sun Fu Wok",
};

type LayoutProps = {
  LayoutComponent: React.ComponentType<{ children: React.ReactNode }>;
  children: React.ReactNode;
};

const LayoutWrapper = ({ LayoutComponent, children }: LayoutProps) => {
  return <LayoutComponent>{children}</LayoutComponent>;
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sun Fu Wok</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <body>
        <ContextProvider>
          <LayoutWrapper LayoutComponent={DefaultLayout}>
            {children}
          </LayoutWrapper>
        </ContextProvider>
      </body>
    </html>
  );
}
