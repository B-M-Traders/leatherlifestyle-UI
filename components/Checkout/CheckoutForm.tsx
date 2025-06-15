import React from "react";
import CustomDivider from "../ui/custom-divider";
import AccountDetails from "./AccountDetails";
import DeliveryAndPayment from "./DeliveryAndPayment";

const CheckoutForm = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-xl font-medium">Express Checkout</h2>
        <div className="flex items-center gap-2">
          <button className="bg-green-500 hover:bg-green-400 flex items-center justify-center h-12 text-[#242424] w-full font-semibold tracking-wide rounded-md">
            Pay with link
          </button>
          <button className="flex items-center justify-center h-12 bg-yellow-400 hover:bg-yellow-300 text-[#242424] w-full pt-2 rounded-md">
            <img
              className="h-6 w-auto"
              src="https://m.media-amazon.com/images/G/01/AmazonPay/Maxo/amazonpay-logo-rgb_drk_1.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <CustomDivider text={"or"} />
      <AccountDetails />
      <CustomDivider />
      <DeliveryAndPayment />
    </div>
  );
};

export default CheckoutForm;
