import type { Product } from "@/types";


export default async function getProducts (): Promise<Product[]>{
    const res = await fetch(`/api/products`,
        {
            cache: "no-store"
        }
    )
    if(!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}


