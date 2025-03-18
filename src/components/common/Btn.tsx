import React from "react";

interface BtnProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Btn: React.FC<BtnProps> = ({ text, type, className }) => {
  return (
    <div className="flex justify-center">
      <button type={type} className={`font-[600] ${className}`}>
        {text}
      </button>
    </div>
  );
};

export default Btn;
