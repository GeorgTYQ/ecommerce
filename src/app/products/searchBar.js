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
        placeholder="Search..."
        className="input shadow-lg border focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none text-white"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="search"
      />
    </div>
  );
}
