import React from "react";
import Link from "next/link";
import Image from "next/image";
export const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-amber-100 to-amber-50 ">
      <div className="max-w-6xl mx-auto px-6 pt-16 lg:pt-24 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Lavosh Bakery
          </h1>
          <p className="text-lg sm:text-xl mb-6 leading-relaxed">
            Freshly baked, naturally sourced, and full of heart. We handcraft
            lavosh, sourdough, pastries and more — baked daily for your table.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-block bg-amber-700 text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-amber-800 transition"
            >
              Browse Our Bakes
            </Link>
            <Link
              href="#visit"
              className="inline-block border border-amber-700 text-amber-700 px-5 py-3 rounded-lg font-semibold hover:bg-amber-100 transition"
            >
              Visit Us
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[320px] sm:w-[420px] lg:w-[520px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              width={520}
              height={420}
              src="/shop.jpg"
              alt="Lavosh Bakery storefront"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
