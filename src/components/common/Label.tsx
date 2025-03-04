import React from "react";

interface LabelProps {
  text: string;
  htmlFor?: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor, className }) => {
  return (
    <label htmlFor={htmlFor} className={`text-[#414444] text-[14px] font-[600] leading-[19px]  ${className}`}>
      {text}
    </label>
  );
};

export default Label;
