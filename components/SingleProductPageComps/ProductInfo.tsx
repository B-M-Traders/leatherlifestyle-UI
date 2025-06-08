"use client";
import { StarIcon } from "@/custom_icons/icons";
import { useFormat } from "@/hooks/useFormat";
import { Modal } from "antd";
import { Info } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import AddToCart from "../Buttons/AddToCart";
import DetailsAccordion from "./DetailsAccordion";

interface Reviews {}

interface Options {
  label: string;
  value: string;
}

interface Variation {
  name: string;
  options: Options[];
}

interface Props {
  data: {
    product_id: number;
    product_name: string;
    variation: Variation[];
    product_images: string[];
    review: {
      star: number;
      count: number;
      reviews: Reviews[];
    };
    product_price: number;
  };
}

const ProductInfo: React.FC<Props> = ({ data }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const { formatAmount } = useFormat();

  const requestedData = {
    item_image: data.product_images[0],
    item_name: data.product_name,
    item_price: data.product_price,
    item_id: data.product_id,
    item_quantity: 1,
    variant_name: `${selectedSize} , ${selectedColor}`,
  };

  const sizeVariations = data.variation.find((item) => item.name === "Size");

  const colorVariations = data.variation.find((item) => item.name === "Color");

  return (
    <>
      <div className="space-y-4 md:space-y-5">
        <h1 className=" tracking-tight text-[20px] md:text-[26px] lg:text-[30px] leading-snug text-[#242424]">
          {data.product_name}
        </h1>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {Array(data.review.star)
                .fill(data.review.star)
                .map((_, index) => (
                  <StarIcon key={index} />
                ))}
            </div>
            <a
              href="#reviews"
              className="font-light text-[10px] lg:text-[12px] mt-1 lg:mt-0.5 text-templateBrown"
            >
              ({data.review.count})
            </a>
          </div>
          <span className="inline-block text-lg lg:text-[25px] leading-none text-templateBrown font-light">
            {formatAmount(data.product_price)}
          </span>
        </div>
        <p className="text-gray-500 text-sm font-light">
          Free shipping and 30 days to return
        </p>
        <div className="space-y-2">
          <span className="text-sm font-medium">Color</span>
          <div className="flex items-center gap-2">
            {colorVariations?.options.map((item, index) => (
              <span
                key={index}
                onClick={() => setSelectedColor(item.label)}
                style={{
                  backgroundColor: item.value,
                  outline:
                    selectedColor === item.label ? "2px solid black" : "none",
                }}
                className="inline-block h-8 w-8 border-2 border-white rounded-full cursor-pointer"
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
            {sizeVariations?.options.map((item, index) => (
              <span
                key={index}
                onClick={() => setSelectedSize(item.label)}
                className={`inline-block text-xs text-gray-700 text-center py-2.5 border-2 cursor-pointer ${
                  selectedSize === item.label
                    ? "border-black font-semibold"
                    : ""
                }`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
        <AddToCart text="Buy now" requestedData={requestedData} />
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
