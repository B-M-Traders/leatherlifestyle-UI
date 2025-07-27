"use client";
import CustomInput from "@/components/ui/custom-input";
import CustomSelect from "@/components/ui/custom-select";
import React, { useState } from "react";

const countries = [
  { code: "IN", label: "India" },
  { code: "US", label: "United States" },
  { code: "GB", label: "United Kingdom" },
  { code: "CA", label: "Canada" },
  { code: "AU", label: "Australia" },
];

const BillingAddress = () => {
  const [billing, setBilling] = useState({
    firstName: "Ansari",
    lastName: "Afroz",
    company: "",
    address: "",
    apartment: "",
    postalCode: "",
    city: "",
    province: "",
    country: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBilling((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Billing Address Submitted:", billing);
    // TODO: Send to API
  };

  return (
    <div className="space-y-4">
      <h3 className="font-light tracking-wide">BILLING ADDRESS</h3>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3 items-center">
          <CustomInput
            name="firstName"
            placeholder="First Name"
            value={billing.firstName}
            onChange={handleChange}
            required
          />
          <CustomInput
            name="lastName"
            placeholder="Last Name"
            value={billing.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <CustomInput
          name="company"
          placeholder="Company Name"
          value={billing.company}
          onChange={handleChange}
        />
        <CustomInput
          name="address"
          placeholder="Street Address"
          value={billing.address}
          onChange={handleChange}
          required
        />
        <CustomInput
          name="apartment"
          placeholder="Apartment, suite, etc."
          value={billing.apartment}
          onChange={handleChange}
        />
        <CustomInput
          name="postalCode"
          placeholder="Postal Code"
          value={billing.postalCode}
          onChange={handleChange}
          required
        />
        <CustomInput
          name="city"
          placeholder="City"
          value={billing.city}
          onChange={handleChange}
          required
        />
        <CustomInput
          name="province"
          placeholder="State / Province"
          value={billing.province}
          onChange={handleChange}
          required
        />
        <CustomSelect
          name="country"
          value={billing.country}
          onChange={handleChange}
          list={countries}
          required
        />

        <CustomInput
          name="phone"
          placeholder="Phone"
          value={billing.phone}
          onChange={handleChange}
          required
        />

        <div>
          <button
            type="submit"
            className="bg-templateBrown w-full lg:w-auto text-sm font-light tracking-wide text-white px-4 py-2.5 lg:py-2 rounded hover:bg-templateBrown/80 transition-colors duration-200"
          >
            Save Billing Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
