"use client";
import CustomInput from "@/components/ui/custom-input";
import React, { useState } from "react";

const BasicInformation = () => {
  const [basicInfo, setBasicInfo] = useState({
    firstName: "Pasha",
    lastName: "Afroz",
    companyName: "Artisan Hide",
    email: "ansariafroz.py@gmail.com",
    phone: "7208820113",
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
    console.log("Basic Info Submitted:", basicInfo);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-light tracking-wide">BASIC INFORMATION</h3>
      <form className="space-y-3" onSubmit={handleBasicInfoSubmit}>
        <div className="grid grid-cols-2 gap-3 items-center">
          <CustomInput
            name="firstName"
            placeholder="First Name"
            value={basicInfo.firstName}
            onChange={handleInputChange}
          />
          <CustomInput
            name="lastName"
            placeholder="Last Name"
            value={basicInfo.lastName}
            onChange={handleInputChange}
          />
        </div>
        <CustomInput
          name="companyName"
          placeholder="Company Name"
          value={basicInfo.companyName}
          onChange={handleInputChange}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          type="email"
          value={basicInfo.email}
          onChange={handleInputChange}
        />
        <CustomInput
          name="phone"
          placeholder="Phone"
          type="tel"
          value={basicInfo.phone}
          onChange={handleInputChange}
        />

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
