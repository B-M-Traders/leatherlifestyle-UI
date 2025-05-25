import Image from "next/image";
import React from "react";

interface Props {
  item: {
    url: string;
    image: string;
    text: string;
  };
}

const ListingCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="group space-y-2">
      <div className="aspect-[4/5.5] overflow-hidden">
        <Image
          src={item.image}
          alt="Category Image"
          height={600}
          width={400}
          className="h-full w-full object-cover group-hover:scale-105 group-hover:rotate-2 transition-all ease-in-out duration-300"
        />
      </div>
      <h2 className="text-[16px] text-center font-light ">{item.text}</h2>
    </div>
  );
};

export default ListingCard;
