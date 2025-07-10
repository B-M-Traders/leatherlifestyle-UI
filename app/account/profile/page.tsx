import Back from "@/components/AccountComps/Back";
import Profile from "@/components/AccountComps/Profile";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Profilepage = () => {
  return (
    <div className="space-y-4 lg:space-y-0">
      <Back />
      <Profile />
    </div>
  );
};

export default Profilepage;
