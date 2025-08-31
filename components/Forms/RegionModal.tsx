"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";

interface Region {
  country: string;
  countryCode: string;
  currency: string;
}

interface RegionModalProps {
  initialRegion: Region | null;
}

const data: Region[] = [
  { country: "India", countryCode: "IN", currency: "INR" },
  { country: "United States", countryCode: "US", currency: "USD" },
];

const defaultRegion: Region = {
  country: "United States",
  countryCode: "US",
  currency: "USD",
};

const RegionModal: React.FC<RegionModalProps> = ({ initialRegion }) => {
  const [showModal, setShowModal] = useState(!initialRegion);
  const [country, setCountry] = useState(
    initialRegion?.country || defaultRegion.country
  );
  const [currency, setCurrency] = useState(
    initialRegion?.currency || defaultRegion.currency
  );
  const [countryCode, setCountryCode] = useState(
    initialRegion?.countryCode || defaultRegion.countryCode
  );

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    const found = data.find((item) => item.country === selectedCountry);
    if (found) {
      setCurrency(found.currency);
      setCountryCode(found.countryCode);
    }
  };

  const saveRegion = (region: Region) => {
    Cookies.set("region", JSON.stringify(region), { expires: 7 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    saveRegion({ country, currency, countryCode });
    setShowModal(false);
    window.location.reload();
  };

  const handleClose = () => {
    saveRegion(defaultRegion);
    setCountry(defaultRegion.country);
    setCurrency(defaultRegion.currency);
    setCountryCode(defaultRegion.countryCode);
    setShowModal(false);
    window.location.reload();
  };

  return (
    <div className="text-black">
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer flex text-sm font-light tracking-wide items-center gap-2 text-white"
      >
        <img
          className="h-7 w-auto"
          src={`https://flagsapi.com/${initialRegion?.countryCode}/flat/64.png`}
          alt={country}
        />
        <p>{initialRegion?.country}</p>|<p>{initialRegion?.currency}</p>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white shadow-lg  space-y-6 max-w-xl w-full px-6 lg:px-10 pt-6 pb-10 relative">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="space-y-1 text-left ">
              <h2 className="text-xl font-normal text-templateBrown">
                Welcome to Artisan Hide
              </h2>
              <p className="text-[13px] tracking-wide opacity-90 font-light">
                Please confirm or select correct country and currency.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-left block mb-1 text-xs font-light">
                  COUNTRY
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={country}
                    onChange={handleCountryChange}
                    className="w-full bg-transparent text-[#242424] text-sm border border-gray-400 rounded-md px-3 pr-8 py-3 focus:outline-none focus:border-gray-600 hover:border-gray-600 shadow-sm appearance-none cursor-pointer"
                  >
                    {data.map((item, index) => (
                      <option value={item.country} key={index}>
                        {item.country}
                      </option>
                    ))}
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    className="h-5 w-5 absolute top-3 right-3 text-slate-700 pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <label className=" text-left block mb-1 text-xs font-light">
                  CURRENCY
                </label>
                <input
                  type="text"
                  value={currency}
                  disabled
                  className="w-full text-[#000000] text-sm border font-light border-gray-300 rounded-md px-3 py-3 shadow-sm opacity-60 bg-gray-200"
                />
              </div>

              <div className="flex items-center justify-start">
                <button
                  type="submit"
                  className="px-8 uppercase  tracking-wide py-3 font-light text-sm rounded-md bg-templateBrown text-white hover:bg-brown-700 transition"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionModal;
