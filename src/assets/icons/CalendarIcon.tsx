import { IconProps } from "@/types/common.types";
import Structure from "./Structure";
import { twMerge } from "tailwind-merge";

export default function CalendarIcon({
  width = 18,
  height = 20,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={twMerge("h-full w-full  stroke-white", className)}
    >
      <g id="elements">
        <path
          id="Vector"
          d="M14 1.66699V3.33366M4 1.66699V3.33366"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M8.99622 10.834H9.0037M8.99622 14.1673H9.0037M12.3258 10.834H12.3333M5.66663 10.834H5.6741M5.66663 14.1673H5.6741"
          stroke="current"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 4046"
          d="M1.91663 6.66699H16.0833"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M1.08331 10.2027C1.08331 6.57161 1.08331 4.75607 2.12675 3.62803C3.17018 2.5 4.84956 2.5 8.20831 2.5H9.79165C13.1504 2.5 14.8298 2.5 15.8732 3.62803C16.9166 4.75607 16.9166 6.57161 16.9166 10.2027V10.6306C16.9166 14.2617 16.9166 16.0773 15.8732 17.2053C14.8298 18.3333 13.1504 18.3333 9.79165 18.3333H8.20831C4.84956 18.3333 3.17018 18.3333 2.12675 17.2053C1.08331 16.0773 1.08331 14.2617 1.08331 10.6306V10.2027Z"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 4049"
          d="M1.5 6.66699H16.5"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
