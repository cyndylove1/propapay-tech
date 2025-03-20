import { useEffect } from "react";
import Button from "./common/Button";

interface SuccessModalProps {
  onClose: () => void;
}

const DeleteModal: React.FC<SuccessModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000] bg-opacity-50">
      <div className="w-[460px] rounded-lg bg-white p-4 text-center shadow-lg">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-green-100 flex h-16 w-16 items-center justify-center rounded-full py-[7rem]">
            <span className="">
              <svg
                width="152"
                height="152"
                viewBox="0 0 152 152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="151"
                  height="151"
                  rx="75.5"
                  fill="url(#paint0_linear_3381_362580)"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="151"
                  height="151"
                  rx="75.5"
                  stroke="url(#paint1_linear_3381_362580)"
                />
                <g filter="url(#filter0_d_3381_362580)">
                  <g clip-path="url(#clip0_3381_362580)">
                    <rect
                      x="16"
                      y="16"
                      width="120"
                      height="120"
                      rx="60"
                      fill="white"
                    />
                    <g filter="url(#filter1_i_3381_362580)">
                      <g clip-path="url(#clip1_3381_362580)">
                        <rect
                          x="16"
                          y="16"
                          width="120"
                          height="120"
                          rx="60"
                          fill="#D84E4E"
                        />
                        <rect
                          x="16"
                          y="16"
                          width="120"
                          height="120"
                          rx="60"
                          fill="url(#paint2_linear_3381_362580)"
                        />
                        <path
                          d="M36 57.6376C36 51.9186 43.0415 48.5858 48.277 50.8871C50.8455 52.0161 53.5246 52.8039 56 52.8039C61.2021 52.8039 67.3038 49.3247 71.3872 46.5115C74.126 44.6247 77.874 44.6247 80.6128 46.5115C84.6962 49.3247 90.7979 52.8039 96 52.8039C98.4754 52.8039 101.155 52.0161 103.723 50.8871C108.958 48.5858 116 51.9186 116 57.6376V136.333C116 140.015 113.015 143 109.333 143H42.6667C38.9848 143 36 140.015 36 136.333V57.6376Z"
                          fill="url(#paint3_linear_3381_362580)"
                        />
                        <path
                          d="M87.6654 81.334L64.332 104.667M64.332 81.334L87.6654 104.667"
                          stroke="#D84E4E"
                          stroke-width="5.83333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_3381_362580"
                    x="12"
                    y="14"
                    width="128"
                    height="128"
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
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3381_362580"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3381_362580"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_i_3381_362580"
                    x="16"
                    y="6"
                    width="120"
                    height="130"
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
                    <feOffset dy="-10" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0862745 0 0 0 0 0.2 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_3381_362580"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_3381_362580"
                    x1="76"
                    y1="0"
                    x2="76"
                    y2="152"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E4E5E7" stop-opacity="0.48" />
                    <stop offset="1" stop-color="#F7F8F8" stop-opacity="0" />
                    <stop offset="1" stop-color="#E4E5E7" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3381_362580"
                    x1="76"
                    y1="0"
                    x2="76"
                    y2="152"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E4E5E7" />
                    <stop
                      offset="0.765625"
                      stop-color="#E4E5E7"
                      stop-opacity="0"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_3381_362580"
                    x1="76"
                    y1="16"
                    x2="76"
                    y2="136"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.24" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_3381_362580"
                    x1="76"
                    y1="43"
                    x2="76"
                    y2="143"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0.7" />
                  </linearGradient>
                  <clipPath id="clip0_3381_362580">
                    <rect
                      x="16"
                      y="16"
                      width="120"
                      height="120"
                      rx="60"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="clip1_3381_362580">
                    <rect
                      x="16"
                      y="16"
                      width="120"
                      height="120"
                      rx="60"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className=" text-[24px] font-[600] text-neutral-base">
          Are you sure?
        </h2>

        {/* Message */}
        <p className="mt-2 text-[16px] text-center leading-[24px] text-neutral-700">
          You are about to take a critical action that cannot be undone. Please
          confirm your decision.
        </p>

        {/* Button */}
        <div className=" mt-10 mb-[1rem]">
          <Button
            text="Yes, Delete Reminder"
            type="button"
            className="h-[48px] bg-negative-500 w-full rounded-[8px] text-[14px] font-[600] leading-[20px] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
