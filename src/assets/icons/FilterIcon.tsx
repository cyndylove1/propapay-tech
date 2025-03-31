import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function FilterIcon({
  width = 18,
  height = 16,
  className,
}: IconProps) {
  return (
    <Structure width={width} height={height} className={className + " w-full h-full"}>
      <g id="elements">
        <path
          id="Vector 753"
          d="M1.5 3.83301H4"
          stroke="#6B6F75"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 754"
          d="M1.5 12.166H6.5"
          stroke="#6B6F75"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 757"
          d="M14 12.166L16.5 12.166"
          stroke="#6B6F75"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 758"
          d="M11.5 3.83301L16.5 3.83301"
          stroke="#6B6F75"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Rectangle 2129"
          d="M4 3.83301C4 3.05644 4 2.66815 4.12687 2.36187C4.29602 1.95349 4.62048 1.62903 5.02886 1.45988C5.33515 1.33301 5.72343 1.33301 6.5 1.33301C7.27657 1.33301 7.66485 1.33301 7.97114 1.45988C8.37952 1.62903 8.70398 1.95349 8.87313 2.36187C9 2.66815 9 3.05644 9 3.83301C9 4.60958 9 4.99786 8.87313 5.30415C8.70398 5.71253 8.37952 6.03698 7.97114 6.20614C7.66485 6.33301 7.27657 6.33301 6.5 6.33301C5.72343 6.33301 5.33515 6.33301 5.02886 6.20614C4.62048 6.03698 4.29602 5.71253 4.12687 5.30415C4 4.99786 4 4.60958 4 3.83301Z"
          stroke="#6B6F75"
          stroke-width="1.5"
        />
        <path
          id="Rectangle 2130"
          d="M9 12.166C9 11.3894 9 11.0012 9.12687 10.6949C9.29602 10.2865 9.62048 9.96204 10.0289 9.79288C10.3351 9.66602 10.7234 9.66602 11.5 9.66602C12.2766 9.66602 12.6649 9.66602 12.9711 9.79288C13.3795 9.96204 13.704 10.2865 13.8731 10.6949C14 11.0012 14 11.3894 14 12.166C14 12.9426 14 13.3309 13.8731 13.6372C13.704 14.0455 13.3795 14.37 12.9711 14.5391C12.6649 14.666 12.2766 14.666 11.5 14.666C10.7234 14.666 10.3351 14.666 10.0289 14.5391C9.62048 14.37 9.29602 14.0455 9.12687 13.6372C9 13.3309 9 12.9426 9 12.166Z"
          stroke="#6B6F75"
          stroke-width="1.5"
        />
      </g>
    </Structure>
  );
}
