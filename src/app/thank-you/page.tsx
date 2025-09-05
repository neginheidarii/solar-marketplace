export default function ThankYouPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">Thank you! 🎉</h1>
        <p className="mt-3 text-gray-600">
          Your order has been received. We’ve sent a confirmation to your email.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700 transition"
        >
          Continue shopping
        </a>
      </div>
    </main>
  );
}
