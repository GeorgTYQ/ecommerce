// src/store/useActiveCategory.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useActiveCategory = create((set) => ({
  activeCategoryId: null,
  setActiveCategoryId: (id) => set({ activeCategoryId: id }),
  resetActiveCategory: () => set({ activeCategoryId: null }),
}));
export const useMenuStore = create((set) => ({
  selectedMenu: "home", // 默认
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((i) => i.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => {
          const updated = state.cart
            .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((i) => i.quantity > 0);
          return { cart: updated };
        }),

      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),

      clearCart: () => set({ cart: [] }),

      getCart: () => get().cart,

      getCartCount: () => get().cart.reduce((s, i) => s + i.quantity, 0),
    }),
    {
      name: "cart-storage",
      // 在 SSR 环境下要小心使用 window/sessionStorage
      getStorage: () =>
        typeof window !== "undefined" ? sessionStorage : undefined,
    }
  )
);
