import Address from "@/components/AccountComps/Address";
import Measurements from "@/components/AccountComps/Measurements";
import Orders from "@/components/AccountComps/Orders";
import Profile from "@/components/AccountComps/Profile";
import Reviews from "@/components/AccountComps/Reviews";
import React from "react";

interface TabPageProps {
  params: Promise<{ tab: string }>;
}

const TabPage = async ({ params }: TabPageProps) => {
  const tabLabel = (await params).tab;

  return (
    <div className="space-y-5">
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
