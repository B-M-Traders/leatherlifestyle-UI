import { Minus, Plus } from "lucide-react";
import React from "react";
import FallbackImage from "./FallbackImage";
import { useFormat } from "@/hooks/useFormat";

interface Props {
  item: {
    item_name: string;
    item_quantity: number;
    item_price: number;
    item_image: string;
  };
}

const CartListCard: React.FC<Props> = ({ item }) => {
  const { formatAmount } = useFormat();
  return (
    <div className="flex gap-2  group">
      {/* Product Image */}
      <div className="h-[70px] w-[60px] overflow-hidden">
        <FallbackImage
          src={item.item_image}
          alt={"product image"}
          sizes="70px"
          className="h-full w-full object-cover"
          height={65}
          width={55}
        />
      </div>

      {/* Product Details */}
      <div className="w-full my-auto space-y-2.5">
        <h2 className="tracking-wide font-light text-[14px] leading-tight text-templateBrown">
          {item.item_name}
        </h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center border w-auto p-1 bg-white">
            <div className="flex items-center cursor-pointer justify-center hover:text-templatePrimary">
              <Minus size={14} strokeWidth={1.5} />
            </div>

            {/* Quantity Display */}
            <span className="w-10 text-center text-sm font-extralight h-full text-templateText">
              {item.item_quantity}
            </span>

            {/* Increment Button */}
            <div className="flex cursor-pointer items-center justify-center">
              <Plus size={14} strokeWidth={1.5} />
            </div>
          </div>

          {/* Product Prices */}
          <div className="flex items-center gap-2">
            {/* <h2 className="text-gray-500 line-through text-xs">
              {formatAmount(item.item_price, "usd")}
            </h2> */}
            <h2 className="text-templateBrown text-sm">
              {formatAmount(item.item_price, "usd")}
            </h2>
          </div>
        </div>
      </div>

      {/* {updating && (
    <div className="flex items-center justify-center border-b absolute inset-0 bg-white/50 ">
      <Loader2 className="animate-spin" strokeWidth={1.5} />
    </div>
  )} */}
    </div>
  );
};

export default CartListCard;
