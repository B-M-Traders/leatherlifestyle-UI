import { Package } from "lucide-react";
import React from "react";
import OrdersListCard from "./OrdersListCard";

const Orders = () => {
  const orders: any[] = [{}];
  return (
    <div className="space-y-5 lg:space-y-10">
      <div className="space-y-0.5">
        <h2 className="text-lg text-templateBrown lg:text-xl uppercase tracking-wide font-medium flex items-center gap-2">
          <Package size={20} /> Orders
        </h2>
        <p className="text-xs font-light">Manage your placed orders</p>
      </div>
      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((item, index) => (
            <React.Fragment key={index}>
              <OrdersListCard />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 items-center justify-center py-10">
          <Package size={100} strokeWidth={0.3} color="#4f3424" />
          <p>No orders</p>
          <p className="text-sm font-light">Please place order first</p>
          <button className="px-6 py-3 border border-templateBrown mt-2 text-sm">
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;
