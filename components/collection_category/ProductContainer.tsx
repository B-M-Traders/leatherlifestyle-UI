import React from "react";
import MainProductCard from "../Cards/MainProductCard";
import { featuredProducts } from "@/lib/Menudata";
import { Item } from "@radix-ui/react-accordion";

const ProductContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3 gap-y-6">
      {featuredProducts.map((item, index) => (
        <React.Fragment key={index}>
          <MainProductCard item={item} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductContainer;
