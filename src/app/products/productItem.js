// app/feature/product/ProductItem.jsx
"use client";
import React from "react";
import Image from "next/image";
export default function ProductItem({ product }) {
  return (
    <div className="group relative">
      <Image
        src="/image.png"
        alt={product.name}
        width={320} // Example width in pixels
        height={320} // Example height in pixels, to keep aspect ratio square
        className="rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80 lg:aspect-auto w-full"
      />

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-amber-500 font-extrabold underline-after mb-3">
            <span aria-hidden="true" className="absolute inset-0 "></span>
            {product.name}
          </h3>
          <p className="mt-1 text-base text-amber-400/70">
            {product.description}
          </p>
        </div>
        <p className="text-base font-semibold text-amber-400/90">
          ${product.price}0
        </p>
      </div>
    </div>
  );
}
