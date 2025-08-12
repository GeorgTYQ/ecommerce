"use client";
import React from "react";
import CartItem from "@/app/carts/CartItem";
import { useCart } from "@/app/store/store";
const CartGrid = ({ cart, removeFromCart }) => {
  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </>
  );
};

export default CartGrid;
