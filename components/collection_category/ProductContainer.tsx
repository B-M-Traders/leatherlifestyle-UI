import React from "react";
import MainProductCard from "../Cards/MainProductCard";

const ProductContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3 gap-y-6">
      <MainProductCard />
      <MainProductCard />
      <MainProductCard />
      <MainProductCard />
      <MainProductCard />
    </div>
  );
};

export default ProductContainer;
