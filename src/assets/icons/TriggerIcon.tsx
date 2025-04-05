import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function TriggerIcon({
  width = 22,
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
          id="Rectangle 2114"
          d="M1 10C1 6.31087 1 4.4663 1.81382 3.15877C2.1149 2.67502 2.48891 2.25427 2.91891 1.91554C4.08116 1 5.72077 1 9 1H13C16.2792 1 17.9188 1 19.0811 1.91554C19.5111 2.25427 19.8851 2.67502 20.1862 3.15877C21 4.4663 21 6.31087 21 10C21 13.6891 21 15.5337 20.1862 16.8412C19.8851 17.325 19.5111 17.7457 19.0811 18.0845C17.9188 19 16.2792 19 13 19H9C5.72077 19 4.08116 19 2.91891 18.0845C2.48891 17.7457 2.1149 17.325 1.81382 16.8412C1 15.5337 1 13.6891 1 10Z"
          stroke="#1C1D1E"
          stroke-width="1.5"
        />
        <path
          id="Vector 4063"
          d="M8.5 1L8.5 19"
          stroke="#1C1D1E"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          id="Vector"
          d="M4 5H5M4 8H5"
          stroke="#1C1D1E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
