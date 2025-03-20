import { useState, useEffect } from "react";
import EyeToggle from "./EyeToggle";
import Label from "./common/Label";
import DateInput from "./common/DateInput";
import SelectTag from "./common/SelectTag";
import Btn from "./common/Btn";
import Button from "./common/Button";
import Input from "./common/Input/Input";
import schedule from "@/assets/images/Flexible Widget.png";

interface AutoPaymentMenuProps {
  isAutoSaveMenu: boolean;
  onClose: () => void;
}

const AutoSaveMenu: React.FC<AutoPaymentMenuProps> = ({
  isAutoSaveMenu,
  onClose,
}) => {
  const [scheduleMenu, setScheduleMenu] = useState(false);
  const [showVisibility, setShowVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setShowVisibility((prev) => !prev);
  };

  useEffect(() => {
    if (isAutoSaveMenu) {
      setTimeout(() => setScheduleMenu(true), 100);
      document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
      setScheduleMenu(false);
      document.body.classList.remove("overflow-hidden"); // Restore scrolling
    }

    return () => document.body.classList.remove("overflow-hidden"); // Cleanup
  }, [isAutoSaveMenu]);

  if (!isAutoSaveMenu) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className={`w-[448px] transform overflow-y-auto rounded-lg bg-neutral-50 shadow-lg transition-all duration-300 ${
          scheduleMenu
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between p-2 p-4">
          <h2 className="text-xl font-semibold">Auto Save</h2>
          <span
            onClick={() => {
              setScheduleMenu(false);
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

        {/* schedule Details */}
        <div className="mx-[10px] rounded-xl border-[1px] border-neutral-200 bg-white p-4">
          <div className="relative w-full pb-4">
            {/* Background Image */}
            <img
              src={schedule}
              alt=""
              className="h-[112px] w-full rounded-xl border-[1px] border-neutral-200 object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              {/* Top Section */}
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-[600] leading-[24px] text-neutral-700">
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
              <h2 className="text-[30px] font-[700] pb-4">
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
                <Label text="Property" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-base">
                  <option className="">Watercress Crescent Home</option>
                  <option></option>
                </SelectTag>
              </div>
              <div className="py-2">
                <Label text="Amount" />
                <div className="relative flex h-[48px] items-center justify-between rounded-xl border-[1px] border-neutral-200 px-4 focus-within:border-brand-500">
                  <Input className="text-neutral-500 w-full bg-transparent border-none outline-none" />
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      NGN
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <Label text="Frequency" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-base">
                  <option className="">Weekly</option>
                  <option></option>
                </SelectTag>
              </div>
              <div className="py-2">
                <Label text="Day of the Weekly" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-base">
                  <option className="">10th</option>
                  <option></option>
                </SelectTag>
              </div>
              <div className="py-2">
                <Label text="Time" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-base">
                  <option className="">12:00pm</option>
                </SelectTag>
              </div>
              <div className="py-2">
                <Label text="Funding Source" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-base">
                  <option className="">Wallet Balance</option>
                </SelectTag>
              </div>
              <div className="py-2">
                <Label text="Start Date" />
                <DateInput />
              </div>
              <div className="py-2">
                <Label text="End Date" />
                <DateInput />
              </div>
            </div>
            <div className="mx-2 mt-6 h-[68px] rounded-xl border-[1px] border-neutral-200 bg-neutral-50 py-2 px-4">
              <h5 className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                Next payment
                <span className="text-neutral-600">
                  (based on your settings)
                </span>
              </h5>
              <h6 className="text-[12px] font-[600] leading-[16px] text-neutral-base pt-[2px]">
                October 10, 2025 <span className="font-[500]">for</span> ₦300,000
              </h6>
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
                  text="Save Changes"
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

export default AutoSaveMenu;
