import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function MessageIcon({
  width = 21,
  height = 20,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={className + " h-full w-full"}
    >
      <g id="messages">
        <path
          id="Vector"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.24927 15.179C7.44899 17.3795 10.7089 17.8551 13.3741 16.6222C13.7679 16.4634 14.091 16.3357 14.3977 16.3357C15.2523 16.3404 16.3164 17.1694 16.869 16.6167C17.4217 16.064 16.5927 15 16.5927 14.1406C16.5927 13.8332 16.7157 13.5164 16.8737 13.1218C18.1074 10.4566 17.631 7.19743 15.4314 4.99694C12.6222 2.18852 8.05847 2.18852 5.24927 4.99694C2.43541 7.81159 2.44008 12.3698 5.24927 15.179Z"
          stroke="#1C1D1E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M7.13987 10.3062V10.362M6.91357 10.3182C6.91357 10.4439 7.01556 10.5458 7.14125 10.5458C7.26695 10.5458 7.3688 10.4439 7.3688 10.3182C7.3688 10.1925 7.26695 10.0906 7.14125 10.0906C7.01556 10.0906 6.91357 10.1925 6.91357 10.3182Z"
          stroke="#1C1D1E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M10.3444 10.3062V10.362M10.1182 10.3182C10.1182 10.4439 10.2202 10.5458 10.3458 10.5458C10.4715 10.5458 10.5734 10.4439 10.5734 10.3182C10.5734 10.1925 10.4715 10.0906 10.3458 10.0906C10.2202 10.0906 10.1182 10.1925 10.1182 10.3182Z"
          stroke="#1C1D1E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_4"
          d="M13.5491 10.3062V10.362M13.3228 10.3182C13.3228 10.4439 13.4248 10.5458 13.5504 10.5458C13.6762 10.5458 13.778 10.4439 13.778 10.3182C13.778 10.1925 13.6762 10.0906 13.5504 10.0906C13.4248 10.0906 13.3228 10.1925 13.3228 10.3182Z"
          stroke="#1C1D1E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
