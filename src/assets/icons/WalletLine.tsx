import { IconProps } from "@/types/common.types";
import Structure from "./Structure";

export default function WalletLine({
  width = 520,
  height = 180,
  className,
}: IconProps) {
  return (
    <Structure width={width} height={height} className={className}>
      <foreignObject x="-24.0022" y="-24.0029" width="576.003" height="240.003">
        <div
          style={{
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="24"
        d="M8 114.233C10.1314 108.127 14.335 103.562 19.0158 98.5597C39.3955 76.7824 63.9424 57.8861 91.5881 43.1336C149.629 12.1613 219.261 -3.57845 285.17 17.9206C322.846 30.2104 364.183 57.5145 369.913 94.3395C373.167 115.252 361.531 133.401 344.952 148.028C327.185 163.703 304.203 176.209 279.435 181.681C260.281 185.912 226.951 186.657 224.851 163.383C223.686 150.473 231.228 138.319 240.116 128.489C258.631 108.012 285.505 95.6485 314.009 88.4175C363.557 75.8484 416.459 80.7458 459.358 106.148C475.659 115.8 508.578 144.418 520 162.265"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="16"
        stroke-linecap="round"
      />
    </Structure>
  );
}
