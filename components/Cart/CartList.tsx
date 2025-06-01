"use client";
import { Loader2, LoaderCircle, Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import CartListCard from "../Cards/CartListCard";
import { useFormat } from "@/hooks/useFormat";

interface CartListProps {
  cartData: {
    item_name: string;
    item_id: number;
    item_price: number;
    item_quanity: number;
    variant_name: string;
  }[];
}

const CartList: React.FC<CartListProps> = ({ cartData }) => {
  const { formatAmount } = useFormat();
  return (
    <div className="flex flex-col space-y-4 justify-between h-full w-full">
      {/* Cart Header */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-templateText">Your Cart</h2>
      </div>

      <hr />

      {/* Cart Items */}
      <div className="h-full relative overflow-y-auto w-full">
        <div className="space-y-4">
          {cartData?.map((item, index: number) => (
            <React.Fragment key={index}>
              <CartListCard item={item as any} />
            </React.Fragment>
          ))}
        </div>
        {/* {loading && (
          <div className="absolute bg-white/40 inset-0 flex items-center justify-center">
            <Loader2 className="animate-spin" />
          </div>
        )} */}
      </div>

      <hr />

      {/* Cart Footer */}
      <div className=" w-full flex flex-col space-y-4 items-center justify-between">
        {/* Subtotal */}
        <div className="flex items-center w-full justify-between">
          <h2 className="text-templateText">SUBTOTAL</h2>
          <h2 className="text-templateText text-lg font-normal">
            {formatAmount(100, "usd")}
          </h2>
        </div>

        {/* Additional Info */}
        <p className="text-xs text-center text-gray-500">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>

        {/* Checkout Button */}
        <button
          //   onClick={handleCheckout}
          className="bg-templateBrown flex items-center justify-center gap-1 hover:opacity-90 tracking-wider text-white w-full py-2.5 rounded-full"
        >
          {/* {loading && (
            <LoaderCircle size={20} className="animate-spin" strokeWidth={1} />
          )} */}
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartList;
