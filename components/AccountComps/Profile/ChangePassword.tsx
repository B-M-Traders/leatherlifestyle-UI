"use client";
import React, { useState } from "react";

const ChangePassword = () => {
  const [basicInfo, setBasicInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  return (
    <div className="space-y-4">
      <h3 className="font-light tracking-wide">CHANGE PASSWORD</h3>
      <form className="space-y-3" onSubmit={handleBasicInfoSubmit}>
        {/* Current Password */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label
            htmlFor="currentPassword"
            className="font-light text-sm text-gray-800"
          >
            Current Password
          </label>
          <input
            id="currentPassword"
            name="currentPassword"
            value={basicInfo.currentPassword}
            onChange={handleBasicInfoChange}
            placeholder="Current Password"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50 font-light"
            type="password"
            required
          />
        </div>

        {/* New Password */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label
            htmlFor="newPassword"
            className="font-light text-sm text-gray-800"
          >
            New Password
          </label>
          <input
            id="newPassword"
            name="newPassword"
            value={basicInfo.newPassword}
            onChange={handleBasicInfoChange}
            placeholder="New Password"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50 font-light"
            type="password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label
            htmlFor="confirmPassword"
            className="font-light text-sm text-gray-800"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            value={basicInfo.confirmPassword}
            onChange={handleBasicInfoChange}
            placeholder="Confirm Password"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50 font-light"
            type="password"
            required
          />
        </div>

        {/* Submit Button */}
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
