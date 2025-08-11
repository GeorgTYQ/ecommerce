// app/hooks/useProducts.js
"use client";
import { useEffect, useState } from "react";

export function useProducts({ categoryId, q, take = 12, order = "desc" }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    async function load() {
      const params = new URLSearchParams();

      if (q?.trim()) params.set("q", q.trim());
      if (categoryId != null) {
        params.set("categoryId", String(categoryId)); // 有 ID 就加
      }
      params.set("take", String(take));
      params.set("order", order);
      params.set("_t", String(Date.now())); // 防缓存

      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/products?${params.toString()}`, {
          signal: controller.signal,
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!ignore) setItems(data.items || []);
      } catch (e) {
        if (!ignore) setError(e);
        if (!ignore) setItems([]);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
      controller.abort();
    };
  }, [categoryId, q, take, order]);

  return { items, loading, error };
}
