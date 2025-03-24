import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function SingleBedIcon({
  width = 20,
  height = 18,
  className,
}: IconProps) {
  return (
    <Structure width={width} height={height} className={className + " w-full h-full"}>
      <g id="elements">
        <path
          id="Vector 6176"
          d="M18.3333 13.5833L1.66667 13.5833"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 6177"
          d="M18.3333 16.5L18.3333 12.3333C18.3333 10.762 18.3333 9.97631 17.8452 9.48816C17.357 9 16.5714 9 15 9L5.00001 9C3.42866 9 2.64298 9 2.15483 9.48816C1.66667 9.97631 1.66667 10.762 1.66667 12.3333L1.66667 16.5"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Ellipse 1760"
          d="M13.3333 9V7.84817C13.3333 7.42525 13.2571 7.28379 12.8663 7.11708C12.0526 6.76991 11.0649 6.5 10 6.5C8.93513 6.5 7.9474 6.76991 7.13367 7.11708C6.74295 7.28379 6.66667 7.42525 6.66667 7.84817L6.66667 9"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Ellipse 1758"
          d="M16.6667 9V5.13381C16.6667 4.55744 16.6667 4.26925 16.5244 3.99711C16.382 3.72496 16.1792 3.58409 15.7737 3.30236C14.1384 2.16648 12.1477 1.5 10 1.5C7.85236 1.5 5.8616 2.16648 4.22637 3.30236C3.82078 3.58409 3.61799 3.72496 3.47567 3.99711C3.33334 4.26925 3.33334 4.55744 3.33334 5.13381L3.33334 9"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </Structure>
  );
}
