import ProfileSidebar from "@/components/AccountComps/ProfileSidebar";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Mylayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-6 md:py-10 space-y-8 lg:py-12">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full hidden lg:block space-y-4 lg:w-[28%] lg:sticky top-5 h-full">
          <ProfileSidebar />
        </div>
        <div className="hidden lg:block w-full h-px lg:h-auto lg:w-px bg-gray-200" />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Mylayout;
