import Back from "@/components/AccountComps/Back";
import Wishlist from "@/components/AccountComps/Wishlist";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Wishlistpage = () => {
  return (
    <div className="space-y-6 lg:space-y-0">
      <Back />
      <Wishlist />
    </div>
  );
};

export default Wishlistpage;
