import Back from "@/components/AccountComps/Back";
import Orders from "@/components/AccountComps/Orders";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Orderspage = () => {
  return (
    <div className="space-y-4 lg:space-y-0">
      <Back />
      <Orders />
    </div>
  );
};

export default Orderspage;
