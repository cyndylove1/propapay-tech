import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function AdvertPattern({
  width = 137,
  height = 116,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={className + " h-full w-full"}
    >
      <path
        d="M0 0V115.938"
        stroke="url(#paint0_linear_5004_27396)"
        stroke-width="0.32"
      />
      <path
        d="M25.6 0V115.938"
        stroke="url(#paint1_linear_5004_27396)"
        stroke-width="0.32"
      />
      <path
        d="M51.2 0V115.938"
        stroke="url(#paint2_linear_5004_27396)"
        stroke-width="0.32"
      />
      <path
        d="M76.8 0V115.938"
        stroke="url(#paint3_linear_5004_27396)"
        stroke-width="0.32"
      />
      <path
        d="M102.4 0V115.938"
        stroke="url(#paint4_linear_5004_27396)"
        stroke-width="0.32"
      />
      <path
        d="M128 0V115.938"
        stroke="url(#paint5_linear_5004_27396)"
        stroke-width="0.32"
      />
      <path
        d="M-6.64612 97.9688L136.615 97.9688"
        stroke="url(#paint6_linear_5004_27396)"
        stroke-width="0.295385"
      />
      <path
        d="M-6.64612 59.0771L136.615 59.0771"
        stroke="url(#paint7_linear_5004_27396)"
        stroke-width="0.295385"
      />
      <path
        d="M-6.64612 20.1846L136.615 20.1846"
        stroke="url(#paint8_linear_5004_27396)"
        stroke-width="0.295385"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5004_27396"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="115.938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5004_27396"
          x1="26.1"
          y1="0"
          x2="26.1"
          y2="115.938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5004_27396"
          x1="51.7"
          y1="0"
          x2="51.7"
          y2="115.938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_5004_27396"
          x1="77.3"
          y1="0"
          x2="77.3"
          y2="115.938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_5004_27396"
          x1="102.9"
          y1="0"
          x2="102.9"
          y2="115.938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_5004_27396"
          x1="128.5"
          y1="0"
          x2="128.5"
          y2="115.938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_5004_27396"
          x1="-6.64612"
          y1="97.4688"
          x2="136.615"
          y2="97.4687"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_5004_27396"
          x1="-6.64612"
          y1="58.5771"
          x2="136.615"
          y2="58.5771"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_5004_27396"
          x1="-6.64612"
          y1="19.6846"
          x2="136.615"
          y2="19.6846"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.3" />
        </linearGradient>
      </defs>
    </Structure>
  );
}
