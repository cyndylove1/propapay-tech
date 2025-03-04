import Menu from "@/components/Menu";
import { useState } from "react";


const Bookings  = () => {
   const [isOpen, setIsOpen] = useState(false);

    

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4],
  ];

  return (
    <>
      <div className="h-full bg-[#f8f8f8] p-[20px]">
        <div className="flex items-center justify-between p-2 py-4">
          <h2 className="text-[24px] font-[600] leading-[36px]">Bookings</h2>
          <div className="flex gap-[24px]">
            <div className="flex h-[48px] w-[94px] cursor-pointer items-center justify-center gap-[5px] rounded-[12px] border-[1px] border-[#E8E8E8] bg-white">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 5.8335H17.5"
                    stroke="#303030"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5 10H15"
                    stroke="#303030"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M8.33331 14.1665H11.6666"
                    stroke="#303030"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <h2 className="text-[14px] font-[400] leading-[21px] text-[#303030]">
                Filter
              </h2>
            </div>
            <div className="flex h-[48px] w-[94px] cursor-pointer items-center justify-center gap-[5px] rounded-[12px] border-[1px] border-[#E8E8E8] bg-white">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.6665C5.40002 1.6665 1.66669 5.39984 1.66669 9.99984C1.66669 14.5998 5.40002 18.3332 10 18.3332C14.6 18.3332 18.3334 14.5998 18.3334 9.99984"
                    stroke="#303030"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.8333 9.16683L17.6666 2.3335"
                    stroke="#303030"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3334 5.6915V1.6665H14.3083"
                    stroke="#303030"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h2 className="text-[14px] font-[400] leading-[21px] text-[#303030]">
                Export
              </h2>
            </div>
            <div
              className="flex h-[48px] w-[115px] cursor-pointer items-center justify-center gap-[5px] rounded-[12px] border-[1px] border-[#E8E8E8] bg-[#12725B]"
              onClick={() => setIsOpen(true)}
            >
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10H15"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 15V5"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h2 className="text-[14px] font-[500] leading-[21px] text-[#FFFF]">
                Schedule
              </h2>
            </div>
          </div>
        </div>
        <div className="max-w-6xl overflow-hidden rounded-[12px] border-[1px] border-[#DFE1E6]">
          {/* Calendar Grid */}
          <div className="grid grid-cols-7">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="p-2 font-medium text-center text-gray-600 bg-white"
              >
                {day}
              </div>
            ))}

            {/* Dates */}
            {dates.flat().map((date, index) => {
              const isWeekend = index % 7 === 0 || (index + 1) % 7 === 0;
              return (
                <div
                  key={index}
                  className={`relative h-[134px] ${
                    isWeekend ? "bg-gray-100" : "bg-white"
                  } ${date === 23 ? "border border-[#DFE1E6]" : "overflow-hidden border-[1px] border-[#DFE1E6]"}`}
                >
                  <div className="right-2 top-2 absolute text-sm text-gray-500">
                    {date}
                  </div>

                  {/* Events */}

                  {date === 7 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#f4f0ff] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Land Inspection
                        </h3>
                      </div>
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#A4ABB8]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EEEFF2] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Meeting with client
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +7 more
                      </h3>
                    </div>
                  )}
                  {date === 10 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#FAC5B7]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#fef1ed] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#A4ABB8]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EEEFF2] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +7 more
                      </h3>
                    </div>
                  )}
                  {date === 12 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#B8BCF9]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EDEEFD] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        {/* <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span> */}
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#F0FBFF] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +10 more
                      </h3>
                    </div>
                  )}
                  {date === 14 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#B8BCF9]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EDEEFD] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        {/* <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span> */}
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#F0FBFF] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +10 more
                      </h3>
                    </div>
                  )}
                  {date === 15 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#B8BCF9]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EDEEFD] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        {/* <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span> */}
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#F0FBFF] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +10 more
                      </h3>
                    </div>
                  )}
                  {date === 16 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#B8BCF9]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EDEEFD] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        {/* <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span> */}
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#F0FBFF] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +10 more
                      </h3>
                    </div>
                  )}

                  {date === 25 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#B8BCF9]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EDEEFD] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        {/* <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span> */}
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#F0FBFF] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +10 more
                      </h3>
                    </div>
                  )}

                  {date === 26 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#B8BCF9]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EDEEFD] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#F0FBFF] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +10 more
                      </h3>
                    </div>
                  )}

                  {date === 27 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#B8BCF9]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EDEEFD] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#F0FBFF] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +10 more
                      </h3>
                    </div>
                  )}
                  {date === 29 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#B8BCF9]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EDEEFD] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#F0FBFF] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +10 more
                      </h3>
                    </div>
                  )}
                  {date === 31 && (
                    <div className="px-2 pt-10">
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#B8BCF9]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#EDEEFD] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>
                      <div className="relative">
                        <span className="absolute left-0 top-[2px] h-[14px] w-[2px] bg-[#d4c5ff]"></span>
                        <h3 className="mb-2 flex h-[17px] items-center rounded-[4px] bg-[#F0FBFF] px-2 text-[10px] font-[300] leading-[15px] tracking-tight text-[#A4ABB8]">
                          Design Review
                        </h3>
                      </div>

                      <h3 className="text-[10px] font-[500] leading-[15px] tracking-tight text-[#808897]">
                        +10 more
                      </h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Menu isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </>
  );
};

export default Bookings;
