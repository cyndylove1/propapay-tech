import { useState, useEffect } from "react";
import EyeToggle from "./EyeToggle";
import Label from "./common/Label";
import DateInput from "./common/DateInput";
import SelectTag from "./common/SelectTag";
import Btn from "./common/Btn";
import Button from "./common/Button";
import Input from "./common/Input";

interface SchedulePaymentMenuProps {
  isScheduleMenu: boolean;
  onClose: () => void;
}

const SchedulePaymentMenu: React.FC<SchedulePaymentMenuProps> = ({
  isScheduleMenu,
  onClose,
}) => {
  const [scheduleMenu, setScheduleMenu] = useState(false);
  const [showVisibility, setShowVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setShowVisibility((prev) => !prev);
  };

  useEffect(() => {
    if (isScheduleMenu) {
      setTimeout(() => setScheduleMenu(true), 100);
      document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
      setScheduleMenu(false);
      document.body.classList.remove("overflow-hidden"); // Restore scrolling
    }

    return () => document.body.classList.remove("overflow-hidden"); // Cleanup
  }, [isScheduleMenu]);

  if (!isScheduleMenu) return null;

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
          <h2 className="text-xl font-semibold">Schedule Payments</h2>
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

        {/* Request Details */}
        <div className="mx-[10px] rounded-xl border-[1px] border-neutral-200 bg-white p-2">
          <div className="">
            <div className="m-2 h-[128px] rounded-2xl border-[1px] border-neutral-200 bg-neutral-50">
              <div className="flex items-center justify-between px-4 pt-4">
                <h2 className="text-[16px] font-[600] leading-[24px] text-neutral-700">
                  Available Balance
                </h2>
                <div className="flex h-[32px] w-[32px] justify-center rounded-full bg-neutral-950">
                  <EyeToggle
                    showVisibility={showVisibility}
                    togglePasswordVisibility={togglePasswordVisibility}
                  />
                </div>
              </div>
              <h2 className="px-4 text-[36px] font-[700]">
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
                <Label text="Amount" />
                <div className="focus-within:border-brand-500 flex h-[48px] items-center gap-[7px] rounded-xl border-[1px] border-neutral-200 px-4">
                  <span>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.24481 18V11.832H0.372813V10.296H2.24481V8.328H0.372813V6.792H2.24481V0.863999H4.74081L7.02081 6.792H9.85281V0.863999H11.7488V6.792H13.6208V8.328H11.7488V10.296H13.6208V11.832H11.7488V18H9.22881L6.94881 11.832H4.11681V18H2.24481ZM4.11681 10.296H6.37281L5.65281 8.328H4.06881L4.11681 10.296ZM9.85281 14.616H9.94881L9.87681 11.832H8.86881L9.85281 14.616ZM4.06881 6.792H5.07681L4.06881 3.816H3.97281L4.06881 6.792ZM8.29281 10.296H9.90081L9.85281 8.328H7.57281L8.29281 10.296Z"
                        fill="#888D93"
                      />
                    </svg>
                  </span>
                  <Input className="text-neutral-500 w-full bg-transparent border-none outline-none" />
                </div>
              </div>
              <div className="py-2">
                <Label text="Property" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-950">
                  <option className="">Watercress Crescent Home</option>
                  <option></option>
                </SelectTag>
              </div>
              <div className="py-2">
                <Label text="Frequency" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-950">
                  <option className="">Weekly</option>
                  <option></option>
                </SelectTag>
              </div>
              <div className="py-2">
                <Label text="Day of the Week" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-950">
                  <option className="">Monday</option>
                  <option></option>
                </SelectTag>
              </div>
              <div className="py-2">
                <Label text="Payment Method" />
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 text-[14px] leading-[20px] text-neutral-950">
                  <option className="">Wallet</option>
                  <option>Nigeria</option>
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
                  type="button"
                  className="bg-brand-base h-[48px] w-full rounded-[8px] text-[14px] text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SchedulePaymentMenu;
