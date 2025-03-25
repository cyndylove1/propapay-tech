import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function Checkmark({
  width = 16,
  height = 16,
  className,
}: IconProps) {
  return (
    <Structure width={width} height={height} className={className}>
      <g id="Checkmark">
        <path
          id="Vector"
          d="M12.6668 4.57031C9.04256 6.32509 6.82903 9.52247 5.81402 11.4295C5.16282 10.3367 4.33705 9.36507 3.3335 8.5176"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
