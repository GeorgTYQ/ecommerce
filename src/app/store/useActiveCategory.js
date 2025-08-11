// src/store/useActiveCategory.js
import { create } from "zustand";

export const useActiveCategory = create((set) => ({
  activeCategoryId: null,
  setActiveCategoryId: (id) => set({ activeCategoryId: id }),
  resetActiveCategory: () => set({ activeCategoryId: null }),
}));
