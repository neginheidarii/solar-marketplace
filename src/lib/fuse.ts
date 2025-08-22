import Fuse from "fuse.js";
import type { Product } from "@/types";

export function createProductFuse(products: Product[]) {
  return new Fuse(products, {
    includeScore: true,
    threshold: 0.35,
    keys: ["name", "description"],
  });
}
