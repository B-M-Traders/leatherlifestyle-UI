"use client";
import { StarIcon } from "@/custom_icons/icons";
import React, { useEffect, useState } from "react";
import FallbackImage from "./FallbackImage";
import Link from "next/link";
import { useFormat } from "@/hooks/useFormat";
import { StoreProduct } from "@medusajs/types";
import { ShoppingCart } from "lucide-react";
import AddToCart from "../Buttons/AddToCart";

const MainProductCard = ({ product }: { product: StoreProduct }) => {
  const { formatAmount } = useFormat();
  const [hovered, setHovered] = useState(false);
  console.log(product)

interface Props {
  item: {
    id: number;
    image: string[];
    tag: string;
    name: string;
    price: number;
    star: number;
  };
}

const MainProductCard: React.FC<Props> = ({ item }) => {
  const { formatAmount } = useFormat();
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const requestedData = {
    item_image: item.image[0],
    item_name: item.name,
    item_price: item.price,
    item_id: item.id,
    item_quantity: 1,
    variant_name: null,
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="space-y-2">
      <div
        onMouseEnter={() => isDesktop && setHovered(true)}
        onMouseLeave={() => isDesktop && setHovered(false)}
        className="overflow-hidden  relative aspect-[4/5.5]"
      >
        <Link href={`product/${product.handle}`} className="block h-full w-full">
          <FallbackImage
            src={product.thumbnail}
            alt="Primary Image"
            height={800}
            width={400}
            className={`h-full w-full object-cover object-center absolute inset-0 transition-opacity duration-500 ${hovered ? "opacity-0" : "opacity-100"
              }`}
          />
          <FallbackImage
            src={product.images && product.images[1].url}
            alt="Hover Image"
            height={800}
            width={400}
            className={`h-full w-full object-cover object-center absolute inset-0 transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"
              }`}
          />
        </Link>
        <div className="p-2 absolute top-0  left-0">
          <div className="cursor-default bg-white text-gray-700 px-2 py-1 text-[11px] font-light z-10">
            Best Seller
          </div>
        </div>

        {/* Add to Bag Button */}
        {isDesktop && (
          <div
            className={`hidden lg:block p-2 absolute bottom-0 w-full transition-all duration-300 left-0 ${
              hovered
                ? "translate-y-0 opacity-100"
                : "opacity-0 translate-y-full"
            }`}
          >
            <AddToCart requestedData={requestedData} text="Add to bag" />
          </div>
        )}
      </div>

      

      {/* Product Details */}
      <Link href={"/product/product_slug"} className="block space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {Array(item.star)
              .fill(item.star)
              .map((_, index) => (
                <StarIcon key={index} />
              ))}
          </div>
          <span className="font-light text-[10px] lg:text-[12px] mt-1 lg:mt-0.5 text-templateBrown">
            (50)
          </span>
        </div>
        <h2 className="text-[14px] leading-snug lg:text-[15px] font-medium text-templateBrown">
          {product.title}
        
        </h2>
        <span className="block font-light tracking-wide">
          {formatAmount(item.price)}
        </span>
      </Link>
    </div>
  );
};

export default MainProductCard;
