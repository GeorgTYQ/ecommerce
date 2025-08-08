import Image from "next/image";
import Header from "@/app/components/Header";
import Herosection from "@/app/components/Herosection";
import ProductSection from "@/app/components/ProductSection";
import getProducts from "@/app/lib/getProduct";
const Home = () => {
  return (
    <div>
      <Header />
      <Herosection />

      <ProductSection />
    </div>
  );
};
export default Home;
