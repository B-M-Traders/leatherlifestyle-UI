import Image from "next/image";
import Link from "next/link";
import React from "react";
import FallbackImage from "./FallbackImage";

interface Props {
  item: {
    url: string;
    image: string[];
    text: string;
  };
}

const ListingCard: React.FC<Props> = ({ item }) => {
  return (
    <Link href={item.url} className="block group space-y-2">
      <div className="aspect-[4/5.5] overflow-hidden">
        <FallbackImage
          src={item.image[0]}
          alt="Category Image"
          height={600}
          width={400}
          className="h-full w-full object-cover group-hover:scale-105 group-hover:rotate-2 transition-all ease-in-out duration-300"
        />
      </div>
      <h2 className="text-[16px] text-center font-light ">{item.text}</h2>
    </Link>
  );
};

export default ListingCard;
