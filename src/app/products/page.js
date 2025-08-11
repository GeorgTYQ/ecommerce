"use client";
import React, { useState, Suspense } from "react";
import CategoryFeed from "@/app/categories/categoryFeed";
import SearchBar from "./searchBar";
import ProductFeed from "./productFeed";
import { useActiveCategory } from "@/app/store/useActiveCategory";

const Product = () => {
  const [keyword, setKeyword] = useState("");
  const activeCategoryId = useActiveCategory((s) => s.activeCategoryId);

  return (
    <div>
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

      <Suspense
        fallback={
          <div style={{ textAlign: "center" }}>Loading products...</div>
        }
      >
        <ProductFeed
          q={keyword || undefined}
          categoryId={activeCategoryId}
          take={12}
          order="desc"
        />
      </Suspense>
    </div>
  );
};

export default Product;
