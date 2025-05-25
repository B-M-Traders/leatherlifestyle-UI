import {
  DehliveryIcon,
  LeatherIcon,
  PaymnentIcon,
  ReturnIcon,
} from "@/custom_icons/icons";
import { IconProps } from "@/types/icon";
import React from "react";

const IconWithText = () => {
  const uspData = [
    {
      name: "Premium Leather",
      icon: (props: IconProps) => <LeatherIcon {...props} />,
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
      description: "Sourced from the finest tannerie.",
    },
    {
      name: "Secure Payment",
      icon: (props: IconProps) => <PaymnentIcon {...props} />,
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
      description: "Contact support team 24x7 365 days.",
    },
    {
      name: "Easy returns",
      icon: (props: IconProps) => <ReturnIcon {...props} />,
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
      description: "Not what expected Return & get full refund.",
    },
    {
      name: "Free Delivery",
      icon: (props: IconProps) => <DehliveryIcon {...props} />,
      imageUrl:
        "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
      description: "Receive your products within 5-6 Days.",
      type: { fill: "rgb(var(--color-gray-600))" },
    },
  ];
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-6 lg:gap-5 px-5 py-3 lg:py-5">
      {uspData.map((usp) => (
        <div key={usp.name} className="sm:flex text-gray-900">
          <div className="w-14 lg:w-20 mx-auto sm:mx-0">
            <usp.icon width={"100%"} style={{ ...usp.type }} />
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
  );
};

export default IconWithText;
