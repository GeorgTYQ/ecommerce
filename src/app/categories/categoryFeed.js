"use client";
import React, { useEffect } from "react";
import CategoryWrapper from "./categoryWrapper";
import CategoryGrid from "./categoryGrid";
import CategoryItem from "./categoryItem";
import { useCategory } from "@/app/hooks/useCategory";
import { useActiveCategory } from "@/app/store/useActiveCategory";

export const CategoryFeed = () => {
  const { categories, loading, error } = useCategory();
  const activeCategoryId = useActiveCategory((s) => s.activeCategoryId);
  const setActiveCategoryId = useActiveCategory((s) => s.setActiveCategoryId);

  const hasCategories = Array.isArray(categories) && categories.length > 0;

  // 在前面插入一个虚拟的 “ALL” 分类，id 用 null 或特殊值
  const allCategory = { id: null, name: "ALL" };
  const displayCategories = [allCategory, ...(categories || [])];

  useEffect(() => {
    if (hasCategories && activeCategoryId == null) {
      // 默认选中 ALL
      setActiveCategoryId(null);
    }
  }, [hasCategories, categories, activeCategoryId, setActiveCategoryId]);

  if (!hasCategories) return null;

  const effectiveActiveId = activeCategoryId;

  return (
    <CategoryWrapper>
      <CategoryGrid>
        {displayCategories.map((cat) => (
          <CategoryItem
            key={cat.id ?? "all"} // null 不能当 key，用字符串
            category={cat}
            active={cat.id === effectiveActiveId}
            onClick={() => setActiveCategoryId(cat.id)}
          />
        ))}
      </CategoryGrid>
    </CategoryWrapper>
  );
};

export default CategoryFeed;
