import React from "react";
import { featuredProducts } from "@/lib/Menudata";
import ListingSection from "./ListingSection";
import { sdk } from "@/lib/sdk";

const ShopByCategory =async () => {
  

   const { product_categories } = await sdk.store.category.list({
      parent_category_id: "null",
      limit: 6
    })

    const listingData = {
      heading: "Shop by Category",
      subHeading: "Discover Your Style: Navigate by Category for Effortless Shopping!",
      listing: product_categories,
    };

  return (
    <ListingSection data={listingData} />
  );
};

export default ShopByCategory;
