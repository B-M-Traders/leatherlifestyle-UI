import ProfileSidebar from "@/components/AccountComps/ProfileSidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-5xl mx-auto py-6 md:py-10 space-y-8 lg:py-14">
      <div className="flex gap-14">
        <ProfileSidebar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
