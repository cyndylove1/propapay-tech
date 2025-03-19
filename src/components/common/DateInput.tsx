import React, { useRef } from "react";

interface DateInputProps {
  className?: string;
}

const DateInput: React.FC<DateInputProps> = ({ className }) => {
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <div
      className={`focus:border-brand-500 relative flex h-[48px] items-center rounded-xl border-[1px] border-neutral-200 px-4 ${className}`}
    >
      <button
        type="button"
        onClick={handleIconClick}
        className="absolute left-0 px-4 cursor-pointer"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1.66699V3.33366M5 1.66699V3.33366"
            stroke="#6B6F75"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.99756 10.834H10.005M9.99756 14.1673H10.005M13.3272 10.834H13.3346M6.66797 10.834H6.67545M6.66797 14.1673H6.67545"
            stroke="#6B6F75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.91797 6.66699H17.0846"
            stroke="#6B6F75"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.08398 10.2027C2.08398 6.57161 2.08398 4.75607 3.12742 3.62803C4.17085 2.5 5.85023 2.5 9.20898 2.5H10.7923C14.1511 2.5 15.8305 2.5 16.8739 3.62803C17.9173 4.75607 17.9173 6.57161 17.9173 10.2027V10.6306C17.9173 14.2617 17.9173 16.0773 16.8739 17.2053C15.8305 18.3333 14.1511 18.3333 10.7923 18.3333H9.20898C5.85023 18.3333 4.17085 18.3333 3.12742 17.2053C2.08398 16.0773 2.08398 14.2617 2.08398 10.6306V10.2027Z"
            stroke="#6B6F75"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 6.66699H17.5"
            stroke="#6B6F75"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <input
        type="date"
        ref={dateInputRef}
        className="w-full cursor-pointer appearance-none bg-transparent p-2 px-8 text-[14px] font-medium leading-[20px] text-neutral-950 outline-none [&::-webkit-calendar-picker-indicator]:hidden"
      />
    </div>
  );
};

export default DateInput;
