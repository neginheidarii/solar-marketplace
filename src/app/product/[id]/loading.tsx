export default function Loading() {
  return (
    <div className="animate-pulse space-y-4 max-w-5xl mx-auto p-6">
      <div className="h-8 w-1/3 bg-gray-200 rounded" />
      <div className="h-80 w-full bg-gray-200 rounded" />
      <div className="h-4 w-2/3 bg-gray-200 rounded" />
      <div className="h-4 w-1/2 bg-gray-200 rounded" />
    </div>
  );
}
