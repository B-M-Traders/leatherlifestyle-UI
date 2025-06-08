import ReviewList from "@/components/ReviewsComp/ReviewList";
import ExtraDetail from "@/components/SingleProductPageComps/ExtraDetail";
import ImageGallery from "@/components/SingleProductPageComps/ImageGallery";
import ProductInfo from "@/components/SingleProductPageComps/ProductInfo";
import RelatedProducts from "@/components/SingleProductPageComps/RelatedProducts";
import { productDetail } from "@/lib/mockData";
import { ChevronRight } from "lucide-react";
import React from "react";

const Productdetailpage = () => {
  return (
    <div>
      <div className="templateContainer  py-6 md:py-10 lg:py-14 space-y-4">
        <ul className="flex items-center gap-1 text-xs md:text-sm font-light">
          <li>Home</li>
          <li>
            <ChevronRight size={18} strokeWidth={1} />
          </li>
          <li>{productDetail.product_name}</li>
        </ul>
        <div className=" w-full flex flex-col lg:flex-row items-start gap-5 md:gap-10">
          <div className="w-full lg:w-[63%]">
            <ImageGallery data={productDetail} />
          </div>
          <div className="w-full lg:w-[37%]">
            <ProductInfo data={productDetail} />
          </div>
        </div>
      </div>
      <ExtraDetail />
      <RelatedProducts />
      <ReviewList />
    </div>
  );
};

export default Productdetailpage;
