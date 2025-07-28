"use client";
import FallbackImage from "@/components/Cards/FallbackImage";
import CustomInput from "@/components/ui/custom-input";
import {
  measurementData,
  measurementInfo,
  mockMeasurements,
} from "@/lib/mockData";
import React, { useState } from "react";

type MeasurementFieldKey = keyof typeof measurementData;
type Gender = "Male" | "Female" | "Other";

interface FormData {
  id?: number;
  name: string;
  type: string;
  gender: Gender;
  height: string;
  weight: string;
  info: string;
  [key: string]: string | number | undefined;
}

const MeasurementEdit = ({ id }: { id: number }) => {
  const measurementDataItem = mockMeasurements.find(
    (item) => item.id === Number(id)
  );

  const matchedKey = Object.keys(measurementData).find(
    (key) => key.toLowerCase() === measurementDataItem?.type?.toLowerCase()
  ) as MeasurementFieldKey | undefined;

  const [formData, setFormData] = useState<FormData>({
    id: measurementDataItem?.id,
    name: measurementDataItem?.name || "",
    type: measurementDataItem?.type || "",
    gender: (measurementDataItem?.gender as Gender) || "Male",
    height: "",
    weight: "",
    info: "",
    ...(matchedKey
      ? Object.fromEntries(
          measurementData[matchedKey].map((field) => [field, ""])
        )
      : {}),
  });

  const [activeField, setActiveField] = useState<
    keyof typeof measurementInfo | null
  >(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = (e: any) => {
    setActiveField(e.target.name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("✅ Submitting form:", formData);
  };

  const dynamicFields = matchedKey ? measurementData[matchedKey] : [];

  const currentHelp = activeField
    ? measurementInfo[activeField]
    : matchedKey && measurementData[matchedKey][0]
    ? measurementInfo[
        measurementData[matchedKey][0] as keyof typeof measurementInfo
      ]
    : null;

  return (
    <div className="space-y-6">
      <h2 className="text-lg text-templateBrown lg:text-xl font-normal">
        Edit measurements
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <CustomInput
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <CustomInput
              name="type"
              type="text"
              value={formData.type}
              disabled
              placeholder="Type"
            />
            <CustomInput
              name="gender"
              type="text"
              value={formData.gender}
              disabled
              placeholder="Gender"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CustomInput
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
              placeholder="Height in inches"
            />
            <CustomInput
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Weight in kg"
            />
          </div>
          <CustomInput
            name="info"
            value={formData.info}
            onChange={handleChange}
            type="text"
            placeholder="Info"
          />

          {dynamicFields.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left: Inputs */}
              <div onFocus={handleFocus} className="flex flex-col gap-4">
                {dynamicFields.map((field) => {
                  const info =
                    measurementInfo[field as keyof typeof measurementInfo];
                  return (
                    <CustomInput
                      key={field}
                      name={field}
                      type="number"
                      value={(formData[field] as string) || ""}
                      onChange={handleChange}
                      placeholder={field}
                      min={Number(info?.min)}
                      max={Number(info?.max)}
                    />
                  );
                })}
              </div>

              {/* Right: Help Box */}
              {currentHelp && (
                <div className="p-4 border rounded-lg bg-gray-50 space-y-2 text-sm">
                  <p className="">{currentHelp.label}</p>
                  <p className="font-light text-[13px] leading-tight tracking-wide">
                    {currentHelp.info}
                  </p>
                  <FallbackImage
                    src={currentHelp.imgsrc[formData.gender || "Male"]}
                    height={600}
                    width={600}
                    alt={currentHelp.label}
                    className="w-full h-auto rounded-md mt-2"
                  />
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-red-500">
              No measurements available for this type.
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-templateBrown w-full lg:w-auto text-sm font-light tracking-wide text-white px-4 py-2.5 lg:py-2 rounded hover:bg-templateBrown/80 transition-colors duration-200"
          >
            Update Measurement
          </button>
        </div>
      </form>
    </div>
  );
};

export default MeasurementEdit;
