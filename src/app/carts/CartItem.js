import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { UilMinus } from "@iconscout/react-unicons";
export default function CartItem({ item, removeFromCart }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
    >
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link href="#" className="shrink-0 md:order-1">
          <Image
            width={20}
            height={20}
            className="h-20 w-20 dark:hidden"
            src={item.image || "/image.png"}
            alt={item.name}
          />
          <Image
            width={20}
            height={20}
            className="hidden h-20 w-20 dark:block"
            src={item.imageDark || "/image.png"}
            alt={item.name}
          />
        </Link>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <UilMinus size={12} />
            </button>
            <input
              type="text"
              readOnly
              value={item.quantity}
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
            />
            {/* 这里可以加增减按钮 */}
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link
            href="#"
            className="text-base font-medium text-gray-900 hover:underline dark:text-white"
          >
            {item.name}
          </Link>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
            >
              Add to Favorites
            </button>

            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
