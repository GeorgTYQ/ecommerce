import React from "react";

const CartWrapper = ({ children }) => {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      {children}
    </section>
  );
};

export default CartWrapper;
