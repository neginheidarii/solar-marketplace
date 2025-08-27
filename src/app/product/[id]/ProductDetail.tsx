"use client";

import type { Product } from "@/types";
import Link from "next/link";

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <article className="grid md:grid-cols-2 gap-10 bg-white p-6 md:p-10 rounded-2xl shadow-lg">
      {/* Image */}
      <div className="flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-80 object-cover rounded-2xl shadow-md transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            {product.name}
          </h1>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <span className="inline-block text-3xl font-semibold text-emerald-600">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-medium shadow-md hover:shadow-lg hover:opacity-95 transition">
            Add to Cart
          </button>

          <Link
            href="/"
            className="text-sm font-medium text-sky-600 hover:underline"
          >
            ← Back to products
          </Link>
        </div>
      </div>
    </article>
  );
}
