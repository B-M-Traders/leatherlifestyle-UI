"use client";
import React from "react";
import Announcement from "./Announcement";
import Header from "./Header";
import { usePathname } from "next/navigation";

const HeaderWrapper = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={`${isHome ? "fixed" : "relative"} top-0 left-0 w-full z-10`}
    >
      <Announcement />
      <Header isHome={isHome} />
    </div>
  );
};

export default HeaderWrapper;
