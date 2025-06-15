"use client";
import React, { useEffect, useState } from "react";
import { CircleCheck } from "lucide-react";
import useCheckoutStore from "@/store/useCheckoutStore";
import useCustomerStore from "@/store/useCustomerStore";
import CustomInput from "../ui/custom-input";
import CustomSelect from "../ui/custom-select";

const COUNTRY_LIST = ["India", "USA", "Canada"];
const PHONE_CODE_LIST = ["+91", "+1"];
const LS_KEY = "ah_checkout_shipping_address";

const AccountDetails = () => {
  const { shippingAddress, setShippingAddress } = useCheckoutStore();
  const { email } = useCustomerStore();
  const [shippingSaved, setShippingSaved] = useState(false);

  const getLocalStorageAddress = () => {
    if (typeof window === "undefined") return {};
    try {
      const stored = localStorage.getItem(LS_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (err) {
      return {};
    }
  };

  const [formData, setFormData] = useState(() => {
    const local = getLocalStorageAddress();
    return {
      email: email || local.email || "",
      firstName: local.firstName || shippingAddress.firstName || "",
      lastName: local.lastName || shippingAddress.lastName || "",
      country: local.country || shippingAddress.country || COUNTRY_LIST[0],
      address1: local.address1 || shippingAddress.address1 || "",
      address2: local.address2 || shippingAddress.address2 || "",
      city: local.city || shippingAddress.city || "",
      province: local.province || shippingAddress.province || "",
      postalCode: local.postalCode || shippingAddress.postalCode || "",
      phoneCode:
        local.phoneCode || shippingAddress.phoneCode || PHONE_CODE_LIST[0],
      phoneNumber: local.phoneNumber || shippingAddress.phoneNumber || "",
    };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setShippingAddress(formData);
    setShippingSaved(true);
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
  };

  useEffect(() => {
    const local = getLocalStorageAddress();
    const hasStoredData = Object.keys(local).length > 0;
    const hasShippingData = Object.values(shippingAddress).some((val) => val);

    if (hasStoredData || hasShippingData) {
      setShippingAddress(local);
      setShippingSaved(true);
    }
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium flex items-center gap-2">
          Account details
          {shippingSaved && (
            <CircleCheck
              size={20}
              strokeWidth={1}
              fill="#85ffa5"
              className="text-[#242424]"
            />
          )}
        </h2>
        {shippingSaved && (
          <span
            onClick={() => setShippingSaved(false)}
            className="underline underline-offset-4 cursor-pointer hover:opacity-90 block text-sm text-gray-700"
          >
            Edit
          </span>
        )}
      </div>
      {shippingSaved ? (
        <div className="space-y-2">
          <h3 className="text-[15px]">Shipping Address</h3>
          <div className="text-[13px] tracking-wide font-light text-gray-700">
            <p>{shippingAddress.firstName + " " + shippingAddress.lastName}</p>
            <p>{shippingAddress.email}</p>
            <p>
              {shippingAddress.phoneCode + " " + shippingAddress.phoneNumber}
            </p>
            <p>
              {shippingAddress.address1 +
                ", " +
                shippingAddress.address2 +
                ", " +
                shippingAddress.city +
                ", " +
                shippingAddress.province +
                ", " +
                shippingAddress.postalCode +
                ", " +
                shippingAddress.country}
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={onFinish} className="space-y-4">
          <CustomInput
            name="email"
            placeholder="Email Address"
            value={formData.email}
            type="email"
            disable={email ? true : false}
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
            list={COUNTRY_LIST}
            value={formData.country}
            name="country"
            required={true}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, country: e.target.value }))
            }
          />
          <CustomInput
            name="address1"
            placeholder="Address line 01"
            value={formData.address1}
            type="text"
            required={true}
            onChange={handleChange}
          />
          <CustomInput
            name="address2"
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
                list={PHONE_CODE_LIST}
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
              placeholder="Phone"
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
      )}
    </div>
  );
};

export default AccountDetails;
