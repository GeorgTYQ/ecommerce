"use client";
import React, { useState, useEffect } from "react";
import { UilTimes } from "@iconscout/react-unicons";

function useDebouncedValue(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search products...",
  defaultValue = "",
}) {
  const [term, setTerm] = useState(defaultValue);
  const debouncedTerm = useDebouncedValue(term, 500);

  useEffect(() => {
    onSearch?.(debouncedTerm);
  }, [debouncedTerm, onSearch]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="text-amber-600 border-[3px] border-amber-600 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-600 w-full"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />

      {term && (
        <button
          type="button"
          onClick={() => setTerm("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-600 hover:text-amber-800"
        >
          <UilTimes size={20} />
        </button>
      )}
    </div>
  );
}
