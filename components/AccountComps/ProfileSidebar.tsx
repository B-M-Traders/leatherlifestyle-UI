"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useActionState } from "react";
import { Button } from "../ui/button";
import { signout } from "@/lib/action/customer";

const ProfileSidebar = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    await signout()
  }

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
          className={`block font-light hover:underline underline-offset-[5px] ${pathname.includes(item.link) ? "underline" : ""
            }`}
          href={item.link}
        >
          {item.label}
        </Link>
      ))}
      <button type="submit" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfileSidebar;
