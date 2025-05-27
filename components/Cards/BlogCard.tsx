import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <Link href={"/blog/blog_title"} className="block group space-y-3">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={"/mobileBanner.jpg"}
          alt="Blog Image"
          height={300}
          width={600}
          className="h-full group-hover:scale-105 group-hover:rotate-1 transition-all  w-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs flex items-center gap-1 font-medium tracking-wide text-templateBrown">
          <Calendar size={15} strokeWidth={1} /> 24/05/2025
        </p>
        <h2 className="font-light text-[15px]">Blog title</h2>
      </div>
    </Link>
  );
};

export default BlogCard;
