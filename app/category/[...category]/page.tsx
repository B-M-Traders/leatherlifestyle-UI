import Breadcrumb from "@/components/BasicComps/Breadcrumb ";
import FilterAndSort from "@/components/collection_category/FilterAndSort";
import ProductContainer from "@/components/collection_category/ProductContainer";
import { sdk } from "@/lib/sdk";
import React from "react";

interface PageProps {
  params: Promise<{ category: string[] }>;
}

const getProducts = async (handle: string) => {
  return await sdk.store.category.list({
    handle,
    fields: '+products,-category_children'
  })
};

const Category: React.FC<PageProps> = async ({ params }) => {
  const categorySegments = (await params).category;
  const handle = categorySegments.join("/")
  const data = await getProducts(handle);
  const lastCategory = categorySegments[categorySegments.length - 1];
  console.log(data)
  return (
    <div className="templateContainer pb-12">
      <Breadcrumb
        heading={lastCategory.replace(/-/g, " ")}
        breadCrumb={["Home", ...categorySegments]}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-light">{data.product_categories[0].products?.length} Products</span>
          </div>
          <div>
            <FilterAndSort />
          </div>
        </div>
        <ProductContainer products={data.product_categories[0].products} />
      </div>
    </div>
  );
};

export default Category;
