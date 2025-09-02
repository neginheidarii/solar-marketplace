import ToasterProvider from "@/components/ToasterProvider";
import type { Metadata } from "next";
import "./globals.css";
import CartSidebar from "@/components/CartSidebar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Solenery Store",
  description: "Solar equipment marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gray-50 text-gray-900">
        <Providers>
          <main>{children}</main>
          <CartSidebar />
          <ToasterProvider />
        </Providers>
      </body>
    </html>
  );
}
