import Address from "@/components/AccountComps/Address";
import Back from "@/components/AccountComps/Back";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Addresspage = () => {
  return (
    <div className="space-y-4 lg:space-y-0">
      <Back />
      <Address />
    </div>
  );
};

export default Addresspage;
