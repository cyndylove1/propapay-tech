import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function GymIcon({
  width = 17,
  height = 16,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={className + " h-full w-full"}
    >
      <g id="elements">
        <path
          id="Vector"
          d="M13.2497 0.5V5.5M4.08301 0.5V5.5M15.333 1.33333V3M15.333 3V4.66667M15.333 3H16.9997M1.99967 1.33333V3M1.99967 3V4.66667M1.99967 3H0.333008"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          id="Vector 5377"
          d="M13.2495 3L4.08285 3"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M6.99951 3V6.33333M10.3328 3V6.33333"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          id="Vector 5380"
          d="M2.83301 11.3333L5.74967 6.33325H11.583L14.4997 11.3333M2.83301 11.3333H14.4997M2.83301 11.3333V13.8333H14.4997V11.3333"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M11.9997 13.8333V15.4999M5.33301 13.8333V15.4999"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
