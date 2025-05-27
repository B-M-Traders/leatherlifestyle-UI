import ProductContainer from "@/components/collection_category/ProductContainer";
import React from "react";

interface PageProps {
  params: Promise<{ category: string[] }>;
}

const getProducts = async (category: string[]) => {};

const Category: React.FC<PageProps> = async ({ params }) => {
  const categorySegments = (await params).category;
  // const data = await getProducts(categorySegments);
  const lastCategory = categorySegments[categorySegments.length - 1];

  return (
    <div className="templateContainer space-y-6 md:space-y-12 lg:space-y-16 py-6 md:py-10 lg:py-14">
      <h1 className="text-center text-xl lg:text-3xl capitalize text-templateBrown">
        {lastCategory.replace(/-/g, " ")}
      </h1>

      <div>
        <ProductContainer />
      </div>
    </div>
  );
};

export default Category;
