import { useEffect } from "react";
import Button from "./common/Button";

interface SuccessModalProps {
  onClose: () => void;
}

const PaymentSuccessModal: React.FC<SuccessModalProps> = ({ onClose }) => {
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
          <div className="py-[7rem] flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
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
                  fill="url(#paint0_linear_3367_218270)"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="151"
                  height="151"
                  rx="75.5"
                  stroke="url(#paint1_linear_3367_218270)"
                />
                <g filter="url(#filter0_d_3367_218270)">
                  <g clip-path="url(#clip0_3367_218270)">
                    <rect
                      x="16"
                      y="16"
                      width="120"
                      height="120"
                      rx="60"
                      fill="white"
                    />
                    <g filter="url(#filter1_i_3367_218270)">
                      <g clip-path="url(#clip1_3367_218270)">
                        <rect
                          x="16"
                          y="16"
                          width="120"
                          height="120"
                          rx="60"
                          fill="#32B56A"
                        />
                        <rect
                          x="16"
                          y="16"
                          width="120"
                          height="120"
                          rx="60"
                          fill="url(#paint2_linear_3367_218270)"
                        />
                        <path
                          d="M36 57.3046C36 51.5856 43.0415 48.2528 48.277 50.5541C50.8455 51.6831 53.5246 52.4709 56 52.4709C61.2021 52.4709 67.3038 48.9917 71.3872 46.1785C74.126 44.2917 77.874 44.2917 80.6128 46.1785C84.6962 48.9917 90.7979 52.4709 96 52.4709C98.4754 52.4709 101.155 51.6831 103.723 50.5541C108.958 48.2528 116 51.5856 116 57.3046V136C116 139.682 113.015 142.667 109.333 142.667H42.6667C38.9848 142.667 36 139.682 36 136V57.3046Z"
                          fill="url(#paint3_linear_3367_218270)"
                        />
                        <path
                          d="M64.3335 82.6673L72.6668 91.0007L89.3335 74.334"
                          stroke="#32B56A"
                          stroke-width="5.83333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect
                          x="61.8333"
                          y="103.5"
                          width="28.3333"
                          height="4.33333"
                          rx="2.16667"
                          fill="#32B56A"
                          stroke="#32B56A"
                          stroke-width="1.66667"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_3367_218270"
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
                      result="effect1_dropShadow_3367_218270"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3367_218270"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_i_3367_218270"
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
                      result="effect1_innerShadow_3367_218270"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_3367_218270"
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
                    id="paint1_linear_3367_218270"
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
                    id="paint2_linear_3367_218270"
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
                    id="paint3_linear_3367_218270"
                    x1="76"
                    y1="42.667"
                    x2="76"
                    y2="142.667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0.7" />
                  </linearGradient>
                  <clipPath id="clip0_3367_218270">
                    <rect
                      x="16"
                      y="16"
                      width="120"
                      height="120"
                      rx="60"
                      fill="white"
                    />
                  </clipPath>
                  <clipPath id="clip1_3367_218270">
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
        <h2 className="text-[24px] font-[600] text-neutral-950">
          Payment Successful! 🚀
        </h2>

        {/* Message */}
        <p className="mt-2 text-center text-[16px] leading-[24px] text-neutral-700">
          Your money has been successfully added to your wallet.  You can
          now use the balance for your transactions!
        </p>

        {/* Button */}
        <div className="mt-10 mb-[1rem]">
          <Button
            text="Continue"
            type="button"
            className="h-[48px] w-full rounded-[8px] text-[14px] font-[600] leading-[20px] bg-brand-base text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
