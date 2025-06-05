import React from "react";
import ListingSection from "./ListingSection";
import { featuredProducts } from "@/lib/Menudata";
import ProductSection from "./ProductSection";

const TrendingProducts = () => {
  const listingData = {
    heading: "Trending Now",
    subHeading:
      "Discover Your Style: Navigate by Category for Effortless Shopping!",
    listing: [...featuredProducts],
    buttonText: "View all Trending",
    buttonLink: "/trendings",
  };
  return (
    <div>
      <ProductSection data={listingData} />
    </div>
  );
};

export default TrendingProducts;
