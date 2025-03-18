import csv from "@/assets/images/CSV.png";
import xls from "@/assets/images/XLS.png";
import json from "@/assets/images/JSON.png";
import pdf from "@/assets/images/PDF.png";
import docx from "@/assets/images/DOC.png"

interface ExportProps {
  Open: boolean;
  Close: () => void;
}
const ExportModal: React.FC<ExportProps> = ({ Open, Close }) => {
  // const [status, setStatus] = useState("idle"); 
  // const [progress, setProgress] = useState(0);
  // const handleExport = () => {
  //   setStatus("uploading");
  //   setProgress(0);


  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(interval);
  //         setStatus("completed");
  //         return 100;
  //       }
  //       return prev + 1; 
  //     });
  //   }, 1000); 
  // };

  if (!Open) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-50">
        {/* Modal Container */}
        <div className="w-[496px] rounded-[12px] bg-white p-2 shadow-lg">
          {/* Modal Header */}
          <div className="rounded-[12px] border-[1px] border-neutral-200">
            <div className="flex items-center justify-between border-b-[1px] border-neutral-200 p-4 pb-3">
              <div className="flex items-center gap-[8px]">
                <span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_3385_28642)">
                      <path
                        d="M2 23C2 10.8497 11.8497 1 24 1C36.1503 1 46 10.8497 46 23C46 35.1503 36.1503 45 24 45C11.8497 45 2 35.1503 2 23Z"
                        fill="white"
                      />
                      <path
                        d="M2.5 23C2.5 11.1259 12.1259 1.5 24 1.5C35.8741 1.5 45.5 11.1259 45.5 23C45.5 34.8741 35.8741 44.5 24 44.5C12.1259 44.5 2.5 34.8741 2.5 23Z"
                        stroke="#DEE1E4"
                      />
                      <path
                        d="M16.5002 24.667L16.6951 25.2191C17.4536 27.3681 17.8328 28.4426 18.6981 29.0548C19.5634 29.667 20.7028 29.667 22.9817 29.667H25.0188C27.2977 29.667 28.4371 29.667 29.3024 29.0548C30.1677 28.4426 30.5469 27.3681 31.3054 25.2191L31.5002 24.667"
                        stroke="#4E5257"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24.0003 24.6668V16.3335M24.0003 24.6668C23.4168 24.6668 22.3266 23.0049 21.917 22.5835M24.0003 24.6668C24.5838 24.6668 25.6741 23.0049 26.0837 22.5835"
                        stroke="#4E5257"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_3385_28642"
                        x="0"
                        y="0"
                        width="48"
                        height="48"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.894118 0 0 0 0 0.898039 0 0 0 0 0.905882 0 0 0 0.24 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_3385_28642"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_3385_28642"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
                <div>
                  <h2 className="text-[16px] font-[600] leading-[24px] text-neutral-950">
                    Export Documents
                  </h2>
                  <h6 className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                    Total export : 4 files
                  </h6>
                </div>
              </div>
              <span onClick={Close}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8337 6.1665L6.16699 17.8332M6.16699 6.1665L17.8337 17.8332"
                    stroke="#1C1D1E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>

            </div>
            {/* Export CSV List */}
            <div className="p-2 mt-4">
              <div className="rounded-lg border-[1px] border-neutral-200 bg-neutral-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <div className="relative">
                      <img src={csv} alt="" className="h-[40px] w-[40px]" />

                      {/* <span className="absolute">CSV</span> */}
                    </div>

                    <div>
                      <h2 className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                        documents.csv
                      </h2>
                      <h4 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        File size : 800 KB
                      </h4>
                    </div>
                  </div>
                  <button className="flex w-[118px] items-center justify-center gap-[4px] rounded-lg bg-brand-base p-[8px]">
                    <span>
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.50012 9.66699L1.69499 10.2191C2.45345 12.3681 2.83269 13.4426 3.69797 14.0548C4.56325 14.667 5.7027 14.667 7.98159 14.667H10.0187C12.2975 14.667 13.437 14.667 14.3023 14.0548C15.1676 13.4426 15.5468 12.3681 16.3053 10.2191L16.5001 9.66699"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M9.00008 9.66683V1.3335M9.00008 9.66683C8.41656 9.66683 7.32636 8.00491 6.91675 7.5835M9.00008 9.66683C9.5836 9.66683 10.6738 8.00491 11.0834 7.5835"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <h1 className="text-[14px] font-[600] leading-[20px] text-white">
                      Export
                    </h1>
                  </button>
                </div>
              </div>
            </div>

            {/* Export XLS LIST */}
            <div className="p-2">
              <div className="rounded-lg border-[1px] border-neutral-200 bg-neutral-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <div className="">
                      <img src={xls} alt="" className="h-[40px] w-[40px]" />
                    </div>

                    <div>
                      <h2 className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                        documents.xls
                      </h2>
                      <h4 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        File size : 800 KB
                      </h4>
                    </div>
                  </div>
                  <button className="flex w-[118px] items-center justify-center gap-[4px] rounded-lg border-[1px] border-neutral-200 bg-white p-[8px]">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 14C4.6862 14 2 11.3138 2 8C2 4.6862 4.6862 2 8 2C11.3138 2 14 4.6862 14 8C14 11.3138 11.3138 14 8 14ZM7.4018 10.4L11.6438 6.1574L10.7954 5.309L7.4018 8.7032L5.7044 7.0058L4.856 7.8542L7.4018 10.4Z"
                          fill="#32B56A"
                        />
                      </svg>
                    </span>
                    <h1 className="text-[14px] font-[600] leading-[20px] text-positive-500">
                      Completed
                    </h1>
                  </button>
                </div>
              </div>
            </div>

            {/* JSON EXPORT LIST */}
            <div className="p-2">
              <div className="rounded-lg border-[1px] border-neutral-200 bg-neutral-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <div className="relative">
                      <img src={json} alt="" className="h-[40px] w-[40px]" />
                    </div>

                    <div>
                      <h2 className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                        documents.json
                      </h2>
                      <h4 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        File size : 800 KB
                      </h4>
                    </div>
                  </div>
                  <button className="flex w-[118px] items-center justify-center gap-[4px] rounded-lg border-[1px] border-neutral-200 bg-white p-[8px] text-[14px] font-[600] leading-[20px] text-melRose-500">
                    65% exporting
                  </button>
                </div>
                {/* <div className="w-full mt-2 bg-gray-200 rounded-full">
                    <div
                      className="h-[3px] rounded-full bg-melRose text-center text-[14px] font-medium leading-none text-white"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div> */}
              </div>
            </div>

            {/* PDF EXPORT LIST */}
            <div className="p-2">
              <div className="rounded-lg border-[1px] border-neutral-200 bg-neutral-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <div className="relative">
                      <img src={pdf} alt="" className="h-[40px] w-[40px]" />
                    </div>

                    <div>
                      <h2 className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                        documents.pdf
                      </h2>
                      <h4 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        File size : 800 KB
                      </h4>
                    </div>
                  </div>
                  <button className="flex w-[118px] items-center justify-center gap-[4px] rounded-lg border-[1px] border-neutral-200 bg-white p-[8px] text-[14px] font-[600] leading-[20px] text-melRose-500">
                    40% exporting
                  </button>
                </div>
              </div>
            </div>
            {/* Docx EXPORT LIST */}
            <div className="p-2">
              <div className="rounded-lg border-[1px] border-neutral-200 bg-neutral-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <div className="">
                      <img src={docx} alt="" className="h-[40px] w-[40px]" />
                    </div>

                    <div>
                      <h2 className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                        documents.docx
                      </h2>
                      <h4 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                        File size : 800 KB
                      </h4>
                    </div>
                  </div>
                  <button className="flex w-[118px] items-center justify-center gap-[4px] rounded-lg border-[1px] border-neutral-200 bg-white p-[8px] text-[14px] font-[600] leading-[20px] text-melRose-500">
                    33% exporting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExportModal;
