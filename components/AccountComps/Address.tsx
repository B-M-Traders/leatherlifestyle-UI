"use client";
import { cn } from "@/lib/utils";
import { Modal } from "antd";
import { BookUser, MapPinned } from "lucide-react";
import React, { useEffect, useState } from "react";
import CustomInput from "../ui/custom-input";
import { address } from "@/lib/mockData";
import useGeolocationStore from "@/store/useGeolocation";
import CustomSelect from "../ui/custom-select";
import { City, State } from "country-state-city";

const Address = () => {
  const { geolocation } = useGeolocationStore();

  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    phoneCode: "",
    phone: "",
    address: "",
    isDefault: false,
    type: "",
  });

  useEffect(() => {
    if (!editData && geolocation.countryCode) {
      const country = geolocation.countryName;
      const phoneCode = geolocation.countryCallingCode;
      const countryCode = geolocation.countryCode;

      const stateList = State.getStatesOfCountry(countryCode);
      const firstState = stateList[0]?.isoCode || "";
      const cityList = City.getCitiesOfState(countryCode, firstState);
      const firstCity = cityList[0]?.name || "";

      setStates(stateList);
      setCities(cityList);

      setFormData({
        firstName: "",
        lastName: "",
        country,
        state: firstState,
        city: firstCity,
        zipCode: "",
        phoneCode,
        phone: "",
        address: "",
        isDefault: false,
        type: "",
      });
    }
  }, [geolocation, editData]);

  useEffect(() => {
    if (editData) {
      const countryCode = geolocation.countryCode;
      const stateList = State.getStatesOfCountry(countryCode);
      const cityList = City.getCitiesOfState(countryCode, editData.state);

      setStates(stateList);
      setCities(cityList);

      setFormData({
        firstName: editData.firstName || "",
        lastName: editData.lastName || "",
        country: geolocation.countryName,
        state: editData.state || "",
        city: editData.city || "",
        zipCode: editData.zipCode || "",
        phoneCode: geolocation.countryCallingCode,
        phone: editData.phone || "",
        address: editData.address || "",
        isDefault: editData.isDefault || false,
        type: editData.type || "",
      });

      setShowForm(true);
    }
  }, [editData, geolocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(editData ? "Updated" : "Submitted", formData);
    closeModal();
  };

  const closeModal = () => {
    setShowForm(false);
    setEditData(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const cityList = City.getCitiesOfState(geolocation.countryCode, selected);
    const firstCity = cityList[0]?.name || "";
    setCities(cityList);
    setFormData((prev) => ({ ...prev, state: selected, city: firstCity }));
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, city: e.target.value }));
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl uppercase tracking-wide font-normal flex items-center gap-2">
          <BookUser size={24} strokeWidth={1} /> My Addresses
        </h2>
        {address.length > 0 && (
          <button
            onClick={() => {
              setEditData(null);
              setShowForm(true);
            }}
            className="text-sm underline underline-offset-2"
          >
            Add New Address
          </button>
        )}
      </div>

      {address.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {address.map((item, index) => (
            <div
              key={index}
              className={cn(
                "border p-4 space-y-1.5",
                item.isDefault && "border-templateBrown/50"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-templateBrown text-xs tracking-wider inline-block">
                  {item.isDefault && "DEFAULT ADDRESS"}
                </span>
                <span
                  onClick={() => setEditData(item)}
                  className="inline-block text-sm underline underline-offset-2 cursor-pointer"
                >
                  Edit
                </span>
              </div>
              <h3 className="text-sm font-medium text-templateBrown">
                {item.firstName} {item.lastName}
              </h3>
              <p className="text-xs text-gray-700 font-light tracking-wider">
                {item.apartment}, {item.address}, {item.city}, {item.state},{" "}
                {item.country} - {item.zipCode}
              </p>
              <p className="text-xs text-gray-700 font-light tracking-wider">
                {item.phoneCode} {item.phone}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 items-center justify-center py-10">
          <MapPinned size={100} strokeWidth={0.3} color="#4f3424" />
          <p>No Address added yet</p>
          <p className="text-sm font-light">
            Click “Add Address” button below to add your delivery address
          </p>
          <button
            onClick={() => {
              setEditData(null);
              setShowForm(true);
            }}
            className="px-6 py-3 border border-templateBrown mt-2 text-sm"
          >
            Add New Address
          </button>
        </div>
      )}

      <Modal
        open={showForm}
        onCancel={closeModal}
        footer={null}
        style={{ top: "20px" }}
      >
        <div className="py-2 space-y-5">
          <h3 className="text-base text-center text-templateBrown uppercase tracking-wider font-medium">
            {editData ? "Edit Address" : "Manage Address"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4">
              <CustomInput
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
                placeholder="First Name"
                required
              />
              <CustomInput
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
                placeholder="Last Name"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-28">
                <CustomInput
                  name="phoneCode"
                  value={formData.phoneCode}
                  placeholder="Phone Code"
                  disabled
                />
              </div>
              <CustomInput
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="Phone"
                type="number"
                required
              />
            </div>
            <CustomInput
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              placeholder="Address"
              required
            />
            <CustomInput
              name="country"
              value={formData.country}
              placeholder="Country"
              disabled
            />
            <div className="flex gap-4">
              <CustomSelect
                name="state"
                value={formData.state}
                list={states.map((s) => ({ label: s.name, code: s.isoCode }))}
                required
                onChange={handleStateChange}
              />
              <CustomSelect
                name="city"
                value={formData.city}
                list={cities.map((s) => ({ label: s.name, code: s.name }))}
                required
                onChange={handleCityChange}
              />
              <CustomInput
                name="zipCode"
                value={formData.zipCode}
                onChange={handleFormChange}
                placeholder="Zip Code"
                type="number"
                required
              />
            </div>

            <div className="space-y-2">
              <p className="text-xs tracking-wide font-light">
                Save this address as (optional)
              </p>
              <div className="flex gap-2">
                {["Home", "Office", "Other"].map((item, index) => (
                  <label
                    key={index}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, type: item }))
                    }
                    className={`flex text-xs px-4 py-2 border rounded-full items-center ${
                      formData.type === item
                        ? "bg-templateBrown text-white"
                        : ""
                    }`}
                  >
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                checked={formData.isDefault}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isDefault: e.target.checked,
                  }))
                }
                type="checkbox"
              />
              <span className="text-xs tracking-wide">
                Set as default address
              </span>
            </div>

            <button
              type="submit"
              className="px-6 w-full hover:opacity-90 rounded-full text-sm tracking-wide py-4 bg-templateBrown text-white leading-none border border-templateBrown"
            >
              {editData ? "Update Address" : "Save Address"}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Address;
