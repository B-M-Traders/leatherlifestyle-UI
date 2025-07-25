"use client";
import React, { useState } from "react";

const countries = [
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  // Add more as needed
];

const BillingAddress = () => {
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
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
            type="text"
            value={billing.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50"
            required
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
            type="text"
            value={billing.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50"
            required
          />
        </div>

        {/* Company */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label htmlFor="company" className="font-light text-sm text-gray-800">
            Company
          </label>
          <input
            id="company"
            type="text"
            name="company"
            value={billing.company}
            onChange={handleChange}
            placeholder="Company"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50"
          />
        </div>

        {/* Address */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label htmlFor="address" className="font-light text-sm text-gray-800">
            Address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            value={billing.address}
            onChange={handleChange}
            placeholder="Street Address"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50"
            required
          />
        </div>

        {/* Apartment */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label
            htmlFor="apartment"
            className="font-light text-sm text-gray-800"
          >
            Apartment
          </label>
          <input
            id="apartment"
            type="text"
            name="apartment"
            value={billing.apartment}
            onChange={handleChange}
            placeholder="Apartment, suite, etc."
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50"
          />
        </div>

        {/* Postal Code */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label
            htmlFor="postalCode"
            className="font-light text-sm text-gray-800"
          >
            Postal Code
          </label>
          <input
            id="postalCode"
            type="text"
            name="postalCode"
            value={billing.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50"
            required
          />
        </div>

        {/* City */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label htmlFor="city" className="font-light text-sm text-gray-800">
            City
          </label>
          <input
            id="city"
            type="text"
            name="city"
            value={billing.city}
            onChange={handleChange}
            placeholder="City"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50"
            required
          />
        </div>

        {/* Province */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label
            htmlFor="province"
            className="font-light text-sm text-gray-800"
          >
            Province / State
          </label>
          <input
            id="province"
            type="text"
            name="province"
            value={billing.province}
            onChange={handleChange}
            placeholder="State / Province"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50"
            required
          />
        </div>

        {/* Country */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label htmlFor="country" className="font-light text-sm text-gray-800">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={billing.country}
            onChange={handleChange}
            className="border px-3 py-2 col-span-2 rounded text-sm text-gray-700 focus:outline-none focus:border-templateBrown border-templateBrown/50"
            required
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c.code} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Phone */}
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center">
          <label htmlFor="phone" className="font-light text-sm text-gray-800">
            Phone
          </label>
          <input
            id="phone"
            type="number"
            name="phone"
            value={billing.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border px-3 py-2 col-span-2 rounded text-sm focus:outline-none placeholder:font-light placeholder:text-xs focus:border-templateBrown border-templateBrown/50"
            required
          />
        </div>

        {/* Submit Button */}
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
