import React from "react";
import { UserRound } from "lucide-react";
import BasicInformation from "./BasicInformation";
import ChangePassword from "./ChangePassword";
import BillingAddress from "./BillingAddress";

const Profile = () => {
  return (
    <div className="space-y-8 lg:pace-y-10">
      <div className="space-y-0.5">
        <h2 className="text-lg text-templateBrown lg:text-xl uppercase tracking-wide font-medium flex items-center gap-2">
          <UserRound size={20} /> Profile
        </h2>
        <p className="text-xs font-light">Manage your personal information</p>
      </div>

      <BasicInformation />

      <ChangePassword />

      <BillingAddress />
    </div>
  );
};

export default Profile;
