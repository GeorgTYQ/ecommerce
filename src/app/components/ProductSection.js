"use client";
import ProductFeed from "@/app/products/productFeed";
import Link from "next/link";
import { useMenuStore } from "@/app/store/store";
// 导出一个名为ProductSection的函数组件，接收一个名为products的参数
export const ProductSection = ({ products }) => {
  const { selectedMenu, setSelectedMenu } = useMenuStore();
  return (
    <section className="py-1  text-center bg-cover bg-center bg-no-repeat bg-[url('/producBackground.jpg')]">
      <h2 className="text-3xl font-bold mb-8  text-amber-600 underline-after">
        Our Products
      </h2>
      <ProductFeed take={6} />
      <Link href="/products" onClick={() => setSelectedMenu("product")}>
        {" "}
        <div className="rounded text-white bg-amber-600 py-2 px-4 mt-4 cursor-pointer hover:bg-amber-700 w-[60%] mx-auto flex items-center justify-center text-center mb-5">
          View More Products
        </div>
      </Link>
    </section>
  );
};

export default ProductSection;
