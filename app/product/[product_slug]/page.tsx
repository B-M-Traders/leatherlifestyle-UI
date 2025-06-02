import ReviewList from "@/components/ReviewsComp/ReviewList";
import ExtraDetail from "@/components/SingleProductPageComps/ExtraDetail";
import ImageGallery from "@/components/SingleProductPageComps/ImageGallery";
import ProductInfo from "@/components/SingleProductPageComps/ProductInfo";
import { ChevronRight } from "lucide-react";
import React from "react";

const Productdetailpage = () => {
  return (
    <div className="templateContainer  py-6 md:py-10 lg:py-14 space-y-4">
      <ul className="flex items-center gap-1 text-xs md:text-sm font-light">
        <li>Home</li>
        <li>
          <ChevronRight size={18} strokeWidth={1} />
        </li>
        <li>Product Name</li>
      </ul>
      <div className=" w-full flex flex-col lg:flex-row items-start gap-5 md:gap-10 lg:gap-14">
        <div className="w-full lg:w-[63%]">
          <ImageGallery />
        </div>
        <div className="w-full lg:w-[37%]">
          <ProductInfo />
        </div>
      </div>
      <div className="!mt-20">
        <ExtraDetail />
      </div>
      <div>
        <ReviewList />
      </div>
    </div>
  );
};

export default Productdetailpage;
