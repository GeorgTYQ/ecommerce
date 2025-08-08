"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";
import Link from "next/link";
const Herosection = () => {
  const parentRef = useRef(null);
  const [arrowVisible, setArrowVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      if (!parentRef.current) return;

      const parent = parentRef.current;
      const parentRect = parent.getBoundingClientRect();
      const topAbs = Math.abs(parentRect.top);

      const windowHeight = window.innerHeight;

      if (topAbs > windowHeight / 2) {
        setArrowVisible(false);
      } else {
        setArrowVisible(true);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // 初始化执行一次

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="home"
      ref={parentRef}
      className="min-h-[calc(100vh-theme(space.16))] relative isolate bg-cover bg-center bg-no-repeat bg-[url('/background.jpg')] flex items-center justify-center"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      ></div>
      <div className="mx-auto max-w-2xl py-12 sm:py-24 ">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-amber-200 ring-1 ring-amber-200/60 hover:ring-amber-200">
            Announcing our online store at Australia.
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-amber-600 sm:text-7xl">
            WELCOME TO LAVOSH BAKERY
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-amber-200 sm:text-xl/8">
            Crafted by Hand, Baked from the Heart
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
        </div>
      </div>
      {arrowVisible && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-amber-400 font-semibold flex items-center gap-2 select-none">
            Scroll
            <UilAngleDown size={48} />
          </span>
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      ></div>
    </div>
  );
};
export default Herosection;
