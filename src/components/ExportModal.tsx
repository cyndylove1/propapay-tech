// import { useState } from "react";

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
        <div className="w-[512px] rounded-[12px] bg-white p-2 shadow-lg">
          {/* Modal Header */}
          <div className="rounded-[12px] border-[1px] border-neutral-200">
            <div className="flex items-center justify-between border-b-[1px] border-neutral-200 p-4 pb-3">
              <div className="flex items-center gap-[8px]">
                <span>
                  <svg
                    width="48"
                    height="49"
                    viewBox="0 0 48 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_2965_50803)">
                      <path
                        d="M2 9.5C2 5.08172 5.58172 1.5 10 1.5H38C42.4183 1.5 46 5.08172 46 9.5V37.5C46 41.9183 42.4183 45.5 38 45.5H10C5.58172 45.5 2 41.9183 2 37.5V9.5Z"
                        fill="#F7F8F9"
                      />
                      <path
                        d="M2.5 9.5C2.5 5.35786 5.85786 2 10 2H38C42.1421 2 45.5 5.35786 45.5 9.5V37.5C45.5 41.6421 42.1421 45 38 45H10C5.85786 45 2.5 41.6421 2.5 37.5V9.5Z"
                        stroke="#E8EAEC"
                      />
                      <path
                        d="M15.0002 25.5L15.2341 26.1626C16.1442 28.7413 16.5993 30.0307 17.6377 30.7654C18.676 31.5 20.0433 31.5 22.778 31.5H25.2225C27.9571 31.5 29.3245 31.5 30.3628 30.7654C31.4012 30.0307 31.8562 28.7413 32.7664 26.1626L33.0002 25.5"
                        stroke="#1C1D1E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M24.0002 25.5V15.5M24.0002 25.5C23.3 25.5 21.9918 23.5057 21.5002 23M24.0002 25.5C24.7005 25.5 26.0087 23.5057 26.5002 23"
                        stroke="#1C1D1E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_2965_50803"
                        x="0"
                        y="0.5"
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
                          values="0 0 0 0 0.321569 0 0 0 0 0.345098 0 0 0 0 0.4 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_2965_50803"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_2965_50803"
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

              <button
                onClick={Close}
                className="w-[80px] rounded-[8px] border-[1px] border-negative-500 p-[8px] text-[14px] font-[600] leading-[20px] text-negative-500"
              >
                Cancel
              </button>
            </div>
            {/* Export CSV List */}
              <div className="p-2 mt-4">
                <div className="rounded-lg border-[1px] border-neutral-200 bg-neutral-50 p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[16px]">
                      <div className="relative">
                        <svg
                          width="33"
                          height="40"
                          viewBox="0 0 33 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32.5 12.5V36.062C32.5 38.2369 30.7183 40 28.5205 40H3.97948C1.78165 40 2.9851e-09 38.2369 2.9851e-09 36.062V3.938C-8.42081e-05 1.76308 1.78157 0 3.97948 0H20L32.5 12.5Z"
                            fill="#242628"
                          />
                        </svg>

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
                    <button
                      className="flex w-[118px] items-center justify-center gap-[4px] rounded-lg bg-brand-base p-[8px]"
                    >
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
                      <div className="relative">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M36.5 12.5V36.062C36.5 38.2369 34.7183 40 32.5205 40H7.97948C5.78165 40 4 38.2369 4 36.062V3.938C3.99992 1.76308 5.78157 0 7.97948 0H24L36.5 12.5Z"
                            fill="#00733B"
                          />
                          <path
                            d="M36.5 12.5H26.7444C25.2287 12.5 24 11.3436 24 9.91708V0L36.5 12.5Z"
                            fill="#4D9D76"
                          />
                          <path
                            d="M12.5739 24.7273L14.0405 27.206H14.0973L15.571 24.7273H17.3075L15.0881 28.3636L17.3572 32H15.5888L14.0973 29.5178H14.0405L12.549 32H10.7876L13.0639 28.3636L10.8303 24.7273H12.5739ZM18.2805 32V24.7273H19.8182V30.7322H22.9361V32H18.2805ZM27.8997 26.8189C27.8713 26.5324 27.7493 26.3099 27.5339 26.1513C27.3185 25.9927 27.0261 25.9134 26.6568 25.9134C26.4058 25.9134 26.194 25.9489 26.0211 26.0199C25.8483 26.0885 25.7157 26.1844 25.6234 26.3075C25.5334 26.4306 25.4885 26.5703 25.4885 26.7266C25.4837 26.8568 25.5109 26.9704 25.5701 27.0675C25.6317 27.1645 25.7157 27.2486 25.8223 27.3196C25.9288 27.3883 26.0519 27.4486 26.1916 27.5007C26.3313 27.5504 26.4804 27.593 26.639 27.6286L27.2924 27.7848C27.6097 27.8558 27.9009 27.9505 28.166 28.0689C28.4312 28.1873 28.6608 28.3329 28.8549 28.5057C29.0491 28.6785 29.1994 28.8821 29.3059 29.1165C29.4148 29.3509 29.4705 29.6196 29.4728 29.9226C29.4705 30.3677 29.3568 30.7536 29.1319 31.0803C28.9094 31.4046 28.5874 31.6567 28.166 31.8366C27.747 32.0142 27.2415 32.103 26.6497 32.103C26.0626 32.103 25.5512 32.013 25.1156 31.8331C24.6824 31.6532 24.3438 31.3868 24.1 31.0341C23.8585 30.679 23.7318 30.2398 23.72 29.7166H25.2079C25.2245 29.9605 25.2943 30.1641 25.4174 30.3274C25.5429 30.4884 25.7098 30.6103 25.9181 30.6932C26.1288 30.7737 26.3668 30.8139 26.6319 30.8139C26.8923 30.8139 27.1184 30.776 27.3102 30.7003C27.5043 30.6245 27.6547 30.5192 27.7612 30.3842C27.8677 30.2493 27.921 30.0942 27.921 29.919C27.921 29.7557 27.8725 29.6184 27.7754 29.5071C27.6807 29.3958 27.541 29.3011 27.3564 29.223C27.1741 29.1449 26.9503 29.0739 26.6852 29.0099L25.8933 28.8111C25.2801 28.6619 24.796 28.4287 24.4409 28.1115C24.0858 27.7943 23.9094 27.367 23.9118 26.8295C23.9094 26.3892 24.0266 26.0045 24.2633 25.6754C24.5024 25.3464 24.8303 25.0895 25.247 24.9048C25.6636 24.7202 26.1371 24.6278 26.6674 24.6278C27.2072 24.6278 27.6783 24.7202 28.0808 24.9048C28.4856 25.0895 28.8005 25.3464 29.0254 25.6754C29.2503 26.0045 29.3663 26.3857 29.3734 26.8189H27.8997Z"
                            fill="white"
                          />
                        </svg>

                        {/* <span className="absolute">CSV</span> */}
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
                        <svg
                          width="33"
                          height="40"
                          viewBox="0 0 33 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32.5 12.5V36.062C32.5 38.2369 30.7183 40 28.5205 40H3.97948C1.78165 40 2.9851e-09 38.2369 2.9851e-09 36.062V3.938C-8.42081e-05 1.76308 1.78157 0 3.97948 0H20L32.5 12.5Z"
                            fill="#6C35F2"
                          />
                        </svg>

                        {/* <span className="absolute">CSV</span> */}
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
                      <svg
                        width="33"
                        height="40"
                        viewBox="0 0 33 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.5 12.5V36.062C32.5 38.2369 30.7183 40 28.5205 40H3.97948C1.78165 40 2.9851e-09 38.2369 2.9851e-09 36.062V3.938C-8.42081e-05 1.76308 1.78157 0 3.97948 0H20L32.5 12.5Z"
                          fill="#E5252A"
                        />
                      </svg>

                      {/* <span className="absolute">CSV</span> */}
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
            <div className="p-2">
              <div className="rounded-lg border-[1px] border-neutral-200 bg-neutral-50 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[16px]">
                    <div className="relative">
                      <svg
                        width="33"
                        height="40"
                        viewBox="0 0 33 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.5 12.5V36.062C32.5 38.2369 30.7183 40 28.5205 40H3.97948C1.78165 40 2.9851e-09 38.2369 2.9851e-09 36.062V3.938C-8.42081e-05 1.76308 1.78157 0 3.97948 0H20L32.5 12.5Z"
                          fill="#0263D1"
                        />
                      </svg>

                      {/* <span className="absolute">CSV</span> */}
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
