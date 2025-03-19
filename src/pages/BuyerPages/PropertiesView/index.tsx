import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules";
import properties from "@/assets/images/image.png";
import Checkbox from "@/components/common/Checkbox";
import Label from "@/components/common/Label";
import Input from "@/components/common/Input";
import avatar from "@/assets/images/Avatar.png";

const PropertiesView: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between px-4 py-[20px]">
          <div>
            <h2 className="md:text-[24px] text-[18px] font-[600] leading-[32px] text-neutral-950">
              Property Details
            </h2>
          </div>
          <button className="bg-brand-base flex h-[36px] w-[123px] items-center justify-center gap-[12px] rounded-lg">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.6665 9.99992C1.6665 7.05201 1.6665 5.57806 2.54384 4.594C2.68416 4.43661 2.83882 4.29105 3.00605 4.15898C4.05162 3.33325 5.61769 3.33325 8.74984 3.33325H11.2498C14.382 3.33325 15.9481 3.33325 16.9936 4.15898C17.1609 4.29105 17.3155 4.43661 17.4558 4.594C18.3332 5.57806 18.3332 7.05201 18.3332 9.99992C18.3332 12.9478 18.3332 14.4218 17.4558 15.4058C17.3155 15.5632 17.1609 15.7088 16.9936 15.8409C15.9481 16.6666 14.382 16.6666 11.2498 16.6666H8.74984C5.61769 16.6666 4.05162 16.6666 3.00605 15.8409C2.83882 15.7088 2.68416 15.5632 2.54384 15.4058C1.6665 14.4218 1.6665 12.9478 1.6665 9.99992Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.33301 13.3333H9.58301"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.083 13.3333L14.9997 13.3333"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.6665 7.5H18.3332"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="text-[14px] font-[600] leading-[20px] text-white">
              Available
            </h2>
          </button>
        </div>
        <div className="md:grid-cols-2 grid grid-cols-1 gap-3 mx-4">
          <div className="w-full rounded-2xl border-[1px] border-neutral-200">
            {/* carousel */}
            <div className="p-4">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000 }}
              >
                <div>
                  {Array(3)
                    .fill({})
                    .map(() => (
                      <SwiperSlide>
                        <img src={properties} alt="" className="w-full" />{" "}
                      </SwiperSlide>
                    ))}
                </div>
              </Swiper>
            </div>
            <div className="flex justify-between px-4">
              <div>
                <h2 className="text-[15px] font-[600] leading-[32px] text-neutral-950 md:text-[24px]">
                  Diamond Manco Apartment
                </h2>
                <h6 className="text-[14px] font-[500] leading-[20px] text-neutral-800">
                  210 Jericho Highway, Comfort Island, Ibadan
                </h6>
              </div>
              <div className="flex items-center gap-[12px]">
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8Z"
                      fill="white"
                    />
                    <path
                      d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8Z"
                      stroke="#E0E0E0"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.6451 11.3601C27.0771 11.3601 28.2371 12.5202 28.2371 13.9521C28.2371 15.384 27.0771 16.544 25.6451 16.544C24.2133 16.544 23.0532 15.384 23.0532 13.9521C23.0532 12.5202 24.2133 11.3601 25.6451 11.3601Z"
                      stroke="#2E2E2E"
                      stroke-width="1.44"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.2775 17.4075C16.7094 17.4075 17.8695 18.5676 17.8695 19.9994C17.8695 21.4314 16.7094 22.5914 15.2775 22.5914C13.8456 22.5914 12.6855 21.4314 12.6855 19.9994C12.6855 18.5676 13.8456 17.4075 15.2775 17.4075Z"
                      stroke="#2E2E2E"
                      stroke-width="1.44"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.6451 23.4561C27.0771 23.4561 28.2371 24.6161 28.2371 26.048C28.2371 27.4789 27.0771 28.64 25.6451 28.64C24.2133 28.64 23.0532 27.4789 23.0532 26.048C23.0532 24.6161 24.2133 23.4561 25.6451 23.4561Z"
                      stroke="#2E2E2E"
                      stroke-width="1.44"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5146 21.3039L23.4159 24.7431M23.4066 15.2563L17.5137 18.6946"
                      stroke="#2E2E2E"
                      stroke-width="1.44"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8Z"
                      fill="white"
                    />
                    <path
                      d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8Z"
                      stroke="#E0E0E0"
                    />
                    <path
                      d="M16.28 10.5006C16.91 10.5198 17.52 10.6298 18.111 10.8308H18.17C18.21 10.8498 18.24 10.8708 18.26 10.8898C18.481 10.9608 18.69 11.0408 18.89 11.1508L19.27 11.3208C19.42 11.4008 19.6 11.5498 19.7 11.6108C19.8 11.6698 19.91 11.7308 20 11.7998C21.111 10.9508 22.46 10.4908 23.85 10.5006C24.481 10.5006 25.111 10.5898 25.71 10.7908C29.401 11.9908 30.731 16.0408 29.62 19.5808C28.99 21.3898 27.96 23.0408 26.611 24.3898C24.68 26.2598 22.561 27.9198 20.28 29.3498L20.03 29.5008L19.77 29.3398C17.481 27.9198 15.35 26.2598 13.401 24.3798C12.061 23.0308 11.03 21.3898 10.39 19.5808C9.26002 16.0408 10.59 11.9908 14.321 10.7698C14.611 10.6698 14.91 10.5998 15.21 10.5608H15.33C15.611 10.5198 15.89 10.5006 16.17 10.5006H16.28ZM25.19 13.6608C24.78 13.5198 24.33 13.7408 24.18 14.1608C24.04 14.5808 24.26 15.0408 24.68 15.1898C25.321 15.4298 25.75 16.0608 25.75 16.7598V16.7908C25.731 17.0198 25.8 17.2408 25.94 17.4108C26.08 17.5808 26.29 17.6798 26.51 17.7008C26.92 17.6898 27.27 17.3608 27.3 16.9398V16.8208C27.33 15.4198 26.481 14.1508 25.19 13.6608Z"
                      fill="#12725B"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8Z"
                      fill="white"
                    />
                    <path
                      d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H32C36.1421 0.5 39.5 3.85786 39.5 8V32C39.5 36.1421 36.1421 39.5 32 39.5H8C3.85786 39.5 0.5 36.1421 0.5 32V8Z"
                      stroke="#E0E0E0"
                    />
                    <path
                      d="M20.0002 11.8999C19.0102 11.8999 18.2002 12.7099 18.2002 13.6999C18.2002 14.6899 19.0102 15.4999 20.0002 15.4999C20.9902 15.4999 21.8002 14.6899 21.8002 13.6999C21.8002 12.7099 20.9902 11.8999 20.0002 11.8999ZM20.0002 24.4999C19.0102 24.4999 18.2002 25.3099 18.2002 26.2999C18.2002 27.2899 19.0102 28.0999 20.0002 28.0999C20.9902 28.0999 21.8002 27.2899 21.8002 26.2999C21.8002 25.3099 20.9902 24.4999 20.0002 24.4999ZM20.0002 18.1999C19.0102 18.1999 18.2002 19.0099 18.2002 19.9999C18.2002 20.9899 19.0102 21.7999 20.0002 21.7999C20.9902 21.7999 21.8002 20.9899 21.8002 19.9999C21.8002 19.0099 20.9902 18.1999 20.0002 18.1999Z"
                      fill="#12725B"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="px-4">
              <h2 className="pb-[10px] pt-[20px] text-[18px] font-[500] leading-[24px] text-darkGray">
                Description
              </h2>
              <h6 className="text-[14px] font-[400] leading-[20px] text-darkGray">
                Hayfield Ashton Place Residences at Willow Brook Valley" evokes
                an elegant and serene residential community. It suggests a
                picturesque neighborhood with modern yet charming homes,
                possibly surrounded by lush greenery, rolling landscapes, or a
                tranquil brook. The name conveys a sense of sophistication,
                comfort, and exclusivity, ideal for those seeking a refined
                living experience in a scenic setting.
              </h6>
            </div>
            <div className="mx-4 mt-[30px] rounded-lg border-[1px] border-neutral-200 bg-neutral-50">
              <h4 className="px-4 pt-[10px] text-[16px] font-[500] leading-[24px] text-darkGray">
                Property Facilities
              </h4>
              <div className="grid grid-cols-2 gap-[16px] p-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.061 10.0952V6.14789C15.061 5.62349 15.061 5.36129 14.9853 5.1511C14.8561 4.79217 14.5734 4.50958 14.2146 4.38036C14.0043 4.30469 13.7422 4.30469 13.2178 4.30469H6.04633C5.52193 4.30469 5.25973 4.30469 5.04954 4.38036C4.69061 4.50958 4.40802 4.79217 4.2788 5.1511C4.20312 5.36129 4.20312 5.62349 4.20312 6.14789V10.0952"
                        stroke="#2E2E2E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.83128 10.0952V9.61684C8.83128 9.28908 8.83128 9.12516 8.78392 8.9938C8.7032 8.76948 8.52656 8.59284 8.30224 8.51212C8.17088 8.46484 8.00696 8.46484 7.67925 8.46484H7.18325C6.85551 8.46484 6.69163 8.46484 6.56026 8.51212C6.33593 8.59284 6.15931 8.76948 6.07855 8.9938C6.03125 9.12516 6.03125 9.28908 6.03125 9.61684V10.0952"
                        stroke="#2E2E2E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.2312 10.0952V9.61684C13.2312 9.28908 13.2312 9.12516 13.1838 8.9938C13.1031 8.76948 12.9264 8.59284 12.7021 8.51212C12.5708 8.46484 12.4068 8.46484 12.0792 8.46484H11.5832C11.2554 8.46484 11.0915 8.46484 10.9601 8.51212C10.7358 8.59284 10.5592 8.76948 10.4784 8.9938C10.4312 9.12516 10.4312 9.28908 10.4312 9.61684V10.0952"
                        stroke="#2E2E2E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.8312 15.6952V11.9384C16.8312 11.414 16.8312 11.1519 16.7555 10.9417C16.6262 10.5827 16.3437 10.3002 15.9847 10.1709C15.7745 10.0952 15.5124 10.0952 14.988 10.0952H4.27435C3.74996 10.0952 3.48776 10.0952 3.27757 10.1709C2.91864 10.3002 2.63605 10.5827 2.50682 10.9417C2.43115 11.1519 2.43115 11.414 2.43115 11.9384V15.6952"
                        stroke="#2E2E2E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.43115 14.7048H16.8312"
                        stroke="#2E2E2E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h2 className="text-[14px] font-[400] leading-[24px] text-darkGray">
                    4 Bedrooms
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00049 9.1665H14.6131C15.8339 9.1665 16.4443 9.1665 16.8129 9.77924C17.1815 10.392 16.9644 10.7826 16.5303 11.5639C15.6685 13.1148 13.9967 14.1665 12.0756 14.1665C10.7885 14.1665 9.61327 13.6945 8.71862 12.9165"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.00033 9.1665V3.33317C7.00033 2.5475 7.00033 2.15466 6.75625 1.91058C6.51217 1.6665 6.11933 1.6665 5.33366 1.6665C4.54798 1.6665 4.15515 1.6665 3.91107 1.91058C3.66699 2.15466 3.66699 2.5475 3.66699 3.33317V9.1665C3.66699 9.95218 3.66699 10.345 3.91107 10.5891C4.15515 10.8332 4.54798 10.8332 5.33366 10.8332C6.11933 10.8332 6.51217 10.8332 6.75625 10.5891C7.00033 10.345 7.00033 9.95218 7.00033 9.1665Z"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.16699 5.83325L8.66699 5.83325"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.667 14.1666C12.8337 14.9999 13.667 17.4999 15.3333 18.3333H3.66699C4.50033 17.4999 5.91699 14.8333 4.91699 10.8333"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h2 className="text-[14px] font-[400] leading-[24px] text-darkGray">
                    3 Bathrooms
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.32035 17.5H15.0131C16.5423 17.5 17.7812 16.2603 17.7812 14.7319V8.75375C17.7812 8.01109 17.4471 7.30811 16.8714 6.83865L12.2263 3.05459C11.3182 2.31514 10.0153 2.31514 9.10709 3.05459L4.46198 6.83865C3.8863 7.30811 3.55225 8.01109 3.55225 8.75375V14.7319C3.55225 16.2603 4.79116 17.5 6.32035 17.5Z"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.7417 11.9353C8.45359 12.8621 9.50276 13.4401 10.6671 13.4401C11.8314 13.4401 12.8806 12.8621 13.5925 11.9353"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="text-[14px] font-[400] leading-[24px] text-darkGray">
                    Smart Home System
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2497 2.5V7.5M6.08301 2.5V7.5M17.333 3.33333V5M17.333 5V6.66667M17.333 5H18.9997M3.99967 3.33333V5M3.99967 5V6.66667M3.99967 5H2.33301"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.2495 5L6.08285 5"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.99951 5V8.33333M12.3328 5V8.33333"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.83301 13.3333L7.74967 8.33325H13.583L16.4997 13.3333M4.83301 13.3333H16.4997M4.83301 13.3333V15.8333H16.4997V13.3333"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.9997 15.8333V17.4999M7.33301 15.8333V17.4999"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="text-[14px] font-[400] leading-[24px] text-darkGray">
                    Gyme
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.08301 10L3.74967 10.8333"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.9165 10.4167L16.2498 10.8334"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.6665 14.5833L6.87123 14.0715C7.17568 13.3104 7.3279 12.9298 7.64534 12.7149C7.96278 12.5 8.37266 12.5 9.19242 12.5H10.8073C11.627 12.5 12.0369 12.5 12.3543 12.7149C12.6718 12.9298 12.824 13.3104 13.1284 14.0715L13.3332 14.5833"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.6665 14.1667V16.5684C1.6665 16.884 1.86713 17.1726 2.18474 17.3137C2.39082 17.4053 2.58766 17.5001 2.82532 17.5001H4.25769C4.49535 17.5001 4.69219 17.4053 4.89827 17.3137C5.21588 17.1726 5.4165 16.884 5.4165 16.5684V15.0001"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.583 15.0001V16.5684C14.583 16.884 14.7836 17.1726 15.1012 17.3137C15.3073 17.4053 15.5042 17.5001 15.7418 17.5001H17.1742C17.4119 17.5001 17.6087 17.4053 17.8148 17.3137C18.1324 17.1726 18.333 16.884 18.333 16.5684V14.1667"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.6665 7.08342L17.4998 6.66675"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.33301 7.08342L2.49967 6.66675"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.75 7.5L4.65692 4.77924C5.0236 3.67921 5.20694 3.12919 5.64341 2.8146C6.07989 2.5 6.65966 2.5 7.8192 2.5H12.1808C13.3403 2.5 13.9201 2.5 14.3566 2.8146C14.7931 3.12919 14.9764 3.67921 15.3431 4.77924L16.25 7.5"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.74984 7.5H16.2498C17.0475 8.3446 18.3332 9.52079 18.3332 10.833V13.7252C18.3332 14.2005 18.0169 14.6007 17.5972 14.6562L14.9998 15H4.99984L2.40247 14.6562C1.98279 14.6007 1.6665 14.2005 1.6665 13.7252V10.833C1.6665 9.52079 2.95216 8.3446 3.74984 7.5Z"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="text-[14px] font-[400] leading-[24px] text-darkGray">
                    2 Parking
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.73438 4.19995L7.93654 7.40211M4.73438 4.19995L4.74078 7.14172M4.73438 4.19995L7.67576 4.20674"
                        stroke="#2E2E2E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.73291 15.3986L7.93507 12.1973M7.67507 15.3928L4.73369 15.3992L4.74009 12.4578"
                        stroke="#2E2E2E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.9331 15.3986L12.731 12.1973M15.9331 15.3986L15.9269 12.457M15.9331 15.3986L12.9918 15.392"
                        stroke="#2E2E2E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.9346 4.20034L12.7324 7.4017M12.9918 4.20635L15.9332 4.19995L15.9268 7.14133"
                        stroke="#2E2E2E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="text-[14px] font-[400] leading-[24px] text-darkGray">
                    1400 sq ft
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0002 17.4999H18.1668C16.9574 17.4999 15.8985 16.7842 15.6668 15.8333C15.4352 16.7842 14.3763 17.4999 13.1668 17.4999C11.9574 17.4999 10.8985 16.7842 10.6668 15.8333C10.4352 16.7842 9.37631 17.4999 8.16683 17.4999C6.95735 17.4999 5.89846 16.7842 5.66683 15.8333C5.43519 16.7842 4.37631 17.4999 3.16683 17.4999H2.3335"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5 2.5L16.2792 2.57359C15.1792 2.94026 14.6292 3.1236 14.3146 3.56008C14 3.99656 14 4.57633 14 5.73586L14 14.1667"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.8335 2.5L9.61274 2.57359C8.51271 2.94026 7.96269 3.1236 7.64809 3.56008C7.3335 3.99656 7.3335 4.57633 7.3335 5.73586L7.3335 14.1667"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.3335 5.83325H14.0002M7.3335 9.16659H14.0002M7.3335 12.4999H14.0002"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="text-[14px] font-[400] leading-[24px] text-darkGray">
                    Pool
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6668 7.49992C10.6668 3.74992 12.3335 3.33325 14.0002 3.33325C14.0002 5.83325 12.7502 7.49992 10.6668 7.49992ZM10.6668 7.49992C10.6668 3.74992 9.00016 3.33325 7.3335 3.33325C7.3335 5.83325 8.5835 7.49992 10.6668 7.49992Z"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 3.33317C9 3.33317 9.41667 2.08317 10.6667 1.6665C11.9167 2.08317 12.3333 3.33317 12.3333 3.33317"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6665 7.5V12.5"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6665 10.8332C10.8748 10.2776 11.6665 9.1665 13.1665 9.1665"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.6257 12.5H9.70761C7.99729 12.5 7.14213 12.5 6.72009 12.9973C6.29804 13.4945 6.53297 14.2253 7.00284 15.6868L7.08087 15.9295C7.45059 17.0796 7.63546 17.6546 8.12791 17.9898L8.14998 18.0046C8.64793 18.3333 9.32084 18.3333 10.6667 18.3333C12.0125 18.3333 12.6854 18.3333 13.1834 18.0046L13.2054 17.9898C13.6979 17.6546 13.8827 17.0796 14.2525 15.9295L14.3305 15.6868C14.8004 14.2253 15.0353 13.4945 14.6132 12.9973C14.1912 12.5 13.336 12.5 11.6257 12.5Z"
                        stroke="#2E2E2E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="text-[14px] font-[400] leading-[24px] text-darkGray">
                    Garden View
                  </h3>
                </div>
              </div>
            </div>
            <h2 className="px-4 py-[20px] text-[18px] font-[500] leading-[24px] text-darkGray">
              Location
            </h2>
          </div>
          <div className="mt-4 w-full rounded-xl border-[1px] border-neutral-200 md:mt-0 lg:mt-0">
            <div className="m-4 rounded-xl border-[1px] border-neutral-200 bg-neutral-50 p-4">
              <div className="">
                <h2 className="py-[10px] text-[18px] font-[500] leading-[24px] text-darkGray">
                  Property Pricing
                </h2>
                <div className="flex items-center gap-[4px]">
                  <span>
                    <Checkbox />
                  </span>
                  <h3 className="text-[16px] font-[400] leading-[24px] text-[#727272]">
                    Rent A House
                  </h3>
                </div>
                <div className="flex items-center gap-[4px] pt-[10px]">
                  <span>
                    <Checkbox />
                  </span>
                  <h3 className="text-[16px] font-[400] leading-[24px] text-[#727272]">
                    Buy A House
                  </h3>
                </div>
                <div className="pt-[10px]">
                  <Label text="Annual Payment" />
                  <Input className="mt-2 h-[40px] w-full bg-white" />
                </div>
                <div className="py-[10px]">
                  <Label text="Minimum Rental Duration" />
                  <Input className="mt-2 h-[40px] w-full bg-white" />
                </div>
              </div>
            </div>
            <div className="mx-4 mt-[20px] rounded-xl border-[1px] border-neutral-200 bg-neutral-50 p-4">
              <h2 className="py-[10px] text-[18px] font-[500] leading-[24px] text-darkGray">
                Agent Details
              </h2>
              <div className="flex items-center gap-[20px]">
                <img src={avatar} alt="" className="h-[48px] w-[48px]" />
                <div>
                  <h2 className="text-[18px] font-[500] leading-[24px] text-darkGray">
                    Sophia Williams
                  </h2>
                  <h6 className="text-[12px] font-[400] leading-[16px] text-darkGray">
                    Real Estate Agent
                  </h6>
                </div>
              </div>
              <div className="flex items-center gap-[12px] pb-[20px] pt-4">
                <button className="flex h-[40px] w-[138px] items-center justify-center gap-[4px] rounded-md border-[1px] border-[#294CD6] bg-brand-base">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.93089 1.07222C5.40313 1.16982 5.77921 1.48711 6.01287 1.9063L6.75721 3.24167C7.03138 3.73351 7.26211 4.14741 7.41279 4.50722C7.57263 4.8889 7.66756 5.26528 7.62416 5.68142C7.58077 6.09755 7.41022 6.44625 7.17508 6.78674C6.9534 7.10772 6.64224 7.46512 6.27249 7.88981L5.17832 9.14663C4.98224 9.37185 4.88421 9.48446 4.87525 9.62521C4.86629 9.76596 4.94664 9.88617 5.10734 10.1266C6.47699 12.1758 8.32295 14.0224 10.3739 15.3933C10.6143 15.554 10.7345 15.6343 10.8753 15.6254C11.016 15.6164 11.1286 15.5184 11.3539 15.3223L12.6107 14.2281C13.0354 13.8583 13.3928 13.5471 13.7138 13.3255C14.0543 13.0903 14.403 12.9198 14.8191 12.8764C15.2353 12.833 15.6116 12.9279 15.9933 13.0878C16.3531 13.2384 16.767 13.4691 17.2588 13.7433L18.5942 14.4877C19.0134 14.7213 19.3307 15.0974 19.4283 15.5697C19.5269 16.0468 19.3815 16.5264 19.0602 16.9206C17.8944 18.3509 16.0267 19.2616 14.0673 18.8664C12.863 18.6234 11.6746 18.2187 10.2374 17.3944C7.34959 15.7383 4.76036 13.1476 3.10613 10.2632C2.28187 8.82591 1.8771 7.63758 1.63415 6.4332C1.2389 4.47385 2.1496 2.60611 3.5799 1.44036C3.9741 1.11907 4.45372 0.973598 4.93089 1.07222Z"
                        fill="white"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h4 className="text-[14px] font-[500] leading-[20px] text-white">
                    Call Us
                  </h4>
                </button>
                <button className="flex h-[40px] w-[138px] items-center justify-center gap-[4px] rounded-md bg-[#a8eb6b]">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.24927 15.179C7.44899 17.3795 10.7089 17.8551 13.3741 16.6222C13.7679 16.4634 14.091 16.3357 14.3977 16.3357C15.2523 16.3404 16.3164 17.1694 16.869 16.6167C17.4217 16.064 16.5927 15 16.5927 14.1406C16.5927 13.8332 16.7157 13.5164 16.8737 13.1218C18.1074 10.4566 17.631 7.19743 15.4314 4.99694C12.6222 2.18852 8.05847 2.18852 5.24927 4.99694C2.43541 7.81159 2.44008 12.3698 5.24927 15.179Z"
                        stroke="#1C1D1E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.13987 10.3062V10.362M6.91357 10.3182C6.91357 10.4439 7.01556 10.5458 7.14125 10.5458C7.26695 10.5458 7.3688 10.4439 7.3688 10.3182C7.3688 10.1925 7.26695 10.0906 7.14125 10.0906C7.01556 10.0906 6.91357 10.1925 6.91357 10.3182Z"
                        stroke="#1C1D1E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.3444 10.3062V10.362M10.1182 10.3182C10.1182 10.4439 10.2202 10.5458 10.3458 10.5458C10.4715 10.5458 10.5734 10.4439 10.5734 10.3182C10.5734 10.1925 10.4715 10.0906 10.3458 10.0906C10.2202 10.0906 10.1182 10.1925 10.1182 10.3182Z"
                        stroke="#1C1D1E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.5491 10.3062V10.362M13.3228 10.3182C13.3228 10.4439 13.4248 10.5458 13.5504 10.5458C13.6762 10.5458 13.778 10.4439 13.778 10.3182C13.778 10.1925 13.6762 10.0906 13.5504 10.0906C13.4248 10.0906 13.3228 10.1925 13.3228 10.3182Z"
                        stroke="#1C1D1E"
                        stroke-width="1.44"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h4 className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                    Message
                  </h4>
                </button>
              </div>
            </div>
            <div className="m-4 mt-[20px] rounded-xl border-[1px] border-neutral-200 bg-neutral-50 p-4 pb-[20px]">
              <h2 className="py-[10px] text-[18px] font-[500] leading-[24px] text-darkGray">
                Inspection Times
              </h2>
              <h5 className="text-[16px] font-[400] leading-[24px] text-darkGray">
                Inspections are actions are still happening{" "}
              </h5>
              <h6 className="pt-2 text-[12px] font-[400] leading-[16px] text-[#727272]">
                Monday-Friday at 10:00am-5:00PM
              </h6>
              <button className="mt-[10px] flex h-[40px] w-full items-center justify-center gap-2 rounded-md border-[1px] border-[#294CD6] bg-brand-base">
                <span>
                  <svg
                    width="15"
                    height="18"
                    viewBox="0 0 15 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.38704 0.675081C4.02502 0.675081 3.7535 0.950776 3.75433 1.31726L4.38704 0.675081ZM4.38704 0.675081C4.74906 0.674248 5.02057 0.94911 5.0214 1.31559L4.38704 0.675081ZM12.0773 13.1998C12.0769 12.5368 11.5439 11.9933 10.8771 11.9933H10.8688V11.9932L10.8567 11.9935C10.2026 12.0093 9.68358 12.5541 9.69501 13.2088C9.69894 13.8552 10.2143 14.3956 10.8685 14.41L10.8685 14.4101L10.8806 14.4101C11.5482 14.4087 12.0784 13.8615 12.0773 13.1998ZM12.0773 13.1998C12.0773 13.2 12.0773 13.2003 12.0773 13.2005H11.5773L12.0773 13.1994C12.0773 13.1996 12.0773 13.1997 12.0773 13.1998ZM4.1544 14.3763C4.79991 14.3473 5.30736 13.799 5.28089 13.1429C5.26358 12.4946 4.73292 11.9927 4.0963 11.9942L4.08586 11.9942L4.07543 11.9946C3.42089 12.0235 2.92219 12.5696 2.92357 13.2124L2.92359 13.2231L2.92408 13.2338C2.95304 13.8761 3.48375 14.4069 4.1544 14.3763ZM4.1544 14.3763L4.13198 13.8768M4.1544 14.3763C4.15462 14.3763 4.15484 14.3763 4.15506 14.3763L4.13198 13.8768M4.13198 13.8768C3.7535 13.8943 3.44085 13.5944 3.42357 13.2113L4.09742 12.4942C4.46767 12.4933 4.77292 12.7849 4.78115 13.1597C4.79842 13.5428 4.50305 13.8601 4.13198 13.8768ZM4.1516 11.3778C4.79641 11.3485 5.30323 10.8 5.27677 10.1444C5.25948 9.49651 4.73001 8.99424 4.09219 8.99566L4.08175 8.99569L4.07132 8.99615C3.416 9.02499 2.9189 9.57193 2.92028 10.2139L2.9203 10.2241L2.92074 10.2343C2.94841 10.8785 3.48164 11.4086 4.1516 11.3778ZM4.1516 11.3778C4.15145 11.3778 4.15131 11.3778 4.15116 11.3778L4.12869 10.8783L4.15177 11.3778C4.15171 11.3778 4.15165 11.3778 4.1516 11.3778ZM10.5425 1.16675L10.5426 1.16675C10.5865 1.16665 10.6171 1.1825 10.6371 1.20257C10.6568 1.22228 10.6756 1.25542 10.6757 1.30815C10.6757 1.30823 10.6757 1.30831 10.6757 1.30839L10.6766 1.93261L10.6772 2.39435L11.1375 2.43042C12.1796 2.5121 13.0093 2.90355 13.5783 3.51263C14.1464 4.12091 14.4898 4.9841 14.4909 6.07539V6.07552L14.5 13.097C14.5 13.097 14.5 13.097 14.5 13.097C14.5015 14.298 14.1273 15.216 13.5009 15.834C12.8736 16.453 11.9405 16.8232 10.7257 16.8251L4.29259 16.8334C3.09041 16.8349 2.15621 16.4594 1.52348 15.8302C0.890958 15.2012 0.510572 14.2699 0.509061 13.0657V13.0657L0.500005 6.1267L0.500005 6.12667C0.498503 5.02252 0.830459 4.15565 1.38565 3.54434C1.94097 2.93289 2.75724 2.53566 3.80086 2.43985L4.25575 2.39809L4.25515 1.94129L4.25432 1.3166L4.25432 1.31614C4.2542 1.25961 4.27364 1.22706 4.29081 1.20963C4.30767 1.19251 4.33678 1.17508 4.38704 1.17508L4.38819 1.17508C4.43845 1.17496 4.46743 1.19228 4.48427 1.2093C4.50147 1.22667 4.52121 1.25942 4.5214 1.31645C4.5214 1.31654 4.5214 1.31663 4.5214 1.31672L4.52222 1.89934L4.52292 2.39932L5.0229 2.39863L9.91017 2.39197L10.4102 2.39129L10.4095 1.89126L10.4087 1.30822L10.4087 1.30781C10.4085 1.25141 10.4279 1.21912 10.445 1.20178C10.4619 1.18462 10.4914 1.16687 10.5425 1.16675ZM7.48612 11.99L7.47514 11.99L7.46416 11.9905C6.8105 12.0207 6.3134 12.5652 6.3134 13.2071V13.2184L6.3139 13.2297C6.34293 13.8732 6.87466 14.4016 7.54379 14.3722L7.5454 14.3721C8.18814 14.3417 8.69723 13.7958 8.67071 13.1379C8.65339 12.4901 8.12236 11.9886 7.48612 11.99ZM7.48283 8.96651L7.4724 8.96653L7.46197 8.96699C6.80742 8.99581 6.30873 9.54199 6.3101 10.1847L6.31013 10.1949L6.31056 10.2051C6.33829 10.8505 6.8723 11.3781 7.5405 11.3487L7.54211 11.3486C8.18578 11.3182 8.69308 10.7714 8.66741 10.1152C8.6493 9.46828 8.12079 8.96508 7.48283 8.96651ZM10.8727 8.97068V8.97058L10.1999 10.1703H9.69993V10.1709C9.69993 10.1711 9.69993 10.1712 9.69993 10.1714L9.69993 10.1795H9.69981L9.70004 10.1902C9.71435 10.8562 10.2623 11.3591 10.9111 11.3449L10.9125 11.3448C11.5716 11.3285 12.0712 10.7696 12.0574 10.1246L12.0576 10.1246L12.057 10.1118C12.0278 9.49297 11.5241 8.96921 10.8727 8.97068ZM10.4111 3.17405L10.4105 2.67398L9.91046 2.67466L5.02318 2.68133L4.52325 2.68201L4.52386 3.18194L4.52469 3.85515C4.52469 3.85521 4.52469 3.85527 4.52469 3.85532C4.52465 3.90688 4.50618 3.94124 4.48631 3.96158C4.46736 3.981 4.43812 3.99733 4.39197 3.99733L4.39082 3.99734C4.34441 3.99744 4.31479 3.98102 4.2957 3.9616C4.27582 3.94136 4.25762 3.90753 4.25762 3.85682L4.25762 3.85618L4.25679 3.21483L4.25609 2.66295L3.70695 2.71797C2.81811 2.80702 2.06196 3.12077 1.53336 3.7238C1.0068 4.32451 0.765738 5.14432 0.767076 6.12637L0.767079 6.12728L0.767907 6.38632L0.769502 6.88539L1.26857 6.88472L13.7254 6.86806L14.2247 6.8674V6.36806V6.07654H14.2248L14.2246 6.06667C14.2053 5.09255 13.9494 4.27939 13.4138 3.68701C12.8759 3.09212 12.1155 2.78576 11.2214 2.70819L10.6775 2.66099L10.6782 3.20695L10.679 3.84766C10.679 3.84778 10.679 3.8479 10.679 3.84803C10.6789 3.93732 10.6164 3.98984 10.5463 3.98984L10.5452 3.98984C10.4992 3.98994 10.4695 3.97364 10.4502 3.95395C10.43 3.93339 10.412 3.8994 10.412 3.84932V3.84871L10.4111 3.17405Z"
                      fill="white"
                      stroke="white"
                    />
                  </svg>
                </span>
                <h3 className="text-[14px] font-[500] leading-[20px] text-white">
                  Add To Calendar
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PropertiesView;
