import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function FlowerPotIcon({
  width = 11,
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
          id="Vector"
          d="M5.66683 7.49992C5.66683 3.74992 7.3335 3.33325 9.00016 3.33325C9.00016 5.83325 7.75016 7.49992 5.66683 7.49992ZM5.66683 7.49992C5.66683 3.74992 4.00016 3.33325 2.3335 3.33325C2.3335 5.83325 3.5835 7.49992 5.66683 7.49992Z"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M4 3.33317C4 3.33317 4.41667 2.08317 5.66667 1.6665C6.91667 2.08317 7.33333 3.33317 7.33333 3.33317"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 6161"
          d="M5.6665 7.5V12.5"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 6162"
          d="M5.6665 10.8332C5.87484 10.2776 6.6665 9.1665 8.1665 9.1665"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 6163"
          d="M6.62572 12.5H4.70761C2.99729 12.5 2.14213 12.5 1.72009 12.9973C1.29804 13.4945 1.53297 14.2253 2.00284 15.6868L2.08087 15.9295C2.45059 17.0796 2.63546 17.6546 3.12791 17.9898L3.14998 18.0046C3.64793 18.3333 4.32084 18.3333 5.66667 18.3333C7.01249 18.3333 7.6854 18.3333 8.18336 18.0046L8.20543 17.9898C8.69788 17.6546 8.88274 17.0796 9.25247 15.9295L9.3305 15.6868C9.80036 14.2253 10.0353 13.4945 9.61325 12.9973C9.19121 12.5 8.33605 12.5 6.62572 12.5Z"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
