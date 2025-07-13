import { Tag } from "antd";
import { MoveRight, Pencil } from "lucide-react";
import React from "react";

interface Props {
  item: {
    name: string;
    type: string;
    gender: string;
  };
}

const MeasurementCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="p-4 border shadow-sm rounded-sm space-y-4">
      <div className="flex flex-col-reverse lg:flex-row gap-4  lg:items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <h4 className="text-lg text-templateBrown font-medium">
            {item.name}
          </h4>
          <div className="space-x-2">
            <span className="px-4 py-[5px] rounded-full border-templateBrown text-[13px] border">
              {item.type}
            </span>
            <span className="px-4 py-[5px] rounded-full border-templateBrown text-[13px] border">
              {item.gender}
            </span>
          </div>
        </div>
        <button className="underline flex items-center justify-end gap-1 underline-offset-2 text-xs cursor-pointer font-light text-templateBrown">
          <Pencil size={12} strokeWidth={1.5} /> Edit
        </button>
      </div>
      <ul className="space-y-1.5">
        <li className="flex items-center gap-3">
          <span className="font-medium tracking-wide">Height</span>
          <MoveRight size={16} strokeWidth={1} />
          <span className="font-light tracking-wide">175cm</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="font-medium tracking-wide">Chest</span>
          <MoveRight size={16} strokeWidth={1} />
          <span className="font-light tracking-wide">45cm</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="font-medium tracking-wide">Waist</span>
          <MoveRight size={16} strokeWidth={1} />
          <span className="font-light tracking-wide">15cm</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="font-medium tracking-wide">Arms</span>
          <MoveRight size={16} strokeWidth={1} />
          <span className="font-light tracking-wide">15cm</span>
        </li>
      </ul>
    </div>
  );
};

export default MeasurementCard;
