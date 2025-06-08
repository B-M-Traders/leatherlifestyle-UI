import CartListCard from "@/components/Cards/CartListCard";
import CartPageList from "@/components/Cart/CartPageList";
import CartSummary from "@/components/Cart/CartSummary";
import React from "react";

const Cart = () => {
  return (
    <div className="templateContainer flex gap-10 w-full py-6 md:py-10 lg:py-14">
      <div className="lg:w-[65%] w-full">
        <CartPageList />
      </div>
      <div className="lg:w-[35%] w-full">
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
