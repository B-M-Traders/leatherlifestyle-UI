import Image from "next/image";
import React from "react";

const ExtraDetail = () => {
  const data = [
    {
      image:
        "https://www.thejacketmaker.com/cdn/shop/files/FINEST_RAW_MATERIALS_5c67c9d3-2e74-437c-8b0b-ef74ef9c4028_900x.webp?v=1694691113",
      heading: "Finest Raw Materials",
      content:
        "It all starts with the raw materials and since we carry our life in our jackets, we don’t use anything but only the best possible materials. All our jackets are made with full grain natural leather, YKK Zippers, and polyester lining.",
      imageLeft: true,
    },
    {
      image:
        "https://www.thejacketmaker.com/cdn/shop/files/EXQUISITE_CRAFTSMANSHIP_1d2e6255-4aaa-4009-a775-0a075f3368aa_900x.webp?v=1694691113",
      heading: "Exquisite Craftsmanship",
      content:
        "Our products are handmade, one at a time by one craftsman with precision and attention to detail, unlike the mass chain production. Not opting for chain production means higher cost but a better quality that you will notice in our stitching.",
      imageLeft: false,
    },
    {
      image:
        "https://www.thejacketmaker.com/cdn/shop/files/FAIR_PRICING_-_DIRECT_TO_YOU_470b7b38-228f-482c-b134-44d3a12852eb_900x.webp?v=1694691113",
      heading: "Fair Pricing - Direct to You",
      content:
        "With our direct-to-consumer approach, our products come at ¼ the price of what luxury brands would sell them for. We keep our prices lower by cutting out middlemen, storefront costs and inefficient marketing spent. Additionally, with just-in-time production.",
      imageLeft: true,
    },
    {
      image:
        "https://www.thejacketmaker.com/cdn/shop/files/SIZES_THAT_FIT_ALL_0b65e55e-5613-464f-a115-39570a2a4bd0_900x.webp?v=1694691113",
      heading: "Sizes that fit all",
      content:
        "Inclusivity is a buzzword but we take it quite seriously. We truly know there is something electrifying about wearing a great leather jacket, we ensure no one misses out on this. All our jackets are offered in eight standard sizes from XS to 4XL and made-to-measure-option.",
      imageLeft: false,
    },
    {
      image:
        "https://www.thejacketmaker.com/cdn/shop/files/DISCOVERY___EXPRESSION_3730cca6-0ff3-4a38-8d54-7fcc40329c71_900x.webp?v=1694691113",
      heading: "Discovery & Expression",
      content:
        "As no two persons are alike, we believe in discovery and expression. Our customers can make 100% custom, bespoke jackets from scratch with the help of our design consultants. Thus, fostering diversity and enabling our customers to fully express themselves and be apart from the rest.",
      imageLeft: true,
    },
  ];
  return (
    <div className="templateContainer mt-6 lg:!mt-20">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full flex flex-col py-4 md:py-6 lg:py-0 ${
            item.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
          } gap-5 lg:gap-[100px]`}
        >
          <div className="w-full md:w-[45%] lg:w-1/2">
            <Image
              src={item.image}
              alt=""
              sizes="100vw"
              height={400}
              width={800}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="space-y-4 w-full md:w-[55%] lg:w-1/2 my-auto">
            <h3 className="text-xl  lg:text-4xl text-templateBrown font-medium">
              {item.heading}
            </h3>
            <p className="text-sm text-gray-700 font-light tracking-wide">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtraDetail;
