import { useState, useEffect } from "react";
import Btn from "./common/Btn";

interface PropertyModalProps {
  isOpen: boolean;
    onClose: () => void;
    title: string;
}

const Modal: React.FC<PropertyModalProps> = ({ isOpen, onClose, title }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowModal(true), 100);
      document.body.classList.add("overflow-hidden"); // Prevent background scrolling
    } else {
      setShowModal(false);
      document.body.classList.remove("overflow-hidden"); // Restore scrolling
    }

    return () => document.body.classList.remove("overflow-hidden"); // Cleanup
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#000] bg-opacity-50">
      <div
        className={`h-screen w-[550px] transform overflow-y-auto rounded-lg bg-neutral-50 shadow-lg transition-all duration-300 ${
          showModal ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center justify-between p-2 p-4">
                  <h2 className="text-xl font-semibold">{title}</h2>
          <span
            onClick={() => {
              setShowModal(false);
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

        {/* Payer Details */}
        <div className="mx-[10px] rounded-xl border-[1px] border-neutral-200 bg-white px-2">
          <div className="border-grey border-b-[1px]">
            <h2 className="text-primaryColor font-size px-2 py-4 text-[18px] font-[500] leading-[24px]">
              Payer
            </h2>
          </div>
          <div>
            <div className="flex items-center justify-between p-[3px] px-2">
              <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                Payer
              </h2>
              <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                Jhon Smith
              </h6>
            </div>
            <div className="flex items-center justify-between p-[3px] px-2">
              <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                Payer Code
              </h2>
              <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                1243 4569 8541 7415
              </h6>
            </div>
            <div className="flex items-center justify-between p-[3px] px-2">
              <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                IBAN
              </h2>
              <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                USD74865758685894756854
              </h6>
            </div>
            <div className="flex items-center justify-between p-[3px] px-2">
              <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                Provider of Payment Services
              </h2>
              <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                Privat Bank
              </h6>
            </div>
            <div className="border-grey border-b-[1px]">
              <h2 className="text-primaryColor font-size px-2 py-4 text-[18px] font-[500] leading-[24px]">
                Recipient
              </h2>
            </div>
            <div>
              <div className="flex items-center justify-between p-[3px] px-2">
                <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                  Recipient
                </h2>
                <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                  Jhon Smith
                </h6>
              </div>
              <div className="flex items-center justify-between p-[3px] px-2">
                <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                  Payer Code
                </h2>
                <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                  1243 4569 8541 7415
                </h6>
              </div>
              <div className="flex items-center justify-between p-[3px] px-2">
                <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                  IBAN
                </h2>
                <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                  USD74865758685894756854
                </h6>
              </div>
              <div className="flex items-center justify-between p-[3px] px-2">
                <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                  Provider of Payment Services
                </h2>
                <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                  Privat Bank
                </h6>
              </div>
              <div>
                <div className="border-grey border-b-[1px]">
                  <h2 className="text-primaryColor font-size px-2 py-4 text-[18px] font-[500] leading-[24px]">
                    Transaction
                  </h2>
                </div>
                <div>
                  <div className="flex items-center justify-between p-[3px] px-2">
                    <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                      Amount
                    </h2>
                    <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                      +200,00
                    </h6>
                  </div>
                  <div className="flex items-center justify-between p-[3px] px-2">
                    <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                      Commission
                    </h2>
                    <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                      $0.00
                    </h6>
                  </div>
                  <div className="flex items-center justify-between p-[3px] px-2">
                    <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                      Balance
                    </h2>
                    <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                      $65,658,00
                    </h6>
                  </div>
                  <div className="flex items-center justify-between p-[3px] px-2">
                    <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                      Status
                    </h2>
                    <span>
                      <svg
                        width="69"
                        height="24"
                        viewBox="0 0 69 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_ii_3098_264925)">
                          <rect width="69" height="24" rx="4" fill="#E1F4EF" />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="68"
                            height="23"
                            rx="3.5"
                            stroke="url(#paint0_linear_3098_264925)"
                          />
                          <circle cx="12" cy="12" r="3" fill="#29896E" />
                          <path
                            d="M24.9588 16V7.27273H28.1548C28.7741 7.27273 29.2869 7.375 29.6932 7.57955C30.0994 7.78125 30.4034 8.0554 30.6051 8.40199C30.8068 8.74574 30.9077 9.13352 30.9077 9.56534C30.9077 9.92898 30.8409 10.2358 30.7074 10.4858C30.5739 10.733 30.3949 10.9318 30.1705 11.0824C29.9489 11.2301 29.7045 11.3381 29.4375 11.4062V11.4915C29.7273 11.5057 30.0099 11.5994 30.2855 11.7727C30.5639 11.9432 30.794 12.1861 30.9759 12.5014C31.1577 12.8168 31.2486 13.2003 31.2486 13.652C31.2486 14.098 31.1435 14.4986 30.9332 14.8537C30.7259 15.206 30.4048 15.4858 29.9702 15.6932C29.5355 15.8977 28.9801 16 28.304 16H24.9588ZM26.2756 14.8707H28.1761C28.8068 14.8707 29.2585 14.7486 29.5312 14.5043C29.804 14.2599 29.9403 13.9545 29.9403 13.5881C29.9403 13.3125 29.8707 13.0597 29.7315 12.8295C29.5923 12.5994 29.3935 12.4162 29.1349 12.2798C28.8793 12.1435 28.5753 12.0753 28.223 12.0753H26.2756V14.8707ZM26.2756 11.0483H28.0398C28.3352 11.0483 28.6009 10.9915 28.8366 10.8778C29.0753 10.7642 29.2642 10.6051 29.4034 10.4006C29.5455 10.1932 29.6165 9.94886 29.6165 9.66761C29.6165 9.30682 29.4901 9.00426 29.2372 8.75994C28.9844 8.51562 28.5966 8.39347 28.0739 8.39347H26.2756V11.0483ZM34.6129 16.1449C34.1982 16.1449 33.8232 16.0682 33.4879 15.9148C33.1527 15.7585 32.8871 15.5327 32.6911 15.2372C32.4979 14.9418 32.4013 14.5795 32.4013 14.1506C32.4013 13.7812 32.4723 13.4773 32.6143 13.2386C32.7564 13 32.9482 12.8111 33.1896 12.6719C33.4311 12.5327 33.701 12.4276 33.9993 12.3565C34.2976 12.2855 34.6016 12.2315 34.9112 12.1946C35.3033 12.1491 35.6214 12.1122 35.8658 12.0838C36.1101 12.0526 36.2876 12.0028 36.3984 11.9347C36.5092 11.8665 36.5646 11.7557 36.5646 11.6023V11.5724C36.5646 11.2003 36.4595 10.9119 36.2493 10.7074C36.0419 10.5028 35.7322 10.4006 35.3203 10.4006C34.8913 10.4006 34.5533 10.4957 34.3061 10.6861C34.0618 10.8736 33.8928 11.0824 33.799 11.3125L32.6016 11.0398C32.7436 10.642 32.951 10.321 33.2237 10.0767C33.4993 9.82955 33.8161 9.65057 34.174 9.53977C34.532 9.42614 34.9084 9.36932 35.3033 9.36932C35.5646 9.36932 35.8416 9.40057 36.1342 9.46307C36.4297 9.52273 36.7053 9.63352 36.9609 9.79545C37.2195 9.95739 37.4311 10.1889 37.5959 10.4901C37.7607 10.7884 37.843 11.1761 37.843 11.6534V16H36.5987V15.1051H36.5476C36.4652 15.2699 36.3416 15.4318 36.1768 15.5909C36.0121 15.75 35.8004 15.8821 35.5419 15.9872C35.2834 16.0923 34.9737 16.1449 34.6129 16.1449ZM34.8899 15.1222C35.2422 15.1222 35.5433 15.0526 35.7933 14.9134C36.0462 14.7741 36.2379 14.5923 36.3686 14.3679C36.5021 14.1406 36.5689 13.8977 36.5689 13.6392V12.7955C36.5234 12.8409 36.4354 12.8835 36.3047 12.9233C36.1768 12.9602 36.0305 12.9929 35.8658 13.0213C35.701 13.0469 35.5405 13.071 35.3842 13.0938C35.228 13.1136 35.0973 13.1307 34.9922 13.1449C34.745 13.1761 34.5192 13.2287 34.3146 13.3026C34.1129 13.3764 33.951 13.483 33.8288 13.6222C33.7095 13.7585 33.6499 13.9403 33.6499 14.1676C33.6499 14.483 33.7663 14.7216 33.9993 14.8835C34.2322 15.0426 34.5291 15.1222 34.8899 15.1222ZM41.9904 16.1278C41.462 16.1278 40.9904 15.9929 40.5756 15.723C40.1637 15.4503 39.8398 15.0625 39.604 14.5597C39.3711 14.054 39.2546 13.4474 39.2546 12.7401C39.2546 12.0327 39.3725 11.4276 39.6083 10.9247C39.8469 10.4219 40.1737 10.0369 40.5884 9.76989C41.0032 9.50284 41.4734 9.36932 41.9989 9.36932C42.4052 9.36932 42.7319 9.4375 42.979 9.57386C43.229 9.70739 43.4222 9.86364 43.5586 10.0426C43.6978 10.2216 43.8058 10.3793 43.8825 10.5156H43.9592V7.27273H45.2333V16H43.989V14.9815H43.8825C43.8058 15.1207 43.695 15.2798 43.5501 15.4588C43.408 15.6378 43.212 15.794 42.962 15.9276C42.712 16.0611 42.3881 16.1278 41.9904 16.1278ZM42.2717 15.0412C42.6381 15.0412 42.9478 14.9446 43.2006 14.7514C43.4563 14.5554 43.6495 14.2841 43.7802 13.9375C43.9137 13.5909 43.9805 13.1875 43.9805 12.7273C43.9805 12.2727 43.9151 11.875 43.7844 11.5341C43.6538 11.1932 43.462 10.9276 43.2092 10.7372C42.9563 10.5469 42.6438 10.4517 42.2717 10.4517C41.8881 10.4517 41.5685 10.5511 41.3129 10.75C41.0572 10.9489 40.864 11.2202 40.7333 11.5639C40.6055 11.9077 40.5415 12.2955 40.5415 12.7273C40.5415 13.1648 40.6069 13.5582 40.7376 13.9077C40.8683 14.2571 41.0614 14.5341 41.3171 14.7386C41.5756 14.9403 41.8938 15.0412 42.2717 15.0412ZM49.7962 18.5909C49.2763 18.5909 48.8288 18.5227 48.4538 18.3864C48.0817 18.25 47.7777 18.0696 47.5419 17.8452C47.3061 17.6207 47.13 17.375 47.0135 17.108L48.1087 16.6562C48.1854 16.7812 48.2876 16.9134 48.4155 17.0526C48.5462 17.1946 48.7223 17.3153 48.9439 17.4148C49.1683 17.5142 49.4567 17.5639 49.8089 17.5639C50.2919 17.5639 50.6911 17.446 51.0064 17.2102C51.3217 16.9773 51.4794 16.6051 51.4794 16.0938V14.8068H51.3984C51.3217 14.946 51.2109 15.1009 51.0661 15.2713C50.924 15.4418 50.728 15.5895 50.478 15.7145C50.228 15.8395 49.9027 15.902 49.5021 15.902C48.9851 15.902 48.5192 15.7812 48.1044 15.5398C47.6925 15.2955 47.3658 14.9361 47.1243 14.4616C46.8857 13.9844 46.7663 13.3977 46.7663 12.7017C46.7663 12.0057 46.8842 11.4091 47.12 10.9119C47.3587 10.4148 47.6854 10.0341 48.1001 9.76989C48.5149 9.50284 48.9851 9.36932 49.5107 9.36932C49.9169 9.36932 50.245 9.4375 50.495 9.57386C50.745 9.70739 50.9396 9.86364 51.0788 10.0426C51.2209 10.2216 51.3303 10.3793 51.407 10.5156H51.5007V9.45455H52.7493V16.1449C52.7493 16.7074 52.6186 17.169 52.3572 17.5298C52.0959 17.8906 51.7422 18.1577 51.2962 18.331C50.853 18.5043 50.353 18.5909 49.7962 18.5909ZM49.7834 14.8452C50.1499 14.8452 50.4595 14.7599 50.7124 14.5895C50.968 14.4162 51.1612 14.169 51.2919 13.848C51.4254 13.5241 51.4922 13.1364 51.4922 12.6847C51.4922 12.2443 51.4268 11.8565 51.2962 11.5213C51.1655 11.1861 50.9737 10.9247 50.7209 10.7372C50.468 10.5469 50.1555 10.4517 49.7834 10.4517C49.3999 10.4517 49.0803 10.5511 48.8246 10.75C48.5689 10.946 48.3757 11.2131 48.245 11.5511C48.1172 11.8892 48.0533 12.267 48.0533 12.6847C48.0533 13.1136 48.1186 13.4901 48.2493 13.8139C48.38 14.1378 48.5732 14.3906 48.8288 14.5724C49.0874 14.7543 49.4055 14.8452 49.7834 14.8452ZM57.2791 16.1321C56.6342 16.1321 56.0788 15.9943 55.6129 15.7188C55.1499 15.4403 54.7919 15.0497 54.5391 14.5469C54.2891 14.0412 54.1641 13.4489 54.1641 12.7699C54.1641 12.0994 54.2891 11.5085 54.5391 10.9972C54.7919 10.4858 55.1442 10.0866 55.5959 9.79972C56.0504 9.51278 56.5817 9.36932 57.1896 9.36932C57.5589 9.36932 57.9169 9.4304 58.2635 9.55256C58.6101 9.67472 58.9212 9.86648 59.1967 10.1278C59.4723 10.3892 59.6896 10.7287 59.8487 11.1463C60.0078 11.5611 60.0874 12.0653 60.0874 12.6591V13.1108H54.8842V12.1562H58.8388C58.8388 11.821 58.7706 11.5241 58.6342 11.2656C58.4979 11.0043 58.3061 10.7983 58.0589 10.6477C57.8146 10.4972 57.5277 10.4219 57.1982 10.4219C56.8402 10.4219 56.5277 10.5099 56.2607 10.6861C55.9964 10.8594 55.7919 11.0866 55.647 11.3679C55.505 11.6463 55.4339 11.9489 55.4339 12.2756V13.0213C55.4339 13.4588 55.5107 13.831 55.6641 14.1378C55.8203 14.4446 56.0376 14.679 56.3161 14.8409C56.5945 15 56.9197 15.0795 57.2919 15.0795C57.5334 15.0795 57.7536 15.0455 57.9524 14.9773C58.1513 14.9062 58.3232 14.8011 58.468 14.6619C58.6129 14.5227 58.7237 14.3509 58.8004 14.1463L60.0064 14.3636C59.9098 14.7187 59.7365 15.0298 59.4865 15.2969C59.2393 15.5611 58.9283 15.767 58.5533 15.9148C58.1811 16.0597 57.7564 16.1321 57.2791 16.1321Z"
                            fill="#29896E"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_ii_3098_264925"
                            x="0"
                            y="0"
                            width="69"
                            height="28"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
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
                            <feOffset dy="-1" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.25098 0 0 0 0 0.768627 0 0 0 0 0.666667 0 0 0 0.15 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="shape"
                              result="effect1_innerShadow_3098_264925"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="effect1_innerShadow_3098_264925"
                              result="effect2_innerShadow_3098_264925"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_3098_264925"
                            x1="34.5"
                            y1="-2"
                            x2="34.5"
                            y2="29.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.126406"
                              stop-color="#40C4AA"
                              stop-opacity="0.08"
                            />
                            <stop
                              offset="1"
                              stop-color="#40C4AA"
                              stop-opacity="0.2"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2 py-4">
                <h2 className="text-tertiaryColor text-[14px] font-[500] leading-[20px]">
                  Purpose Of Payment:
                </h2>
                <h6 className="text-primaryColor text-[14px] font-[500] leading-[20px]">
                  Tahsan Khan - transfer of personal funds
                </h6>
              </div>
              <div className="mx-2 mb-[2rem] mt-[5rem] flex items-center justify-between gap-[24px]">
                <div className="w-full rounded-[8px] border-[1px] border-neutral-200">
                  <Btn
                    text="Cancel"
                    type="button"
                    className="text-[14px] font-[600] leading-[20px] text-neutral-700"
                  />
                </div>
                <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand-base p-[12px] text-[14px] font-[600] leading-[20px] text-white">
                  <span>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.00024 9.66699L1.19511 10.2191C1.95358 12.3681 2.33281 13.4426 3.19809 14.0548C4.06338 14.667 5.20282 14.667 7.48172 14.667H9.51877C11.7977 14.667 12.9371 14.667 13.8024 14.0548C14.6677 13.4426 15.0469 12.3681 15.8054 10.2191L16.0002 9.66699"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8.50033 9.66683V1.3335M8.50033 9.66683C7.9168 9.66683 6.8266 8.00491 6.41699 7.5835M8.50033 9.66683C9.08385 9.66683 10.1741 8.00491 10.5837 7.5835"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h3>Download</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
