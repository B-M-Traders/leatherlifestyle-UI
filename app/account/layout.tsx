import ProfileSidebar from "@/components/AccountComps/ProfileSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-4xl mx-auto py-6 md:py-10 space-y-8 lg:py-12">
      <h2 className="text-xl">
        Hello👋, <span className="text-lg">Ansari Afroz</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-14">
        {/* Sidebar */}
        <div className="w-full space-y-4 lg:w-[25%] sticky top-5 h-full">
          <ProfileSidebar />
        </div>

        {/* Divider */}
        <div className="w-full h-px lg:h-auto lg:w-px bg-gray-300" />

        {/* Main content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default layout;
