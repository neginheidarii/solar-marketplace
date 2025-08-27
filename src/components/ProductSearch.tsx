"use client";

import { useMemo, useState } from "react";
import { createProductFuse } from "@/lib/fuse";
import { Product, Sort, CategoryOptions } from "@/types";
import Link from "next/link";
import { categories } from "@/data/products";

const ProductSearch = ({ products }: { products: Product[] }) => {
  const [query, setQuery] = useState<string>("");
  const [sort, setSort] = useState<Sort>("None");
  const [category, setCategory] = useState<CategoryOptions>("All");
  // define type
  //import it
  // create a use state (give the <type> and default value)
  // create a usememo(()=>{},[])
  //
  // build an index once products change
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

    return list;
  }, [products, query, sort, fuse, category]);

  return (
    <div>
      <input
        className="w-full max-w-xl rounded-full border p-3 mb-6"
        placeholder="Search products…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        id="sort"
        className=" rounded-full border p-3 m-6"
        name="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value as Sort)}
      >
        <option value="none">None</option>
        <option value="Price-Asc">Price Asc</option>
        <option value="Price-Desc">Price Desc</option>
      </select>

      <select
       className=" rounded-full border p-3 m-6"
        value={category}
        onChange={(e) => setCategory(e.currentTarget.value as CategoryOptions)}
      >
        <option value="All">All</option>
        {categories.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <li key={p.id} className="border rounded-xl p-4 hover:shadow">
            <Link href={`/product/${p.id}`}>
              <img
                src={p.imageUrl}
                alt={p.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h2 className="font-semibold">
                {p.name} - {p.category}{" "}
              </h2>
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
