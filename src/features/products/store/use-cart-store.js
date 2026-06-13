import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],

  addItem: (product) => {
    const existingItem = get().items.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        items: get().items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      });
      return;
    }

    set({
      items: [...get().items, { ...product, quantity: 1 }],
    });
  },

  removeItem: (productId) =>
    set({
      items: get()
        .items.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    }),

  clearItem: (productId) =>
    set({
      items: get().items.filter((item) => item.id !== productId),
    }),
}));
