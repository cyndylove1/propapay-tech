import { IconProps } from "@/types/common.types";
import Structure from "./Structure";
import { twMerge } from "tailwind-merge";

export default function InsightsIcon({
  width = 18,
  height = 18,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={twMerge("h-full w-full stroke-[#4E5257]", className) }
    >
      <g id="elements">
        <path
          id="Vector 4075"
          d="M4.83398 13.1663L4.83398 9.83301"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector 4077"
          d="M9 13.1663L9 4.83301"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector 4078"
          d="M13.168 13.166L13.168 8.16602"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector"
          d="M1.08398 8.99967C1.08398 5.26772 1.08398 3.40175 2.24335 2.24238C3.40272 1.08301 5.2687 1.08301 9.00065 1.08301C12.7326 1.08301 14.5986 1.08301 15.7579 2.24238C16.9173 3.40175 16.9173 5.26772 16.9173 8.99967C16.9173 12.7316 16.9173 14.5976 15.7579 15.757C14.5986 16.9163 12.7326 16.9163 9.00065 16.9163C5.2687 16.9163 3.40272 16.9163 2.24335 15.757C1.08398 14.5976 1.08398 12.7316 1.08398 8.99967Z"
          stroke="current"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
