import Profile from "@/components/AccountComps/Profile";
import ProfileSidebar from "@/components/AccountComps/ProfileSidebar";
import React from "react";

const MyPage = () => {
  return (
    <div>
      <div className="lg:hidden">
        <ProfileSidebar />
      </div>
      <div className="hidden lg:block">
        <Profile />
      </div>
    </div>
  );
};

export default MyPage;
