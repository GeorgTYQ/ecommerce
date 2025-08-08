"use client";
import { useEffect } from "react";
import { useCategoryStore } from "@/app/status/index";

export default function CategoryGrid({ categories }) {
  const activeCategory = useCategoryStore((state) => state.activeCategory);
  const setActiveCategory = useCategoryStore(
    (state) => state.setActiveCategory
  );

  // On mount, set default active category if none is set
  useEffect(() => {
    if (!activeCategory && categories.length > 0) {
      setActiveCategory(categories[0].id);
    }
  }, [activeCategory, categories, setActiveCategory]);
  useEffect(() => {}, [activeCategory]);

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category, index) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={index}
            type="button" // 防止默认提交行为
            onClick={() => setActiveCategory(category.id)}
            className={`inline-flex cursor-pointer items-center gap-x-1.5 py-1.5 px-3 rounded-full font-medium border-3 ${
              isActive
                ? "bg-amber-800/70 text-amber-100 border-amber-800 dark:bg-amber dark:text-amber-800 "
                : "border-amber-800/70 text-amber-700 dark:border-amber-200 dark:text-amber hover:bg-amber-800/50"
            }`}
          >
            <h3>{category.name}</h3>
          </button>
        );
      })}
    </div>
  );
}
