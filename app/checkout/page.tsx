import CheckoutForm from "@/components/Checkout/CheckoutForm";
import CheckoutSummary from "@/components/Checkout/CheckoutSummary";
import React from "react";

const Checkout = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto px-4 gap-14 py-8 md:py-10 lg:py-14">
      <div className="w-full lg:w-[60%] ">
        <CheckoutForm />
      </div>
      <div className="w-full lg:w-[40%]">
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default Checkout;
