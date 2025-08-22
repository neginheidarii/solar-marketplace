"use client";

import { useMemo, useState } from "react";
import {createProductFuse} from "@/lib/fuse";
import { Product } from "@/types";
import Link from "next/link";

const ProductSearch = ({ products }: { products: Product[] }) => {
  const [query, setQuery] = useState("");

  // buikd an index once products change
  const fuse = useMemo(()=> createProductFuse(products), [products])

  const filtered =
    query.trim().length === 0
      ? products
      : fuse.search(query).map((r) => r.item);

  return (
    <div>
      <input
        className="w-full max-w-xl rounded-full border p-3 mb-6"
        placeholder="Search products…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <li key={p.id} className="border rounded-xl p-4 hover:shadow">
            <Link href={`/product/${p.id}`}>
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h2 className="font-semibold">{p.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {p.description}
              </p>
              <div className="mt-2 font-bold text-blue-600">
                ${p.price.toFixed(2)}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
