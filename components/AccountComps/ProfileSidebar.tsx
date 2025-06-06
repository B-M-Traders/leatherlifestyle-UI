"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfileSidebar = () => {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Account Information",
      link: "/account/profile",
    },
    {
      label: "Address Book",
      link: "/account/address",
    },
  ];
  return (
    <div className="space-y-4">
      {tabs.map((item, index) => (
        <Link
          key={index}
          className={`block font-light hover:underline underline-offset-[5px] ${
            pathname.includes(item.link) ? "underline" : ""
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
