"use client";

import { useMemo, useState } from "react";
import { createProductFuse } from "@/lib/fuse";
import { Product, Sort, CategoryOptions } from "@/types";
import Link from "next/link";
import { categories } from "@/data/products";
import { useCart } from "@/app/store/cart";
import toast from "react-hot-toast";

const ProductSearch = ({ products }: { products: Product[] }) => {
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<Sort>("None");
  const [category, setCategory] = useState<CategoryOptions>("All");
  const [inStock, setinStock] = useState<boolean>(false);

  const { addItem } = useCart();

  const handleClick = () => {
    setQuery(""), setSort("None"), setCategory("All"), setinStock(false);
  };
  const fuse = useMemo(() => createProductFuse(products), [products]);

  let list = products;

  const filtered = useMemo(() => {
    list =
      query.trim().length === 0
        ? products
        : fuse.search(query).map((r) => r.item);

    if (sort === "Price-Asc") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sort === "Price-Desc") {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    if (category !== "All") {
      list = list.filter((p) => p.category === category);
    }

    if (inStock) {
      list = list.filter((p) => p.inStock);
    }

    return list;
  }, [products, query, sort, fuse, category, inStock]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Search + Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <input
          className="flex-1 min-w-[200px] rounded-full border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          placeholder="🔍 Search products…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          id="sort"
          className="rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
        >
          <option value="none">Sort: None</option>
          <option value="Price-Asc">Price ↑</option>
          <option value="Price-Desc">Price ↓</option>
        </select>

        <select
          className="rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) =>
            setCategory(e.currentTarget.value as CategoryOptions)
          }
        >
          <option value="All">All Categories</option>
          {categories.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            checked={inStock}
            onChange={(e) => setinStock(e.currentTarget.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span>In Stock</span>
        </label>

        <button
          type="button"
          onClick={handleClick}
          className="rounded-full bg-red-500 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>

      {/* Product Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <li
            key={p.id}
            className="border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition"
          >
            <Link href={`/product/${p.id}`} className="block">
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <h2 className="font-semibold text-gray-800 line-clamp-1">
                {p.name}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2">
                {p.description}
              </p>
              <div className="mt-3 font-bold text-blue-600 text-lg">
                ${p.price.toFixed(2)}
              </div>
            </Link>

            <button
              type="button"
              onClick={() => {
                addItem(p, 1);
                toast.success(`Added 1 × ${p.name} to cart`);
              }}
              className="mt-3 w-full rounded-full border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
