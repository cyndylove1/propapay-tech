import { useState, useEffect } from "react";
import EyeToggle from "../EyeToggle";
import Btn from "../common/Btn";
import payment from "@/assets/images/Flexible Widget-1.png"

interface PaymentMenuProps {
  isOpenMenu: boolean;
  onClose: () => void;
}

const ReminderEdit: React.FC<PaymentMenuProps> = ({ isOpenMenu, onClose }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showVisibility, setShowVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setShowVisibility((prev) => !prev);
  };

  useEffect(() => {
    if (isOpenMenu) {
      setTimeout(() => setShowMenu(true), 100);
      document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
      setShowMenu(false);
      document.body.classList.remove("overflow-hidden"); // Restore scrolling
    }

    return () => document.body.classList.remove("overflow-hidden"); // Cleanup
  }, [isOpenMenu]);

  if (!isOpenMenu) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className={`w-[448px] transform overflow-y-auto rounded-lg bg-neutral-50 shadow-lg transition-all duration-300 ${
          showMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between p-2 p-4">
          <h2 className="text-xl font-semibold">Payment Reminders</h2>
          <span
            onClick={() => {
              setShowMenu(false);
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

        {/* Reminder Details */}
        <div className="mx-[10px] rounded-xl border-[1px] border-neutral-200 bg-white p-2">
          <div className="relative w-full pb-4">
            {/* Background Image */}
            <img
              src={payment}
              alt=""
              className="h-[120px] w-full rounded-xl border-[1px] border-neutral-200 object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              {/* Top Section */}
              <div className="flex items-center justify-between">
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

          {/* form */}
          <div>
            <div className="mx-2 mt-4 flex h-[72px] items-center justify-between rounded-xl border-[1px] border-neutral-200 p-[16px]">
              <div className="flex items-center gap-4">
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                      fill="url(#paint0_linear_3437_26473)"
                    />
                    <path
                      d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                      stroke="#C1F1D5"
                    />
                    <path
                      d="M12.1089 22.3083C11.9317 23.47 12.724 24.2763 13.694 24.6782C17.413 26.2188 22.5883 26.2188 26.3073 24.6782C27.2773 24.2763 28.0696 23.47 27.8924 22.3083C27.7835 21.5944 27.245 20.9999 26.846 20.4194C26.3234 19.6497 26.2715 18.8102 26.2714 17.917C26.2714 14.4652 23.4639 11.667 20.0007 11.667C16.5374 11.667 13.7299 14.4652 13.7299 17.917C13.7298 18.8102 13.6779 19.6497 13.1553 20.4194C12.7563 20.9999 12.2178 21.5944 12.1089 22.3083Z"
                      stroke="#12725B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.668 25.834C17.05 27.2717 18.3976 28.334 20.0013 28.334C21.605 28.334 22.9526 27.2717 23.3346 25.834"
                      stroke="#12725B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_3437_26473"
                        x1="20"
                        y1="0"
                        x2="20"
                        y2="40"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#F1FCF5" />
                        <stop offset="1" stop-color="#C1F1D5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div>
                  <h3 className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                    Watercress Crescent Home
                  </h3>
                  <h5 className="text-[12px] font-[500] leading-[16px] text-neutral-700">
                    Daily reminder for the payment of ₦300,000
                  </h5>
                </div>
              </div>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7274 3.2382C12.3484 2.56539 12.6589 2.22899 12.9889 2.03276C13.785 1.55929 14.7653 1.54457 15.5746 1.99393C15.9101 2.18016 16.2301 2.50709 16.8702 3.16096C17.5103 3.81483 17.8303 4.14176 18.0126 4.48443C18.4525 5.31126 18.4381 6.31265 17.9746 7.12591C17.7825 7.46296 17.4532 7.78014 16.7946 8.4145L8.95821 15.9622C7.71008 17.1644 7.08602 17.7655 6.30607 18.0701C5.52612 18.3747 4.66868 18.3523 2.95382 18.3075L2.7205 18.3014C2.19844 18.2877 1.93741 18.2809 1.78567 18.1087C1.63393 17.9365 1.65465 17.6706 1.69608 17.1388L1.71858 16.85C1.83519 15.3533 1.89349 14.6049 2.18577 13.9322C2.47805 13.2594 2.98221 12.7132 3.99054 11.6207L11.7274 3.2382Z"
                    stroke="#1C1D1E"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.832 3.33398L16.6654 9.16732"
                    stroke="#1C1D1E"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.666 18.334L18.3327 18.334"
                    stroke="#1C1D1E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div>
              <div className="mx-2 mt-[10rem] flex items-center justify-between gap-[24px]">
                <div className="w-full rounded-[8px] border-[1px] border-neutral-200">
                  <Btn
                    text="Cancel"
                    type="button"
                    className="text-[14px] font-[600] leading-[20px] text-neutral-700"
                  />
                </div>
                <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-[8px] bg-brand-base text-white">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3.33301V16.6663"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.33398 10H16.6673"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h2 className="text-[14px] font-[600] leading-[20px]">
                    Add Reminder
                  </h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderEdit;
