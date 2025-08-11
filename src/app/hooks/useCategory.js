// app/hooks/useCategory.js
"use client";

import { useState, useEffect } from "react";

/**
 * 获取分类列表 Hook
 * @returns {Object} { categories, loading, error }
 */
export function useCategory() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/category", {
          signal: controller.signal,
          cache: "no-store", 
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        if (!ignore) {
          setCategories(data.items || []);
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
          setCategories([]);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
      controller.abort();
    };
  }, []);

  return { categories, loading, error };
}
