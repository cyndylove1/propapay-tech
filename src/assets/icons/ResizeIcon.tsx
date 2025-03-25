import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function ResizeIcon({
  width = 21,
  height = 20,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={className + " h-full w-full"}
    >
      <g id="Resize">
        <path
          id="Vector"
          d="M4.73438 4.19995L7.93654 7.40211M4.73438 4.19995L4.74078 7.14172M4.73438 4.19995L7.67576 4.20674"
          stroke="#2E2E2E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M4.73291 15.3986L7.93507 12.1973M7.67507 15.3928L4.73369 15.3992L4.74009 12.4578"
          stroke="#2E2E2E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M15.9331 15.3986L12.731 12.1973M15.9331 15.3986L15.9269 12.457M15.9331 15.3986L12.9918 15.392"
          stroke="#2E2E2E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_4"
          d="M15.9346 4.20034L12.7324 7.4017M12.9918 4.20635L15.9332 4.19995L15.9268 7.14133"
          stroke="#2E2E2E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
