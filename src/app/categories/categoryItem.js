"use client";
import React from "react";

export default function CategoryItem({ category, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`inline-flex cursor-pointer items-center gap-x-1.5 py-1.5 px-3 rounded-full font-medium border-3 ${
        active
          ? "bg-amber-800/70 text-amber-100 border-amber-800 dark:bg-amber dark:text-amber-800 "
          : "border-amber-800/70 text-amber-700 dark:border-amber-200 dark:text-amber hover:bg-amber-800/50"
      }`}
    >
      <div className="font-medium">{category.name}</div>
    </div>
  );
}
