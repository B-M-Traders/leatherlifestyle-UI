"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileSidebar = () => {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Profile",
      link: "/account/profile",
    },
    {
      label: "Address Book",
      link: "/account/address",
    },
    {
      label: "Orders",
      link: "/account/orders",
    },
    {
      label: "Measurements",
      link: "/account/measurements",
    },
    {
      label: "Reviews",
      link: "/account/reviews",
    },
  ];

  return (
    <div className="space-y-1 flex flex-wrap lg:flex-col">
      {tabs.map((item, index) => (
        <Link
          key={index}
          className={`inline-block font-light p-3 rounded-sm  ${
            pathname.includes(item.link)
              ? "bg-templateBrown text-white"
              : "hover:bg-gray-100 hover:text-templateBrown"
          }`}
          href={item.link}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default ProfileSidebar;
