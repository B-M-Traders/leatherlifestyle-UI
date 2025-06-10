import React from "react";
import FallbackImage from "../Cards/FallbackImage";
import { useFormat } from "@/hooks/useFormat";

interface Props {
  item: {
    item_image: string;
    item_name: string;
    variant_name: string;
    item_price: number;
  };
}

const SummaryCartCard: React.FC<Props> = ({ item }) => {
  const { formatAmount } = useFormat();
  return (
    <div className="flex gap-3 group">
      <div className="h-[85px] w-[80px] overflow-hidden">
        <FallbackImage
          src={item.item_image}
          alt={"product image"}
          sizes="70px"
          className="h-full w-full object-cover object-center"
          height={65}
          width={55}
        />
      </div>
      <div className="w-full my-auto space-y-2">
        <h2 className="font-light text-[13px] leading-tight text-templateBrown">
          {item.item_name}
        </h2>
        <p className="font-light text-[12px] leading-tight text-gray-500">
          {item.variant_name}
        </p>
        <h2 className="text-templateBrown text-sm">
          {formatAmount(item.item_price)}
        </h2>
      </div>
    </div>
  );
};

export default SummaryCartCard;
