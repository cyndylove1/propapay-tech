// import Btn from "@/components/common/Btn";

const Instalment = () => {
  return (
    <>
      <h1>Flex Payment</h1>
      {/* <div className="mx-[30px]">
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="mt-[30px] h-[148px] w-[470px] rounded-[8px] border-[1px] border-[#E0DEF7] bg-white">
            <div className="mx-[10px] flex gap-[8px] pt-[20px]">
              <h2 className="text-[18px] font-[700] leading-[24px] tracking-tight text-[#000929]">
                Instalment Payment
              </h2>
              <h2 className="flex h-[24px] w-[106px] items-center justify-center rounded-[16px] bg-[#F9B207] text-[12px] font-[600] leading-[12px] text-white">
                DUE IN 7DAYS
              </h2>
            </div>
            <div />
            <div className="mx-[10px] mt-[30px] flex items-center justify-between">
              <div className="flex">
                <div className="flex gap-[5px]">
                  <span className="mt-[5px]">
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.99538" cy="3" r="3" fill="#12725B" />
                    </svg>
                  </span>

                  <div className="">
                    <h2 className="text-[14px] font-[400] leading-[19px] text-[#6C727F]">
                      Total
                    </h2>
                    <h3 className="text-[18px] font-[700] leading-[26px] tracking-tight text-[#000929]">
                      N1,2M
                    </h3>
                  </div>
                </div>
                <span className="mx-[10px] flex items-center">
                  <svg
                    width="1"
                    height="32"
                    viewBox="0 0 1 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.495377"
                      y1="2.18557e-08"
                      x2="0.495375"
                      y2="32"
                      stroke="#E0DEF7"
                    />
                  </svg>
                </span>

                <div className="flex gap-[5px]">
                  <span className="mt-[5px]">
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.99538" cy="3" r="3" fill="#12725B" />
                    </svg>
                  </span>

                  <div className="">
                    <h2 className="text-[14px] font-[400] leading-[19px] text-[#6C727F]">
                      Paid
                    </h2>
                    <h3 className="text-[18px] font-[700] leading-[26px] tracking-tight text-[#000929]">
                      N800K
                    </h3>
                  </div>
                </div>
                <span className="mx-[10px] flex items-center">
                  <svg
                    width="1"
                    height="32"
                    viewBox="0 0 1 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.495377"
                      y1="2.18557e-08"
                      x2="0.495375"
                      y2="32"
                      stroke="#E0DEF7"
                    />
                  </svg>
                </span>

                <div className="flex gap-[5px]">
                  <span className="mt-[5px]">
                    <svg
                      width="6"
                      height="6"
                      viewBox="0 0 6 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.99538" cy="3" r="3" fill="#F06565" />
                    </svg>
                  </span>

                  <div className="">
                    <h2 className="text-[14px] font-[400] leading-[19px] text-[#6C727F]">
                      Remaining
                    </h2>
                    <h3 className="text-[18px] font-[700] leading-[26px] tracking-tight text-[#000929]">
                      N400K
                    </h3>
                  </div>
                </div>
              </div>
              <Btn
                className="mr-4 h-[40px] w-[112px] rounded-[8px] bg-[#12725b] font-[700] leading-[19px] text-white"
                text="View Details"
              />
            </div>
          </div>
          {Array(9)
            .fill({})
            .map(() => (
              <div className="mt-[30px] h-[148px] w-[470px] rounded-[8px] border-[1px] border-[#E0DEF7] bg-white">
                <div className="mx-[10px] flex gap-[8px] pt-[20px]">
                  <h2 className="text-[18px] font-[700] leading-[24px] tracking-tight text-[#000929]">
                    Instalment Payment
                  </h2>
                  <h2 className="flex h-[24px] w-[106px] items-center justify-center rounded-[16px] bg-[#F9B207] text-[12px] font-[600] leading-[12px] text-white">
                    DUE IN 7DAYS
                  </h2>
                </div>
                <div />
                <div className="mx-[10px] mt-[30px] flex items-center justify-between">
                  <div className="flex">
                    <div className="flex gap-[5px]">
                      <span className="mt-[5px]">
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2.99538" cy="3" r="3" fill="#12725B" />
                        </svg>
                      </span>

                      <div className="">
                        <h2 className="text-[14px] font-[400] leading-[19px] text-[#6C727F]">
                          Total
                        </h2>
                        <h3 className="text-[18px] font-[700] leading-[26px] tracking-tight text-[#000929]">
                          N1,2M
                        </h3>
                      </div>
                    </div>
                    <span className="mx-[10px] flex items-center">
                      <svg
                        width="1"
                        height="32"
                        viewBox="0 0 1 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.495377"
                          y1="2.18557e-08"
                          x2="0.495375"
                          y2="32"
                          stroke="#E0DEF7"
                        />
                      </svg>
                    </span>

                    <div className="flex gap-[5px]">
                      <span className="mt-[5px]">
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2.99538" cy="3" r="3" fill="#12725B" />
                        </svg>
                      </span>

                      <div className="">
                        <h2 className="text-[14px] font-[400] leading-[19px] text-[#6C727F]">
                          Paid
                        </h2>
                        <h3 className="text-[18px] font-[700] leading-[26px] tracking-tight text-[#000929]">
                          N800K
                        </h3>
                      </div>
                    </div>
                    <span className="mx-[10px] flex items-center">
                      <svg
                        width="1"
                        height="32"
                        viewBox="0 0 1 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.495377"
                          y1="2.18557e-08"
                          x2="0.495375"
                          y2="32"
                          stroke="#E0DEF7"
                        />
                      </svg>
                    </span>

                    <div className="flex gap-[5px]">
                      <span className="mt-[5px]">
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="2.99538" cy="3" r="3" fill="#F06565" />
                        </svg>
                      </span>

                      <div className="">
                        <h2 className="text-[14px] font-[400] leading-[19px] text-[#6C727F]">
                          Remaining
                        </h2>
                        <h3 className="text-[18px] font-[700] leading-[26px] tracking-tight text-[#000929]">
                          N400K
                        </h3>
                      </div>
                    </div>
                  </div>
                  <Btn
                    className="h-[40px] w-[160px] rounded-[8px] bg-[#12725b] text-[14px] font-[700] leading-[19px] text-white"
                    text="Schedule Payment"
                  />
                </div>
              </div>
            ))}
        </div>
      </div> */}
    </>
  );
};
export default Instalment;
