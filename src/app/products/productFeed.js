// app/components/ProductFeed.jsx
"use client";
import React from "react";
import { useProducts } from "@/app/hooks/useProducts";
import ProductsWrapper from "./productWrapper";
import ProductsGrid from "./productGrid";
import ProductItem from "./productItem";
import SearchBar from "@/app/products/searchBar";
export default function ProductFeed({
  categoryId,
  q,
  take = 12,
  order = "desc",
}) {
  const { items, loading, error } = useProducts({ categoryId, q, take, order });

  return (
    <ProductsWrapper>
      {loading && <div className="text-white">Loading…</div>}
      {error && (
        <div className="text-red-400">
          Error: {String(error.message || error)}
        </div>
      )}
      {!loading && !items.length && (
        <div className="text-white m-10">No Product</div>
      )}

      {!!items.length && (
        <ProductsGrid>
          {items.map((p) => (
            <ProductItem key={p.id} product={p} />
          ))}
        </ProductsGrid>
      )}
    </ProductsWrapper>
  );
}
