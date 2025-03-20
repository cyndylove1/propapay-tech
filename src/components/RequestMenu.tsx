import { useState, useEffect } from "react";
import EyeToggle from "./EyeToggle";
import Label from "./common/Label";
import DateInput from "./common/DateInput";
import SelectTag from "./common/SelectTag";
import InputEmail from "./common/InputEmail";
import Btn from "./common/Btn";
import Button from "./common/Button";
import request from "@/assets/images/Flexible Widget-3.png"

interface RequestMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestMenu: React.FC<RequestMenuProps> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [showVisibility, setShowVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setShowVisibility((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowModal(true), 100);
      document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
      setShowModal(false);
      document.body.classList.remove("overflow-hidden"); // Restore scrolling
    }

    return () => document.body.classList.remove("overflow-hidden"); // Cleanup
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className={`w-[448px] transform overflow-y-auto rounded-lg bg-neutral-50 shadow-lg transition-all duration-300 ${
          showModal ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between p-2 p-4">
          <h2 className="text-xl font-semibold">Request Statement</h2>
          <span
            onClick={() => {
              setShowModal(false);
              setTimeout(onClose, 500);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8337 6.1665L6.16699 17.8332M6.16699 6.1665L17.8337 17.8332"
                stroke="#1C1D1E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>

        {/* Request Details */}
        <div className="mx-[10px] rounded-xl border-[1px] border-neutral-200 bg-white p-4">
          <div className="relative w-full pb-4">
            {/* Background Image */}
            <img
              src={request}
              alt=""
              className="h-[120px] w-full rounded-xl border-[1px] border-neutral-200 object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              {/* Top Section */}
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-[600] leading-[24px] text-neutral-700 ">
                  Available Balance
                </h2>
                <div className="flex h-[32px] w-[32px] justify-center rounded-full bg-neutral-base">
                  <EyeToggle
                    showVisibility={showVisibility}
                    togglePasswordVisibility={togglePasswordVisibility}
                  />
                </div>
              </div>

              {/* Balance Text */}
              <h2 className="text-[36px] font-[700]">
                {showVisibility ? (
                  <>
                    <span>&#8358;</span>861,375
                    <span className="text-neutral-500">.42</span>
                  </>
                ) : (
                  "* * * * * * *"
                )}
              </h2>
            </div>
          </div>

          {/* form input */}
          <form action="">
            <div className="px-2">
              <div className="py-2">
                <Label text="Start Date" />
                <DateInput />
              </div>
              <div className="py-2">
                <Label text="End Date" />
                <DateInput />
              </div>
              <div className="py-2">
                <Label text="Email Address" />
                <InputEmail
                  type="email"
                  placeholder="Enter your email Address"
                  id="email"
                />
              </div>
              <div className="py-2">
                <Label text="File Type" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-base">
                  <option className="">PDF</option>
                  <option></option>
                </SelectTag>
              </div>
            </div>
            {/* button */}
            <div className="mx-2 mt-[10rem] flex items-center justify-between gap-[24px]">
              <div className="w-full rounded-[8px] border-[1px] border-neutral-200">
                <Btn
                  text="Cancel"
                  type="button"
                  className="h-[48px] text-[14px] font-[600] leading-[20px] text-neutral-700"
                />
              </div>
              <div className="w-full">
                <Button
                  text="Continue"
                  type="submit"
                  className="h-[48px] w-full rounded-[8px] bg-brand-base text-[14px] text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestMenu;
