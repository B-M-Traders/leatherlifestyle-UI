"use client";
import { Divider } from "antd";
import React, { useState } from "react";
import CustomInput from "../ui/custom-input";
import CustomSelect from "../ui/custom-select";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    phoneCode: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFinish = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    console.log("Submitted form data:", formData);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-xl">Express Checkout</h2>
        <div className="flex items-center gap-2">
          <button className="bg-green-500 hover:bg-green-400 flex items-center justify-center h-12 text-[#242424] w-full font-semibold tracking-wide rounded-md">
            Pay with link
          </button>
          <button className="flex items-center justify-center h-12 bg-yellow-400 hover:bg-yellow-300 text-[#242424] w-full pt-2 rounded-md">
            <img
              className="h-6 w-auto"
              src="https://m.media-amazon.com/images/G/01/AmazonPay/Maxo/amazonpay-logo-rgb_drk_1.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <Divider style={{ borderColor: "#ababab" }}>
        <span className="text-[#ababab] font-normal">or</span>
      </Divider>
      <div className="space-y-4">
        <h2 className="text-xl">Account details</h2>
        <form onSubmit={onFinish} className="space-y-4">
          <CustomInput
            name="email"
            placeholder="Email Address"
            value={formData.email}
            type="email"
            required={true}
            onChange={handleChange}
          />
          <div className="flex gap-3">
            <CustomInput
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              type="text"
              required={true}
              onChange={handleChange}
            />
            <CustomInput
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              type="text"
              required={false}
              onChange={handleChange}
            />
          </div>
          <CustomSelect
            label="Select Country"
            list={["USA", "UK"]}
            value={formData.country}
            name="country"
            required={true}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, country: e.target.value }))
            }
          />
          <CustomInput
            name="address"
            placeholder="Address line 01"
            value={formData.address1}
            type="text"
            required={true}
            onChange={handleChange}
          />
          <CustomInput
            name="address"
            placeholder="Address line 02 (Optional)"
            value={formData.address2}
            type="text"
            required={false}
            onChange={handleChange}
          />
          <CustomInput
            name="city"
            placeholder="City"
            value={formData.city}
            type="text"
            required={true}
            onChange={handleChange}
          />
          <div className="flex items-center gap-3">
            <CustomInput
              name="province"
              placeholder="Province"
              value={formData.province}
              type="text"
              required={true}
              onChange={handleChange}
            />
            <CustomInput
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              type="number"
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1/5">
              <CustomSelect
                label=""
                list={["+1", "+91"]}
                value={formData.phoneCode}
                name="phoneCode"
                required={true}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phoneCode: e.target.value,
                  }))
                }
              />
            </div>
            <CustomInput
              name="phoneNumber"
              placeholder="98765 43210"
              value={formData.phoneNumber}
              type="number"
              required={true}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-templateBrown font-light text-sm text-white py-3 px-6 rounded-md"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
