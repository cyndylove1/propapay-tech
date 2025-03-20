import { useState } from "react";
import balance from "@/assets/images/balance.png";
import EyeToggle from "@/components/EyeToggle";
import SelectTag from "@/components/common/SelectTag";
import WalletMenu from "@/components/WalletMenu";
import { NavLink } from "react-router";
import AddMoneyModal from "@/components/AddMoney/AddMoneyModal";
import ReceiveMoneyModal from "@/components/RecieveMoney/ReceiveMoneyModal";

const Wallet = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);
  const [showVisibility, setShowVisibility] = useState(false);

  const toggleMenuDropdown = () => {
    setOpenMenu((prev) => !prev);
  };

  const togglePasswordVisibility = () => {
    setShowVisibility((prev) => !prev);
  };

  return (
    <>
      <div>
        <h2 className="px-4 pt-4 text-[24px] font-[600] leading-[32px]">
          Wallet
        </h2>
        <div className="m-4 flex flex-col gap-[24px] md:flex-row">
          <div className="relative h-[220px] w-full md:h-[204px]">
            {/* Background Image */}
            <img
              src={balance}
              alt="Balance"
              className="h-full w-full rounded-xl"
            />

            {/* Overlay Container */}
            <div className="bg-black/50 absolute left-0 top-0 w-full gap-3 rounded-t-xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 text-white">
                  <h1 className="text-[16px] font-[500] leading-[24px]">
                    Available Balance
                  </h1>
                  <EyeToggle
                    showVisibility={showVisibility}
                    togglePasswordVisibility={togglePasswordVisibility}
                  />
                </div>
                <div className="relative flex hidden w-[92px] items-center rounded-full border-[1px] border-brand-200 bg-brand-50 md:flex md:h-[32px]">
                  {/* Icon before Select */}
                  <span className="absolute flex items-center px-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3345_67990)">
                        <path
                          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                          fill="white"
                        />
                        <path
                          d="M0 8.00042C0 11.4402 2.171 14.3725 5.21741 15.5029V0.498047C2.171 1.62836 0 4.56073 0 8.00042Z"
                          fill="#008751"
                        />
                        <path
                          d="M16 8.00042C16 4.56073 13.829 1.62836 10.7826 0.498047V15.5029C13.829 14.3725 16 11.4402 16 8.00042Z"
                          fill="#008751"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3345_67990">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>

                  {/* Select Dropdown */}
                  <SelectTag className="w-full border-none pl-7 text-[14px] font-[600] leading-[20px] text-neutral-700">
                    <option className="">NGN</option>
                  </SelectTag>
                </div>
              </div>
              <div className="py-[10px] text-white">
                <div className="flex items-center">
                  {showVisibility ? (
                    <>
                      <span>
                        <svg
                          width="14"
                          height="18"
                          viewBox="0 0 14 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.8"
                            d="M1.632 18V12.072H0.24V10.296H1.632V8.568H0.24V6.792H1.632V0.863999H5.4L7.272 6.792H9.456V0.863999H12.12V6.792H13.488V8.568H12.12V10.296H13.488V12.072H12.12V18H8.328L6.408 12.072H4.296V18H1.632ZM4.296 10.296H5.88L5.352 8.568H4.248L4.296 10.296ZM9.528 14.256H9.648L9.552 12.072H8.904L9.528 14.256ZM4.2 6.792H4.872L4.176 4.488H4.08L4.2 6.792ZM8.4 10.296H9.504L9.456 8.568H7.848L8.4 10.296Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h2 className="text-[30px] font-[700] md:text-[36px]">
                        861,375.42
                      </h2>
                    </>
                  ) : (
                    <div>
                      <h2 className="text-[30px] md:text-[36px]">
                        * * * * * * *
                      </h2>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  className="flex h-[40px] w-[135px] items-center justify-center gap-2 rounded-full bg-white md:w-[144px]"
                  onClick={() => setIsOpen(true)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3.33301V16.6663"
                      stroke="#12725B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33334 10H16.6667"
                      stroke="#12725B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h3 className="text-[12px] font-[600] leading-[20px] text-brand-base md:text-[14px]">
                    Add Money
                  </h3>
                </button>
                <button
                  className="flex h-[40px] w-[135px] items-center justify-center gap-2 rounded-full bg-white md:w-[144px]"
                  onClick={() => setOpenModal(true)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 5C2.5 3.82149 2.5 3.23223 2.86612 2.86612C3.23223 2.5 3.82149 2.5 5 2.5C6.17851 2.5 6.76777 2.5 7.13388 2.86612C7.5 3.23223 7.5 3.82149 7.5 5C7.5 6.17851 7.5 6.76777 7.13388 7.13388C6.76777 7.5 6.17851 7.5 5 7.5C3.82149 7.5 3.23223 7.5 2.86612 7.13388C2.5 6.76777 2.5 6.17851 2.5 5Z"
                      stroke="#12725B"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.5 15C2.5 13.8215 2.5 13.2322 2.86612 12.8661C3.23223 12.5 3.82149 12.5 5 12.5C6.17851 12.5 6.76777 12.5 7.13388 12.8661C7.5 13.2322 7.5 13.8215 7.5 15C7.5 16.1785 7.5 16.7678 7.13388 17.1339C6.76777 17.5 6.17851 17.5 5 17.5C3.82149 17.5 3.23223 17.5 2.86612 17.1339C2.5 16.7678 2.5 16.1785 2.5 15Z"
                      stroke="#12725B"
                      stroke-width="1.5"
                    />
                    <path
                      d="M2.5 10L7.5 10"
                      stroke="#12725B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 2.5V6.66667"
                      stroke="#12725B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 5C12.5 3.82149 12.5 3.23223 12.8661 2.86612C13.2322 2.5 13.8215 2.5 15 2.5C16.1785 2.5 16.7678 2.5 17.1339 2.86612C17.5 3.23223 17.5 3.82149 17.5 5C17.5 6.17851 17.5 6.76777 17.1339 7.13388C16.7678 7.5 16.1785 7.5 15 7.5C13.8215 7.5 13.2322 7.5 12.8661 7.13388C12.5 6.76777 12.5 6.17851 12.5 5Z"
                      stroke="#12725B"
                      stroke-width="1.5"
                    />
                    <path
                      d="M17.5 10H12.5C11.3215 10 10.7322 10 10.3661 10.3661C10 10.7322 10 11.3215 10 12.5M10 14.8077V17.1154M12.5 12.5V13.75C12.5 14.9553 13.153 15 14.1667 15C14.6269 15 15 15.3731 15 15.8333M13.3333 17.5H12.5M15 12.5C16.1785 12.5 16.7678 12.5 17.1339 12.8666C17.5 13.2333 17.5 13.8234 17.5 15.0036C17.5 16.1838 17.5 16.7739 17.1339 17.1406C16.8667 17.4082 16.4806 17.4805 15.8333 17.5"
                      stroke="#12725B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>

                  <h3 className="text-[12px] font-[600] leading-[20px] text-brand-base md:text-[14px]">
                    Receive
                  </h3>
                </button>
                <div
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white md:h-[44px] md:w-[44px]"
                  onClick={toggleMenuDropdown}
                >
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 2C16.5 1.30964 15.9404 0.75 15.25 0.75C14.5596 0.75 14 1.30964 14 2C14 2.69036 14.5596 3.25 15.25 3.25C15.9404 3.25 16.5 2.69036 16.5 2Z"
                      stroke="#12725B"
                      stroke-width="1.5"
                    />
                    <path
                      d="M10.25 2C10.25 1.30964 9.69036 0.75 9 0.75C8.30964 0.75 7.75 1.30964 7.75 2C7.75 2.69036 8.30964 3.25 9 3.25C9.69036 3.25 10.25 2.69036 10.25 2Z"
                      stroke="#12725B"
                      stroke-width="1.5"
                    />
                    <path
                      d="M4 2C4 1.30964 3.44036 0.75 2.75 0.75C2.05964 0.75 1.5 1.30964 1.5 2C1.5 2.69036 2.05964 3.25 2.75 3.25C3.44036 3.25 4 2.69036 4 2Z"
                      stroke="#12725B"
                      stroke-width="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="md:w-[290px]  overflow-hidden rounded-xl border-[1px] border-neutral-200">
            <div className="flex items-center justify-between bg-[#F2F5F8] p-4">
              <div className="flex items-center gap-3">
                <span>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_3360_22730)">
                      <rect
                        x="1"
                        y="1"
                        width="32"
                        height="32"
                        rx="6"
                        fill="white"
                      />
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.5334 9.80848C19.7859 9.24515 18.1951 9.71431 17.0001 11.1293C15.8042 9.71431 14.2134 9.24515 12.4659 9.80848C10.2609 10.5193 8.88508 12.5126 8.87508 15.0093C8.85425 19.2876 12.9717 22.6393 16.8317 24.3485L17.0009 24.4235L17.1701 24.3485C21.0292 22.6385 25.1459 19.2868 25.1251 15.0085C25.1151 12.5118 23.7392 10.5193 21.5334 9.80848Z"
                        fill="#12725B"
                      />
                      <path
                        d="M17.0646 18.986C18.4638 18.986 19.8371 18.116 20.6588 16.7043L20.9729 16.1643L19.8929 15.5352L19.5788 16.0752C19.1038 16.8918 18.1863 17.7718 17.0054 17.7352C15.8329 17.7785 14.9279 16.891 14.4529 16.0752L14.1388 15.5352L13.0579 16.1643L13.3729 16.7043C14.1946 18.116 15.5679 18.986 16.9463 18.986H17.0646Z"
                        fill="#12725B"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_3360_22730"
                        x="0"
                        y="0"
                        width="34"
                        height="34"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="1"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_3360_22730"
                        />
                        <feOffset />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.882353 0 0 0 0 0.894118 0 0 0 0 0.917647 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_3360_22730"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_3360_22730"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-1.8" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.94902 0 0 0 0 0.960784 0 0 0 0 0.972549 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow_3360_22730"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
                <h2 className="text-[16px] font-[500] leading-[24px] text-neutral-base">
                  Credits Health
                </h2>
              </div>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3360_22735)">
                    <path
                      opacity="0.4"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.45738 15.7205L15.1213 6.05657L13.9428 4.87806L4.27887 14.542L5.45738 15.7205Z"
                      fill="#99A0AE"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.35001 6.55283L13.4617 6.53811L13.4464 13.6493L15.1131 13.6528L15.132 4.86798L6.34656 4.88617L6.35001 6.55283Z"
                      fill="#99A0AE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3360_22735">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="p-2">
              <h2 className="text-[18px]">
                <span className="text-[#525866]">Your </span> Credits{" "}
                <span className="text-[#525866]">is</span>
                <span> Excellent</span>{" "}
              </h2>
              <h6 className="text-[12px] font-[400] leading-[16px] text-[#717784]">
                Have succeeded in reducing outgoing costs. 2.00 / 5.00
              </h6>
            </div>
            <div className="px-4">
              <svg
                width="260"
                height="24"
                viewBox="0 0 320 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="14" height="24" rx="4" fill="#32B56A" />
                <rect x="18" width="14" height="24" rx="4" fill="#32B56A" />
                <rect x="36" width="14" height="24" rx="4" fill="#32B56A" />
                <rect x="54" width="14" height="24" rx="4" fill="#32B56A" />
                <rect x="72" width="14" height="24" rx="4" fill="#32B56A" />
                <rect x="90" width="14" height="24" rx="4" fill="#32B56A" />
                <rect
                  x="108"
                  y="3"
                  width="14"
                  height="18"
                  rx="7"
                  fill="#D9D9D9"
                />
                <rect
                  x="126"
                  y="3"
                  width="14"
                  height="18"
                  rx="7"
                  fill="#D9D9D9"
                />
                <rect
                  x="144"
                  y="3"
                  width="14"
                  height="18"
                  rx="7"
                  fill="#D9D9D9"
                />
                <rect
                  x="162"
                  y="3"
                  width="14"
                  height="18"
                  rx="7"
                  fill="#D9D9D9"
                />
                <rect
                  x="180"
                  y="3"
                  width="14"
                  height="18"
                  rx="7"
                  fill="#D9D9D9"
                />
                <rect
                  x="198"
                  y="3"
                  width="14"
                  height="18"
                  rx="7"
                  fill="#D9D9D9"
                />
                <rect
                  x="216"
                  y="3"
                  width="14"
                  height="18"
                  rx="7"
                  fill="#D9D9D9"
                />
                <rect x="234" width="14" height="24" rx="4" fill="#E1E4EA" />
                <rect x="252" width="14" height="24" rx="4" fill="#E1E4EA" />
                <rect x="270" width="14" height="24" rx="4" fill="#E1E4EA" />
                <rect x="288" width="14" height="24" rx="4" fill="#E1E4EA" />
                <rect x="306" width="14" height="24" rx="4" fill="#E1E4EA" />
              </svg>
            </div>
          </div> */}
        </div>

        <div className="m-4 rounded-xl border-[1px] border-neutral-200">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-4">
              <span>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3601_41923)">
                    <path
                      d="M2 21C2 9.95431 10.9543 1 22 1C33.0457 1 42 9.95431 42 21C42 32.0457 33.0457 41 22 41C10.9543 41 2 32.0457 2 21Z"
                      fill="white"
                    />
                    <path
                      d="M2.5 21C2.5 10.2304 11.2304 1.5 22 1.5C32.7696 1.5 41.5 10.2304 41.5 21C41.5 31.7696 32.7696 40.5 22 40.5C11.2304 40.5 2.5 31.7696 2.5 21Z"
                      stroke="#DEE1E4"
                    />
                    <path
                      d="M15.5983 27.4017C14.5 26.3033 14.5 24.5355 14.5 21C14.5 17.4645 14.5 15.6967 15.5983 14.5983C16.6967 13.5 18.4645 13.5 22 13.5C25.5355 13.5 27.3033 13.5 28.4017 14.5983C29.5 15.6967 29.5 17.4645 29.5 21C29.5 24.5355 29.5 26.3033 28.4017 27.4017C27.3033 28.5 25.5355 28.5 22 28.5C18.4645 28.5 16.6967 28.5 15.5983 27.4017Z"
                      stroke="#4E5257"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.8333 22.6663L20.1607 20.3389C20.4862 20.0135 21.0138 20.0135 21.3393 20.3389L22.6607 21.6604C22.9862 21.9859 23.5138 21.9859 23.8393 21.6604L26.1667 19.333"
                      stroke="#4E5257"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3601_41923"
                      x="0"
                      y="0"
                      width="44"
                      height="44"
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
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.894118 0 0 0 0 0.898039 0 0 0 0 0.905882 0 0 0 0.24 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3601_41923"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3601_41923"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
              <div className="">
                <h2 className="text-[14px] font-[600] leading-[28px] text-neutral-base md:text-[16px]">
                  Recent Transactions
                </h2>
                <h6 className="text-[12px] font-[500] leading-[16px] text-neutral-700">
                  View your most recent transactions here.
                </h6>
              </div>
            </div>
            <NavLink to="/transactions">
              <button className="flex h-[36px] w-[98px] items-center justify-center gap-[10px] rounded-[8px] border-[1px] border-neutral-200 p-[8px]">
                <h2 className="text-[14px] font-[600] leading-[20px] text-neutral-700">
                  View All
                </h2>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.50004 1C1.50004 1 6.49999 4.68244 6.5 6.00004C6.50001 7.31763 1.5 11 1.5 11"
                    stroke="#888D93"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </NavLink>
          </div>

          {/* Table content */}
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}

                <thead className="bg-[#F7F8F9]">
                  <tr>
                    <th>
                      <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        DESCRIPTION
                      </h2>
                    </th>
                    <th>
                      <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        METHOD
                      </h2>
                    </th>
                    <th>
                      <h2 className="text-[12px] font-[500] leading-[16Px] text-neutral-600">
                        TRANSACTION ID
                      </h2>
                    </th>
                    <th>
                      <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        DATE
                      </h2>
                    </th>
                    <th>
                      <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        AMOUNT
                      </h2>
                    </th>
                    <th>
                      <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        STATUS
                      </h2>
                    </th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td className="">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="">
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
                                  fill="url(#paint0_linear_3329_15360)"
                                />
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  stroke="#C1F1D5"
                                />
                                <path
                                  d="M20 26.6664L20 13.333"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M24.1666 22.4994C24.1666 22.4994 21.0979 26.666 19.9999 26.666C18.902 26.666 15.8333 22.4993 15.8333 22.4993"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_3329_15360"
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
                          </div>
                        </div>
                        <div>
                          <div className="text-[14px] font-[600] leading-[20px] text-neutral-base">
                            Funds added via bank transfer
                          </div>
                          <div className="text-[12px] font-[500] leading-[16px] text-neutral-700">
                            Credit
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      Bank Transfer
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      PD1468373HM1
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      Oct 10, 2025 12:15 PM
                    </td>
                    <td className="whitespace-nowrap text-[14px] font-[500] leading-[20px] text-neutral-base">
                      +₦25,000,000
                    </td>
                    <th>
                      <button className="flex h-[24px] w-[96px] items-center justify-center rounded-[4px] border-[1px] border-x-[#E5F9ED] border-b-[#d1f5e0] border-t-[#E5F9ED] bg-positive-50 text-[14px] font-[500]">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="3" fill="#32B56A" />
                          </svg>
                        </span>
                        <h3 className="text-[12px] text-positive-500">
                          Collected
                        </h3>
                      </button>
                    </th>
                    <td>
                      <button
                        className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px]"
                        // onClick={toggleMenuDropdown}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 10C17.5 9.30964 16.9404 8.75 16.25 8.75C15.5596 8.75 15 9.30964 15 10C15 10.6904 15.5596 11.25 16.25 11.25C16.9404 11.25 17.5 10.6904 17.5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M11.25 10C11.25 9.30964 10.6904 8.75 10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M5 10C5 9.30964 4.44036 8.75 3.75 8.75C3.05964 8.75 2.5 9.30964 2.5 10C2.5 10.6904 3.05964 11.25 3.75 11.25C4.44036 11.25 5 10.6904 5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td className="">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="">
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
                                  fill="url(#paint0_linear_3329_15360)"
                                />
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  stroke="#C1F1D5"
                                />
                                <path
                                  d="M20 26.6664L20 13.333"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M24.1666 22.4994C24.1666 22.4994 21.0979 26.666 19.9999 26.666C18.902 26.666 15.8333 22.4993 15.8333 22.4993"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_3329_15360"
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
                          </div>
                        </div>
                        <div>
                          <div className="text-[14px] font-[600] leading-[20px] text-neutral-base">
                            Funds added via bank transfer
                          </div>
                          <div className="text-[12px] font-[500] leading-[16px] text-neutral-700">
                            Credit
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      Bank Transfer
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      PD1468373HM1
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      Oct 10, 2025 12:15 PM
                    </td>
                    <td className="whitespace-nowrap text-[14px] font-[500] leading-[20px] text-neutral-base">
                      +₦25,000,000
                    </td>
                    <th>
                      <button className="flex h-[24px] w-[96px] items-center justify-center rounded-[4px] border-[1px] border-x-[#E5F9ED] border-b-[#d1f5e0] border-t-[#E5F9ED] bg-positive-50 text-[14px] font-[500]">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="3" fill="#32B56A" />
                          </svg>
                        </span>
                        <h3 className="text-[12px] text-positive-500">
                          Collected
                        </h3>
                      </button>
                    </th>
                    <td>
                      <button
                        className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px]"
                        // onClick={toggleMenuDropdown}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 10C17.5 9.30964 16.9404 8.75 16.25 8.75C15.5596 8.75 15 9.30964 15 10C15 10.6904 15.5596 11.25 16.25 11.25C16.9404 11.25 17.5 10.6904 17.5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M11.25 10C11.25 9.30964 10.6904 8.75 10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M5 10C5 9.30964 4.44036 8.75 3.75 8.75C3.05964 8.75 2.5 9.30964 2.5 10C2.5 10.6904 3.05964 11.25 3.75 11.25C4.44036 11.25 5 10.6904 5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td className="">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="">
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
                                  fill="url(#paint0_linear_3341_89149)"
                                />
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  stroke="#F8D0D0"
                                />
                                <path
                                  d="M20 13.333L20 26.6664"
                                  stroke="#D84E4E"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M24.1665 17.4996C24.1665 17.4996 21.0978 13.333 19.9998 13.333C18.9018 13.333 15.8332 17.4997 15.8332 17.4997"
                                  stroke="#D84E4E"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_3341_89149"
                                    x1="20"
                                    y1="0"
                                    x2="20"
                                    y2="40"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#FDF3F3" />
                                    <stop offset="1" stop-color="#F8D0D0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[14px] font-[600] leading-[20px] text-neutral-base">
                            Funds added via bank transfer
                          </div>
                          <div className="text-[12px] font-[500] leading-[16px] text-neutral-700">
                            Debit
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      Wallet Funds
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      PD1468373HM1
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-base">
                      Oct 10, 2025 12:15 PM
                    </td>
                    <td className="whitespace-nowrap text-[14px] font-[500] leading-[20px] text-neutral-base">
                      ₦25,000,000
                    </td>
                    <th>
                      <button className="flex h-[24px] w-[96px] items-center justify-center rounded-[4px] border-[1px] border-x-[#E5F9ED] border-b-[#d1f5e0] border-t-[#E5F9ED] bg-positive-50 text-[14px] font-[500]">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="3" fill="#32B56A" />
                          </svg>
                        </span>
                        <h3 className="text-[12px] text-positive-500">
                          Collected
                        </h3>
                      </button>
                    </th>
                    <td>
                      <button
                        className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px]"
                        // onClick={toggleMenuDropdown}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 10C17.5 9.30964 16.9404 8.75 16.25 8.75C15.5596 8.75 15 9.30964 15 10C15 10.6904 15.5596 11.25 16.25 11.25C16.9404 11.25 17.5 10.6904 17.5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M11.25 10C11.25 9.30964 10.6904 8.75 10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M5 10C5 9.30964 4.44036 8.75 3.75 8.75C3.05964 8.75 2.5 9.30964 2.5 10C2.5 10.6904 3.05964 11.25 3.75 11.25C4.44036 11.25 5 10.6904 5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddMoneyModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <ReceiveMoneyModal
        OpenModal={OpenModal}
        CloseModal={() => setOpenModal(false)}
      />
      {OpenMenu && <WalletMenu WalletMenu={() => setOpenMenu(false)} />}
    </>
  );
};
export default Wallet;
