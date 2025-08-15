import { products } from "@/data/products";

export async function GET(_req: Request, ctx: { params: { id: string } }) {
  const item = products.find((p) => p.id === ctx.params.id);
  if (!item) return new Response("Not found", { status: 404 });
  return Response.json(item);
}
