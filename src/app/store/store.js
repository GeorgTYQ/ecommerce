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
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ cart: [] }),

      getCart: () => get().cart,

      getCartCount: () =>
        get().cart.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: "cart-storage", // localStorage key
      getStorage: () => sessionStorage, // 默认就是 localStorage
    }
  )
);
