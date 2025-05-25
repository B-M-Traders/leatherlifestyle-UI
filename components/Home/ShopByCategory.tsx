import React from "react";
import { featuredProducts } from "@/lib/Menudata";
import ListingSection from "./ListingSection";

const ShopByCategory = () => {
  const listingData = {
    heading: "Shop by Category",
    subHeading:
      "Discover Your Style: Navigate by Category for Effortless Shopping!",
    listing: featuredProducts,
  };
  return (
    <div>
      <ListingSection data={listingData} />
    </div>
  );
};

export default ShopByCategory;
