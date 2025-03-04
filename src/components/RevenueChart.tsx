import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import SelectTag from "./common/SelectTag";

const RevenueChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    colors: ["#12725B", "#46C19A"], // Green for this period, Gray for last period
    stroke: { curve: "smooth", width: 1 },
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.2 },
    },
    xaxis: {
      categories: [
        "Jan 28, 2024",
        "Feb 5, 2024",
        "Feb 12, 2024",
        "Feb 20, 2024",
        "Feb 28, 2024",
      ],
    },
    yaxis: {
      labels: { formatter: (val: number) => `₦${(val / 1000000).toFixed(1)}M` },
    },
    tooltip: {
      shared: true,
      y: {
        formatter: (val: number) => `₦${(val / 1000000).toFixed(1)}M`,
      },
    },
    legend: {
      position: "top",
      markers: {
        fillColors: ["#008000", "#A0A0A0"], // Ensure correct legend colors
        strokeWidth: 0,
      },
    },
    annotations: {
      xaxis: [
        {
          x: "Feb 12, 2024",
          borderColor: "#000",
          label: {
            text: "Fill (1128) × 71 Hug",
            style: { background: "#8B5CF6", color: "#fff", fontWeight: "bold" },
          },
        },
      ],
    },
  };

  const series: { name: string; data: number[] }[] = [
    {
      name: "This Period",
      data: [18000000, 20000000, 18500000, 19500000, 22000000],
    },
    {
      name: "Last Period",
      data: [12000000, 15000000, 12800000, 14500000, 16000000],
    },
  ];

  return (
    <div className="m-[20px] rounded-lg border-[1px] border-[#DFE1E6] bg-white p-4 shadow-md">
      <div className="flex items-center justify-between border-b border-[#DFE1E6] pb-2">
        <div className="flex items-center gap-2">
          <span>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.10332 3.78525C6.41087 2.75187 7.3689 2 8.49993 2C9.34863 2 10.0989 2.42198 10.5524 3.0721C10.8684 3.52507 11.4917 3.63615 11.9447 3.32019C12.3977 3.00422 12.5087 2.38088 12.1928 1.9279C11.3813 0.764535 10.03 0 8.49993 0C6.45994 0 4.73942 1.35664 4.18642 3.21475C4.02888 3.74409 4.33028 4.30091 4.85962 4.45845C5.38896 4.61599 5.94578 4.31459 6.10332 3.78525ZM2.55459 3.83203C3.01411 3.52566 3.13826 2.90479 2.83189 2.44527C2.52552 1.98575 1.90465 1.8616 1.44513 2.16797C0.325146 2.91468 -0.170501 4.33257 0.0533161 5.5916C0.2187 6.52193 0.766124 7.35348 1.67545 7.85733C1.24505 8.64161 0.999876 9.54256 0.999876 10.5C0.999876 12.6386 2.21999 14.4901 3.99988 15.4V17C3.99988 17.5523 4.44759 18 4.99988 18H8.49988C9.05216 18 9.49988 17.5523 9.49988 17V16H9.99988V17C9.99988 17.5523 10.4476 18 10.9999 18H14.4999C15.0522 18 15.4999 17.5523 15.4999 17V15.6248C16.5537 15.2133 17.4481 14.4871 18.069 13.5624C19.1415 13.526 19.9999 12.6451 19.9999 11.5636V9.4364C19.9999 8.35496 19.1415 7.47399 18.069 7.43757C17.6557 6.82198 17.1214 6.29473 16.4999 5.8896V3.5C16.4999 2.94772 16.0522 2.5 15.4999 2.5C13.6514 2.5 12.4437 3.65013 11.4752 5H6.49988C5.17138 5 3.95172 5.47201 3.00155 6.25585C2.34153 6.06126 2.09242 5.63519 2.02244 5.24155C1.92038 4.66743 2.17468 4.08532 2.55459 3.83203ZM12.8319 6.5547C13.4451 5.63493 13.964 5.06112 14.4999 4.76081V6.46776C14.4999 6.84741 14.7149 7.19432 15.0548 7.36327C15.7222 7.69493 16.2696 8.23412 16.6115 8.89562C16.7833 9.22778 17.1259 9.4364 17.4999 9.4364H17.9999V11.5636H17.4999C17.1259 11.5636 16.7833 11.7722 16.6115 12.1044C16.1438 13.0093 15.2933 13.683 14.2786 13.9133C13.8231 14.0166 13.4999 14.4215 13.4999 14.8885V16H11.9999V15.5C11.9999 14.6716 11.3283 14 10.4999 14H8.99988C8.17145 14 7.49988 14.6716 7.49988 15.5V16H5.99988V14.7439C5.99988 14.3201 5.73271 13.9423 5.33312 13.8011C3.97238 13.3201 2.99988 12.0224 2.99988 10.5C2.99988 9.53895 3.3859 8.67002 4.01369 8.0365C4.64906 7.39532 5.52737 7 6.49988 7H11.9999C12.3342 7 12.6465 6.8329 12.8319 6.5547ZM13.9999 10C14.5522 10 14.9999 9.55229 14.9999 9C14.9999 8.44771 14.5522 8 13.9999 8C13.4476 8 12.9999 8.44771 12.9999 9C12.9999 9.55229 13.4476 10 13.9999 10Z"
                fill="#808897"
              />
            </svg>
          </span>
          <h2 className="text-[16px] font-[500] leading-[24px] tracking-wide text-[#666D80]">
            Revenue
          </h2>
        </div>

        <div>
          <SelectTag
            // onChange={(e) => setTitle(e.target.value)}
            className="h-[32px] w-[110px] px-2 text-[12px] font-[500] leading-[24px] text-[#666D80]"
          >
            <option value="">All Products</option>
          </SelectTag>
        </div>
      </div>

      <p className="flex items-center text-2xl font-bold">
        ₦23,569.00{" "}
        <span className="px-4 text-[14px] font-[600] leading-[21px] tracking-wide text-[#40C4AA]">
          ↑ 10.5%
        </span>{" "}
        <h6 className="text-[14px] font-[400] leading-[21px] tracking-wide text-[#666D80]">
          from last period
        </h6>
      </p>
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default RevenueChart;
