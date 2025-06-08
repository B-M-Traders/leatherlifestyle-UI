"use client";
import useCartStore from "@/store/useCartStore";
import React from "react";
import EmptyCart from "./EmptyCart";
import CartListCard from "../Cards/CartListCard";
import CartPageListCard from "../Cards/CartPageListCard";

const CartPageList = () => {
  const { cartItems } = useCartStore();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium text-templateBrown">Your Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <>
                <CartPageListCard item={item as any} />
                <hr />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPageList;
