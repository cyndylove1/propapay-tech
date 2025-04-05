import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function DashboardIcon({
  width = 20,
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
          id="Vector"
          d="M10 13.166H10.0075"
          stroke="#4E5257"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Rectangle 2331"
          d="M16.6666 6.08301V10.2497C16.6666 13.3924 16.6666 14.9637 15.6903 15.94C14.714 16.9163 13.1427 16.9163 9.99998 16.9163C6.85728 16.9163 5.28593 16.9163 4.30962 15.94C3.33331 14.9637 3.33331 13.3924 3.33331 10.2497V6.08301"
          stroke="#4E5257"
          stroke-width="1.5"
        />
        <path
          id="Rectangle 2332"
          d="M18.3333 7.74967L14.714 4.27925C12.4918 2.14842 11.3807 1.08301 9.99999 1.08301C8.61928 1.08301 7.50817 2.14842 5.28595 4.27924L1.66666 7.74967"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </Structure>
  );
}
