"use client";
import {
  BookUser,
  Heart,
  LogOut,
  Package,
  PencilRuler,
  UserRound,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileSidebar = () => {
  const pathname = usePathname();

  const tabs = [
    {
      icon: <UserRound size={24} strokeWidth={1} />,
      label: "Profile",
      text: "All your personal details",
      link: "/account/profile",
    },
    {
      icon: <BookUser size={24} strokeWidth={1} />,
      label: "Addresses",
      text: "All your saved address",
      link: "/account/address",
    },
    {
      icon: <Package size={24} strokeWidth={1} />,
      label: "Orders",
      text: "All your confirmed orders",
      link: "/account/orders",
    },
    {
      icon: <Heart size={24} strokeWidth={1} />,
      label: "Wishlists",
      text: "All your curated product collection",
      link: "/account/wishlist",
    },
    {
      icon: <PencilRuler size={24} strokeWidth={1} />,
      label: "Measurements",
      text: "All your saved measurements",
      link: "/account/measurements",
    },
  ];

  return (
    <div className="space-y-3 lg:space-y-6 w-full">
      <div className="flex items-center gap-2">
        <div className="min-h-[60px] min-w-[60px] rounded-full border flex border-[#c17345] items-center justify-center">
          <UserRound size={25} className="text-[#c17345]" strokeWidth={1} />
        </div>
        <div>
          <h3 className="text-lg text-templateBrown">Ansari Afroz</h3>
          <p className="font-light text-gray-600 text-[13px] tracking-wide">
            ansariafrozahmed@gmail.com
          </p>
          <button className="underline-offset-2 flex text-[13px] underline text-templateBrown font-light items-center gap-2">
            Logout
            <LogOut size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <hr />
      <div className=" lg:Space-y-2 overflow-x-scroll lg:overflow-auto flex gap-1.5 lg:flex-col">
        {tabs.map((item, index) => (
          <Link
            key={index}
            className={`border-2 rounded-md lg:rounded-none lg:border-x-0 lg:border-y-0 lg:border-l-4 inline-block px-5 lg:px-3 py-2.5  ${
              pathname.includes(item.link)
                ? " border-templateBrown bg-templateBrown lg:bg-white text-white lg:text-templateBrown"
                : "border-gray-200 lg:border-white hover:bg-gray-100 hover:border-gray-300"
            }`}
            href={item.link}
          >
            <div className="flex w-full flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3">
              <span className="block">{item.icon}</span>
              <span className="block">
                <p className=" text-sm text-center lg:text-left tracking-wide !font-light">
                  {item.label}
                </p>
                <p className="hidden lg:block text-[10px] tracking-wide !font-light">
                  {item.text}
                </p>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
