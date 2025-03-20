import { useEffect, useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import SelectTag from "@/components/common/SelectTag";
import SearchBar from "@/components/SearchBar";
import profile from "@/assets/images/Avatar.png";

interface HeaderProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isCollapsed,
  setIsCollapsed,
  onMenuClick,
}) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="flex h-[72px] w-full items-center justify-between border-b-[1px] border-neutral-200 bg-white px-4">
        <div
          className="flex text-[30px] text-neutral-base lg:hidden"
          onClick={onMenuClick}
        >
          <RiMenuLine />
        </div>
        {/* collapsed icon */}
        <div className="lg:flex flex items-center hidden gap-4">
          <span
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
            className="text-neutral-base cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M9.5 3L9.5 21"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M5 7H6M5 10H6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div className="relative flex hidden h-[40px] w-[170px] items-center rounded-lg border-[1px] border-neutral-200 md:flex">
            {/* Icon before Select */}
            <span className="absolute flex items-center">
              <svg
                className="text-green-500 mx-[5px]"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_2751_19170)">
                  <rect width="20" height="20" rx="10" fill="#23A681" />
                  <rect
                    width="20"
                    height="20"
                    rx="10"
                    fill="white"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M10.0001 11.1784C9.67211 10.726 9.27398 10.3279 8.82158 9.99993C9.27398 9.67196 9.67211 9.27384 10.0001 8.82144C10.328 9.27383 10.7261 9.67196 11.1786 9.99993C10.7261 10.3279 10.328 10.726 10.0001 11.1784Z"
                    fill="url(#paint0_linear_2751_19170)"
                    stroke="url(#paint1_linear_2751_19170)"
                    stroke-linecap="round"
                  />
                  <g filter="url(#filter1_d_2751_19170)">
                    <path
                      d="M16.6483 9.50001C16.4048 6.2167 13.7834 3.59525 10.5001 3.35181V5.73334C10.5001 7.81361 12.1865 9.50001 14.2668 9.50001H16.6483Z"
                      fill="url(#paint2_linear_2751_19170)"
                      fill-opacity="0.8"
                      shape-rendering="crispEdges"
                    />
                    <path
                      d="M11.0001 5.73334V3.91395C13.6046 4.33854 15.6615 6.39551 16.0861 9.00001H14.2668C12.4626 9.00001 11.0001 7.53748 11.0001 5.73334Z"
                      stroke="url(#paint3_linear_2751_19170)"
                      stroke-linecap="round"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter2_d_2751_19170)">
                    <path
                      d="M9.50011 3.35181C6.2168 3.59525 3.59534 6.2167 3.3519 9.50001H5.73343C7.81371 9.50001 9.50011 7.81361 9.50011 5.73334V3.35181Z"
                      fill="url(#paint4_linear_2751_19170)"
                      fill-opacity="0.8"
                      shape-rendering="crispEdges"
                    />
                    <path
                      d="M5.73343 9.00001H3.91404C4.33863 6.39551 6.3956 4.33854 9.00011 3.91395V5.73334C9.00011 7.53747 7.53757 9.00001 5.73343 9.00001Z"
                      stroke="url(#paint5_linear_2751_19170)"
                      stroke-linecap="round"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <path
                    d="M14.2668 11H16.0861C15.6615 13.6045 13.6046 15.6614 11.0001 16.0861V14.2667C11.0001 12.4625 12.4626 11 14.2668 11Z"
                    fill="url(#paint6_linear_2751_19170)"
                    fill-opacity="0.8"
                    stroke="url(#paint7_linear_2751_19170)"
                    stroke-linecap="round"
                  />
                  <path
                    d="M9.00011 14.2667V16.0861C6.3956 15.6615 4.33863 13.6045 3.91404 11H5.73343C7.53757 11 9.00011 12.4625 9.00011 14.2667Z"
                    fill="url(#paint8_linear_2751_19170)"
                    fill-opacity="0.8"
                    stroke="url(#paint9_linear_2751_19170)"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_2751_19170"
                    x="0"
                    y="-4"
                    width="20"
                    height="24"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="-4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_2751_19170"
                    />
                  </filter>
                  <filter
                    id="filter1_d_2751_19170"
                    x="6.05565"
                    y="3.35181"
                    width="10.5926"
                    height="13.926"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-2.22222" dy="5.55556" />
                    <feGaussianBlur stdDeviation="1.11111" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.1728 0 0 0 0 0.7872 0 0 0 0 0.273338 0 0 0 0.32 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2751_19170"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2751_19170"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_2751_19170"
                    x="3.3519"
                    y="3.35181"
                    width="10.5927"
                    height="13.926"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2.22222" dy="5.55556" />
                    <feGaussianBlur stdDeviation="1.11111" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.1728 0 0 0 0 0.7872 0 0 0 0 0.273338 0 0 0 0.32 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2751_19170"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2751_19170"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2751_19170"
                    x1="10.0001"
                    y1="7.86084"
                    x2="10.0001"
                    y2="14.3481"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.313079" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2751_19170"
                    x1="17.5514"
                    y1="-2.52278"
                    x2="4.96401"
                    y2="7.6887"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2751_19170"
                    x1="13.5742"
                    y1="3.35181"
                    x2="13.5742"
                    y2="12.6747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.313079" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_2751_19170"
                    x1="24.4263"
                    y1="-11.5706"
                    x2="6.33678"
                    y2="3.10439"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_2751_19170"
                    x1="6.426"
                    y1="3.35181"
                    x2="6.426"
                    y2="12.6747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.313079" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_2751_19170"
                    x1="17.2782"
                    y1="-11.5706"
                    x2="-0.811391"
                    y2="3.10442"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_2751_19170"
                    x1="13.5742"
                    y1="10.5"
                    x2="13.5742"
                    y2="19.8229"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.313079" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_2751_19170"
                    x1="24.4263"
                    y1="-4.42242"
                    x2="6.3368"
                    y2="10.2526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_2751_19170"
                    x1="6.426"
                    y1="10.5"
                    x2="6.426"
                    y2="19.8229"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.313079" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_2751_19170"
                    x1="17.2782"
                    y1="-4.42242"
                    x2="-0.811375"
                    y2="10.2526"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            {/* Select Dropdown */}
            <SelectTag className="border-none bg-transparent w-full px-8 text-[14px] font-[600] leading-[20px] text-neutral-base">
              <option className="">Propa Homes</option>
              <option>Nigeria</option>
            </SelectTag>
          </div>
          {/* search bar */}
          <div className="md:flex hidden">
            <SearchBar placeholder="Search..." className="w-27 h-[36px" />
          </div>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center gap-6 text-gray-500">
          {/* moon */}
          <span
            onClick={handleThemeSwitch}
            className="text-neutral-700 cursor-pointer"
          >
            {theme === "dark" ? (
              <MdOutlineLightMode size={20} />
            ) : (
              <BsMoon size={18} />
            )}
          </span>
          {/* bell */}
          <span className="text-neutral-700 cursor-pointer">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.10825 12.3083C0.931037 13.47 1.72331 14.2763 2.69336 14.6782C6.41232 16.2188 11.5876 16.2188 15.3066 14.6782C16.2766 14.2763 17.0689 13.47 16.8917 12.3083C16.7828 11.5944 16.2443 10.9999 15.8453 10.4194C15.3227 9.64971 15.2708 8.81018 15.2707 7.91699C15.2707 4.46521 12.4632 1.66699 8.99998 1.66699C5.53675 1.66699 2.72925 4.46521 2.72925 7.91699C2.72917 8.81018 2.67725 9.64971 2.15465 10.4194C1.75568 10.9999 1.21716 11.5944 1.10825 12.3083Z"
                stroke="#4E5257"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.66663 15.834C6.0487 17.2717 7.39624 18.334 8.99996 18.334C10.6037 18.334 11.9512 17.2717 12.3333 15.834"
                stroke="#4E5257"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          {/* grid */}
          <span className="cursor-pointer text-[#4E5257] dark:text-[#c4c7cd]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
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
          {/* profile */}
          <div>
            <img
              src={profile}
              alt=""
              className="h-[40px] w-[40px] rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
