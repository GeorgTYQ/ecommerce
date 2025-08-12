"use client";
import React, { useState } from "react";
import { useCart } from "@/app/store/store";
import CartGrid from "./CartGrid";
import CartWrapper from "./CartWrapper";
import OrderSummary from "./OrderSummary";
export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const [voucherCode, setVoucherCode] = useState("");

  function originalPrice() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl space-y-6">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Your cart is empty.
              </p>
            ) : (
              <CartGrid cart={cart} removeFromCart={removeFromCart} />
            )}
          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <OrderSummary cartTotal={originalPrice()} />
          </div>
        </div>
      </div>
    </section>
  );
}
