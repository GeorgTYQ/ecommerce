"use client";
import React, { useEffect, useState } from "react";
import {
  UilTimes,
  UilBars,
  UilSignInAlt,
  UilUnlock,
} from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";
import { useMenuStore, useCart } from "@/app/store/store";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import CartDrawer from "../carts/CartDrawer";
const Header = () => {
  const { selectedMenu, setSelectedMenu } = useMenuStore();
  const cart = useCart((state) => state.cart); // 直接订阅 Zustand 的 cart
  const cartCount = useCart((state) => state.getCartCount());
  useEffect(() => {
    console.log("购物车更新：", cartCount);
    // 这里可以放刷新 UI、存 localStorage、统计数量等逻辑
  }, [cart]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [open, setOpen] = useState(false);

  const getLinkClass = (menu) =>
    `relative pb-1 font-semibold text-amber-600 cursor-pointer
    after:absolute after:left-0 after:bottom-0 after:h-[3px] after:rounded-full
    after:bg-amber-600 after:transition-[width] after:duration-300
    after:ease-in-out
    after:w-0
    hover:after:w-full ${selectedMenu === menu ? "after:w-full" : ""}`;

  return (
    <header className="bg-stone-800 sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1 text-amber-500 text-lg font-bold">
          <Link
            href="/"
            onClick={() => setSelectedMenu("home")}
            className="-m-1.5 p-1.5 flex items-center gap-2"
          >
            <Image
              src="/favicon.svg"
              alt="Lavosh Bakery Logo"
              width={12}
              height={24}
              className="w-12 h-6"
            />
            <span>Lavosh Bakery</span>
          </Link>
        </div>

        {/* small screen icon */}
        <div className="flex lg:hidden">
          <button
            type="button"
            command="show-modal"
            commandfor="mobile-menu"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-amber-500 hover:text-amber-700"
          >
            <span className="sr-only">Open main menu</span>
            <UilBars />
          </button>
        </div>

        {/* large screen icon omitted for brevity */}
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative flex gap-5">
            <Link href="/">
              <button
                onClick={() => setSelectedMenu("home")}
                className={getLinkClass("home")}
              >
                Home
              </button>
            </Link>
            <Link href="/products">
              <button
                onClick={() => setSelectedMenu("product")}
                className={getLinkClass("product")}
              >
                Products
              </button>
            </Link>
            <Link href="/about">
              <button
                onClick={() => setSelectedMenu("about")}
                className={getLinkClass("about")}
              >
                About
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="inline-flex items-center text-lg font-bold text-amber-500 gap-1"
          >
            <UilSignInAlt />
          </Link>
          <span className="relative inline-flex items-center text-lg font-bold text-amber-500 gap-1">
            <button onClick={() => setOpen(true)}>
              <UilShoppingCartAlt />
              {isClient && cartCount > 0 && (
                <span className="absolute -bottom-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <CartDrawer open={open} onClose={() => setOpen(false)} />
          </span>
        </div>
      </nav>
      {/* small screen */}
      <el-dialog>
        <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
          <div tabIndex="0" className="fixed inset-0 focus:outline-none">
            <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-900/80 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Lavosh Bakery</span>
                  <Image
                    src="/favicon.svg"
                    alt="Lavosh Bakery Logo"
                    width={32} // set width in pixels
                    height={32} // set height in pixels
                    className="w-auto"
                  />
                </Link>
                <button
                  type="button"
                  command="close"
                  commandfor="mobile-menu"
                  className="-m-2.5 rounded-md p-2.5 text-amber-500 hover:text-amber-700"
                >
                  <UilTimes size={32} />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <Link href="/">
                        <button
                          onClick={() => setSelectedMenu("home")}
                          className={getLinkClass("home")}
                        >
                          Home
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <Link href="/products">
                        <button
                          onClick={() => setSelectedMenu("product")}
                          className={getLinkClass("product")}
                        >
                          Product
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2 py-6">
                    <div className="-mx-3">
                      <Link href="/about">
                        <button
                          onClick={() => setSelectedMenu("about")}
                          className={getLinkClass("about")}
                        >
                          About
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="py-6">
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-amber-500 hover:text-amber-700"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </header>
  );
};

export default Header;
