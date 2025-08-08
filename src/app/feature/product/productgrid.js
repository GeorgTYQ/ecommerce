"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function ProductCarousel({ activeCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!activeCategory) return;

    setLoading(true);
    fetch(`/api/products?categoryId=${activeCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [activeCategory]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p>Loading products...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return <p>No products found for this category.</p>;
  }

  return (
    <div className="p-5">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            {/* <Image src={product.imageUrl} alt={product.name} /> */}
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
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 "
                    ></span>
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
          </div>
        ))}
      </div>
    </div>
  );
}
