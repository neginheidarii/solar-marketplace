"use client";

import { create } from "zustand";
import type { Product, CartLine, CartState } from "@/types";

export const useCart = create<CartState>((set, get) => ({
  items: {},

  addItem: (p, qty = 1) =>
    set((state) => {
      const existing = state.items[p.id];
      const nextQty = (existing?.quantity ?? 0) + qty;

      return {
        items: {
          ...state.items,
          [p.id]: {
            id: p.id,
            name: p.name,
            price: p.price,
            imageUrl: p.imageUrl,
            quantity: nextQty,
          },
        },
      };
    }),

  removeItem: (id: Product["id"]) =>
    set((state) => {
      const key = String(id);
      const { [key]: _removed, ...rest } = state.items;
      return { items: rest };
    }),

  clearCart: () => set({ items: {} }),

  getTotal: () => {
    const items = get().items;
    return Object.values(items).reduce(
      (sum, l) => sum + l.price * l.quantity,
      0
    );
  },
}));
