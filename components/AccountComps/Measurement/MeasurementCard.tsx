import { Tag } from "antd";
import { MoveRight, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  item: {
    id: number;
    name: string;
    type: string;
    gender: string;
  };
}

const MeasurementCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="p-5 hover:shadow-lg border rounded-xl hover:border-templateBrown transition-all ease-in-out duration-200 shadow-sm flex items-center gap-4">
      <div className="">
        <Image
          src={
            "https://i.pinimg.com/736x/4e/32/d3/4e32d37181ba2ff55e9c965697fb3432.jpg"
          }
          alt=""
          height={500}
          width={500}
          className="h-20 w-auto object-cover"
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <h4 className="text-[15px] text-templateBrown font-light">
            {item.name}
          </h4>
          <Link href={`/account/measurements/${item.id}`}>
            <button className="hover:underline flex items-center   justify-end gap-1 underline-offset-2 text-xs cursor-pointer font-light text-templateBrown">
              <Pencil size={12} strokeWidth={1.5} /> Edit details
            </button>
          </Link>
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center text-gray-400 gap-3 text-xs font-normal">
            <p className="w-[50px] font-light uppercase tracking-wide">Type</p>
            <p className="text-templateBrown capitalize">{item.type}</p>
          </div>
          <div className="flex items-center text-gray-400 gap-3 text-xs font-normal">
            <p className="w-[50px] font-light uppercase tracking-wide">
              Gender
            </p>
            <p className="text-templateBrown capitalize">{item.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementCard;
