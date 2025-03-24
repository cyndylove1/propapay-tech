import { IconProps } from "@/types/common.types";
import Structure from "./Structure";
import { twMerge } from "tailwind-merge";

export default function FavouriteIcon({
  width = 20,
  height = 18,
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
          id="Vector"
          d="M16.2188 2.32846C13.9841 0.957691 12.0336 1.51009 10.862 2.39001C10.3815 2.7508 10.1413 2.93119 10 2.93119C9.85867 2.93119 9.61846 2.7508 9.13804 2.39001C7.96635 1.51009 6.0159 0.957691 3.7812 2.32846C0.848388 4.12745 0.184765 10.0624 6.94961 15.0695C8.2381 16.0232 8.88234 16.5 10 16.5C11.1177 16.5 11.7619 16.0232 13.0504 15.0695C19.8152 10.0624 19.1516 4.12745 16.2188 2.32846Z"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </Structure>
  );
}
