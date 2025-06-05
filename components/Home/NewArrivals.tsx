import { featuredProducts } from "@/lib/Menudata";
import React from "react";
import ListingSection from "./ListingSection";
import ProductSection from "./ProductSection";

const NewArrivals = () => {
  const listingData = {
    heading: "New Arrivals",
    subHeading:
      "Discover Your Style: Navigate by Category for Effortless Shopping!",
    listing: [...featuredProducts],
    buttonText: "View all ",
    buttonLink: "/trendings",
  };
  return (
    <div>
      <ProductSection data={listingData} />
    </div>
  );
};

export default NewArrivals;
