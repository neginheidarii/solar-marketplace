import Fuse from "fuse.js";
import { products } from "@/data/products";

const fuse = new Fuse(products, {
  keys: ["name", "description"],
});

export default fuse;
