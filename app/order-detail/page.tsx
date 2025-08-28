import OrderDetail from "@/components/AccountComps/OrderDetail";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const OrderdetailPage: React.FC<Props> = async ({ searchParams }) => {
  const orderId = (await searchParams).id || null;
  if (!orderId) {
    redirect("/account/orders");
  }
  return (
    <div className="bg-[#F5F5F5]">
      <OrderDetail />;
    </div>
  );
};

export default OrderdetailPage;
