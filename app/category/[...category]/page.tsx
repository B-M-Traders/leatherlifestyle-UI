import Breadcrumb from "@/components/BasicComps/Breadcrumb ";
import FilterAndSort from "@/components/collection_category/FilterAndSort";
import ProductContainer from "@/components/collection_category/ProductContainer";
import useCustomerStore from "@/store/useCustomerStore";
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
    <div className="templateContainer pb-12">
      <Breadcrumb
        heading={lastCategory.replace(/-/g, " ")}
        breadCrumb={["Home", "Category", ...categorySegments]}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-light">30 Products</span>
          </div>
          <div>
            <FilterAndSort />
          </div>
        </div>
        <ProductContainer />
      </div>
    </div>
  );
};

export default Category;
