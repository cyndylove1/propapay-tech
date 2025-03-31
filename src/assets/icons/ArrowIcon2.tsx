import { IconProps } from "@/types/common.types";
import Structure from "./Structure";
import { twMerge } from "tailwind-merge";

export default function ArrowIcon2({
  width = 10,
  height = 16,
  className,
}: IconProps) {
  return (
    <Structure width={width} height={height} className={twMerge("stroke-brand-base w-full h-full", className)}>
      <g id="elements">
        <path
          id="Vector"
          d="M4.99999 14.6664L4.99999 1.33301"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M9.16664 10.4994C9.16664 10.4994 6.09793 14.666 4.99994 14.666C3.90194 14.666 0.833305 10.4993 0.833305 10.4993"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
