import { create } from "zustand";


export const useCategoryStore = create((set) => ({
  activeCategory: null,
  setActiveCategory: (id) => set({ activeCategory: id }),
}));
