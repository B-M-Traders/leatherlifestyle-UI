"use client";
import { StarIcon } from "@/custom_icons/icons";
import React, { useState } from "react";
import FallbackImage from "./FallbackImage";
import { useFormatAmount } from "@/hooks/useFormatAmount ";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const MainProductCard = () => {
  const { formatAmount } = useFormatAmount();
  const images = ["/product.jpg", "/product2.jpg"];
  const [hovered, setHovered] = useState(false);

  return (
    <div className=" space-y-2">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="overflow-hidden relative aspect-[4/5.5]"
      >
        <Link href={"/product/product_slug"} className="block h-full w-full">
          {/* Main image */}
          <FallbackImage
            src={images[0]}
            alt="Primary Image"
            height={800}
            width={400}
            className={`h-full w-full object-cover object-center absolute inset-0 transition-opacity duration-500 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Hover image */}
          <FallbackImage
            src={images[1]}
            alt="Hover Image"
            height={800}
            width={400}
            className={`h-full w-full object-cover object-center absolute inset-0 transition-opacity duration-500 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>
        <div className="p-2 absolute top-0  left-0">
          <div className="cursor-default bg-white text-gray-700 px-2 py-1 text-[11px] font-light z-10">
            Best Seller
          </div>
        </div>

        <div
          className={`p-2 absolute bottom-0 w-full transition-all duration-300 left-0 ${
            hovered ? "translate-y-0 opacity-100" : "opacity-0 translate-y-full"
          }`}
        >
          <p className="bg-white  hover:bg-templateBrown hover:text-white transition-all ease-in-out duration-300 cursor-pointer uppercase p-2 flex items-center font-medium justify-center gap-2 w-full text-[13px] text-center">
            Add to bag <ShoppingCart size={16} strokeWidth={2} />
          </p>
        </div>
      </div>

      <Link href={"/product/product_slug"} className="block space-y-1">
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
      </Link>
    </div>
  );
};

export default MainProductCard;
