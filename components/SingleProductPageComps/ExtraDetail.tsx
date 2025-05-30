import Image from "next/image";
import React from "react";

const ExtraDetail = () => {
  const data = [
    {
      image: "",
      heading: "",
      content: "",
      imageLeft: true,
    },
    {
      image: "",
      heading: "",
      content: "",
      imageLeft: false,
    },
    {
      image: "",
      heading: "",
      content: "",
      imageLeft: true,
    },
    {
      image: "",
      heading: "",
      content: "",
      imageLeft: false,
    },
    {
      image: "",
      heading: "",
      content: "",
      imageLeft: true,
    },
    {
      image: "",
      heading: "",
      content: "",
      imageLeft: false,
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full flex flex-col py-4 md:py-6 lg:py-0 ${
            item.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
          } gap-5 lg:gap-[100px]`}
        >
          <div className="w-full md:w-[45%] lg:w-1/2">
            <Image
              src={
                "https://www.thejacketmaker.com/cdn/shop/files/FINEST_RAW_MATERIALS_5c67c9d3-2e74-437c-8b0b-ef74ef9c4028_900x.webp?v=1694691113"
              }
              alt=""
              sizes="100vw"
              height={400}
              width={800}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-4 w-full md:w-[55%] lg:w-1/2 my-auto">
            <h3 className="text-xl  lg:text-4xl text-templateBrown font-medium">
              Finest Raw Materials
            </h3>
            <p className="text-sm text-gray-700 font-light tracking-wide">
              It all starts with the raw materials and since we carry our life
              in our jackets, we don’t use anything but only the best possible
              materials. All our jackets are made with full grain natural
              leather, YKK Zippers, and polyester lining.
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExtraDetail;
