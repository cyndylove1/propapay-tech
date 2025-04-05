import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function Logo({
  width = 40,
  height = 40,
  className,
}: IconProps) {
  return (
    <Structure
      width={width}
      height={height}
      className={className + " h-full w-full"}
    >
      <path
        id="brand"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.6315 0C10.2391 0 2.34725 6.37621 0.111651 15.0047C5.89497 18.1876 12.5502 20 19.6319 20C26.7134 20 33.3684 18.1877 39.1514 15.0051C36.916 6.37638 29.0241 0 19.6315 0ZM20.1116 20C13.1677 20 6.42885 20.8713 0 22.5096C1.244 32.3707 9.72243 40 19.9965 40C30.29 40 38.7811 32.3416 40 22.4531C33.6385 20.8512 26.9752 20 20.1116 20Z"
        fill="#12725B"
      />
    </Structure>
  );
}
