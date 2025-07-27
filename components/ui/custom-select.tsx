"use client";
import React from "react";

interface Props {
  list?: { label: string; code: string }[];
  label?: string;
  className?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<Props> = ({
  list = [],
  label = "",
  className = "w-full",
  name,
  value,
  defaultValue,
  required = false,
  disabled = false,
  onChange,
}) => {
  const id = `select-${name}`;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block mb-1 text-xs text-gray-600">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value ?? defaultValue}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className="w-full bg-transparent text-[#242424] text-sm border border-gray-400 rounded-md px-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-gray-600 hover:border-gray-600 shadow-sm appearance-none cursor-pointer disabled:opacity-50"
        >
          <option value="">Select...</option>
          {list.map((item, index) => (
            <option value={item.code} key={index}>
              {item.label}
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
  );
};

export default CustomSelect;
