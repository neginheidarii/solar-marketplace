"use client";

import Link from "next/link";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <CheckoutForm />

      <div className="mt-6">
        <Link
          href="/"
          className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
        >
          ← Back to products
        </Link>
      </div>
    </main>
  );
}
