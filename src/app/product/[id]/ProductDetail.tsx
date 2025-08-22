"use client";

import type { Product } from "@/types";
import Link from "next/link";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <article className="grid md:grid-cols-2 gap-8">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-80 object-cover rounded-xl shadow"
      />

      <div className="space-y-4">
        <header className="flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <span className="shrink-0 text-2xl font-semibold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
        </header>

        <p className="text-gray-700 leading-7">{product.description}</p>

        {/* Placeholder for future actions */}
        <div className="pt-2">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to products
          </Link>
        </div>
      </div>
    </article>
  );
}
