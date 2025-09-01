import Breadcrumb from "@/components/BasicComps/Breadcrumb ";
import FilterAndSort from "@/components/collection_category/FilterAndSort";
import ProductContainer from "@/components/collection_category/ProductContainer";
import { featuredProducts } from "@/lib/Menudata";
import React from "react";

interface dataitem {
  id: number;
  image: string[];
  tag: string;
  name: string;
  price: number;
  star: number;
}

interface PageProps {
  params: Promise<{ category: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Mock API (replace with your real API call)
const getProducts = async (
  category: string[],
  filters: Record<string, any>,
  page: number,
  limit: number
) => {
  // apply filters / pagination logic
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    products: featuredProducts.slice(start, end),
    total: featuredProducts.length,
  };
};

const Category = async ({ params, searchParams }: PageProps) => {
  const categorySegments = (await params).category;
  const lastCategory = categorySegments[categorySegments.length - 1];

  const page = Number((await searchParams).page) || 1;
  const limit = 5;

  const { products, total } = await getProducts(
    categorySegments,
    searchParams,
    page,
    limit
  );

  return (
    <div className="templateContainer pb-12">
      {/* Breadcrumb */}
      <Breadcrumb
        heading={lastCategory.replace(/-/g, " ")}
        breadCrumb={["Home", "Category", ...categorySegments]}
      />

      {/* Top Section */}
      <div className="flex items-center justify-between pb-4">
        <div className="text-sm font-light">Total {total} Products</div>
        <FilterAndSort />
      </div>

      {/* Products */}
      <ProductContainer
        products={products as dataitem[]}
        page={page}
        total={total}
        limit={limit}
      />
    </div>
  );
};

export default Category;
