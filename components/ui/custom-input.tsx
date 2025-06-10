import React from "react";

interface Props {
  placeholder?: string;
  value?: string;
  type?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const CustomInput: React.FC<Props> = ({
  placeholder,
  value = "",
  type = "text",
  required,
  onChange,
  name,
}) => {
  const isFloating = value !== "";

  // Generate a unique ID to link input and label
  const id = `input-${name}`;

  return (
    <div className="w-full">
      <div className="relative ">
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder=" " // required for label animation
          className="peer w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
        <label
          htmlFor={id}
          className={`absolute cursor-text bg-white px-1 left-2.5 font-light text-slate-400 text-sm transition-all transform origin-left
            ${isFloating ? "-top-2 text-xs scale-90" : "top-3"}
            peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90`}
        >
          {placeholder || "Type Here..."}
        </label>
      </div>
    </div>
  );
};

export default CustomInput;
