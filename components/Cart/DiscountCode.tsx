"use client";
import React from "react";
import CustomInput from "../ui/custom-input";

const DiscountCode = () => {
  const [coupon, setCoupon] = React.useState("");

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value);
  };

  const handleCouponSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Coupon submitted:", coupon);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-medium text-templateBrown">Apply Coupon</h2>
        <p className="text-xs text-gray-500">
          Enter the coupon code to get a discount on your order.
        </p>
      </div>
      <form
        onSubmit={handleCouponSubmit}
        className="flex items-center gap-2 w-full"
      >
        <CustomInput
          onChange={handleCouponChange}
          value={coupon}
          name="coupon"
          placeholder="Enter Coupon"
        />
        <button
          type="submit"
          className="bg-templateBrown text-sm flex items-center justify-center font-light gap-2 hover:opacity-90 tracking-wider text-white px-6 py-3 rounded-md"
        >
          APPLY
        </button>
      </form>
    </div>
  );
};

export default DiscountCode;
