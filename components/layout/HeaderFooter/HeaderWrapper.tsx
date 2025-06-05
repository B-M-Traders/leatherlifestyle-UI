"use client";
import React, { useEffect } from "react";
import Announcement from "./Announcement";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import useCartStore from "@/store/useCartStore";

const HeaderWrapper = () => {
  const pathname = usePathname();
  const { loadCart } = useCart();
  const isHome = pathname === "/";
  const { cartItems } = useCartStore();

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <div
      className={`${isHome ? "fixed" : "relative"} top-0 left-0 w-full z-10`}
    >
      {/* <pre>{JSON.stringify(cartItems, null, 2)}</pre> */}
      <Announcement />
      <Header isHome={isHome} />
    </div>
  );
};

export default HeaderWrapper;
