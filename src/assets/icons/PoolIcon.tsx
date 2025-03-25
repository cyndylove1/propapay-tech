import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function PoolIcon({
  width = 19,
  height = 18,
  className,
}: IconProps) {
  return (
    <Structure width={width} height={height} className={className + " w-full h-full"}>
      <g id="elements">
        <path
          id="Vector"
          d="M18.0002 16.4999H17.1668C15.9574 16.4999 14.8985 15.7842 14.6668 14.8333C14.4352 15.7842 13.3763 16.4999 12.1668 16.4999C10.9574 16.4999 9.89847 15.7842 9.66683 14.8333C9.43519 15.7842 8.37631 16.4999 7.16683 16.4999C5.95735 16.4999 4.89846 15.7842 4.66683 14.8333C4.43519 15.7842 3.37631 16.4999 2.16683 16.4999H1.3335"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 5449"
          d="M15.5 1.5L15.2792 1.57359C14.1792 1.94026 13.6292 2.1236 13.3146 2.56008C13 2.99656 13 3.57633 13 4.73586L13 13.1667"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector 5450"
          d="M8.8335 1.5L8.61274 1.57359C7.51271 1.94026 6.96269 2.1236 6.64809 2.56008C6.3335 2.99656 6.3335 3.57633 6.3335 4.73586L6.3335 13.1667"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M6.3335 4.83325H13.0002M6.3335 8.16659H13.0002M6.3335 11.4999H13.0002"
          stroke="#2E2E2E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </Structure>
  );
}
