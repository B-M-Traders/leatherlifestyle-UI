import React from "react";
import Link from "next/link";
import FallbackImage from "../Cards/FallbackImage";

const ShopByCategory = () => {
  const category = [
    {
      image: "/men2.jpg",
      label: "Men's Leather Jackets",
      link: "/category/men",
    },
    {
      image: "/product2.jpg",
      label: "Women's Jackets",
      link: "/category/women",
    },
    {
      image: "/kids.jpg",
      label: "Kids Jackets",
      link: "/category/kids",
    },
    {
      image: "/pillow.jpg",
      label: "Pillow Covers",
      link: "/category/pillow-covers",
    },
    {
      image: "/accessories.jpg",
      label: "Accessories",
      link: "/category/accessories",
    },
    {
      image: "/bags.jpg",
      label: "Travel Bags",
      link: "/category/travel-bags",
    },
  ];

  // Split the categories into 2 rows: [0–2], [3–5]
  const firstRow = category.slice(0, 3);
  const secondRow = category.slice(3, 6);

  const renderCategoryBox = (item: {
    label: string;
    link: string;
    image: string;
  }) => (
    <Link
      key={item.label}
      href={item.link}
      className="h-[240px] relative md:h-[180px] lg:h-[400px] group bg-gray-200 overflow-hidden flex items-center justify-center"
    >
      <FallbackImage
        src={item.image}
        alt={item.label}
        height={600}
        width={600}
        className={
          "h-full w-full object-cover group-hover:scale-105 transition-all ease-in-out duration-300 object-top"
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 gap-1 via-transparent to-transparent p-3 lg:p-6 flex flex-col items-start justify-end text-white">
        <h2 className="text-sm lg:text-xl font-light">{item.label}</h2>
        <p className="text-xs font-light underline underline-offset-4">
          Show now
        </p>
      </div>
    </Link>
  );

  return (
    <div className="templateContainer space-y-8 py-6 md:py-10 lg:py-14">
      <div className="space-y-0.5">
        <h2 className="text-center text-[24px] lg:text-[30px] tracking-tight font-normal text-templateBrown">
          Shop by Category
        </h2>
        <p className="max-w-xl mx-auto text-center text-[12px] lg:text-[14px] tracking-wide font-light text-gray-500">
          Discover Your Style: Navigate by Category for Effortless Shopping!
        </p>
      </div>

      <div className="space-y-4 md:space-y-5">
        <div className="grid gap-4 md:gap-0 md:space-x-5 grid-cols-1 md:[grid-template-columns:52%_24%_24%]">
          {firstRow.map(renderCategoryBox)}
        </div>

        <div className="grid gap-4 md:gap-0 grid-cols-1 md:space-x-5 md:[grid-template-columns:24%_24%_52%]">
          {secondRow.map(renderCategoryBox)}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
