import React from "react";

interface LabelProps {
  text: string;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-[14px] font-[600] leading-[19px] text-[#414444] dark:text-[#c4c7cd] ${className}`}
    >
      {text}
    </label>
  );
};

export default Label;
