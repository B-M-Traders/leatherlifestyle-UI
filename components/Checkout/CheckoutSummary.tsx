"use client";
import useCartStore from "@/store/useCartStore";
import Image from "next/image";
import React from "react";
import FallbackImage from "../Cards/FallbackImage";
import { useFormat } from "@/hooks/useFormat";
import SummaryCartCard from "./SummaryCartCard";
import { useCart } from "@/hooks/useCart";

const CheckoutSummary = () => {
  const { cartItems } = useCartStore();
  const { totalPrice } = useCart();
  const { formatAmount } = useFormat();
  return (
    <div className="border rounded-lg space-y-6 p-5">
      <div className="space-y-3">
        {cartItems.map((item, index) => (
          <React.Fragment key={index}>
            <SummaryCartCard item={item as any} />
          </React.Fragment>
        ))}
      </div>
      <hr />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm">Subtotal</p>
          <p className="text-gray-700 text-sm">{formatAmount(totalPrice)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">Shipping</p>
          <p className="text-gray-700 text-sm">{formatAmount(0)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">Taxes</p>
          <p className="text-gray-700 text-sm">{formatAmount(0)}</p>
        </div>
        <hr />
        <div className="flex items-center font-medium text-lg justify-between">
          <p>Total</p>
          <p>{formatAmount(totalPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
