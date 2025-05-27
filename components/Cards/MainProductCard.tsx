"use client";
import { StarIcon } from "@/custom_icons/icons";
import Image from "next/image";
import React from "react";
import FallbackImage from "./FallbackImage";
import { useFormatAmount } from "@/hooks/useFormatAmount ";

const MainProductCard = () => {
  const { formatAmount } = useFormatAmount();
  return (
    <div className="space-y-2">
      <div className="relative aspect-[4/5.5]">
        <FallbackImage
          src={"/product.jpg"}
          alt=""
          height={800}
          width={400}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute top-2 right-2 bg-white text-gray-700 px-2 py-1 text-[11px] font-light">
          Best Seller
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array(3)
              .fill(3)
              .map((_, index) => (
                <StarIcon key={index} />
              ))}
          </div>
          <span className="font-light text-[10px] lg:text-[12px] mt-1 lg:mt-0.5 text-templateBrown">
            (50)
          </span>
        </div>
        <h2 className="text-[14px] leading-snug lg:text-[15px] font-medium text-templateBrown">
          Azura Classic Leather Jacket
        </h2>
        <span className="block font-medium lg:text-lg">
          {formatAmount(150)}
        </span>
      </div>
    </div>
  );
};

export default MainProductCard;
