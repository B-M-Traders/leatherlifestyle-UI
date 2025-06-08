import CartListCard from "@/components/Cards/CartListCard";
import CartPageList from "@/components/Cart/CartPageList";
import CartSummary from "@/components/Cart/CartSummary";
import DiscountCode from "@/components/Cart/DiscountCode";
import React from "react";

const Cart = () => {
  return (
    <div className="templateContainer flex flex-col lg:flex-row gap-12 lg:gap-20 w-full py-6 md:py-10 lg:py-14">
      <div className="lg:w-[67%] w-full">
        <CartPageList />
      </div>
      <div className="lg:w-[33%] space-y-8 w-full">
        <CartSummary />
        <DiscountCode />
      </div>
    </div>
  );
};

export default Cart;
