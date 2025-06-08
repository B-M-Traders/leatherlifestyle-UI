import { StarIcon } from "@/custom_icons/icons";
import { Image } from "antd";
import { ShieldCheck } from "lucide-react";
import React from "react";

interface Props {
  data: {
    image?: string[];
    name: string;
    date: string;
    rating: number;
    verifiedBuyer: boolean;
    review: string;
  };
}

const ReviewCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full">
            <img
              src={`https://ui-avatars.com/api/?background=D3D3D3&color=000&name=${data.name}`}
              className="h-full w-full overflow-hidden rounded-full object-cover"
              alt="User"
            />
          </div>
          <div className="leading-none space-y-1">
            <div className="flex items-center gap-1">
              {Array(data.rating)
                .fill(data.rating)
                .map((_, index) => (
                  <StarIcon key={index} />
                ))}
            </div>
            <div title="Verified Buyer" className="flex items-center gap-1">
              <h3 className="text-sm tracking-wide">{data.name}</h3>
              <ShieldCheck size={14} color="green" />
            </div>
          </div>
        </div>
        <p className="text-sm font-light text-gray-600">{data.date}</p>
      </div>
      <div>
        <p className="text-[0.85rem] tracking-wider font-light text-templateText ">
          {data.review}
        </p>
      </div>
      <div className="flex items-center gap-1">
        {data?.image && (
          <>
            {data?.image?.map((item, index) => (
              <div
                key={index}
                className="h-[50px] w-[50px] rounded-md cursor-pointer overflow-hidden"
              >
                <Image
                  src={item || "/p2.jpg"}
                  alt=""
                  preview={{
                    mask: null,
                  }}
                  height={"100%"}
                  className="h-full w-full border border-white object-cover hover:border-black rounded-md hover:opacity-80"
                  width={"100%"}
                />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="h-[1px] w-full bg-gray-300"></div>
    </div>
  );
};

export default ReviewCard;
