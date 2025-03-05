import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  id?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, id, className }) => {
  return (
    <>
      <div className="">
        <div
          className={`flex items-center gap-[7px] rounded-xl border-[1px] border-[#cfd2d1] px-4 ${className}`}
        >
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="bg-none w-full outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default Input;
