import ProfileSidebar from "@/components/AccountComps/ProfileSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-6 md:py-10 space-y-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full space-y-4 lg:w-[28%] lg:sticky top-5 h-full">
          <ProfileSidebar />
        </div>
        <div className="w-full h-px lg:h-auto lg:w-px bg-gray-200" />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default layout;
