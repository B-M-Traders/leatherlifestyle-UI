"use client";
import { useFormat } from "@/hooks/useFormat";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WishlistCard = () => {
  const { formatAmount } = useFormat();

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent link navigation
    console.log("Remove from wishlist");
  };

  return (
    <div className="block space-y-2">
      <div className="aspect-[4/5] relative">
        <Image
          src={"/men1.jpg"}
          className="h-full w-full object-cover object-center"
          alt=""
          height={800}
          width={400}
        />
        <button
          onClick={handleRemove}
          className="absolute z-[1] top-2 shadow-md right-2 bg-white border rounded-full p-2"
        >
          <X size={18} strokeWidth={1.5} />
        </button>
        <Link href={"/"} className="absolute inset-0 z-0" />
      </div>
      <div>
        <Link href={"/"}>
          <h2 className="text-[14px] leading-snug lg:text-[14px] font-light text-templateBrown">
            Product Name
          </h2>
        </Link>
        <span className="block font-medium tracking-wide">
          {formatAmount(1500)}
        </span>
      </div>
    </div>
  );
};

export default WishlistCard;
