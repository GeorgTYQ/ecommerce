import React from "react";
import { UilAngleDown } from "@iconscout/react-unicons";
import Link from "next/link";
const Herosection = () => {
  return (
    <div className="min-h-[calc(100vh-theme(space.16))] relative isolate ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      ></div>
      <div className="mx-auto max-w-2xl py-12 sm:py-24 ">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our online store.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span aria-hidden="true" className="absolute inset-0"></span>Read
              more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            WELCOME TO LAVOSH BAKERY
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Crafted by Hand, Baked from the Heart
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6"></div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-purple-400 font-semibold flex items-center gap-2 select-none">
          Scroll
          <UilAngleDown size={48} />
        </span>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      ></div>
    </div>
  );
};
export default Herosection;
