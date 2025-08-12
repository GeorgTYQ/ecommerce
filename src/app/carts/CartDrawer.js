"use client";
import React, { useState } from "react";
import { useCart, useMenuStore } from "@/app/store/store";
import { UilTimes } from "@iconscout/react-unicons";
import LoadingButton from "@/app/componentsKit/Button";
import Link from "next/link";
export default function CartDrawer({ open, onClose }) {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-amber-50 shadow-xl transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* 标题和关闭按钮 */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2
            id="drawer-title"
            className="text-2xl font-extrabold text-amber-900"
          >
            Shopping cart
          </h2>
          <button
            onClick={onClose}
            className="text-amber-500 hover:text-amber-600"
            aria-label="Close panel"
          >
            <UilTimes />
          </button>
        </div>

        {/* 商品列表 */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <p className="text-center text-amber-500">Your cart is empty.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {cart.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md border border-amber-200">
                    <img
                      src={item.image || "/placeholder.png"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-base text-amber-900">
                        <h3>{item.name}</h3>
                        <p className="ml-4">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-amber-600">
                        Qty {item.quantity}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-amber-600">{item.color || ""}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="font-base text-gray-600 hover:text-gray-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 结算栏 */}
        <div className="border-t border-gray-200 px-6 py-6">
          <div className="flex justify-between text-base font-extrabold text-amber-900">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-amber-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link href="/carts">
              <LoadingButton
                onClick={onClose}
                className="w-full px-6 py-3 text-base text-white hover:bg-amber-700"
              >
                Checkout
              </LoadingButton>
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <button
              onClick={onClose}
              className="font-medium text-amber-600 hover:text-amber-500"
            >
              Continue Shopping <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
