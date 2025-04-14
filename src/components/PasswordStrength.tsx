import React from "react";

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isLongEnough = password?.length >= 8;

  // Calculate password strength
  let strength = 0;
  if (hasUppercase) strength += 2;
  if (hasNumber) strength += 2;
  if (isLongEnough) strength += 2;

  // bar colors based on strength
  const getBarColor = (index: number) => {
    if (strength >= 6) return "bg-[#32b56a]"; 
    if (index < strength) {
      return index < 2 ? "bg-[#d84e4e]" : index < 4 ? "bg-[#ffc107]" : "bg-[#32b56a]";
    }
    return "bg-[#e5e6e8]"; 
  };

  // password strength text
  const getStrengthText = () => {
    if (strength >= 6) return "Strong password. Must contain at least:";
    if (strength >= 4) return "Medium password. Must contain at least:";
    if (strength >= 2) return "Weak password. Must contain at least:";
    return ""; 
  };

  return (
    <div>
      <div className="flex gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`h-[4px] w-full rounded-md ${getBarColor(index)}`}
          />
        ))}
      </div>
      {password?.length > 0 && (
        <h2 className="pt-[5px] text-[12px] font-[500] leading-[16px] text-neutral-600">
          {getStrengthText()}
        </h2>
      )}
    </div>
  );
};

export default PasswordStrength;
