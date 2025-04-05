import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function PropertiesIcon({
  width = 20,
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
          id="Vector 5690"
          d="M1.66602 18.333L18.3327 18.333"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Rectangle 2357"
          d="M14.9993 7.5L11.666 7.5C9.59768 7.5 9.16602 7.93167 9.16602 10L9.16602 18.3333H17.4993V10C17.4993 7.93167 17.0677 7.5 14.9993 7.5Z"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          id="Rectangle 2358"
          d="M12.5 18.3327L2.5 18.3327L2.5 4.16602C2.5 2.09768 2.93167 1.66602 5 1.66602L10 1.66602C12.0683 1.66602 12.5 2.09768 12.5 4.16602L12.5 7.49935"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <path
          id="Vector"
          d="M2.5 5L5 5M2.5 8.33333H5M2.5 11.6667H5"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector_2"
          d="M12.5 10.833H14.1667M12.5 13.333H14.1667"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector 5806"
          d="M13.332 18.333L13.332 15.833"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
