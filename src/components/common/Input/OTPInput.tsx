import { useState, useRef } from "react";

interface OTPInputProps {
  length: number;
  onComplete: (otp: string) => void;
  error?: boolean;
  errorMessage?: string;
}

const OTPInput = ({ length, onComplete, error, errorMessage }: OTPInputProps) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // Handle input change for a specific OTP field
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numeric input

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move focus to the next input if a value is entered
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    const otp = newOtpValues.join("");
    if (otp.length === length) {
      onComplete(otp);
    }
  };

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length).split("");

    const newOtpValues = [...otpValues];
    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtpValues[i] = pastedData[i];
      }
    }

    setOtpValues(newOtpValues);

    // Focus on the last filled input or the next empty one
    const lastIndex = newOtpValues.findIndex((val) => !val);
    if (lastIndex !== -1 && inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex]?.focus();
    }

    // Check if OTP is complete
    const otp = newOtpValues.join("");
    if (otp.length === length) {
      onComplete(otp);
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      // Move focus to the previous input if backspace is pressed on an empty field
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Reset OTP values
//   const resetOTP = () => {
//     setOtpValues(Array(length).fill(""));
//     inputRefs.current[0]?.focus();
//   };

  return (
    <div className="flex flex-col gap-2">
      {/* OTP Input Fields */}
      <div className="flex justify-between">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={otpValues[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={`w-16 h-16 text-center text-2xl text-neutral-base font-semibold rounded-xl px-2 py-4 focus:shadow-[0_0_0_4px_#EEFBF6] focus:outline-0 border ${
              error ? "border-negative-500 focus:border-negative-500 focus:shadow-[0_1px_2px_0_#E4E5E73D]" : "border-neutral-200 focus-within:border-brand-500"
            }`}
          />
        ))}
      </div>

      {/* Error Message */}
      {error && errorMessage && (
        <p className="text-red-500 text-sm text-center">{errorMessage}</p>
      )}
    </div>
  );
};

export default OTPInput;