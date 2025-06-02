import Image from "next/image";
import React from "react";

const BannerSlider = () => {
  return (
    <div className="h-[75vh] lg:h-[85vh] w-full relative">
      <div className="h-full w-full hidden lg:block">
        <Image
          src={
            "https://www.thejacketmaker.com/cdn/shop/files/2048_x_1024_-_TJM.webp?v=1695726287"
          }
          alt={" Banner"}
          quality={100}
          sizes="100vw"
          className="h-full w-full object-cover object-top"
          height={9}
          width={16}
        />
      </div>
      <div className="h-full w-full lg:hidden">
        <Image
          src={"/mobileBanner.jpg"}
          alt={" Banner"}
          quality={100}
          sizes="100vw"
          className="h-full w-full object-cover object-top"
          height={6}
          width={3}
        />
      </div>
    </div>
  );
};

export default BannerSlider;
