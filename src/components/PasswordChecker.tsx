import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";

interface PasswordCheckerProps {
  password: string;
}

const PasswordChecker: React.FC<PasswordCheckerProps> = ({ password }) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isLongEnough = password?.length >= 8;

  return (
    <div className="validation">
      <div className="flex items-center gap-[12px]">
        <span className={hasUppercase ? "text-[#32b56a]" : "text-[#888D93]"}>
          {hasUppercase ? <IoCheckmarkCircle /> : <IoIosCloseCircle />}
        </span>
        <h2 className="text-[12px] text-neutral-600">At least 1 uppercase</h2>
      </div>
      <div className="flex items-center gap-[12px] py-[4px]">
        <span className={hasNumber ? "text-[#32b56a]" : "text-[#888D93]"}>
          {hasNumber ? <IoCheckmarkCircle /> : <IoIosCloseCircle />}
        </span>
        <h2 className="text-[12px] text-neutral-600">At least 1 number</h2>
      </div>
      <div className="flex items-center gap-[12px]">
        <span className={isLongEnough ? "text-[#32b56a]" : "text-[#888D93]"}>
          {isLongEnough ? <IoCheckmarkCircle /> : <IoIosCloseCircle />}
        </span>
        <h2 className="text-[12px] text-neutral-600">At least 8 characters</h2>
      </div>
    </div>
  );
};

export default PasswordChecker;
