import React from "react";
import BlogCard from "../Cards/BlogCard";

const HomeBlog = () => {
  return (
    <div className="templateContainer space-y-6 py-6 md:py-10 lg:py-14">
      <div className="space-y-0.5">
        <h2 className="text-center text-[24px] lg:text-[30px] tracking-tight font-normal text-templateBrown">
          Blogs & Articles
        </h2>
        <p className="max-w-xl mx-auto text-center text-[12px] lg:text-[14px] tracking-wide font-light text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquam?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default HomeBlog;
