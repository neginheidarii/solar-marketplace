import getProducts from "@/lib/api";
import type { Product } from "@/types";
import SearchBar from "@/components/SearchBar";

export default async function Home() {
  const products: Product[] = await getProducts();
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <SearchBar />
    </div>
  );
}
