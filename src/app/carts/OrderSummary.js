import React from "react";
import LoadingButton from "../componentsKit/Button";
import { UilArrowRight } from "@iconscout/react-unicons";
import Link from "next/link";
export default function OrderSummary({ cartTotal }) {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <p className="text-xl font-semibold text-gray-900 dark:text-white">
        Order summary
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Original price
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${cartTotal.toFixed(2)}
            </dd>
          </dl>
        </div>
        <LoadingButton className="flex w-full items-center justify-center px-5 py-2.5 text-sm font-medium ">
          Proceed to Checkout
        </LoadingButton>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {" "}
            or{" "}
          </span>
          <Link href="/products">
            <button className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-500">
              Continue Shopping
              <UilArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
