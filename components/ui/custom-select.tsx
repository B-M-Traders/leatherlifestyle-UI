import React from "react";

interface Props {
  list?: string[];
  label?: string;
  className?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}

const CustomSelect: React.FC<Props> = ({
  list = [],
  label,
  className,
  value = "",
  name,
  onChange,
  required,
}) => {
  const id = `select-${name}`;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="peer w-full bg-transparent text-[#242424] text-sm border border-gray-400 rounded-md px-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow-md appearance-none cursor-pointer"
        >
          {list.map((item, index) => (
            <option value={item} defaultValue={value[0]} key={index}>
              {item}
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
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomSelect;
