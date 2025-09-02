"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useCart } from "@/app/store/cart";

export default function CartSidebar() {
  const { items, addItem, removeItem, clearCart, getTotal } = useCart();
  const [open, setOpen] = useState(false);

  const lines = useMemo(() => Object.values(items), [items]);
  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );
  const total = getTotal();

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 text-white px-4 py-3 text-sm font-semibold shadow-lg hover:bg-blue-700 transition"
        aria-label="Open cart"
      >
        Cart ({count})
      </button>

      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/40 transition-opacity",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 h-full w-full sm:w-[420px] bg-white border-l border-gray-200 shadow-xl transition-transform",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Your Cart</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-sm text-gray-500 hover:text-blue-600 transition"
          >
            Close ✕
          </button>
        </div>

        {/* Lines */}
        <div className="h-[calc(100%-180px)] overflow-y-auto px-6 py-4 space-y-4">
          {lines.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            lines.map((l) => (
              <div
                key={l.id}
                className="flex gap-3 items-center border border-gray-200 rounded-2xl p-3"
              >
                {/* Thumbnail */}
                {l.imageUrl ? (
                  <Image
                    src={l.imageUrl}
                    alt={l.name}
                    width={72}
                    height={72}
                    className="rounded-lg object-cover w-[72px] h-[72px]"
                  />
                ) : (
                  <div className="w-[72px] h-[72px] rounded-lg bg-gray-100" />
                )}

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-gray-800 line-clamp-1">
                      {l.name}
                    </h3>
                    <button
                      onClick={() => removeItem(l.id)}
                      className="text-xs text-gray-400 hover:text-red-500"
                      title="Remove"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    Qty: <span className="font-medium text-gray-700">{l.quantity}</span>
                    <span className="mx-2">·</span>
                    Unit: ${l.price.toFixed(2)}
                    <span className="mx-2">·</span>
                    Line: ${(l.price * l.quantity).toFixed(2)}
                  </div>

                  {/* (Optional) Quick add one more */}
                  <div className="mt-2">
                    <button
                      onClick={() =>
                        addItem(
                          { id: l.id, name: l.name, price: l.price, imageUrl: l.imageUrl } as any,
                          1
                        )
                      }
                      className="rounded-full border border-gray-300 px-3 py-1 text-xs hover:bg-gray-50"
                      title="Add one more"
                    >
                      + Add one more
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total</span>
            <span className="text-xl font-bold text-blue-600">${total.toFixed(2)}</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={clearCart}
              className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
              disabled={lines.length === 0}
            >
              Clear
            </button>
            <button
              className="flex-1 rounded-full bg-blue-600 px-4 py-2 text-white font-medium shadow hover:bg-blue-700 transition disabled:opacity-60"
              disabled={lines.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
