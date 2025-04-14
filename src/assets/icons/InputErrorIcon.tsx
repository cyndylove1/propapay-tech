import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function InputErrorIcon({ width = 14, height = 14, className }: IconProps) {
  return (
    <Structure width={width} height={height} className={className + " w-full h-full"}>
      <g id="elements">
        <path
          id="Subtract"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.729004 7.00008C0.729004 3.5368 3.53655 0.729248 6.99984 0.729248C10.4631 0.729248 13.2707 3.5368 13.2707 7.00008C13.2707 10.4634 10.4631 13.2709 6.99984 13.2709C3.53655 13.2709 0.729004 10.4634 0.729004 7.00008ZM6.4165 9.33341C6.4165 9.01125 6.6765 8.75008 6.99723 8.75008H7.00245C7.32317 8.75008 7.58317 9.01125 7.58317 9.33341C7.58317 9.65558 7.32317 9.91675 7.00245 9.91675H6.99723C6.6765 9.91675 6.4165 9.65558 6.4165 9.33341ZM6.4165 7.00008C6.4165 7.32225 6.67767 7.58342 6.99984 7.58342C7.322 7.58342 7.58317 7.32225 7.58317 7.00008V4.66675C7.58317 4.34458 7.322 4.08341 6.99984 4.08341C6.67767 4.08341 6.4165 4.34458 6.4165 4.66675V7.00008Z"
          fill="#D84E4E"
        />
      </g>
    </Structure>
  );
}
