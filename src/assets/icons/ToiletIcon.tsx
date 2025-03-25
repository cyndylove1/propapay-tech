import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function ToiletIcon({
  width = 16,
  height = 20,
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
          id="Ellipse 1764"
          d="M5.00049 9.1665H12.6131C13.8339 9.1665 14.4443 9.1665 14.8129 9.77924C15.1815 10.392 14.9644 10.7826 14.5303 11.5639C13.6685 13.1148 11.9967 14.1665 10.0756 14.1665C8.78846 14.1665 7.61327 13.6945 6.71862 12.9165"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 6172"
          d="M5.00033 9.1665V3.33317C5.00033 2.5475 5.00033 2.15466 4.75625 1.91058C4.51217 1.6665 4.11933 1.6665 3.33366 1.6665C2.54798 1.6665 2.15515 1.6665 1.91107 1.91058C1.66699 2.15466 1.66699 2.5475 1.66699 3.33317V9.1665C1.66699 9.95218 1.66699 10.345 1.91107 10.5891C2.15515 10.8332 2.54798 10.8332 3.33366 10.8332C4.11933 10.8332 4.51217 10.8332 4.75625 10.5891C5.00033 10.345 5.00033 9.95218 5.00033 9.1665Z"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 6173"
          d="M4.16699 5.83325L6.66699 5.83325"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 6174"
          d="M11.667 14.1666C10.8337 14.9999 11.667 17.4999 13.3333 18.3333H1.66699C2.50033 17.4999 3.91699 14.8333 2.91699 10.8333"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
