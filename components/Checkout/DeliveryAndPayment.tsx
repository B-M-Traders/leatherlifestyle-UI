"use client";
import { useFormat } from "@/hooks/useFormat";
import useCheckoutStore from "@/store/useCheckoutStore";
import { CircleCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import CustomInput from "../ui/custom-input";
import CustomSelect from "../ui/custom-select";
import useCustomerStore from "@/store/useCustomerStore";
import PaymentOptions from "./PaymentOptions";
import CustomDivider from "../ui/custom-divider";

const BLS_KEY = "billingAddress";
const COUNTRY_LIST = ["India", "USA", "Canada"];
const PHONE_CODE_LIST = ["+91", "+1"];

const DeliveryAndPayment = () => {
  const { email } = useCustomerStore();
  const [edit, setEdit] = useState(false);
  const { formatAmount } = useFormat();
  const {
    shippingAddress,
    billingAddress,
    setBillingAddress,
    sameAsShippingAddress,
    setSameAsShippingAddress,
    setShippingFee,
  } = useCheckoutStore();
  const [savedBillingAddress, setSavedBillingAddress] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
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
  const deliveryOptions = [
    {
      id: 1,
      name: "Standard shipping",
      price: 50,
      description: "Expected 7-10 days",
    },
    {
      id: 2,
      name: "Express shipping",
      price: 100,
      description: "Expected 2-5 days",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setBillingAddress(formData);
    setSavedBillingAddress(true);
    setEdit(false);
    localStorage.setItem(BLS_KEY, JSON.stringify(formData));
  };

  const handleShippingChange = (option: any) => {
    setSelectedPaymentMethod(option.id);
    setShippingFee(option.price);
  };

  useEffect(() => {
    setShippingFee(deliveryOptions[0].price);
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium flex items-center gap-2">
        Delivey And Payment
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {deliveryOptions.map((option) => (
          <div
            onClick={() => handleShippingChange(option)}
            key={option.id}
            className={`border-2 cursor-pointer space-y-1 p-3 rounded-md ${
              selectedPaymentMethod === option.id ? "border-templateBrown" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <label className="font-medium">{option.name}</label>
              {selectedPaymentMethod === option.id ? (
                <CircleCheck
                  size={20}
                  strokeWidth={1}
                  fill="#85ffa5"
                  className="text-[#242424]"
                />
              ) : null}
            </div>
            <p className="text-xs font-light">{option.description}</p>
            <p>{formatAmount(option.price)}</p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-medium flex items-center gap-2">
        Billing Address
      </h2>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={sameAsShippingAddress}
            onChange={() => {
              setSameAsShippingAddress(!sameAsShippingAddress);
              setEdit(true);
            }}
          />
          <label className="text-sm font-light">Same as shipping address</label>
        </div>

        {sameAsShippingAddress ? (
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
        ) : (
          <>
            {edit && (
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
                    setFormData((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }))
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
            {savedBillingAddress && (
              <div className="text-[13px] tracking-wide font-light text-gray-700">
                <p>
                  {billingAddress.firstName + " " + billingAddress.lastName}
                </p>
                <p>{billingAddress.email}</p>
                <p>
                  {billingAddress.phoneCode + " " + billingAddress.phoneNumber}
                </p>
                <p>
                  {billingAddress.address1 +
                    ", " +
                    billingAddress.address2 +
                    ", " +
                    billingAddress.city +
                    ", " +
                    billingAddress.province +
                    ", " +
                    billingAddress.postalCode +
                    ", " +
                    billingAddress.country}
                </p>
              </div>
            )}
          </>
        )}
      </div>
      <PaymentOptions />
    </div>
  );
};

export default DeliveryAndPayment;
