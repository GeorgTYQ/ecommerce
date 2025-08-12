// app/xxx/Product.jsx  或你的原文件路径
"use client";

import React, { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { useActiveCategory } from "@/app/store/store";

// 懒加载子组件，并开启 suspense
const CategoryFeed = dynamic(() => import("@/app/categories/categoryFeed"), {
  suspense: true,
});
const SearchBar = dynamic(() => import("./searchBar"), {
  suspense: true,
});
const ProductFeed = dynamic(() => import("./productFeed"), {
  suspense: true,
});

// 统一的骨架 UI（你可以按需美化）
function ProductSkeleton() {
  return (
    <div className="min-h-[calc(100vh-theme(space.16))] bg-cover bg-center bg-no-repeat bg-[url('/producBackground.jpg')]"></div>
  );
}

// 实际内容（不再套内部 Suspense）
function ProductContent() {
  const [keyword, setKeyword] = useState("");
  const activeCategoryId = useActiveCategory((s) => s.activeCategoryId);

  return (
    <div className="min-h-[calc(100vh-theme(space.16))] bg-cover bg-center bg-no-repeat bg-[url('/producBackground.jpg')]">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        {/* CategoryFeed - 左侧 2/3 */}
        <div className="md:basis-2/3">
          <CategoryFeed />
        </div>

        {/* SearchBar - 右侧 1/3 */}
        <div className="md:basis-1/3">
          <SearchBar onSearch={setKeyword} placeholder="Search by name..." />
        </div>
      </div>

      <ProductFeed
        q={keyword || undefined}
        categoryId={activeCategoryId}
        take={12}
        order="desc"
      />
    </div>
  );
}

export default function Product() {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductContent />
    </Suspense>
  );
}
