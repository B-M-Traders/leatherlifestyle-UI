import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  item: {
    url: string;
    image: string;
    text: string;
  };
}

const BasicProductCard: React.FC<Props> = ({ item }) => {
  return (
    <Link href={item.url} className="block group">
      <div>
        <div className="aspect-[4/5] overflow-hidden">
          <Image
            className=" bg-gray-50 group-hover:scale-105 group-hover:rotate-2 transition-all ease-in-out duration-300 h-full w-full object-cover"
            src={item.image}
            alt="Product Image"
            height={600}
            width={400}
          />
        </div>
        <h2 className="py-2 text-templateBrown text-xs md:text-sm group-hover:underline tracking-wide">
          {item.text}
        </h2>
      </div>
    </Link>
  );
};

export default BasicProductCard;
