import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function BathtubIcon({
  width = 20,
  height = 18,
  className,
}: IconProps) {
  return (
    <Structure width={width} height={height} className={className + " w-full h-full"}>
      <g id="elements">
        <path
          id="Vector 6235"
          d="M18.3333 9L12.5 9C11.9591 9 11.4327 8.82456 11 8.5L9 7C8.56726 6.67544 8.04092 6.5 7.5 6.5L1.66666 6.5"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 6236"
          d="M2.5 6.5V8.16667C2.5 11.3094 2.5 12.8807 3.47631 13.857C4.45262 14.8333 6.02397 14.8333 9.16667 14.8333H11.6667C14.0074 14.8333 15.1778 14.8333 16.0186 14.2716C16.3825 14.0284 16.695 13.7159 16.9382 13.3519C17.5 12.5112 17.5 11.3408 17.5 9"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector"
          d="M15 14.8333V16.4999M5 14.8333V16.4999"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 6239"
          d="M4.16666 6.5L4.16666 2.75C4.16666 2.05964 4.72631 1.5 5.41666 1.5C6.10702 1.5 6.66666 2.05964 6.66666 2.75V3.16667"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
