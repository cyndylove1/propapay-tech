import Button from "@/components/common/Button";
import Cover from "@/components/common/Cover";
import Line from "@/components/Line";
import Otp from "@/components/Otp";
import RegisterFooter from "@/components/RegisterFooter";
import RegisterHeader from "@/components/RegisterHeader";
import Timer from "@/components/Timer";

const VerifyEmailRegister = () => {
  return (
    <>
      <div className="md:ml-0 md:mr-4 md:grid-cols-2 grid h-screen grid-cols-1 mx-4 bg-white">
        <Cover />
        <div>
          <RegisterHeader />
          <span className="flex justify-center pb-[20px] pt-[7rem]">
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="87"
                height="87"
                rx="43.5"
                fill="url(#paint0_linear_1782_182867)"
              />
              <rect
                x="0.5"
                y="0.5"
                width="87"
                height="87"
                rx="43.5"
                stroke="url(#paint1_linear_1782_182867)"
              />
              <g filter="url(#filter0_d_1782_182867)">
                <rect
                  x="16"
                  y="16"
                  width="56"
                  height="56"
                  rx="28"
                  fill="white"
                />
                <rect
                  x="16.5"
                  y="16.5"
                  width="55"
                  height="55"
                  rx="27.5"
                  stroke="#E2E4E9"
                />
                <path
                  opacity="0.4"
                  d="M47.4115 31.5015C45.1295 31.4442 42.8698 31.4442 40.5878 31.5015L40.5198 31.5032C38.7382 31.548 37.3045 31.584 36.1555 31.7842C34.9525 31.9939 33.9748 32.396 33.1491 33.2255C32.3269 34.0513 31.9274 35.015 31.722 36.1987C31.5264 37.326 31.4966 38.7253 31.4597 40.4592L31.4582 40.5276L31.458 40.5463V43.9541L31.4582 43.9727L31.4597 44.0411C31.4966 45.775 31.5264 47.1744 31.722 48.3017C31.9274 49.4853 32.3269 50.449 33.1491 51.2749C33.9748 52.1043 34.9525 52.5064 36.1555 52.7161C37.3045 52.9163 38.7382 52.9523 40.5197 52.9971L40.5878 52.9988C41.0562 53.0106 41.5236 53.0199 41.9904 53.0269C41.588 52.0415 41.3662 50.9634 41.3662 49.8335C41.3662 45.1621 45.1569 41.3752 49.8329 41.3752C52.5553 41.3752 54.9775 42.6587 56.5264 44.6531C56.5309 44.4538 56.5352 44.2499 56.5397 44.041L56.5411 43.9727L56.5413 43.954V40.5463L56.5411 40.5277L56.5397 40.4593C56.5028 38.7253 56.473 37.326 56.2773 36.1987C56.0719 35.0151 55.6725 34.0513 54.8503 33.2255C54.0245 32.396 53.0469 31.9939 51.8438 31.7843C50.6948 31.584 49.2611 31.548 47.4795 31.5032L47.4115 31.5015Z"
                  fill="#696E71"
                />
                <path
                  d="M37.412 36.8467C37.6579 36.4307 38.1945 36.2928 38.6105 36.5388L42.0428 38.5681C43.0279 39.1505 43.5517 39.3337 43.9985 39.3337C44.4453 39.3337 44.9691 39.1505 45.9542 38.5681L49.3865 36.5388C49.8025 36.2928 50.3391 36.4307 50.585 36.8467C50.831 37.2627 50.6931 37.7993 50.2772 38.0452L46.8448 40.0745C45.8288 40.6752 44.9521 41.0837 43.9985 41.0837C43.0449 41.0837 42.1682 40.6752 41.1522 40.0745L37.7199 38.0452C37.3039 37.7993 37.166 37.2627 37.412 36.8467Z"
                  fill="#696E71"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M49.8324 43.1255C46.1274 43.1255 43.124 46.1289 43.124 49.8338C43.124 53.5387 46.1274 56.5422 49.8324 56.5422C53.5373 56.5422 56.5407 53.5387 56.5407 49.8338C56.5407 46.1289 53.5373 43.1255 49.8324 43.1255ZM52.4578 48.9089C52.9133 48.7475 53.1518 48.2475 52.9905 47.7919C52.8292 47.3364 52.3291 47.0979 51.8736 47.2593C51.3111 47.4585 50.7889 47.8316 50.347 48.2192C49.8961 48.6147 49.478 49.0705 49.1261 49.4923C48.9556 49.6967 48.7981 49.8961 48.6573 50.0811C48.5544 49.9847 48.4513 49.9034 48.349 49.8352C48.3323 49.8241 48.3154 49.8125 48.2981 49.8007C48.1233 49.6812 47.9101 49.5356 47.499 49.5424C47.0158 49.5424 46.624 49.9341 46.624 50.4174C46.624 50.8546 46.9446 51.2169 47.3635 51.282C47.3677 51.2845 47.3726 51.2875 47.3782 51.2913C47.4432 51.3346 47.6433 51.4958 47.8831 51.9754C48.0241 52.2574 48.306 52.4418 48.6209 52.4579C48.9358 52.474 49.2353 52.319 49.4044 52.053C49.4044 52.053 49.6011 51.7579 49.6958 51.6238C49.8857 51.3547 50.1544 50.9916 50.4699 50.6133C50.7872 50.233 51.1412 49.8503 51.5009 49.5349C51.8697 49.2115 52.1968 49.0013 52.4578 48.9089Z"
                  fill="#696E71"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1782_182867"
                  x="12"
                  y="14"
                  width="64"
                  height="64"
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
                    result="effect1_dropShadow_1782_182867"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1782_182867"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1782_182867"
                  x1="44"
                  y1="0"
                  x2="44"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4E5E7" stop-opacity="0.48" />
                  <stop offset="1" stop-color="#F7F8F8" stop-opacity="0" />
                  <stop offset="1" stop-color="#E4E5E7" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1782_182867"
                  x1="44"
                  y1="0"
                  x2="44"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4E5E7" />
                  <stop
                    offset="0.765625"
                    stop-color="#E4E5E7"
                    stop-opacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="flex justify-center">
            <div className="w-full h-full xl:w-[480px]">
              <div className="text-center">
                <h2 className="md:text-[36px] text-[25px] font-[600] leading-[48px] tracking-tight text-[#1C1D1E]">
                  Enter 6-digits code
                </h2>
                <h6 className="py-[5px] text-[16px] font-[500] leading-[24px] text-[#414444]">
                  A confirmation code has been sent to your email address
                  <span className="text-[#12725b]">
                    {" "}
                    josiahovo@gmail.com
                  </span>{" "}
                  to complete your registration.
                </h6>
              </div>
              <Line />
              <Otp />
              <Button
                text="Verify Account"
                type="submit"
                className="h-[48px] w-full rounded-xl bg-[#12725b] text-white"
              />
              <Timer />
            </div>
          </div>
          <div className="px-4 pt-[18rem]">
            <RegisterFooter />
          </div>
        </div>
      </div>
    </>
  );
};
export default VerifyEmailRegister;
