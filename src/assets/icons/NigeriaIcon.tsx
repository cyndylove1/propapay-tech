import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function NigeriaIcon({
  width = 16,
  height = 16,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={className + " h-full w-full"}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M0 8.00042C0 11.4402 2.171 14.3725 5.21741 15.5029V0.498047C2.171 1.62836 0 4.56073 0 8.00042Z"
          fill="#008751"
        />
        <path
          id="Vector_2"
          d="M16 8.00042C16 4.56073 13.829 1.62836 10.7826 0.498047V15.5029C13.829 14.3725 16 11.4402 16 8.00042Z"
          fill="#008751"
        />
      </g>
    </Structure>
  );
}
