import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function ShareIcon({
  width = 24,
  height = 24,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={className + " h-full w-full"}
    >
      <g id="Share">
        <path
          id="Vector"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.6451 3.36011C19.0771 3.36011 20.2371 4.52019 20.2371 5.95208C20.2371 7.38397 19.0771 8.54405 17.6451 8.54405C16.2133 8.54405 15.0532 7.38397 15.0532 5.95208C15.0532 4.52019 16.2133 3.36011 17.6451 3.36011Z"
          stroke="#2E2E2E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.27752 9.40747C8.70941 9.40747 9.86949 10.5676 9.86949 11.9994C9.86949 13.4314 8.70941 14.5914 7.27752 14.5914C5.84563 14.5914 4.68555 13.4314 4.68555 11.9994C4.68555 10.5676 5.84563 9.40747 7.27752 9.40747Z"
          stroke="#2E2E2E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.6451 15.4561C19.0771 15.4561 20.2371 16.6161 20.2371 18.048C20.2371 19.4789 19.0771 20.64 17.6451 20.64C16.2133 20.64 15.0532 19.4789 15.0532 18.048C15.0532 16.6161 16.2133 15.4561 17.6451 15.4561Z"
          stroke="#2E2E2E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_4"
          d="M9.51458 13.3039L15.4159 16.7431M15.4066 7.25635L9.51367 10.6946"
          stroke="#2E2E2E"
          stroke-width="1.44"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
