import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

export const useCategoryStore = create((set) => ({
  activeCategory: null,
  setActiveCategory: (id) => set({ activeCategory: id }),
}));
