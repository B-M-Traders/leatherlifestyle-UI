import ProfileSidebar from "@/components/AccountComps/ProfileSidebar";
import React from "react";

const Mylayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-6 md:py-10 space-y-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-14">
        <div className="w-full lg:w-[30%] lg:sticky top-5 h-full">
          <ProfileSidebar />
        </div>
        <div className="flex-1">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Mylayout;
