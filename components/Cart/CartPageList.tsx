"use client";
import useCartStore from "@/store/useCartStore";
import React from "react";
import EmptyCart from "./EmptyCart";
import CartListCard from "../Cards/CartListCard";
import CartPageListCard from "../Cards/CartPageListCard";
import { useCart } from "@/hooks/useCart";

const CartPageList = () => {
  const { cartItems } = useCartStore();
  const { totalItems } = useCart();
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-medium text-templateBrown">
          Shopping Bag
        </h1>
        <p className="text-sm font-light tracking-wide">
          <strong className="font-semibold">{totalItems} items</strong> in your
          bag
        </p>
      </div>
      <div>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="space-y-6 bg-white p-5 lg:p-8 rounded-2xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
              <div className="">
                <p className="text-sm font-medium">Product</p>
              </div>
              <div className=" hidden lg:grid grid-cols-3">
                <p className="text-sm font-medium text-left">Price</p>
                <p className="text-sm font-medium text-center">Quantity</p>
                <p className="text-sm font-medium text-right">Total Price</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gray-300" />
            {cartItems.map((item, index) => (
              <React.Fragment key={index}>
                <CartPageListCard item={item as any} />
                <hr className="last:hidden" />
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPageList;
