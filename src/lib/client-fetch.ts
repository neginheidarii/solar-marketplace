import type { Product } from "@/types";
import { getBaseUrl } from "./base-url";

export async function fetchProductById(id: string): Promise<Product> {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/products/${id}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(
      res.status === 404
        ? "Product not found"
        : `Failed to fetch product (${res.status})`
    );
  }
  return res.json();
}
