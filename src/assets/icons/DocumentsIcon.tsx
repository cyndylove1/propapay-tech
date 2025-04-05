import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function DocumentsIcon({
  width = 16,
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
          id="Vector"
          d="M4.66797 14.167H11.3346"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M4.66797 10.834H8.0013"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M8.83398 2.08366V2.50033C8.83398 4.85735 8.83398 6.03586 9.56622 6.76809C10.2984 7.50033 11.477 7.50033 13.834 7.50033H14.2507M14.6673 8.88104V11.667C14.6673 14.8097 14.6673 16.381 13.691 17.3573C12.7147 18.3337 11.1433 18.3337 8.00065 18.3337C4.85795 18.3337 3.28661 18.3337 2.3103 17.3573C1.33398 16.381 1.33398 14.8097 1.33398 11.667V7.8802C1.33398 5.17601 1.33398 3.82391 2.07238 2.9081C2.22155 2.72309 2.39008 2.55456 2.57509 2.40539C3.49091 1.66699 4.843 1.66699 7.54719 1.66699C8.13513 1.66699 8.4291 1.66699 8.6983 1.762C8.75429 1.78176 8.80918 1.8045 8.86274 1.83011C9.12028 1.95329 9.32815 2.16116 9.74389 2.57689L13.691 6.52402C14.1727 7.00573 14.4136 7.24659 14.5405 7.55288C14.6673 7.85916 14.6673 8.19979 14.6673 8.88104Z"
          stroke="#4E5257"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
