// app/feature/product/ProductItem.jsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LoadingButton from "@/app/componentsKit/Button";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { useCart } from "@/app/store/store";
export default function ProductItem({ product }) {

  const addToCart = useCart((state) => state.addToCart);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart(product);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="group relative">
      <Image
        src="/image.png"
        alt={product.name}
        width={320} // Example width in pixels
        height={320} // Example height in pixels, to keep aspect ratio square
        className="rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:h-80 lg:aspect-auto w-full"
      />

      <div className="mt-4 space-y-2">
        {/* 第一行：名字 + 价格 */}
        <div className="flex justify-between items-center">
          <h3 className="text-amber-500 font-extrabold underline-after">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {product.name}
          </h3>
          <span className="text-base font-semibold text-amber-400/90">
            ${product.price}0
          </span>
        </div>

        {/* 第二行：描述 + 按钮 */}
        <div className="flex justify-between items-center">
          <p className="text-base text-amber-400/70 flex-1">
            {product.description}
          </p>
          <div className="w-1/4">
            <LoadingButton
              loading={loading}
              onClick={handleAddToCart}
              className="mt-3 w-full"
            >
              <UilShoppingCartAlt size={20} />
              Add
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
}
