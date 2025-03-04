import { useState, useRef } from "react";

const DateSelection = () => {
    const [date, setDate] = useState<string>("");
     const dateRef = useRef<HTMLInputElement>(null);
    return (
      <>
        <div
          className="flex items-center gap-2 p-2 rounded-lg cursor-pointer"
          onClick={() => dateRef.current?.showPicker()}
        >
          <span>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.66667 2.49984H4C2.61929 2.49984 1.5 3.61913 1.5 4.99984V7.49984M5.66667 2.49984V1.6665M5.66667 2.49984H12.3333M5.66667 2.49984V3.33317M12.3333 2.49984H14C15.3807 2.49984 16.5 3.61913 16.5 4.99984V7.49984M12.3333 2.49984V1.6665M12.3333 2.49984V3.33317M1.5 7.49984V15.8332C1.5 17.2139 2.61929 18.3332 4 18.3332H14C15.3807 18.3332 16.5 17.2139 16.5 15.8332V7.49984M1.5 7.49984H16.5M10.25 10.4165H12.75L10.6667 14.5832M7.75 11.6665V13.3332C7.75 14.0235 7.19036 14.5832 6.5 14.5832C5.80964 14.5832 5.25 14.0235 5.25 13.3332V11.6665C5.25 10.9761 5.80964 10.4165 6.5 10.4165C7.19036 10.4165 7.75 10.9761 7.75 11.6665Z"
                stroke="#808897"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="text-[16px] font-[400] leading-[24px] tracking-wide text-[#0D0D12]">
            {date ? date : "Select Date"}
          </span>
        </div>
        <input
          ref={dateRef}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="hidden"
        />
      </>
    );
}
export default DateSelection;