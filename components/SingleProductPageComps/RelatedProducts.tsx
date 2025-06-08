import React from "react";
import ProductSection from "../Home/ProductSection";
import { featuredProducts } from "@/lib/Menudata";

const RelatedProducts = () => {
  const listingData = {
    heading: "You May Also Like",
    listing: [...featuredProducts],
  };
  return <ProductSection data={listingData} />;
};

export default RelatedProducts;
