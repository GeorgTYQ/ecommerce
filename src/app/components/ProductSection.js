import ProductCarouselWrapper from "@/app/feature/productwrapper";
import getCategory from "@/app/lib/getCategory";
import CategoryGridWrapper from "@/app/feature/category/categoryGridWrapper";
export const ProductSection = ({ products }) => {
  return (
    <section id="product" className="py-1">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
      <CategoryGridWrapper />
      <ProductCarouselWrapper />
      {/* 传入产品数据到客户端组件，然后在客户端组件生产，才能有交互作用（ 自动不放） */}
      {/* <ProductCarouselWrapper products={products} /> */}
    </section>
  );
};

export default ProductSection;
