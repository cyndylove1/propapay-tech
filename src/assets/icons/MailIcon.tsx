import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function MailIcon({
  width = 20,
  height = 16,
  className,
}: IconProps) {
  return (
    <Structure width={width} height={height} className={className}>
      <path
        d="M5.83301 5.08301L8.28469 6.53253C9.71402 7.37761 10.2853 7.37761 11.7147 6.53253L14.1663 5.08301"
        stroke="#888D93"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.67964 9.22952C1.73412 11.7841 1.76136 13.0614 2.70397 14.0076C3.64657 14.9538 4.95845 14.9868 7.58219 15.0527C9.19926 15.0933 10.8004 15.0933 12.4175 15.0527C15.0412 14.9868 16.3531 14.9538 17.2957 14.0076C18.2383 13.0614 18.2656 11.7841 18.32 9.22952C18.3376 8.40812 18.3376 7.59157 18.32 6.77017C18.2656 4.21555 18.2383 2.93825 17.2957 1.99206C16.3531 1.04586 15.0412 1.0129 12.4175 0.946978C10.8004 0.906348 9.19926 0.906346 7.58219 0.946972C4.95844 1.01289 3.64657 1.04585 2.70396 1.99204C1.76136 2.93824 1.73412 4.21554 1.67964 6.77015C1.66212 7.59156 1.66212 8.40812 1.67964 9.22952Z"
        stroke="#888D93"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </Structure>
  );
}
