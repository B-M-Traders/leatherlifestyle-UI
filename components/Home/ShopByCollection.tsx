import React from "react";
import ListingSection from "./ListingSection";
import { featuredProducts } from "@/lib/Menudata";
import { sdk } from "@/lib/sdk";

const ShopByCollection = async () => {
  const { collections } = await sdk.store.collection.list({
    limit: 6
  })
  console.log(collections)
  const listingData = {
    heading: "Shop by Collection",
    subHeading:
      "Explore our curated collections that cater to every style and occasion.",
    listing: collections,
  };
  return (
    <div>
      <ListingSection data={listingData} />
    </div>
  );
};

export default ShopByCollection;
