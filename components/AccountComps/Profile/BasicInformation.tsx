"use client";
import React, { useState } from "react";

const BasicInformation = () => {
  const [basicInfo, setBasicInfo] = useState({
    firstName: "Ansari",
    lastName: "Afroz",
    companyName: "Artisan Hide",
    email: "ansariafroz.py@gmail.com",
    phone: "7208820113",
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
    console.log("Basic Info Submitted:", basicInfo);
  };
  return (
    <div className="space-y-4">
      <h3 className="font-light tracking-wide">BASIC INFORMATION</h3>
      <form className="space-y-3" onSubmit={handleBasicInfoSubmit}>
        {/* First Name */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label
            htmlFor="firstName"
            className="font-light text-sm text-gray-800"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            value={basicInfo.firstName}
            onChange={handleBasicInfoChange}
            placeholder="First Name"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50 font-light"
            type="text"
          />
        </div>

        {/* Last Name */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label
            htmlFor="lastName"
            className="font-light text-sm text-gray-800"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            value={basicInfo.lastName}
            onChange={handleBasicInfoChange}
            placeholder="Last Name"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50 font-light"
            type="text"
          />
        </div>

        {/* Company Name */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label
            htmlFor="companyName"
            className="font-light text-sm text-gray-800"
          >
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            value={basicInfo.companyName}
            onChange={handleBasicInfoChange}
            placeholder="Company Name"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50 font-light"
            type="text"
          />
        </div>

        {/* Email */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label htmlFor="email" className="font-light text-sm text-gray-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={basicInfo.email}
            onChange={handleBasicInfoChange}
            placeholder="Email"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50 font-light"
            type="email"
          />
        </div>

        {/* Phone */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label htmlFor="phone" className="font-light text-sm text-gray-800">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={basicInfo.phone}
            onChange={handleBasicInfoChange}
            placeholder="Phone"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50 font-light"
            type="number"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-templateBrown w-full lg:w-auto text-sm font-light tracking-wide text-white px-4 py-2.5 lg:py-2 rounded hover:bg-templateBrown/80 transition-colors duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;
