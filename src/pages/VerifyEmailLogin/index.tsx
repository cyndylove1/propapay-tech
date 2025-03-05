import Button from "@/components/common/Button";
import Cover from "@/components/common/Cover";
import Line from "@/components/Line";
import Otp from "@/components/Otp";
import RegisterFooter from "@/components/RegisterFooter";
import RegisterHeader from "@/components/RegisterHeader";
import Timer from "@/components/Timer";


const VerifyEmailLogin = () => {
  return (
    <>
      <div className="md:mr-0 md:ml-4 md:grid-cols-2 grid h-screen grid-cols-1 mx-4 bg-white">
        <div className="">
          <RegisterHeader
            btnText="Sign Up"
            linkTo="/signup"
            account="Don't have an account?"
          />
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
                fill="url(#paint0_linear_1821_179030)"
              />
              <rect
                x="0.5"
                y="0.5"
                width="87"
                height="87"
                rx="43.5"
                stroke="url(#paint1_linear_1821_179030)"
              />
              <g filter="url(#filter0_d_1821_179030)">
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
                  d="M47.412 31.5013C45.13 31.4439 42.8703 31.4439 40.5883 31.5013L40.5203 31.503C38.7387 31.5477 37.305 31.5838 36.156 31.784C34.9529 31.9937 33.9753 32.3958 33.1496 33.2252C32.3274 34.0511 31.9279 35.0148 31.7225 36.1984C31.5269 37.3257 31.4971 38.725 31.4602 40.459L31.4587 40.5274L31.4585 40.546V43.9538L31.4587 43.9724L31.4602 44.0409C31.4971 45.7748 31.5269 47.1741 31.7225 48.3014C31.9279 49.485 32.3274 50.4488 33.1496 51.2746C33.9753 52.1041 34.9529 52.5062 36.156 52.7158C37.305 52.9161 38.7387 52.9521 40.5202 52.9969L40.5883 52.9986C41.0567 53.0103 41.5241 53.0197 41.9909 53.0266C41.5885 52.0413 41.3667 50.9631 41.3667 49.8333C41.3667 45.1618 45.1574 41.3749 49.8334 41.3749C52.5557 41.3749 54.978 42.6585 56.5268 44.6528C56.5314 44.4536 56.5357 44.2496 56.5402 44.0408L56.5416 43.9724L56.5418 43.9538V40.546L56.5416 40.5274L56.5402 40.459C56.5033 38.7251 56.4735 37.3257 56.2778 36.1984C56.0724 35.0148 55.6729 34.0511 54.8508 33.2252C54.025 32.3958 53.0474 31.9937 51.8443 31.784C50.6953 31.5838 49.2616 31.5478 47.48 31.503L47.412 31.5013Z"
                  fill="#696E71"
                />
                <path
                  d="M37.4125 36.8462C37.6584 36.4302 38.195 36.2924 38.611 36.5383L42.0433 38.5676C43.0284 39.1501 43.5522 39.3332 43.999 39.3332C44.4458 39.3332 44.9696 39.1501 45.9547 38.5676L49.387 36.5383C49.803 36.2924 50.3396 36.4302 50.5855 36.8462C50.8315 37.2622 50.6936 37.7988 50.2777 38.0447L46.8453 40.074C45.8293 40.6747 44.9526 41.0832 43.999 41.0832C43.0454 41.0832 42.1687 40.6747 41.1527 40.074L37.7203 38.0447C37.3044 37.7988 37.1665 37.2622 37.4125 36.8462Z"
                  fill="#696E71"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M49.8328 43.125C46.1279 43.125 43.1245 46.1284 43.1245 49.8333C43.1245 53.5382 46.1279 56.5417 49.8328 56.5417C53.5378 56.5417 56.5412 53.5382 56.5412 49.8333C56.5412 46.1284 53.5378 43.125 49.8328 43.125ZM52.4583 48.9084C52.9138 48.747 53.1523 48.247 52.991 47.7915C52.8296 47.3359 52.3296 47.0974 51.8741 47.2588C51.3116 47.458 50.7894 47.8311 50.3475 48.2187C49.8966 48.6142 49.4785 49.07 49.1266 49.4918C48.9561 49.6962 48.7986 49.8956 48.6578 50.0806C48.5549 49.9842 48.4518 49.9029 48.3495 49.8347C48.3328 49.8236 48.3158 49.812 48.2985 49.8002C48.1238 49.6808 47.9106 49.5351 47.4995 49.5419C47.0163 49.5419 46.6245 49.9337 46.6245 50.4169C46.6245 50.8541 46.9451 51.2164 47.364 51.2815C47.3682 51.284 47.3731 51.287 47.3787 51.2908C47.4437 51.3341 47.6438 51.4954 47.8836 51.9749C48.0246 52.2569 48.3065 52.4413 48.6214 52.4574C48.9363 52.4735 49.2358 52.3185 49.4049 52.0525C49.4049 52.0525 49.6016 51.7574 49.6963 51.6233C49.8862 51.3542 50.1548 50.9911 50.4704 50.6128C50.7877 50.2325 51.1417 49.8499 51.5014 49.5344C51.8701 49.211 52.1972 49.0008 52.4583 48.9084Z"
                  fill="#696E71"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1821_179030"
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
                    result="effect1_dropShadow_1821_179030"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1821_179030"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1821_179030"
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
                  id="paint1_linear_1821_179030"
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
            <div className="w-full xl:w-[480px]">
              <div className="text-center">
                <h2 className="md:text-[36px] text-[25px] font-[600] leading-[48px] tracking-tight text-[#1C1D1E]">
                  Verify it’s you
                </h2>
                <h6 className="pt-[5px] text-[16px] font-[500] leading-[24px] text-[#414444]">
                  Please enter the 6 digit code that was sent to <br />
                  <span className="text-[#12725b]">
                    {" "}
                    josiahovo@gmail.com
                  </span>{" "}
                  to verify your identity.
                </h6>
              </div>
              <Line />
              <Otp />
              <Button
                text="Verify Account"
                type="submit"
                className="h-[48px] w-full rounded-xl bg-[#12725b] text-white "
              />
              <Timer />
            </div>
          </div>
          <div className="px-4 pt-[18rem]">
            <RegisterFooter />
          </div>
        </div>
        <Cover />
      </div>
    </>
  );
};
export default VerifyEmailLogin;
