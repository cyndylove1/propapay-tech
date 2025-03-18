import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ExportModal from "./ExportModal";
import FilterModal from "@/components/FilterModal";

interface HeaderProps {
  text: string;
  path: string;
  route: string;
}
const ContentHeader: React.FC<HeaderProps> = ({ text, path, route }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === route;
  const Active = location.pathname === path;
  const [Open, setOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-[20px] dark:bg-[#111827]">
        <h2 className="text-[24px] font-[600] leading-[32px] text-[#1C1D1E] dark:text-[#c4c7cd]">
          {text}
        </h2>
        <div className="flex items-center gap-4">
          <button
            className={`flex hidden h-[36px] w-[93px] items-center justify-center gap-[8px] rounded-lg border-[1px] border-[#E5E6E8] md:flex ${isActive ? "bg-[#12725B] text-white" : ""}`}
            onClick={() => navigate(route)}
          >
            <span
              className={`${isActive ? "text-white" : "text-[#595D61] dark:text-[#c4c7cd]"}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66669 15.0001C1.66669 13.7164 1.66669 13.0745 1.95563 12.603C2.11731 12.3392 2.33913 12.1174 2.60296 11.9557C3.07447 11.6667 3.71632 11.6667 5.00002 11.6667C6.28372 11.6667 6.92557 11.6667 7.39708 11.9557C7.66091 12.1174 7.88273 12.3392 8.04441 12.603C8.33335 13.0745 8.33335 13.7164 8.33335 15.0001C8.33335 16.2838 8.33335 16.9256 8.04441 17.3971C7.88273 17.661 7.66091 17.8828 7.39708 18.0445C6.92557 18.3334 6.28372 18.3334 5.00002 18.3334C3.71632 18.3334 3.07447 18.3334 2.60296 18.0445C2.33913 17.8828 2.11731 17.661 1.95563 17.3971C1.66669 16.9256 1.66669 16.2838 1.66669 15.0001Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M11.6667 15.0001C11.6667 13.7164 11.6667 13.0745 11.9556 12.603C12.1173 12.3392 12.3391 12.1174 12.603 11.9557C13.0745 11.6667 13.7163 11.6667 15 11.6667C16.2837 11.6667 16.9256 11.6667 17.3971 11.9557C17.6609 12.1174 17.8827 12.3392 18.0444 12.603C18.3334 13.0745 18.3334 13.7164 18.3334 15.0001C18.3334 16.2838 18.3334 16.9256 18.0444 17.3971C17.8827 17.661 17.6609 17.8828 17.3971 18.0445C16.9256 18.3334 16.2837 18.3334 15 18.3334C13.7163 18.3334 13.0745 18.3334 12.603 18.0445C12.3391 17.8828 12.1173 17.661 11.9556 17.3971C11.6667 16.9256 11.6667 16.2838 11.6667 15.0001Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M1.66669 5.00008C1.66669 3.71638 1.66669 3.07453 1.95563 2.60303C2.11731 2.33919 2.33913 2.11737 2.60296 1.95569C3.07447 1.66675 3.71632 1.66675 5.00002 1.66675C6.28372 1.66675 6.92557 1.66675 7.39708 1.95569C7.66091 2.11737 7.88273 2.33919 8.04441 2.60303C8.33335 3.07453 8.33335 3.71638 8.33335 5.00008C8.33335 6.28378 8.33335 6.92563 8.04441 7.39714C7.88273 7.66097 7.66091 7.8828 7.39708 8.04447C6.92557 8.33341 6.28372 8.33341 5.00002 8.33341C3.71632 8.33341 3.07447 8.33341 2.60296 8.04447C2.33913 7.8828 2.11731 7.66097 1.95563 7.39714C1.66669 6.92563 1.66669 6.28378 1.66669 5.00008Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M11.6667 5.00008C11.6667 3.71638 11.6667 3.07453 11.9556 2.60303C12.1173 2.33919 12.3391 2.11737 12.603 1.95569C13.0745 1.66675 13.7163 1.66675 15 1.66675C16.2837 1.66675 16.9256 1.66675 17.3971 1.95569C17.6609 2.11737 17.8827 2.33919 18.0444 2.60303C18.3334 3.07453 18.3334 3.71638 18.3334 5.00008C18.3334 6.28378 18.3334 6.92563 18.0444 7.39714C17.8827 7.66097 17.6609 7.8828 17.3971 8.04447C16.9256 8.33341 16.2837 8.33341 15 8.33341C13.7163 8.33341 13.0745 8.33341 12.603 8.04447C12.3391 7.8828 12.1173 7.66097 11.9556 7.39714C11.6667 6.92563 11.6667 6.28378 11.6667 5.00008Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <h3
              className={`text-[14px] font-[600] leading-[20px] ${isActive ? "text-white" : "text-[#595D61] dark:text-[#c4c7cd]"}`}
            >
              Grid
            </h3>
          </button>
          <button
            className={`flex hidden h-[36px] w-[93px] items-center justify-center gap-[8px] rounded-lg border-[1px] border-[#E5E6E8] md:flex ${Active ? "bg-[#12725B] text-white" : ""}`}
            onClick={() => navigate(path)}
          >
            <span
              className={`${Active ? "text-white" : "text-[#595D61] dark:text-[#c4c7cd]"}`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66669 9.50016C1.66669 8.53494 1.86813 8.3335 2.83335 8.3335H17.1667C18.1319 8.3335 18.3334 8.53494 18.3334 9.50016V10.5002C18.3334 11.4654 18.1319 11.6668 17.1667 11.6668H2.83335C1.86813 11.6668 1.66669 11.4654 1.66669 10.5002V9.50016Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M1.66669 2.83341C1.66669 1.86819 1.86813 1.66675 2.83335 1.66675H17.1667C18.1319 1.66675 18.3334 1.86819 18.3334 2.83341V3.83341C18.3334 4.79864 18.1319 5.00008 17.1667 5.00008H2.83335C1.86813 5.00008 1.66669 4.79864 1.66669 3.83341V2.83341Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M1.66669 16.1667C1.66669 15.2014 1.86813 15 2.83335 15H17.1667C18.1319 15 18.3334 15.2014 18.3334 16.1667V17.1667C18.3334 18.1319 18.1319 18.3333 17.1667 18.3333H2.83335C1.86813 18.3333 1.66669 18.1319 1.66669 17.1667V16.1667Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <h3
              className={`text-[14px] font-[600] leading-[20px] ${Active ? "text-white" : "text-[#595D61] dark:text-[#c4c7cd]"}`}
            >
              List
            </h3>
          </button>

          <button
            className="flex h-[36px] w-[93px] items-center justify-center gap-[8px] rounded-lg border-[1px] border-[#E5E6E8]"
            onClick={() => setIsOpen(true)}
          >
            <span className="text-[#595D61] dark:text-[#c4c7cd]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5.83325H5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 14.1665H7.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 14.1665L17.5 14.1665"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 5.83325L17.5 5.83325"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5 5.83325C5 5.05668 5 4.6684 5.12687 4.36211C5.29602 3.95373 5.62048 3.62928 6.02886 3.46012C6.33515 3.33325 6.72343 3.33325 7.5 3.33325C8.27657 3.33325 8.66485 3.33325 8.97114 3.46012C9.37952 3.62928 9.70398 3.95373 9.87313 4.36211C10 4.6684 10 5.05668 10 5.83325C10 6.60982 10 6.99811 9.87313 7.30439C9.70398 7.71277 9.37952 8.03723 8.97114 8.20638C8.66485 8.33325 8.27657 8.33325 7.5 8.33325C6.72343 8.33325 6.33515 8.33325 6.02886 8.20638C5.62048 8.03723 5.29602 7.71277 5.12687 7.30439C5 6.99811 5 6.60982 5 5.83325Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M10 14.1665C10 13.3899 10 13.0016 10.1269 12.6954C10.296 12.287 10.6205 11.9625 11.0289 11.7934C11.3351 11.6665 11.7234 11.6665 12.5 11.6665C13.2766 11.6665 13.6649 11.6665 13.9711 11.7934C14.3795 11.9625 14.704 12.287 14.8731 12.6954C15 13.0016 15 13.3899 15 14.1665C15 14.9431 15 15.3314 14.8731 15.6376C14.704 16.046 14.3795 16.3705 13.9711 16.5396C13.6649 16.6665 13.2766 16.6665 12.5 16.6665C11.7234 16.6665 11.3351 16.6665 11.0289 16.5396C10.6205 16.3705 10.296 16.046 10.1269 15.6376C10 15.3314 10 14.9431 10 14.1665Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <h2 className="text-[14px] font-[600] leading-[20px] text-[#595D61] dark:text-[#c4c7cd]">
              Filter
            </h2>
          </button>
          <button
            className="flex h-[36px] w-[93px] items-center justify-center gap-[8px] rounded-lg bg-[#12725b]"
            onClick={() => setOpen(true)}
          >
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.2493 1.5C5.20847 1.50547 3.61612 1.58014 2.5985 2.59794C1.50031 3.6963 1.50031 5.4641 1.50031 8.99965C1.50031 12.5353 1.50031 14.3031 2.5985 15.4014C3.69668 16.4998 5.4642 16.4998 8.99926 16.4998C12.5342 16.4998 14.3018 16.4998 15.4 15.4014C16.4176 14.3837 16.4922 12.791 16.4977 9.74972"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.13 1.91342L8.20728 9.88216M16.13 1.91342C15.7184 1.50123 12.9453 1.53966 12.3591 1.548M16.13 1.91342C16.5417 2.3256 16.5033 5.10225 16.495 5.68926"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="text-[14px] font-[600] leading-[20px] text-[#fff]">
              Export
            </h2>
          </button>
        </div>
      </div>
      <FilterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <ExportModal Open={Open} Close={() => setOpen(false)} />
    </>
  );
};
export default ContentHeader;
