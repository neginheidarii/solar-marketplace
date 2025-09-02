import Providers from "./providers";
import type { Metadata } from "next";
import "./globals.css";
import CartSidebar from "@/components/CartSidebar";


export const metadata: Metadata = {
  title: "Solenery Store",
  description: "Solar equipment marketplace",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-gray-50 text-gray-900">
      
        <main>{children}</main>

        <CartSidebar />
      </body>
    </html>
  );
}
