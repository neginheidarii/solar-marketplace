import type { Product } from "@/types";
import { fetchProductById } from "@/lib/client-fetch";
import ProductDetail from "./ProductDetail";

export default async function ProductPage({params}:{
  params: {id:string}
}) {

  const product: Product = await fetchProductById(params.id)

  return(
    <main className="max-w-5xl mx-auto p-6">
      <ProductDetail product={product} />
    </main>
  )
  
}