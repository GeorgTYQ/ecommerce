import React from "react";
import { UilTimes, UilBars, UilSignInAlt } from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-stone-800 sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1 text-amber-500 text-lg font-bold">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src="/favicon.svg"
              alt="Lavosh Bakery Logo"
              width={12}
              height={24}
              className="w-12 h-6" // Tailwind sizes in rem (w-12 = 3rem, ~48px)
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
        {/* large screen */}
        <el-popover-group className="hidden lg:flex lg:gap-x-12">
          <div className="relative flex gap-5">
            <Link href="/products">
              <button
                popoverTarget="desktop-menu-product"
                className="flex items-center gap-x-1 text-lg font-bold text-amber-500 "
              >
                Products
              </button>
            </Link>
            <Link href="/about">
              <button
                popoverTarget="desktop-menu-product"
                className="flex items-center gap-x-1 text-lg font-bold text-amber-500 "
              >
                About
              </button>
            </Link>
          </div>
        </el-popover-group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="inline-flex items-center text-lg font-bold text-amber-500 gap-1"
          >
            <UilSignInAlt />
          </Link>
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
                      <Link href="">
                        <button
                          type="button"
                          command="--toggle"
                          commandfor="products"
                          className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-amber-500 hover:text-amber-700"
                        >
                          Product
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            data-slot="icon"
                            aria-hidden="true"
                            className="size-5 flex-none in-aria-expanded:rotate-180"
                          >
                            <path
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            />
                          </svg>
                        </button>
                      </Link>
                      {/* <el-disclosure
                        id="products"
                        hidden
                        className="mt-2 block space-y-2"
                      >
                        <Link
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Analytics
                        </Link>
                        <Link
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Engagement
                        </Link>
                        <Link
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Security
                        </Link>
                        <Link
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Integrations
                        </Link>
                        <Link
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Automations
                        </Link>
                        <Link
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Watch demo
                        </Link>
                        <Link
                          href="#"
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          Contact sales
                        </Link>
                      </el-disclosure> */}
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
