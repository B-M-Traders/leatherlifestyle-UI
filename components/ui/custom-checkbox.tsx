import React from "react";

interface Props {
  label?: string;
  name?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<Props> = ({
  label = "",
  name = "",
  checked = false,
  onChange,
}) => {
  return (
    <label className="flex items-center text-templateBrown text-sm font-normal cursor-pointer select-none">
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none w-[18px] h-[18px] border-2 border-templateBrown rounded-[5px] bg-transparent relative mr-2 cursor-pointer 
               before:content-[''] before:bg-templateBrown before:block 
               before:absolute before:top-1/2 before:left-1/2 
               before:transform before:-translate-x-1/2 before:-translate-y-1/2 
               before:scale-0 before:w-2.5 before:h-2.5 before:rounded-[3px] 
               checked:before:scale-100 
               transition-all duration-300 ease-in-out"
      />
      {label}
    </label>
  );
};

export default CustomCheckbox;
