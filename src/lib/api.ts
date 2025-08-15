import type { Product } from "@/types";
import { getBaseUrl } from "./base-url";


export default async function getProducts (): Promise<Product[]>{
    const base = getBaseUrl();
    const res = await fetch(`${base}/api/products`,
        {
            cache: "no-store"
        }
    )
    if(!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
    return res.json();
}


