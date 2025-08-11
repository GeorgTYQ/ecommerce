"use client";
import React, { useState } from "react";
import SearchBar from "@/app/components/SearchBar";
import SearchProduct from "@/app/components/SearchProduct"; // 你前面的产品列表组件

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="space-y-4">
      <SearchBar onSearch={setKeyword} placeholder="Search by name..." />
      <SearchProduct query={keyword} categoryId={2} take={12} order="desc" />
    </div>
  );
}
