"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  BookDashed,
  Home,
  LayoutDashboard,
  Menu,
  ShoppingBag,
  User,
} from "lucide-react";
import { getTargetTriple } from "next/dist/build/swc/generated-native";
import { useToggleStore } from "@/store/useToggleStore";
import { useCart } from "@/hooks/useCart";

const BottomTabs = () => {
  const { toggleCartDrawer, toggleMenuDrawer } = useToggleStore();
  return (
    <div className="lg:hidden select-none h-[65px] bg-white dark:bg-black border-t rounded-t-2xl grid grid-cols-5 fixed w-full bottom-0  left-0 my-auto bg-templateBackground text-templateText">
      <Link
        href={"/"}
        className="grid gap-1 active:bg-gray-200 place-content-center place-items-center"
      >
        <Home size={18} strokeWidth={1.5} />
        <span className="text-[11px] font-light leading-none tracking-wider">
          Home
        </span>
      </Link>
      <div
        onClick={toggleMenuDrawer}
        className="active:bg-gray-100 grid gap-1 place-content-center place-items-center"
      >
        <Menu size={18} strokeWidth={1.5} />
        <span className="text-[11px] font-light leading-none tracking-wider">
          Menu
        </span>
      </div>
      <Link
        href={"/"}
        className=" grid gap-1 active:bg-gray-200 place-content-center place-items-center"
      >
        <LayoutDashboard size={18} strokeWidth={1.5} />
        <span className="text-[11px] font-light leading-none tracking-wider">
          Shop
        </span>
      </Link>
      <div
        onClick={toggleCartDrawer}
        className="active:bg-gray-100 relative grid gap-1 place-content-center place-items-center"
      >
        <span className="bg-templateBrown h-5 w-5 text-[11px] text-white rounded-full  absolute top-2 right-4 flex items-center justify-center">
          2
        </span>
        <ShoppingBag size={18} strokeWidth={1.5} />
        <span className="text-[11px] font-light leading-none tracking-wider">
          Cart
        </span>
      </div>
      <Link
        href={`/account`}
        className="grid gap-1 active:bg-gray-200 place-content-center place-items-center"
      >
        <User size={18} strokeWidth={1.5} />
        <span className="text-[11px] font-light leading-none tracking-wider">
          Account
        </span>
      </Link>
    </div>
  );
};

export default BottomTabs;
