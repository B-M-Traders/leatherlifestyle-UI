import Image from "next/image";
import React from "react";

interface Props {
  data: {
    name: string;
    icon: string;
    description: string;
  }[];
}

const IconWithText: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-6 lg:gap-5 px-5 py-8 lg:py-10">
        {data.map((usp) => (
          <div
            key={usp.name}
            className="flex flex-col md:flex-row items-center gap-4 text-gray-900"
          >
            <div className="w-10 lg:w-12">
              <Image
                src={usp.icon}
                className=""
                alt={usp.name}
                height={150}
                width={150}
              />
            </div>
            <div className="sm:flex flex-col justify-center align-middle space-y-1 sm:space-y-0 text-center sm:text-left ">
              <h3 className="text-sm font-medium tracking-wider text-gray-800">
                {usp.name}
              </h3>
              <p className="font-light text-xs">{usp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconWithText;
