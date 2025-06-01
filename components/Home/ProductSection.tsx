import React from "react";
import Link from "next/link";
import ListingCard from "../Cards/ListingCard";
import MainProductCard from "../Cards/MainProductCard";

interface Props {
  data: {
    heading?: string;
    subHeading?: string;
    listing?: any[];
    buttonText?: string;
    buttonLink?: string;
  };
}

const ProductSection: React.FC<Props> = ({ data }) => {
  return (
    <div className="templateContainer space-y-8 py-6 md:py-10 lg:py-14">
      <div className="space-y-0.5">
        <h2 className="text-center text-[24px] lg:text-[30px] tracking-tight font-normal text-templateBrown">
          {data.heading}
        </h2>
        <p className="max-w-xl mx-auto text-center text-[12px] lg:text-[14px] tracking-wide font-light text-gray-500">
          {data.subHeading}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 gap-y-5 lg:gap-y-6">
        {data?.listing?.map((item, index) => (
          <React.Fragment key={index}>
            <MainProductCard item={item} />
          </React.Fragment>
        ))}
      </div>
      {data?.buttonText && (
        <div className="flex items-center justify-center">
          <button className="relative overflow-hidden">
            <Link
              href={`${data.buttonLink}`}
              className={`px-6 py-2 text-sm tracking-wide bg-white border border-templateBrown text-templateBrown flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out shadow-md hover:scale-100 
      before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-templateBrown before:to-templateBrown before:transition-all before:duration-500 before:ease-in-out before:z-[-1] 
      hover:text-white hover:before:left-0 `}
            >
              {data.buttonText}
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
