import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function CancelIcon({
  width = 14,
  height = 14,
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
          d="M12.8337 1.16699L1.16705 12.8337M1.16705 1.16699L12.8337 12.8337"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
