import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function AreaMeterIcon({
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
          id="Rectangle 1875"
          d="M16.6667 5.00016V15.0002M15 3.3335H4.99999M15 16.6668H4.99999M3.33333 15.0002V5.00016"
          stroke="#12725B"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Ellipse 1381"
          d="M18.3333 3.33341C18.3333 4.25389 17.5871 5.00008 16.6667 5.00008C15.7462 5.00008 15 4.25389 15 3.33341C15 2.41294 15.7462 1.66675 16.6667 1.66675C17.5871 1.66675 18.3333 2.41294 18.3333 3.33341Z"
          stroke="#12725B"
          stroke-width="1.5"
        />
        <path
          id="Ellipse 1382"
          d="M5 3.33341C5 4.25389 4.25381 5.00008 3.33333 5.00008C2.41286 5.00008 1.66666 4.25389 1.66666 3.33341C1.66666 2.41294 2.41286 1.66675 3.33333 1.66675C4.25381 1.66675 5 2.41294 5 3.33341Z"
          stroke="#12725B"
          stroke-width="1.5"
        />
        <path
          id="Ellipse 1383"
          d="M18.3333 16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333C15.7462 18.3333 15 17.5871 15 16.6667C15 15.7462 15.7462 15 16.6667 15C17.5871 15 18.3333 15.7462 18.3333 16.6667Z"
          stroke="#12725B"
          stroke-width="1.5"
        />
        <path
          id="Ellipse 1384"
          d="M5 16.6667C5 17.5871 4.25381 18.3333 3.33333 18.3333C2.41286 18.3333 1.66666 17.5871 1.66666 16.6667C1.66666 15.7462 2.41286 15 3.33333 15C4.25381 15 5 15.7462 5 16.6667Z"
          stroke="#12725B"
          stroke-width="1.5"
        />
      </g>
    </Structure>
  );
}
