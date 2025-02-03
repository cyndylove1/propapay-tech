import { useState, useRef } from "react";
const Otp = () => {
  const Length = 6;
  const [otp, setOtp] = useState<string[]>(new Array(Length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array(Length).fill(null),
  );
  

  const handleChange = (index: number, value: string) => {
    if (!/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < Length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (!otp[index] && index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      } else {
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  return (
    <>
      <div className="my-[40px] flex justify-center gap-3 xl:mx-0 xl:gap-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="h-12 w-12 rounded-xl border-[1px] border-[#cfd2d1] bg-[#f5f6f6] text-center text-[24px] font-[500] focus:border-[#12725b] focus:bg-[#ffff] focus:outline-none xl:h-16 xl:w-16"
          />
        ))}
      </div>
    </>
  );
};
export default Otp;
