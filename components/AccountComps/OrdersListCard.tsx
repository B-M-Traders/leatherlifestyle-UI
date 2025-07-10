import { useFormat } from "@/hooks/useFormat";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const OrdersListCard = () => {
  const { formatAmount } = useFormat();
  return (
    <div className="border hover:shadow-md cursor-pointer rounded-sm p-4 flex items-end justify-between">
      <div className="space-y-2">
        <Image
          src={"/men1.jpg"}
          alt=""
          height={50}
          width={50}
          className="h-12 object-center rounded-sm w-10 object-cover overflow-hidden"
        />
        <div>
          <h3 className="text-sm">Order Status</h3>
          <p className="text-xs text-gray-500 font-light">
            Placed at 10th May 2025
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="tracking-wide">{formatAmount(1500)}</p>
        <ChevronRight size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default OrdersListCard;
