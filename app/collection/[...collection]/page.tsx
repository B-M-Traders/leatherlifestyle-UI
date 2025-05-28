import Breadcrumb from "@/components/BasicComps/Breadcrumb ";
import FilterAndSort from "@/components/collection_category/FilterAndSort";
import ProductContainer from "@/components/collection_category/ProductContainer";
import React from "react";

interface PageProps {
  params: Promise<{ collection: string[] }>;
}

const getProducts = async (collection: string[]) => {};

const Collection: React.FC<PageProps> = async ({ params }) => {
  const CollectionSegments = (await params).collection;
  // const data = await getProducts(categorySegments);
  const lastCollection = CollectionSegments[CollectionSegments.length - 1];

  return (
    <div className="templateContainer pb-12">
      <Breadcrumb
        heading={lastCollection.replace(/-/g, " ")}
        breadCrumb={["Home", "Collection", ...CollectionSegments]}
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

export default Collection;
