// app/feature/product/ProductItem.jsx
"use client";
import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className="rounded-lg border border-neutral-700 p-4">
      <div className="font-medium">{product.name}</div>
      <div className="opacity-80">${product.price}</div>
    </div>
  );
}
