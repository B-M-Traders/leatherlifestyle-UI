import Breadcrumb from "@/components/BasicComps/Breadcrumb ";
import BlogCard from "@/components/Cards/BlogCard";
import { blogData } from "@/lib/blogData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Our Blogs",
  description: "Explore our latest blogs on leather jackets and accessories.",
  alternates: {
    canonical: `${process.env.FRONTEND_URL}/blog`,
  },
};

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Allblogpage = async ({ searchParams }: PageProps) => {
  const currentPage = Number((await searchParams)?.page) || 1;
  const limit = 9;
  const totalBlogs = blogData.length;
  const totalPages = Math.ceil(totalBlogs / limit);

  const start = (currentPage - 1) * limit;
  const end = start + limit;
  const blogsToShow = blogData.slice(start, end);

  const getPageNumbers = () => {
    const delta = 2;
    const pages: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <>
      <Breadcrumb heading="All Blogs" breadCrumb={["Home", "All Blogs"]} />

      <div className="templateContainer pb-10 md:pb-8 lg:pb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
        {blogsToShow.map((item, index) => (
          <BlogCard key={index} data={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="templateContainer pb-10 flex items-center justify-center gap-2">
        <div className="w-full flex items-center justify-end">
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}`}
              className="inline-flex items-center gap-1 px-3 py-2 border rounded text-templateBrown hover:bg-gray-100"
            >
              <ChevronLeft size={18} />
            </Link>
          )}
        </div>

        <div>
          {getPageNumbers().map((page, idx) =>
            page === "..." ? (
              <span key={idx} className="px-3 py-2 text-gray-500">
                ...
              </span>
            ) : (
              <Link
                key={idx}
                href={`/blog?page=${page}`}
                className={`px-3 py-2 border rounded ${
                  currentPage === page
                    ? "bg-templateBrown text-white"
                    : "text-templateBrown hover:bg-gray-100"
                }`}
              >
                {page}
              </Link>
            )
          )}
        </div>

        <div className="w-full flex items-center justify-start">
          {currentPage < totalPages && (
            <Link
              href={`/blog?page=${currentPage + 1}`}
              className="inline-flex items-center gap-1 px-3 py-2 border rounded text-templateBrown hover:bg-gray-100"
            >
              <ChevronRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Allblogpage;
