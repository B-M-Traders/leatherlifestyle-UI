"use client";
import CustomInput from "@/components/ui/custom-input";
import React, { useState } from "react";

const ChangePassword = () => {
  const [basicInfo, setBasicInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBasicInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBasicInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (basicInfo.newPassword !== basicInfo.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    console.log("Password Change Submitted:", basicInfo);
    // Call your API here
  };

  return (
    <div className="space-y-4">
      <h3 className="font-light tracking-wide">CHANGE PASSWORD</h3>
      <form className="space-y-3" onSubmit={handleBasicInfoSubmit}>
        <CustomInput
          name="currentPassword"
          placeholder="Current Password"
          type="password"
          value={basicInfo.currentPassword}
          onChange={handleInputChange}
          required
        />
        <CustomInput
          name="newPassword"
          placeholder="New Password"
          type="password"
          value={basicInfo.newPassword}
          onChange={handleInputChange}
          required
        />
        <CustomInput
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          value={basicInfo.confirmPassword}
          onChange={handleInputChange}
          required
        />

        <div>
          <button
            type="submit"
            className="bg-templateBrown w-full lg:w-auto text-sm font-light tracking-wide text-white px-4 py-2.5 lg:py-2 rounded hover:bg-templateBrown/80 transition-colors duration-200"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
