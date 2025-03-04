import React, { ReactNode } from "react";

interface SelectTagProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
  className?: string;
  iconClassName?: string; 
}

const SelectTag: React.FC<SelectTagProps> = ({
  value,
  onChange,
  children,
  className,
  iconClassName,
}) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        className={`appearance-none border-[1px] border-[#cfd2d1] focus:outline-none ${className}`}
      >
        {children}
      </select>

      {/* Dropdown Icon */}
      <svg
        className={`text-gray-500 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform ${iconClassName}`}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
      >
        <path
          d="M11 1.50004C11 1.50004 7.31756 6.49999 5.99996 6.5C4.68237 6.50001 1 1.5 1 1.5"
          stroke="#696E71"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default SelectTag;
