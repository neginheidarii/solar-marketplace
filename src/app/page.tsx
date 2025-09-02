import ProductSearch from "@/components/ProductSearch";
import getProducts from "@/lib/api";


export default async function Home() {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <ProductSearch products={products} />
    </div>
  );
}
