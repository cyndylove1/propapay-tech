import Modal from "@/components/Modal";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const Document: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h2 className="px-[20px] pt-[30px] text-[24px] font-[600] leading-[36px]">
        Documents
      </h2>
      <div className="flex items-center justify-between px-[20px] py-4">
        <SearchBar placeholder="Search for invoice" className="w-[295px]" />
        <div className="flex gap-[24px]">
          <div
            className="flex h-[48px] w-[94px] cursor-pointer items-center justify-center gap-[5px] rounded-[12px] border-[1px] border-[#E8E8E8] bg-white"
            onClick={() => setIsOpen(true)}
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
                  d="M2.5 5.8335H17.5"
                  stroke="#303030"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M5 10H15"
                  stroke="#303030"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M8.33331 14.1665H11.6666"
                  stroke="#303030"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <h2 className="text-[14px] font-[400] leading-[21px] text-[#303030]">
              Filter
            </h2>
          </div>
          <div className="flex h-[48px] w-[94px] cursor-pointer items-center justify-center gap-[5px] rounded-[12px] border-[1px] border-[#E8E8E8] bg-white">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.6665C5.40002 1.6665 1.66669 5.39984 1.66669 9.99984C1.66669 14.5998 5.40002 18.3332 10 18.3332C14.6 18.3332 18.3334 14.5998 18.3334 9.99984"
                  stroke="#303030"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8333 9.16683L17.6666 2.3335"
                  stroke="#303030"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3334 5.6915V1.6665H14.3083"
                  stroke="#303030"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="text-[14px] font-[400] leading-[21px] text-[#303030]">
              Export
            </h2>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-xs accent-[#12725b]"
                    />
                  </label>
                </th>
                <th>
                  <span className="flex items-center gap-[5px]">
                    <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
                      Title
                    </h2>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 2V14"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66666 12L4.66666 14L2.66666 12"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.66666 14V2"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3333 4L11.3333 2L9.33333 4"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </th>
                <th>
                  <span className="flex items-center gap-[5px]">
                    <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
                      Date
                    </h2>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 2V14"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66666 12L4.66666 14L2.66666 12"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.66666 14V2"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3333 4L11.3333 2L9.33333 4"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </th>
                <th>
                  <span className="flex items-center gap-[5px]">
                    <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
                      Property
                    </h2>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 2V14"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66666 12L4.66666 14L2.66666 12"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.66666 14V2"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3333 4L11.3333 2L9.33333 4"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </th>
                <th>
                  <span className="flex items-center gap-[5px]">
                    <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
                      Prices
                    </h2>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 2V14"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66666 12L4.66666 14L2.66666 12"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.66666 14V2"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3333 4L11.3333 2L9.33333 4"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </th>
                <th>
                  <span className="flex items-center gap-[5px]">
                    <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
                      Status
                    </h2>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 2V14"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66666 12L4.66666 14L2.66666 12"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.66666 14V2"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3333 4L11.3333 2L9.33333 4"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </th>
                <th>
                  <span className="flex items-center gap-[5px]">
                    <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
                      Actions
                    </h2>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 2V14"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.66666 12L4.66666 14L2.66666 12"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.66666 14V2"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3333 4L11.3333 2L9.33333 4"
                        stroke="#718096"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-xs accent-[#12725b]"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="">
                        <span>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="48"
                              height="48"
                              rx="24"
                              fill="#E8EDFF"
                            />
                            <path
                              d="M18.73 31.7C19.55 30.82 20.8 30.89 21.52 31.85L22.53 33.2C23.34 34.27 24.65 34.27 25.46 33.2L26.47 31.85C27.19 30.89 28.44 30.82 29.26 31.7C31.04 33.6 32.49 32.97 32.49 30.31V19.04C32.5 15.01 31.56 14 27.78 14H20.22C16.44 14 15.5 15.01 15.5 19.04V30.3C15.5 32.97 16.96 33.59 18.73 31.7Z"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20 19H28"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21 23H27"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Registered Survey</div>
                      <div className="text-sm opacity-50">INV110XXX</div>
                    </div>
                  </div>
                </td>
                <td>January 05, 2022</td>
                <td>Beverly Springfield</td>
                <td>N1,240.00</td>
                <th>
                  <button className="h-[40px] w-[96px] rounded-[8px] bg-[#F7F5FF] text-[14px] font-[500] text-[#936DFF]">
                    Unpaid
                  </button>
                </th>
                <td>
                  <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border-[1px] border-[#DFE8F6]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8333 9.99967C10.8333 9.53944 10.4602 9.16634 9.99996 9.16634C9.53972 9.16634 9.16663 9.53944 9.16663 9.99967C9.16663 10.4599 9.53972 10.833 9.99996 10.833C10.4602 10.833 10.8333 10.4599 10.8333 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.6667 9.99967C16.6667 9.53944 16.2936 9.16634 15.8333 9.16634C15.3731 9.16634 15 9.53944 15 9.99967C15 10.4599 15.3731 10.833 15.8333 10.833C16.2936 10.833 16.6667 10.4599 16.6667 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.99998 9.99967C4.99998 9.53944 4.62688 9.16634 4.16665 9.16634C3.70641 9.16634 3.33331 9.53944 3.33331 9.99967C3.33331 10.4599 3.70641 10.833 4.16665 10.833C4.62688 10.833 4.99998 10.4599 4.99998 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-xs accent-[#12725b]"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="">
                        <span>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="48"
                              height="48"
                              rx="24"
                              fill="#E8EDFF"
                            />
                            <path
                              d="M18.73 31.7C19.55 30.82 20.8 30.89 21.52 31.85L22.53 33.2C23.34 34.27 24.65 34.27 25.46 33.2L26.47 31.85C27.19 30.89 28.44 30.82 29.26 31.7C31.04 33.6 32.49 32.97 32.49 30.31V19.04C32.5 15.01 31.56 14 27.78 14H20.22C16.44 14 15.5 15.01 15.5 19.04V30.3C15.5 32.97 16.96 33.59 18.73 31.7Z"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20 19H28"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21 23H27"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Governor Conscent</div>
                      <div className="text-sm opacity-50">INV110XXX</div>
                    </div>
                  </div>
                </td>
                <td>January 05, 2022</td>
                <td>Beverly Springfield</td>
                <td>N1,240.00</td>
                <th>
                  <button className="h-[40px] w-[96px] rounded-[8px] bg-[#F7F5FF] text-[14px] font-[500] text-[#936DFF]">
                    Unpaid
                  </button>
                </th>
                <td>
                  <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border-[1px] border-[#DFE8F6]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8333 9.99967C10.8333 9.53944 10.4602 9.16634 9.99996 9.16634C9.53972 9.16634 9.16663 9.53944 9.16663 9.99967C9.16663 10.4599 9.53972 10.833 9.99996 10.833C10.4602 10.833 10.8333 10.4599 10.8333 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.6667 9.99967C16.6667 9.53944 16.2936 9.16634 15.8333 9.16634C15.3731 9.16634 15 9.53944 15 9.99967C15 10.4599 15.3731 10.833 15.8333 10.833C16.2936 10.833 16.6667 10.4599 16.6667 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.99998 9.99967C4.99998 9.53944 4.62688 9.16634 4.16665 9.16634C3.70641 9.16634 3.33331 9.53944 3.33331 9.99967C3.33331 10.4599 3.70641 10.833 4.16665 10.833C4.62688 10.833 4.99998 10.4599 4.99998 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-xs accent-[#12725b]"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="">
                        <span>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="48"
                              height="48"
                              rx="24"
                              fill="#E8EDFF"
                            />
                            <path
                              d="M18.73 31.7C19.55 30.82 20.8 30.89 21.52 31.85L22.53 33.2C23.34 34.27 24.65 34.27 25.46 33.2L26.47 31.85C27.19 30.89 28.44 30.82 29.26 31.7C31.04 33.6 32.49 32.97 32.49 30.31V19.04C32.5 15.01 31.56 14 27.78 14H20.22C16.44 14 15.5 15.01 15.5 19.04V30.3C15.5 32.97 16.96 33.59 18.73 31.7Z"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20 19H28"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21 23H27"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Governor Conscent</div>
                      <div className="text-sm opacity-50">INV110XXX</div>
                    </div>
                  </div>
                </td>
                <td>January 05, 2022</td>
                <td>Beverly Springfield</td>
                <td>N1,240.00</td>
                <th>
                  <button className="h-[40px] w-[96px] rounded-[8px] bg-[#FFF7F5] text-[14px] font-[500] text-[#FF784B]">
                    Pending
                  </button>
                </th>
                <td>
                  <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border-[1px] border-[#DFE8F6]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8333 9.99967C10.8333 9.53944 10.4602 9.16634 9.99996 9.16634C9.53972 9.16634 9.16663 9.53944 9.16663 9.99967C9.16663 10.4599 9.53972 10.833 9.99996 10.833C10.4602 10.833 10.8333 10.4599 10.8333 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.6667 9.99967C16.6667 9.53944 16.2936 9.16634 15.8333 9.16634C15.3731 9.16634 15 9.53944 15 9.99967C15 10.4599 15.3731 10.833 15.8333 10.833C16.2936 10.833 16.6667 10.4599 16.6667 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.99998 9.99967C4.99998 9.53944 4.62688 9.16634 4.16665 9.16634C3.70641 9.16634 3.33331 9.53944 3.33331 9.99967C3.33331 10.4599 3.70641 10.833 4.16665 10.833C4.62688 10.833 4.99998 10.4599 4.99998 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-xs accent-[#12725b]"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="">
                        <span>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="48"
                              height="48"
                              rx="24"
                              fill="#E8EDFF"
                            />
                            <path
                              d="M18.73 31.7C19.55 30.82 20.8 30.89 21.52 31.85L22.53 33.2C23.34 34.27 24.65 34.27 25.46 33.2L26.47 31.85C27.19 30.89 28.44 30.82 29.26 31.7C31.04 33.6 32.49 32.97 32.49 30.31V19.04C32.5 15.01 31.56 14 27.78 14H20.22C16.44 14 15.5 15.01 15.5 19.04V30.3C15.5 32.97 16.96 33.59 18.73 31.7Z"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20 19H28"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21 23H27"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Certificate of Ownership</div>
                      <div className="text-sm opacity-50">INV110XXX</div>
                    </div>
                  </div>
                </td>
                <td>January 05, 2022</td>
                <td>Beverly Springfield</td>
                <td>N1,240.00</td>
                <th>
                  <button className="h-[40px] w-[96px] rounded-[8px] bg-[#F6FDF9] text-[14px] font-[500] text-[#22C55E]">
                    Paid
                  </button>
                </th>
                <td>
                  <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border-[1px] border-[#DFE8F6]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8333 9.99967C10.8333 9.53944 10.4602 9.16634 9.99996 9.16634C9.53972 9.16634 9.16663 9.53944 9.16663 9.99967C9.16663 10.4599 9.53972 10.833 9.99996 10.833C10.4602 10.833 10.8333 10.4599 10.8333 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.6667 9.99967C16.6667 9.53944 16.2936 9.16634 15.8333 9.16634C15.3731 9.16634 15 9.53944 15 9.99967C15 10.4599 15.3731 10.833 15.8333 10.833C16.2936 10.833 16.6667 10.4599 16.6667 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.99998 9.99967C4.99998 9.53944 4.62688 9.16634 4.16665 9.16634C3.70641 9.16634 3.33331 9.53944 3.33331 9.99967C3.33331 10.4599 3.70641 10.833 4.16665 10.833C4.62688 10.833 4.99998 10.4599 4.99998 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox checkbox-xs accent-[#12725b]"
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="">
                        <span>
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="48"
                              height="48"
                              rx="24"
                              fill="#E8EDFF"
                            />
                            <path
                              d="M18.73 31.7C19.55 30.82 20.8 30.89 21.52 31.85L22.53 33.2C23.34 34.27 24.65 34.27 25.46 33.2L26.47 31.85C27.19 30.89 28.44 30.82 29.26 31.7C31.04 33.6 32.49 32.97 32.49 30.31V19.04C32.5 15.01 31.56 14 27.78 14H20.22C16.44 14 15.5 15.01 15.5 19.04V30.3C15.5 32.97 16.96 33.59 18.73 31.7Z"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M20 19H28"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21 23H27"
                              stroke="#12725B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Certificate of Ownership</div>
                      <div className="text-sm opacity-50">INV110XXX</div>
                    </div>
                  </div>
                </td>
                <td>January 05, 2022</td>
                <td>Beverly Springfield</td>
                <td>N1,240.00</td>
                <th>
                  <button className="h-[40px] w-[96px] rounded-[8px] bg-[#F6FDF9] text-[14px] font-[500] text-[#22C55E]">
                    Paid
                  </button>
                </th>
                <td>
                  <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] border-[1px] border-[#DFE8F6]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8333 9.99967C10.8333 9.53944 10.4602 9.16634 9.99996 9.16634C9.53972 9.16634 9.16663 9.53944 9.16663 9.99967C9.16663 10.4599 9.53972 10.833 9.99996 10.833C10.4602 10.833 10.8333 10.4599 10.8333 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.6667 9.99967C16.6667 9.53944 16.2936 9.16634 15.8333 9.16634C15.3731 9.16634 15 9.53944 15 9.99967C15 10.4599 15.3731 10.833 15.8333 10.833C16.2936 10.833 16.6667 10.4599 16.6667 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.99998 9.99967C4.99998 9.53944 4.62688 9.16634 4.16665 9.16634C3.70641 9.16634 3.33331 9.53944 3.33331 9.99967C3.33331 10.4599 3.70641 10.833 4.16665 10.833C4.62688 10.833 4.99998 10.4599 4.99998 9.99967Z"
                        stroke="#718096"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
export default Document;
