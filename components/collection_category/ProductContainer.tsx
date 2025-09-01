import React from "react";
import MainProductCard from "../Cards/MainProductCard";
import CategoryPagination from "./Pagination";

interface PageProps {
  products: {
    id: number;
    image: string[];
    tag: string;
    name: string;
    price: number;
    star: number;
  }[];
  page: number;
  total: number;
  limit: number;
}

const ProductContainer = ({ products, page, total, limit }: PageProps) => {
  return (
    <div className="space-y-20">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-3 gap-y-6">
        {products?.map((item, index) => (
          <React.Fragment key={index}>
            <MainProductCard item={item} />
          </React.Fragment>
        ))}
      </div>
      <CategoryPagination total={total} limit={limit} />
    </div>
  );
};

export default ProductContainer;
