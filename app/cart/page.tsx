import CartListCard from "@/components/Cards/CartListCard";
import CartPageList from "@/components/Cart/CartPageList";
import CartSummary from "@/components/Cart/CartSummary";
import DiscountCode from "@/components/Cart/DiscountCode";
import React from "react";

const Cart = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="templateContainer flex flex-col lg:flex-row gap-10 lg:gap-14 w-full py-10 lg:py-14">
        <div className="lg:w-[70%] w-full">
          <CartPageList />
        </div>
        <div className="lg:w-[30%]">
          <div className=" p-5 lg:p-8 bg-white space-y-8  rounded-2xl">
            <DiscountCode />
            <hr />
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
