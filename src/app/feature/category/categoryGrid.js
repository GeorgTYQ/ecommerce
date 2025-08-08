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

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category, index) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={index}
            type="button" // 防止默认提交行为
            onClick={() => setActiveCategory(category.id)}
            className={`inline-flex cursor-pointer items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border ${
              isActive
                ? "bg-gray-800 text-white border-gray-800 dark:bg-white dark:text-gray-900"
                : "border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-white"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
