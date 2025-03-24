import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function ArrowIcon({
  width = 7,
  height = 12,
  className = "stroke-white",
}: IconProps) {
  return (
    <Structure width={width} height={height} className={className}>
      <g id="elements">
        <path
          id="Vector"
          d="M1.00004 1C1.00004 1 5.99999 4.68244 6 6.00004C6.00001 7.31763 1 11 1 11"
          stroke="current"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
