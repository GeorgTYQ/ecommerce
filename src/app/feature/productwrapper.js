"use client";

import dynamic from "next/dynamic";
import { useCategoryStore } from "@/app/status/index";
import ProductCarousel from "./productgrid";

export default function ProductCarouselWrapper() {
  const activeCategory = useCategoryStore((state) => state.activeCategory);

  return <ProductCarousel activeCategory={activeCategory} />;
}
