import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function HomeIcon({
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
      <g id="Home Fun">
        <path
          id="Vector"
          d="M6.32035 17.5H15.0131C16.5423 17.5 17.7812 16.2603 17.7812 14.7319V8.75375C17.7812 8.01109 17.4471 7.30811 16.8714 6.83865L12.2263 3.05459C11.3182 2.31514 10.0153 2.31514 9.10709 3.05459L4.46198 6.83865C3.8863 7.30811 3.55225 8.01109 3.55225 8.75375V14.7319C3.55225 16.2603 4.79116 17.5 6.32035 17.5Z"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M7.7417 11.9353C8.45359 12.8621 9.50276 13.4401 10.6671 13.4401C11.8314 13.4401 12.8806 12.8621 13.5925 11.9353"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
