import { IconProps } from "@/types/common.types";
import Structure from "./Structure";
import { twMerge } from "tailwind-merge";

export default function PlusIcon({
  width = 16,
  height = 16,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={twMerge("h-full w-full stroke-brand-base", className)}
    >
      <g id="elements">
        <path
          id="Vector 4048"
          d="M7.99999 1.33301V14.6663"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 4049"
          d="M1.33333 8H14.6667"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
