import Back from "@/components/AccountComps/Back";
import Measurements from "@/components/AccountComps/Measurements";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Measurementpage = () => {
  return (
    <div className="space-y-6 lg:space-y-0">
      <Back />
      <Measurements />
    </div>
  );
};

export default Measurementpage;
