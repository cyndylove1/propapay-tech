import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  stroke?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type, className, onClick, stroke ="white" }) => {
  return (
    <div className="flex items-center">
      <button
        type={type}
        className={`flex items-center justify-center font-[600] ${className}`}
        onClick={onClick}
      >
        <span className="flex items-center gap-4">
          <div>{text}</div>

          <svg
            width="10"
            height="20"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.50004 1C1.50004 1 6.49999 4.68244 6.5 6.00004C6.50001 7.31763 1.5 11 1.5 11"
              stroke={stroke}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Button;
