import ProductCarouselWrapper from "@/app/feature/product/productwrapper";
import getCategory from "@/app/lib/getCategory";
import CategoryGridWrapper from "@/app/feature/category/categoryGridWrapper";
// 导出一个名为ProductSection的函数组件，接收一个名为products的参数
export const ProductSection = ({ products }) => {
  // 返回一个section元素，包含一个h2元素和一个CategoryGridWrapper组件和一个ProductCarouselWrapper组件
  return (
    <section className="py-1 min-h-screen text-center bg-cover bg-center bg-no-repeat bg-[url('/producBackground.jpg')]">
      <h2 className="text-3xl font-bold mb-8  text-amber-600 underline-after">
        Our Products
      </h2>

      <CategoryGridWrapper />
      <ProductCarouselWrapper />
    </section>
  );
};

export default ProductSection;
