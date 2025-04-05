import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function TransactionsIcon({
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
          id="Vector 4068"
          d="M2.59835 15.4017C1.5 14.3033 1.5 12.5355 1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5C12.5355 1.5 14.3033 1.5 15.4017 2.59835C16.5 3.6967 16.5 5.46447 16.5 9C16.5 12.5355 16.5 14.3033 15.4017 15.4017C14.3033 16.5 12.5355 16.5 9 16.5C5.46447 16.5 3.6967 16.5 2.59835 15.4017Z"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 8375"
          d="M4.83398 10.6663L7.1614 8.33893C7.48683 8.01349 8.01447 8.01349 8.33991 8.33893L9.6614 9.66042C9.98683 9.98586 10.5145 9.98586 10.8399 9.66042L13.1673 7.33301"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
