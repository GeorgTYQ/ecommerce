// app/components/ProductsGrid.jsx
"use client";
import React from "react";

export default function ProductsGrid({ children }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {children}
    </div>
  );
}
