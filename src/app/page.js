import Image from "next/image";
import Header from "@/app/components/Header";
import Herosection from "@/app/components/Herosection";
import ProductSection from "@/app/components/ProductSection";
import FooterSection from "@/app/components/FooterSection";
const Home = () => {
  return (
    <div>

      <Herosection />
      <ProductSection />

    </div>
  );
};
export default Home;
