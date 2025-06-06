import React from "react";
import { StoreProduct } from "@medusajs/types";
import { featuredProducts } from "@/lib/Menudata";
import MainProductCard from "../Cards/MainProductCard";

const ProductContainer = ({ products }: { products: StoreProduct[] | undefined }) => {
  if (!products) return null
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3 gap-y-6">
      {products.map((product) =>
        <MainProductCard key={product.id} product={product} />
      )}
    </div>
  );
};

export default ProductContainer;
