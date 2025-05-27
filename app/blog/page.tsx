import Breadcrumb from "@/components/BasicComps/Breadcrumb ";
import BlogPageComp from "@/components/BlogComps/BlogPageComp";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Blogs | Thaiger Nutraceuticals – Thaiger Pharma Group",
  description:
    "Counting on the best protein for muscle recovery can never be other than the right fuel that everyone loves!",
  alternates: {
    canonical: `${process.env.FRONTEND_URL}/blog`,
  },
};

const Allblogpage = () => {
  return (
    <>
      <Breadcrumb heading="All Blogs" breadCrumb={["Home", "All Blogs"]} />
      <BlogPageComp />
    </>
  );
};

export default Allblogpage;
