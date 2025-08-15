import getProducts from "@/lib/api";
import type {Product} from "@/types";

export default async function Home() {
  const products:Product[] = await getProducts();
  return (
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map((p)=>(
            <li key={p.id} className="p-6">
              <h2 className="text-blue-400">{p.name}</h2>
              <p>{p.description}</p>
              <h3>{p.price.toFixed(2)}</h3>
              <hr></hr>
            </li>
          ))}
        
        </ul>
      </div>
  );
}
