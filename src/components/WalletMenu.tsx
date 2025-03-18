import { useEffect, useRef, useState } from "react";
import RequestMenu from "./RequestMenu";
import SchedulePaymentMenu from "./SchedulePaymentMenu";
import PaymentReminder from "./PaymentReminder/PaymentReminder";

interface WalletMenuProps {
  WalletMenu: () => void;
}

const WalletMenu: React.FC<WalletMenuProps> = ({ WalletMenu }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [scheduleOpen, setScheduleOpen] = useState<boolean>(false);
  

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        WalletMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [WalletMenu]);

  return (
    <>
      {/* Black background overlay */}
      <div
        className="fixed inset-0 bg-[#000] bg-opacity-50 transition-opacity"
        onClick={WalletMenu}
      ></div>

      {/* Dropdown menu */}
      <div className="absolute lg:left-[35rem] top-[20rem] left-[2rem] z-50 w-[200px] translate-x-0 transform rounded-md bg-white shadow-md transition-transform">
        <ul className="flex flex-col">
          <li
            className={`justify-left flex cursor-pointer items-center gap-[12px] rounded-md px-6 py-2 py-[5px] ${
              activeItem === "auto-save"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => {
              setActiveItem("auto-save");
            }}
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.335 11.25C13.335 11.9404 13.8946 12.5 14.585 12.5C15.2753 12.5 15.835 11.9404 15.835 11.25C15.835 10.5596 15.2753 10 14.585 10C13.8946 10 13.335 10.5596 13.335 11.25Z"
                  stroke={activeItem === "auto-save" ? "#12725B" : "#6B6F75"}
                  stroke-width="1.5"
                />
                <path
                  d="M1.66895 9.16667C1.66895 6.02397 1.66895 4.45262 2.64526 3.47631C3.62157 2.5 5.19292 2.5 8.33561 2.5H11.6689C12.4439 2.5 12.8314 2.5 13.1493 2.58519C14.0121 2.81635 14.6859 3.49022 14.9171 4.35295C15.0023 4.67087 15.0023 5.05836 15.0023 5.83333M8.33561 5.83333H13.3356C15.6926 5.83333 16.8711 5.83333 17.6034 6.56557C18.3356 7.2978 18.3356 8.47631 18.3356 10.8333V12.5C18.3356 14.857 18.3356 16.0355 17.6034 16.7678C16.8711 17.5 15.6926 17.5 13.3356 17.5H10.4177"
                  stroke={activeItem === "auto-save" ? "#12725B" : "#6B6F75"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M8.33366 14.1663H5.00033M5.00033 14.1663H1.66699M5.00033 14.1663V17.4997M5.00033 14.1663L5.00033 10.833"
                  stroke={activeItem === "auto-save" ? "#12725B" : "#6B6F75"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "auto-save"
                  ? "text-brand-base"
                  : "text-neutral-700"
              }`}
            >
              Auto Save
            </h2>
          </li>
          <li
            className={`justify-left flex cursor-pointer items-center gap-[12px] rounded-md px-6 py-2 ${
              activeItem === "request-statement"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => {
              setModalOpen(true);
              setActiveItem("request-statement");
            }}
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.50012 11.667L2.69499 12.2191C3.45345 14.3681 3.83269 15.4426 4.69797 16.0548C5.56325 16.667 6.7027 16.667 8.98159 16.667H11.0187C13.2975 16.667 14.437 16.667 15.3023 16.0548C16.1676 15.4426 16.5468 14.3681 17.3053 12.2191L17.5001 11.667"
                  stroke={
                    activeItem === "request-statement" ? "#12725b" : "#6B6F75"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M10.0001 11.6668V3.3335M10.0001 11.6668C9.41662 11.6668 8.32642 10.0049 7.91681 9.5835M10.0001 11.6668C10.5837 11.6668 11.6739 10.0049 12.0835 9.5835"
                  stroke={
                    activeItem === "request-statement" ? "#12725b" : "#6B6F75"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "request-statement"
                  ? "text-[#12725B]"
                  : "text-neutral-700"
              }`}
            >
              Request Statement
            </h2>
          </li>

          <li
            className={`justify-left flex cursor-pointer items-center gap-[12px] rounded-md px-6 py-2 ${
              activeItem === "payment-reminder"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => {
              setMenuOpen(true);
              setActiveItem("payment-reminder");
            }}
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.10794 12.3083C1.93073 13.47 2.72301 14.2763 3.69305 14.6782C7.41201 16.2188 12.5873 16.2188 16.3063 14.6782C17.2763 14.2763 18.0686 13.47 17.8914 12.3083C17.7825 11.5944 17.244 10.9999 16.845 10.4194C16.3224 9.64971 16.2705 8.81018 16.2704 7.91699C16.2704 4.46521 13.4629 1.66699 9.99968 1.66699C6.53645 1.66699 3.72895 4.46521 3.72895 7.91699C3.72887 8.81018 3.67694 9.64971 3.15435 10.4194C2.75537 10.9999 2.21685 11.5944 2.10794 12.3083Z"
                  stroke={
                    activeItem === "payment-reminder" ? "#12725b" : "#6B6F75"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66602 15.834C7.04809 17.2717 8.39562 18.334 9.99935 18.334C11.6031 18.334 12.9506 17.2717 13.3327 15.834"
                  stroke={
                    activeItem === "payment-reminder" ? "#12725b" : "#6B6F75"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "payment-reminder"
                  ? "text-[#12725B]"
                  : "text-neutral-700"
              }`}
            >
              Payment Reminders
            </h2>
          </li>
          <li
            className={`justify-left flex cursor-pointer items-center gap-[12px] rounded-md px-6 py-2 ${
              activeItem === "schedule-payments"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => {
              setScheduleOpen(true);
              setActiveItem("schedule-payments");
            }}
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16602 10.834H13.3327M6.66602 10.834H6.6735M10.8327 14.1673H6.66602M13.3327 14.1673H13.3252"
                  stroke={
                    activeItem === "schedule-payments" ? "#12725b" : "#6B6F75"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 1.66699V3.33366M5 1.66699V3.33366"
                  stroke={
                    activeItem === "schedule-payments" ? "#12725b" : "#6B6F75"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.08301 10.2027C2.08301 6.57161 2.08301 4.75607 3.12644 3.62803C4.16987 2.5 5.84925 2.5 9.20801 2.5H10.7913C14.1501 2.5 15.8295 2.5 16.8729 3.62803C17.9163 4.75607 17.9163 6.57161 17.9163 10.2027V10.6306C17.9163 14.2617 17.9163 16.0773 16.8729 17.2053C15.8295 18.3333 14.1501 18.3333 10.7913 18.3333H9.20801C5.84925 18.3333 4.16987 18.3333 3.12644 17.2053C2.08301 16.0773 2.08301 14.2617 2.08301 10.6306V10.2027Z"
                  stroke={
                    activeItem === "schedule-payments" ? "#12725b" : "#6B6F75"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 6.66699H17.5"
                  stroke={
                    activeItem === "schedule-payments" ? "#12725b" : "#6B6F75"
                  }
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "schedule-payments"
                  ? "text-brand-base"
                  : "text-neutral-700"
              }`}
            >
              Schedule Payments
            </h2>
          </li>
          <li
            className={`justify-left flex cursor-pointer items-center gap-[12px] rounded-md px-6 py-2 ${
              activeItem === "payment-link"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => setActiveItem("payment-link")}
          >
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.61981 8.90915L7.79225 8.73671C9.4412 7.08776 12.1147 7.08776 13.7636 8.73671C15.4126 10.3857 15.4126 13.0591 13.7636 14.7081L11.3751 17.0966C9.72612 18.7456 7.05265 18.7456 5.4037 17.0966C3.75476 15.4477 3.75476 12.7742 5.4037 11.1253L5.79066 10.7383"
                  stroke={activeItem === "payment-link" ? "#12725b" : "#6B6F75"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.2097 9.26202L14.5966 8.87507C16.2456 7.22612 16.2456 4.55265 14.5966 2.9037C12.9477 1.25476 10.2742 1.25476 8.62526 2.9037L6.23671 5.29225C4.58776 6.9412 4.58776 9.61467 6.23671 11.2636C7.88566 12.9126 10.5591 12.9126 12.2081 11.2636L12.3805 11.0912"
                  stroke={activeItem === "payment-link" ? "#12725b" : "#6B6F75"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "payment-link"
                  ? "text-brand-base"
                  : "text-neutral-700"
              }`}
            >
              Payment Link
            </h2>
          </li>
        </ul>
      </div>|
      <SchedulePaymentMenu
        isScheduleMenu={scheduleOpen}
        onClose={() => setScheduleOpen(false)}
      />
      <PaymentReminder isOpenMenu={isMenuOpen} onClose={() => setMenuOpen(false)} />
      <RequestMenu isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default WalletMenu;
