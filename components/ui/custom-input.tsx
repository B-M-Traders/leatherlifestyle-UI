"use client";
import React, { useState } from "react";

interface Props {
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  type?: string;
  className?: string;
  min?: number;
  max?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<Props> = ({
  type = "text",
  name = "",
  value,
  defaultValue = "",
  placeholder = "Type here...",
  required = false,
  disabled = false,
  className = "w-full",
  min,
  max,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const controlled = value !== undefined;

  const inputValue = controlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!controlled) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const isFloating = inputValue?.length > 0;
  const id = `input-${name}`;

  return (
    <div className={className}>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={inputValue}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          placeholder=" "
          {...(type === "number" && typeof min !== "undefined" ? { min } : {})}
          {...(type === "number" && typeof max !== "undefined" ? { max } : {})}
          className={`peer w-full text-[#000000] text-sm border font-light border-gray-400 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow disabled:opacity-50 ${
            disabled ? "cursor-not-allowed bg-gray-50" : "bg-transparent"
          }`}
        />
        <label
          htmlFor={id}
          className={`absolute cursor-text bg-white px-1 left-2.5 font-light text-gray-500 text-sm transition-all transform origin-left
            ${isFloating ? "-top-2 text-xs scale-90" : "top-3"}
            peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90`}
        >
          {placeholder}
          {required ? (
            <span className="text-red-500"> *</span>
          ) : (
            <span className="text-gray-400 text-xs"></span>
          )}
        </label>
      </div>
    </div>
  );
};

export default CustomInput;
