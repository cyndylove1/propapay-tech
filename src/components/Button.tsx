import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  className = "",
}) => {
  return (
    <div className="flex justify-center">
      <button
        type={type}
        className={`h-[56px] w-full rounded-xl bg-[#12725b] font-[600] text-white md:w-[480px] mx-4 xl:mx-0 ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
