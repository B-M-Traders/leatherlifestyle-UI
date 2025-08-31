"use client";
import React, { useEffect } from "react";
import Announcement from "./Announcement";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import { detectLocation } from "@/lib/utils";
import useGeolocationStore from "@/store/useGeolocation";

const HeaderWrapper = () => {
  const pathname = usePathname();
  const { setGeolocation } = useGeolocationStore();
  const { loadCart } = useCart();
  const isHome = pathname === "/" || pathname === "/about";

  const getUserAddress = async () => {
    if (typeof window !== "undefined") {
      const storedGeo = localStorage.getItem("geoLocation");
      const timestamp = localStorage.getItem("geoLocationTimestamp");
      const now = Date.now();
      const oneWeek = 7 * 24 * 60 * 60 * 1000;

      if (storedGeo && timestamp && now - Number(timestamp) < oneWeek) {
        setGeolocation(JSON.parse(storedGeo));
        console.log("GeoLocation loaded from localStorage (not expired)");
      } else {
        try {
          const locationData = await detectLocation();
          if (locationData) {
            localStorage.setItem("geoLocation", JSON.stringify(locationData));
            localStorage.setItem("geoLocationTimestamp", now.toString());
            setGeolocation(locationData);
            console.log("GeoLocation updated from API");
          }
        } catch (error) {
          console.error("Failed to detect location:", error);
        }
      }
    }
  };

  useEffect(() => {
    loadCart();
    getUserAddress();
  }, []);

  if (
    pathname.includes("/auth/login") ||
    pathname.includes("/auth/register") ||
    pathname.includes("/forgot-password")
  ) {
    return null;
  }
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
