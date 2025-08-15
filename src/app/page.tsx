import getProducts from "@/lib/api";
import type {Product} from "@/types";

export default async function Home() {
  const products:Product[] = await getProducts();
  return (
      <div className="max-w-6xl mx-auto p-6">
  <h1 className="text-3xl font-bold mb-6">Product List</h1>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((p) => (
      <li
        key={p.id}
        className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white p-4 flex flex-col"
      >
        <img
          src={p.imageUrl}
          alt={p.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {p.name}
        </h2>
        <p className="text-gray-600 text-sm flex-grow">{p.description}</p>
        <h3 className="text-xl font-bold text-green-600 mt-4">
          ${p.price.toFixed(2)}
        </h3>
      </li>
    ))}
  </ul>
</div>

  );
}
