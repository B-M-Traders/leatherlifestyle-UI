"use client";
import { StarIcon } from "@/custom_icons/icons";
import { useFormat } from "@/hooks/useFormat";
import { Modal } from "antd";
import { Info } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import AddToCart from "../Buttons/AddToCart";
import DetailsAccordion from "./DetailsAccordion";

const ProductInfo = () => {
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const { formatAmount } = useFormat();
  const colors = ["#242424", "#52362F", "#8A5A36"];
  const sizes = [
    "XS (US 34)",
    "S (US 36)",
    "M (US 38)",
    "L (US 40)",
    "XL (US 42)",
    "2XL (US 44)",
    "3XL (US 46)",
    "4XL (US 48)",
  ];

  return (
    <>
      <div className="space-y-4 md:space-y-5">
        <h1 className="font-light tracking-tight text-[20px] md:text-[26px] lg:text-[30px] leading-none text-[#242424]">
          Black Leather Coat
        </h1>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array(5)
                .fill(5)
                .map((_, index) => (
                  <StarIcon key={index} />
                ))}
            </div>
            <span className="font-light text-[10px] lg:text-[12px] mt-1 lg:mt-0.5 text-templateBrown">
              (150)
            </span>
          </div>
          <span className="inline-block text-lg lg:text-[25px] leading-none text-templateBrown font-medium">
            {formatAmount(266)}
          </span>
        </div>
        <p className="text-gray-500 text-sm font-light">
          Free shipping and 30 days to return
        </p>
        <div className="space-y-2">
          <span className="text-sm font-medium">Color</span>
          <div className="flex items-center gap-2">
            {colors.map((item, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: item,
                }}
                className={`inline-block h-8 w-8 rounded-full`}
              ></span>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Size{" "}
              <span className="text-xs font-light">
                (Size up if you are in between sizes)
              </span>
            </span>
            <span
              onClick={() => setShowSizeGuide(true)}
              className="text-xs cursor-pointer underline flex items-center gap-1 underline-offset-4"
            >
              Size guide <Info size={12} strokeWidth={1.5} />
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((item, index) => (
              <span
                key={index}
                className={`inline-block text-xs  text-gray-700 text-center py-2.5 border`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <AddToCart />
        <DetailsAccordion />
      </div>

      {/* SIZE GUIDE */}
      <Modal
        open={showSizeGuide}
        width={600}
        onCancel={() => setShowSizeGuide(false)}
        footer={null}
      >
        Size Chart
      </Modal>
    </>
  );
};

export default ProductInfo;
