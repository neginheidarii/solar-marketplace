"use client";

import type { Product } from "@/types";
import Link from "next/link";
import { useCart } from "@/app/store/cart";

export default function ProductDetail({ product }: { product: Product }) {
  const {addItem} = useCart();

  const handleAdd = () =>{
    addItem(product, 1)
    // console.log(product)
  }
  return (
    <article className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-6 md:p-10 rounded-2xl border border-gray-200 shadow-md">
      {/* Image */}
      <div className="flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-96 object-cover rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            {product.name}
          </h1>

          <p className="text-gray-600 text-base leading-relaxed">
            {product.description}
          </p>

          <span className="block text-2xl md:text-3xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-6">
          <button 
          onClick={handleAdd}
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
            Add to Cart
          </button>

          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition"
          >
            ← Back to products
          </Link>
        </div>
      </div>
    </article>
  );
}
