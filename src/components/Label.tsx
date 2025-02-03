import React from "react";

interface LabelProps {
  text: string;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-[#414444] text-[14px] font-[600] leading-[19px] py-2">
      {text}
    </label>
  );
};

export default Label;
