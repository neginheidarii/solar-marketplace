import type { Product } from "@/types";
import { fetchProductById } from "@/lib/client-fetch";
import { lazy, Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

const ProductDetail = lazy(() => import("./ProductDetail"));

function DetailSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 w-1/3 bg-gray-200 rounded" />
      <div className="h-80 w-full bg-gray-200 rounded" />
      <div className="h-4 w-2/3 bg-gray-200 rounded" />
      <div className="h-4 w-1/2 bg-gray-200 rounded" />
    </div>
  );
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product: Product = await fetchProductById(params.id);

  return (
    <main className="max-w-5xl mx-auto p-6">
      <ErrorBoundary>
        <Suspense fallback={<DetailSkeleton />}>
          <ProductDetail product={product} />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
