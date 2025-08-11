import React from "react";
import { CategoryItem } from "./categoryItem";
export default function CategoryGrid({ children }) {
  return <div className="flex flex-wrap gap-2 justify-center">{children}</div>;
}
