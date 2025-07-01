import Address from "@/components/AccountComps/Address";
import Measurements from "@/components/AccountComps/Measurements";
import Orders from "@/components/AccountComps/Orders";
import Profile from "@/components/AccountComps/Profile";
import Reviews from "@/components/AccountComps/Reviews";
import CustomDivider from "@/components/ui/custom-divider";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface TabPageProps {
  params: {
    tab: string;
  };
}

const TabPage = async ({ params }: TabPageProps) => {
  const tabLabel = (await params).tab;

  return (
    <div className="space-y-5">
      {/* <ul className="flex items-center font-light gap-1 text-xs">
        <li>
          <Link href="/" className="hover:underline underline-offset-2">
            Home
          </Link>
        </li>
        <li>
          <ChevronRight size={18} strokeWidth={1} />
        </li>
        <li>
          <span className="hover:underline underline-offset-2">Account</span>
        </li>
        <li>
          <ChevronRight size={18} strokeWidth={1} />
        </li>
        <li className="underline underline-offset-2 capitalize">{tabLabel}</li>
      </ul> */}
      <div>
        {tabLabel === "profile" && <Profile />}
        {tabLabel === "address" && <Address />}
        {tabLabel === "orders" && <Orders />}
        {tabLabel === "measurements" && <Measurements />}
        {tabLabel === "reviews" && <Reviews />}
      </div>
    </div>
  );
};

export default TabPage;
