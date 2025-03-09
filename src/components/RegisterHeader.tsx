import { Link } from "react-router";
import Btn from "./common/Btn";
  

interface RegisterHeaderProps {
  btnText?: string;
  linkTo?: string;
  account?: string;
}

const RegisterHeader: React.FC<RegisterHeaderProps> = ({
  btnText = "Sign In",
  linkTo = "/login",
  account = " Have an account?",
}) => {
  return (
    <>
      <div className="flex items-center justify-between px-4 pt-[20px]">
        <Link to="/">
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_1772_224482)">
                <rect width="40" height="40" rx="20" fill="#23A681" />
                <rect
                  width="40"
                  height="40"
                  rx="20"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M20.0003 23.2534C19.1821 21.9337 18.0665 20.818 16.7468 19.9999C18.0665 19.1817 19.1821 18.066 20.0003 16.7463C20.8185 18.066 21.9342 19.1817 23.2539 19.9999C21.9341 20.818 20.8185 21.9337 20.0003 23.2534Z"
                  fill="url(#paint0_linear_1772_224482)"
                  stroke="url(#paint1_linear_1772_224482)"
                  stroke-linecap="round"
                />
                <g filter="url(#filter1_d_1772_224482)">
                  <path
                    d="M33.2964 19C32.8095 12.4334 27.5666 7.1905 21 6.70361V11.4667C21 15.6272 24.3727 19 28.5333 19H33.2964Z"
                    fill="url(#paint2_linear_1772_224482)"
                    fill-opacity="0.8"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M21.5 11.4667V7.25337C27.3886 7.93871 32.0613 12.6114 32.7466 18.5H28.5333C24.6489 18.5 21.5 15.3511 21.5 11.4667Z"
                    stroke="url(#paint3_linear_1772_224482)"
                    stroke-linecap="round"
                    shape-rendering="crispEdges"
                  />
                </g>
                <g filter="url(#filter2_d_1772_224482)">
                  <path
                    d="M19 6.70361C12.4334 7.1905 7.1905 12.4334 6.70361 19H11.4667C15.6272 19 19 15.6272 19 11.4667V6.70361Z"
                    fill="url(#paint4_linear_1772_224482)"
                    fill-opacity="0.8"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M11.4667 18.5H7.25337C7.93871 12.6114 12.6114 7.93871 18.5 7.25337V11.4667C18.5 15.3511 15.3511 18.5 11.4667 18.5Z"
                    stroke="url(#paint5_linear_1772_224482)"
                    stroke-linecap="round"
                    shape-rendering="crispEdges"
                  />
                </g>
                <path
                  d="M28.5333 21.5H32.7466C32.0613 27.3886 27.3886 32.0613 21.5 32.7466V28.5333C21.5 24.6489 24.6489 21.5 28.5333 21.5Z"
                  fill="url(#paint6_linear_1772_224482)"
                  fill-opacity="0.8"
                  stroke="url(#paint7_linear_1772_224482)"
                  stroke-linecap="round"
                />
                <path
                  d="M18.5 28.5333V32.7466C12.6114 32.0613 7.93871 27.3886 7.25337 21.5H11.4667C15.3511 21.5 18.5 24.6489 18.5 28.5333Z"
                  fill="url(#paint8_linear_1772_224482)"
                  fill-opacity="0.8"
                  stroke="url(#paint9_linear_1772_224482)"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_1772_224482"
                  x="0"
                  y="-4"
                  width="40"
                  height="44"
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
                    result="effect1_innerShadow_1772_224482"
                  />
                </filter>
                <filter
                  id="filter1_d_1772_224482"
                  x="16.5556"
                  y="6.70361"
                  width="16.7408"
                  height="20.0742"
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
                    result="effect1_dropShadow_1772_224482"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1772_224482"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_1772_224482"
                  x="6.70361"
                  y="6.70361"
                  width="16.7408"
                  height="20.0742"
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
                    result="effect1_dropShadow_1772_224482"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1772_224482"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1772_224482"
                  x1="20.0003"
                  y1="15.7217"
                  x2="20.0003"
                  y2="28.6961"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1772_224482"
                  x1="35.1031"
                  y1="-5.04556"
                  x2="9.9282"
                  y2="15.3774"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1772_224482"
                  x1="27.1482"
                  y1="6.70361"
                  x2="27.1482"
                  y2="25.3493"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1772_224482"
                  x1="48.8525"
                  y1="-23.1413"
                  x2="12.6734"
                  y2="6.20879"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1772_224482"
                  x1="12.8518"
                  y1="6.70361"
                  x2="12.8518"
                  y2="25.3493"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_1772_224482"
                  x1="34.5561"
                  y1="-23.1413"
                  x2="-1.62297"
                  y2="6.20885"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_1772_224482"
                  x1="27.1482"
                  y1="21"
                  x2="27.1482"
                  y2="39.6457"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_1772_224482"
                  x1="48.8525"
                  y1="-8.84483"
                  x2="12.6734"
                  y2="20.5052"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_1772_224482"
                  x1="12.8518"
                  y1="21"
                  x2="12.8518"
                  y2="39.6457"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_1772_224482"
                  x1="34.5561"
                  y1="-8.84483"
                  x2="-1.62293"
                  y2="20.5053"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </Link>

        <div className="flex items-center gap-[10px]">
          <h1 className="text-[14px] font-[500] leading-[20px] text-neutral-700">
            {account}
          </h1>
          <Link to={linkTo}>
            <Btn
              type="button"
              text={btnText}
              className="h-[32px] w-[67px] rounded-[8px] border-[1px] border-neutral-200 text-[14px] font-[600] text-neutral-700"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default RegisterHeader;