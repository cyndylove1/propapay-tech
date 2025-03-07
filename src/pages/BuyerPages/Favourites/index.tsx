import favourites from "@/assets/images/Rectangle 2911 (1).png";
import Button from "@/components/common/Button";
import ContentHeader from "@/components/ContentHeader";
const Favourites = () => {
  
  return (
    <>
      <ContentHeader
        text="Favourites"
        path="/favourites/lists"
        route="/favourites"
      />
      {/* content */}
      <div className="grid grid-cols-1 gap-6 p-[20px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 dark:bg-[#111827]">
        {Array(6)
          .fill({})
          .map(() => (
            <div className="relative h-[460px] rounded-xl border-[1px] border-[#E5E6E8] p-2 shadow-md dark:bg-[#1F2937]">
              {/* Image Container */}
              <img
                src={favourites}
                alt=""
                className="h-[250px] w-full rounded-lg object-cover"
              />

              {/* Overlay Content */}
              <div className="top-3 absolute left-0 flex items-center justify-between w-full px-3">
                {/* House Label */}
                <h2 className="flex h-[24px] w-[61px] items-center justify-center rounded-[999px] bg-[#D6F5E6] text-[12px] font-[600] leading-[14px] text-[#12725B]">
                  House
                </h2>

                {/* Icon */}
                <span className="flex items-center">
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_2663_1602)">
                      <path
                        d="M4 24C4 11.8497 13.8497 2 26 2C38.1503 2 48 11.8497 48 24C48 36.1503 38.1503 46 26 46C13.8497 46 4 36.1503 4 24Z"
                        fill="white"
                        fillOpacity="0.8"
                        shapeRendering="crispEdges"
                      />
                      <path
                        d="M19.4541 16.796C21.9382 15.2722 24.1667 15.8795 25.513 16.8905C25.7345 17.0568 25.8865 17.1707 25.9997 17.2475C26.1128 17.1707 26.2648 17.0568 26.4863 16.8905C27.8326 15.8795 30.0611 15.2722 32.5453 16.796C34.263 17.8496 35.2295 20.0505 34.8903 22.5793C34.5496 25.1202 32.9049 27.9941 29.4219 30.5721C28.2124 31.4678 27.3247 32.1253 25.9997 32.1253C24.6746 32.1253 23.7869 31.4678 22.5775 30.5721C19.0944 27.9941 17.4498 25.1202 17.109 22.5793C16.7699 20.0505 17.7364 17.8496 19.4541 16.796Z"
                        fill="#D84E4E"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2663_1602"
                        x="0"
                        y="-2"
                        width="52"
                        height="54"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0 0.117647 0 0 0 0.04 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2663_1602"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2663_1602"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
              </div>
              <div className="px-2 py-4">
                <h2 className="text-[18px] font-[600] leading-[24px] text-[#1C1D1E] dark:text-[#c4c7cd]">
                  Watercress Crescent Home
                </h2>
                <h5 className="pt-2 text-[14px] font-[500] leading-[20px] text-[#595D61] dark:text-[#c4c7cd]">
                  210 Jericho Highway, Comfort Island, Ibadan
                </h5>
              </div>
              <div className="mx-2 flex justify-between border-b-[1px] border-dashed border-[#E5E6E8] pb-[10px]">
                <div className="flex items-center gap-[4px]">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3333 14.5835L1.66667 14.5835"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3333 17.5L18.3333 13.3333C18.3333 11.762 18.3333 10.9763 17.8452 10.4882C17.357 10 16.5714 10 15 10L5.00001 10C3.42866 10 2.64298 10 2.15483 10.4882C1.66667 10.9763 1.66667 11.762 1.66667 13.3333L1.66667 17.5"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.3333 10V8.84817C13.3333 8.42525 13.2571 8.28379 12.8663 8.11708C12.0526 7.76991 11.0649 7.5 10 7.5C8.93513 7.5 7.9474 7.76991 7.13367 8.11708C6.74295 8.28379 6.66667 8.42525 6.66667 8.84817L6.66667 10"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M16.6667 10V6.13381C16.6667 5.55744 16.6667 5.26925 16.5244 4.99711C16.382 4.72496 16.1792 4.58409 15.7737 4.30236C14.1384 3.16648 12.1477 2.5 10 2.5C7.85236 2.5 5.8616 3.16648 4.22637 4.30236C3.82078 4.58409 3.61799 4.72496 3.47567 4.99711C3.33334 5.26925 3.33334 5.55744 3.33334 6.13381L3.33334 10"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                  <h6 className="text-[14px] font-[500] leading-[20px] text-[#595D61] dark:text-[#c4c7cd] dark:text-white">
                    4 Beds
                  </h6>
                </div>
                <div className="flex items-center gap-[4px]">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3333 10L12.5 10C11.9591 10 11.4327 9.82456 11 9.5L9 8C8.56726 7.67544 8.04092 7.5 7.5 7.5L1.66666 7.5"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.5 7.5V9.16667C2.5 12.3094 2.5 13.8807 3.47631 14.857C4.45262 15.8333 6.02397 15.8333 9.16667 15.8333H11.6667C14.0074 15.8333 15.1778 15.8333 16.0186 15.2716C16.3825 15.0284 16.695 14.7159 16.9382 14.3519C17.5 13.5112 17.5 12.3408 17.5 10"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 15.8335V17.5002M5 15.8335V17.5002"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.16666 7.5L4.16666 3.75C4.16666 3.05964 4.72631 2.5 5.41666 2.5C6.10702 2.5 6.66666 3.05964 6.66666 3.75V4.16667"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h6 className="text-[14px] font-[500] leading-[20px] text-[#595D61] dark:text-[#c4c7cd] dark:text-white">
                    2 Bathrooms
                  </h6>
                </div>
                <div className="flex items-center gap-[4px]">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.20248 2.62117L5.7818 3.27785C3.59393 4.28916 2.5 4.79481 2.5 5.62484C2.5 6.45486 3.59393 6.96052 5.7818 7.97182L7.20249 8.62851C8.57936 9.26495 9.26781 9.58317 10 9.58317C10.7322 9.58317 11.4206 9.26495 12.7975 8.62851L14.2182 7.97182C16.4061 6.96052 17.5 6.45486 17.5 5.62484C17.5 4.79481 16.4061 4.28916 14.2182 3.27785L12.7975 2.62116C11.4206 1.98472 10.7322 1.6665 10 1.6665C9.26781 1.6665 8.57937 1.98472 7.20248 2.62117Z"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.3233 9.24756C17.4411 9.41319 17.5 9.58582 17.5 9.77566C17.5 10.5939 16.4061 11.0923 14.2182 12.0892L12.7975 12.7366C11.4206 13.3639 10.7322 13.6776 10 13.6776C9.26781 13.6776 8.57936 13.3639 7.20249 12.7366L5.7818 12.0892C3.59394 11.0923 2.5 10.5939 2.5 9.77566C2.5 9.58582 2.55889 9.41319 2.67667 9.24756"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.9806 13.5552C17.3269 13.831 17.5 14.1059 17.5 14.4314C17.5 15.2496 16.4061 15.7481 14.2182 16.745L12.7975 17.3923C11.4206 18.0197 10.7322 18.3334 10 18.3334C9.26781 18.3334 8.57936 18.0197 7.20249 17.3923L5.7818 16.745C3.59394 15.7481 2.5 15.2496 2.5 14.4314C2.5 14.1059 2.67315 13.831 3.01945 13.5552"
                        stroke="#12725B"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h6 className="text-[14px] font-[500] leading-[20px] text-[#595D61] dark:text-[#c4c7cd] dark:text-white">
                    600 m2
                  </h6>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pt-[10px]">
                <h2 className="text-[18px] font-[700] leading-[24px] text-[#12725B]">
                  ₦25,000,000
                </h2>
                <Button
                  text="View"
                  stroke="#12725B"
                  type="button"
                  className="h-[36px] w-[97px] rounded-[8px] border-[1px] border-[#12725B] text-[14px] text-[#12725B]"
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Favourites;
