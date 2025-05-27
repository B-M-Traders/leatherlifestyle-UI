import React from "react";
import ListingSection from "./ListingSection";
import { featuredProducts } from "@/lib/Menudata";

const OnSale = () => {
  const listingData = {
    heading: "On Sale",
    subHeading:
      "Discover Your Style: Navigate by Category for Effortless Shopping!",
    listing: [...featuredProducts],
    buttonText: "View all",
    buttonLink: "/trendings",
  };
  return (
    <div>
      <ListingSection data={listingData} />
    </div>
  );
};

export default OnSale;
