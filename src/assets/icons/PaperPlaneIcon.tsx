import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function PaperPlaneIcon({
  width = 18,
  height = 18,
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
          d="M16.5397 1.54402C14.7246 -0.410612 1.07199 4.37758 1.08326 6.12575C1.09604 8.10814 6.41499 8.71801 7.88927 9.13163C8.77583 9.38036 9.01327 9.6353 9.2177 10.565C10.1435 14.7753 10.6084 16.8695 11.6677 16.9163C13.3564 16.9909 18.311 3.45159 16.5397 1.54402Z"
          stroke="#12725B"
          stroke-width="1.5"
        />
        <path
          id="Vector 4001"
          d="M8.58325 9.41667L11.4999 6.5"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
