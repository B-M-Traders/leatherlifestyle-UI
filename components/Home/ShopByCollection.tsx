import React from "react";
import ListingSection from "./ListingSection";
import { featuredProducts } from "@/lib/Menudata";

const ShopByCollection = () => {
  const listingData = {
    heading: "Shop by Collection",
    subHeading:
      "Explore our curated collections that cater to every style and occasion.",
    listing: [...featuredProducts],
    buttonText: "View All Collections",
    buttonLink: "/collection",
  };
  return (
    <div>
      <ListingSection data={listingData} />
    </div>
  );
};

export default ShopByCollection;
