"use client";
import React, { useEffect, useState } from "react";
import CustomInput from "../ui/custom-input";
import CustomSelect from "../ui/custom-select";
import useGeolocationStore from "@/store/useGeolocation";
import { Edit, Loader } from "lucide-react";
import { State, City } from "country-state-city";
import DeliveryAndPayment from "./DeliveryAndPayment";
import CustomDivider from "../ui/custom-divider";

const AccountDetails = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const { geolocation } = useGeolocationStore();

  const [shipping, setShipping] = useState({
    email: "",
    firstName: "",
    lastName: "",
    country: geolocation.countryName || "",
    state: "",
    city: "",
    zipCode: "",
    phoneCode: geolocation.countryCallingCode || "",
    phone: "",
    apartment: "",
    address: "",
  });

  const [billing, setBilling] = useState({ ...shipping });
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const [states, setStates] = useState<any>([]);
  const [cities, setCities] = useState<any>([]);

  const [billingStates, setBillingStates] = useState<any>([]);
  const [billingCities, setBillingCities] = useState<any>([]);

  // Load state and city data
  useEffect(() => {
    const fetchedStates = State.getStatesOfCountry(geolocation.countryCode);
    setStates(fetchedStates);
    setBillingStates(fetchedStates);
    if (fetchedStates.length > 0) {
      setCities(
        City.getCitiesOfState(geolocation.countryCode, fetchedStates[0].isoCode)
      );
      setBillingCities(
        City.getCitiesOfState(geolocation.countryCode, fetchedStates[0].isoCode)
      );
    }
  }, [geolocation.countryCode]);

  // Keep billing in sync
  useEffect(() => {
    if (sameAsShipping) {
      setBilling(shipping);
    }
  }, [sameAsShipping, shipping]);

  const handleShippingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShipping((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBilling((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Submitted:", {
        shipping,
        billing: sameAsShipping ? shipping : billing,
      });
      setSubmitted(true);
      setEditMode(false);
      setLoading(false);
    }, 500);
  };

  if (submitted && !editMode) {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Account Details</h2>
            <button
              className="text-templateBrown flex hover:underline underline-offset-4 items-center gap-2 text-sm  hover:opacity-90"
              onClick={() => setEditMode(true)}
            >
              Edit
              <Edit size={15} strokeWidth={1.5} />
            </button>
          </div>
          <div className="grid grid-cols-2">
            <div className="space-y-0.5 text-gray-700 font-light text-sm">
              <h3 className="font-normal text-templateBrown mb-2 text-base">
                Shipping Address
              </h3>
              <p>{shipping.email}</p>
              <p>
                {shipping.firstName} {shipping.lastName}
              </p>
              <p>
                {shipping.address}, {shipping.apartment}
              </p>
              <p>
                {shipping.city}, {shipping.state}, {shipping.country} -{" "}
                {shipping.zipCode}
              </p>
              <p>
                {shipping.phoneCode} {shipping.phone}
              </p>
            </div>
            <div>
              {!sameAsShipping && (
                <div className="space-y-0.5 text-gray-700 font-light text-sm">
                  <h3 className="font-normal text-templateBrown mb-2 text-base">
                    Billing Address
                  </h3>
                  <p>{billing.email}</p>
                  <p>
                    {billing.firstName} {billing.lastName}
                  </p>
                  <p>
                    {billing.address}, {billing.apartment}
                  </p>
                  <p>
                    {billing.city}, {billing.state}, {billing.country} -{" "}
                    {billing.zipCode}
                  </p>
                  <p>
                    {shipping.phoneCode} {shipping.phone}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <CustomDivider />
        {submitted && <DeliveryAndPayment />}
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        <h2 className="text-xl font-medium">Account details</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <CustomInput
            name="email"
            placeholder="Email"
            type="email"
            required
            value={shipping.email}
            onChange={handleShippingChange}
          />
          <div className="flex gap-4">
            <CustomInput
              name="firstName"
              placeholder="First Name"
              required
              value={shipping.firstName}
              onChange={handleShippingChange}
            />
            <CustomInput
              name="lastName"
              placeholder="Last Name"
              value={shipping.lastName}
              onChange={handleShippingChange}
            />
          </div>
          <CustomInput
            name="country"
            placeholder="Country"
            disabled
            required
            value={geolocation.countryName}
          />
          <CustomInput
            name="apartment"
            placeholder="Apartment"
            value={shipping.apartment}
            onChange={handleShippingChange}
          />
          <CustomInput
            name="address"
            placeholder="Address"
            required
            value={shipping.address}
            onChange={handleShippingChange}
          />
          <div className="flex gap-4">
            <CustomSelect
              list={states.map((s: any) => ({
                label: s.name,
                code: s.isoCode,
              }))}
              name="state"
              value={shipping.state}
              onChange={(e) => {
                const selected = e.target.value;
                setShipping((prev) => ({ ...prev, state: selected }));
                setCities(
                  City.getCitiesOfState(geolocation.countryCode, selected)
                );
              }}
              required
            />
            <CustomSelect
              list={cities.map((c: any) => ({ label: c.name, code: c.name }))}
              name="city"
              value={shipping.city}
              onChange={handleShippingChange}
              required
            />
            <CustomInput
              name="zipCode"
              placeholder="Zip Code"
              value={shipping.zipCode}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="flex gap-4">
            <CustomInput
              className="w-28"
              disabled
              required
              name="phoneCode"
              value={geolocation.countryCallingCode}
              placeholder="Code"
            />
            <CustomInput
              name="phone"
              placeholder="Phone"
              value={shipping.phone}
              onChange={handleShippingChange}
              required
            />
          </div>

          <h2 className="text-xl pt-2 font-medium">Billing details</h2>
          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={sameAsShipping}
              onChange={() => setSameAsShipping((prev) => !prev)}
            />
            <label>Same as shipping address</label>
          </div>

          {!sameAsShipping && (
            <div className="space-y-4">
              <div className="flex gap-4">
                <CustomInput
                  name="firstName"
                  placeholder="First Name"
                  value={billing.firstName}
                  onChange={handleBillingChange}
                />
                <CustomInput
                  name="lastName"
                  placeholder="Last Name"
                  value={billing.lastName}
                  onChange={handleBillingChange}
                />
              </div>
              <CustomInput
                name="address"
                placeholder="Address"
                value={billing.address}
                onChange={handleBillingChange}
                required
              />
              <div className="flex gap-4">
                <CustomSelect
                  list={billingStates.map((s: any) => ({
                    label: s.name,
                    code: s.isoCode,
                  }))}
                  name="state"
                  value={billing.state}
                  onChange={(e) => {
                    const selected = e.target.value;
                    setBilling((prev) => ({ ...prev, state: selected }));
                    setBillingCities(
                      City.getCitiesOfState(geolocation.countryCode, selected)
                    );
                  }}
                  required
                />
                <CustomSelect
                  list={billingCities.map((c: any) => ({
                    label: c.name,
                    code: c.name,
                  }))}
                  name="city"
                  value={billing.city}
                  onChange={handleBillingChange}
                  required
                />
                <CustomInput
                  name="zipCode"
                  placeholder="Zip Code"
                  value={billing.zipCode}
                  onChange={handleBillingChange}
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="bg-templateBrown flex items-center justify-center text-white w-full py-2.5 rounded-md"
          >
            {loading && <Loader size={16} className="animate-spin mr-2" />}
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AccountDetails;
