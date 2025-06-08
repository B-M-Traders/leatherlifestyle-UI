"use client";
import useCartStore from "@/store/useCartStore";
import React from "react";
import EmptyCart from "./EmptyCart";
import CartListCard from "../Cards/CartListCard";

const CartPageList = () => {
  const { cartItems } = useCartStore();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-templateBrown">Your Cart</h1>
      <hr />
      <div>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <CartListCard item={item as any} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPageList;
