"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}){
    const notFound = error.message === "Product not found" || error.message === "NOT_FOUND"

    return(
        <div className="max-w-lg mx-auto p-6 text-center border rounded-xl bg-red-50">
      <h2 className="text-xl font-semibold text-red-700 mb-2">
        {notFound ? "Product not found" : "Something went wrong"}
      </h2>
      {!notFound && (
        <p className="text-sm text-red-600 mb-4">
          {error.message || "Unexpected error"}
        </p>
      )}
      <div className="flex justify-center">
        <button
          onClick={reset}
          className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </div>
    )
}