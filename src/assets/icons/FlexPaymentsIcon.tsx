import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function FlexPaymentsIcon({
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
        <ellipse
          id="Ellipse 1581"
          cx="12.9167"
          cy="9.16667"
          rx="5.41667"
          ry="1.66667"
          stroke="#4E5257"
          stroke-width="1.5"
        />
        <path
          id="Ellipse 1582"
          d="M18.3333 12.917C18.3333 13.8375 15.9082 14.5837 12.9167 14.5837C9.92512 14.5837 7.5 13.8375 7.5 12.917"
          stroke="#4E5257"
          stroke-width="1.5"
        />
        <path
          id="Ellipse 1583"
          d="M18.3333 9.16699V16.5003C18.3333 17.5128 15.9082 18.3337 12.9167 18.3337C9.92512 18.3337 7.5 17.5128 7.5 16.5003V9.16699"
          stroke="#4E5257"
          stroke-width="1.5"
        />
        <ellipse
          id="Ellipse 1584"
          cx="7.08268"
          cy="3.33366"
          rx="5.41667"
          ry="1.66667"
          stroke="#4E5257"
          stroke-width="1.5"
        />
        <path
          id="Vector"
          d="M4.99935 9.16667C3.42284 8.97481 1.97428 8.47878 1.66602 7.5M4.99935 13.3333C3.42284 13.1415 1.97428 12.6455 1.66602 11.6667"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector_2"
          d="M4.99935 17.5007C3.42284 17.3088 1.97428 16.8128 1.66602 15.834L1.66602 3.33398"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Ellipse 1590"
          d="M12.5 5.00065V3.33398"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </g>
    </Structure>
  );
}
