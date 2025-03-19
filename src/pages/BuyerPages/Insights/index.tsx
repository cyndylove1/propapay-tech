// import RevenueChart from "@/components/RevenueChart";
// import SelectTag from "@/components/common/SelectTag";

const Insight = () => {
  return (
    <>
      <div>
        <h2>Insight</h2>
      </div>
      {/* <div className="bg-[#f8f8f8]">
        <div className="flex justify-between px-[20px] py-[30px]">
          <h2 className="text-[24px] font-[600] leading-[36px]">Insight</h2>
          <div>
            <SelectTag
              onChange={(e) => setTitle(e.target.value)}
              className="h-[44px] w-[140px] px-2"
            >
              <option value="">Last 30 Days</option>
            </SelectTag>
          </div>
        </div>
        <div className="mx-[20px] flex gap-[20px]">
          <div className="h-[174px] w-[305px] overflow-hidden rounded-[12px] border-[1px] border-[#DFE1E6]">
            <div className="h-[134px] bg-white px-4 py-2">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border-[1px] border-[#DFE1E6]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 16.667C7.32848 16.667 7.15867 16.6638 6.99091 16.6576M3.15202 12.5003C2.22833 12.058 1.66667 11.474 1.66667 10.8337C1.66667 10.1934 2.22833 9.60929 3.15202 9.16699M3.15202 12.5003C2.22833 12.9426 1.66667 13.5267 1.66667 14.167C1.66667 15.4742 4.00764 16.5471 6.99091 16.6576M3.15202 12.5003C4.11409 12.961 5.46891 13.2679 6.99091 13.3243M3.15202 9.16699C4.22014 9.67845 5.77237 10.0003 7.5 10.0003C9.22764 10.0003 10.7799 9.67845 11.848 9.16699M3.15202 9.16699C2.22833 8.7247 1.66667 8.14062 1.66667 7.50033C1.66667 6.86003 2.22833 6.27596 3.15202 5.83366M11.848 9.16699C12.7717 8.7247 13.3333 8.14062 13.3333 7.50033C13.3333 6.86003 12.7717 6.27596 11.848 5.83366M11.848 9.16699C12.3552 9.40987 12.7533 9.6955 13.0091 10.0097M11.848 5.83366C12.7717 5.39136 13.3333 4.80729 13.3333 4.16699C13.3333 2.78628 10.7217 1.66699 7.5 1.66699C4.27834 1.66699 1.66667 2.78628 1.66667 4.16699C1.66667 4.80729 2.22833 5.39136 3.15202 5.83366M11.848 5.83366C10.7799 6.34512 9.22764 6.66699 7.5 6.66699C5.77237 6.66699 4.22014 6.34512 3.15202 5.83366M16.848 14.167C17.7717 13.7247 18.3333 13.1406 18.3333 12.5003C18.3333 11.1931 15.9924 10.1203 13.0091 10.0097M16.848 14.167C15.7799 14.6784 14.2276 15.0003 12.5 15.0003C10.7724 15.0003 9.22014 14.6784 8.15202 14.167M16.848 14.167C17.7717 14.6093 18.3333 15.1934 18.3333 15.8337C18.3333 16.474 17.7717 17.058 16.848 17.5003C15.7799 18.0118 14.2276 18.3337 12.5 18.3337C10.7724 18.3337 9.22014 18.0118 8.15202 17.5003C7.6448 17.2574 7.24674 16.9718 6.99091 16.6576M8.15202 14.167C7.22833 14.6093 6.66667 15.1934 6.66667 15.8337C6.66667 16.1223 6.78085 16.3996 6.99091 16.6576M8.15202 14.167C7.6448 13.9241 7.24674 13.6385 6.99091 13.3243M13.0091 10.0097C12.8413 10.0035 12.6715 10.0003 12.5 10.0003C9.27834 10.0003 6.66667 11.1196 6.66667 12.5003C6.66667 12.789 6.78085 13.0663 6.99091 13.3243"
                    stroke="#46C19A"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3 className="py-2 text-[14px] font-[500] leading-[21px] tracking-wide text-[#666D80]">
                Total Assets
              </h3>
              <div className="flex justify-between">
                <h4 className="text-[18px] font-[600] leading-[24px] tracking-wider text-[#0D0D12]">
                  N23,569.00
                </h4>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5355 6.46479L6.46446 13.5359M13.5355 6.46479H8.23223M13.5355 6.46479V11.7681M4.10744 15.8929C0.853072 12.6385 0.853072 7.36214 4.10744 4.10777C7.36181 0.8534 12.6382 0.8534 15.8926 4.10777C19.1469 7.36214 19.1469 12.6385 15.8926 15.8929C12.6382 19.1473 7.36181 19.1473 4.10744 15.8929Z"
                      stroke="#A4ABB8"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex justify-between px-4 py-2">
              <div className="flex items-center gap-[2px]">
                <span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.16699V13.8337M8 3.16699L4 7.16699M8 3.16699L12 7.16699"
                      stroke="#40C4AA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="text-[14px] font-[600] leading-[21px] tracking-wide text-[#40C4AA]">
                  10,5%
                </h5>
              </div>
              <h6 className="text-[14px] font-[400] leading-[21px] tracking-wide text-[#666D80]">
                from last period
              </h6>
            </div>
          </div>
          <div className="h-[174px] w-[305px] overflow-hidden rounded-[12px] border-[1px] border-[#DFE1E6]">
            <div className="h-[134px] bg-white px-4 py-2">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border-[1px] border-[#DFE1E6]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13.3333V11.6667M6.66667 13.3333V9.16667M13.3333 13.3333V6.66667M5.83333 17.5H14.1667C16.0076 17.5 17.5 16.0076 17.5 14.1667V5.83333C17.5 3.99238 16.0076 2.5 14.1667 2.5H5.83333C3.99238 2.5 2.5 3.99238 2.5 5.83333V14.1667C2.5 16.0076 3.99238 17.5 5.83333 17.5Z"
                    stroke="#46C19A"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="py-2 text-[14px] font-[500] leading-[21px] tracking-wide text-[#666D80]">
                ROI
              </h3>
              <div className="flex justify-between">
                <h4 className="text-[18px] font-[600] leading-[24px] tracking-wider text-[#0D0D12]">
                  N12,680.00
                </h4>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5355 6.46479L6.46446 13.5359M13.5355 6.46479H8.23223M13.5355 6.46479V11.7681M4.10744 15.8929C0.853072 12.6385 0.853072 7.36214 4.10744 4.10777C7.36181 0.8534 12.6382 0.8534 15.8926 4.10777C19.1469 7.36214 19.1469 12.6385 15.8926 15.8929C12.6382 19.1473 7.36181 19.1473 4.10744 15.8929Z"
                      stroke="#A4ABB8"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex justify-between px-4 py-2">
              <div className="flex items-center gap-[2px]">
                <span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.16699V13.8337M8 3.16699L4 7.16699M8 3.16699L12 7.16699"
                      stroke="#40C4AA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="text-[14px] font-[600] leading-[21px] tracking-wide text-[#40C4AA]">
                  10,5%
                </h5>
              </div>
              <h6 className="text-[14px] font-[400] leading-[21px] tracking-wide text-[#666D80]">
                from last period
              </h6>
            </div>
          </div>
          <div className="h-[174px] w-[305px] overflow-hidden rounded-[12px] border-[1px] border-[#DFE1E6]">
            <div className="h-[134px] bg-white px-4 py-2">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border-[1px] border-[#DFE1E6]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 16.667C7.32848 16.667 7.15867 16.6638 6.99091 16.6576M3.15202 12.5003C2.22833 12.058 1.66667 11.474 1.66667 10.8337C1.66667 10.1934 2.22833 9.60929 3.15202 9.16699M3.15202 12.5003C2.22833 12.9426 1.66667 13.5267 1.66667 14.167C1.66667 15.4742 4.00764 16.5471 6.99091 16.6576M3.15202 12.5003C4.11409 12.961 5.46891 13.2679 6.99091 13.3243M3.15202 9.16699C4.22014 9.67845 5.77237 10.0003 7.5 10.0003C9.22764 10.0003 10.7799 9.67845 11.848 9.16699M3.15202 9.16699C2.22833 8.7247 1.66667 8.14062 1.66667 7.50033C1.66667 6.86003 2.22833 6.27596 3.15202 5.83366M11.848 9.16699C12.7717 8.7247 13.3333 8.14062 13.3333 7.50033C13.3333 6.86003 12.7717 6.27596 11.848 5.83366M11.848 9.16699C12.3552 9.40987 12.7533 9.6955 13.0091 10.0097M11.848 5.83366C12.7717 5.39136 13.3333 4.80729 13.3333 4.16699C13.3333 2.78628 10.7217 1.66699 7.5 1.66699C4.27834 1.66699 1.66667 2.78628 1.66667 4.16699C1.66667 4.80729 2.22833 5.39136 3.15202 5.83366M11.848 5.83366C10.7799 6.34512 9.22764 6.66699 7.5 6.66699C5.77237 6.66699 4.22014 6.34512 3.15202 5.83366M16.848 14.167C17.7717 13.7247 18.3333 13.1406 18.3333 12.5003C18.3333 11.1931 15.9924 10.1203 13.0091 10.0097M16.848 14.167C15.7799 14.6784 14.2276 15.0003 12.5 15.0003C10.7724 15.0003 9.22014 14.6784 8.15202 14.167M16.848 14.167C17.7717 14.6093 18.3333 15.1934 18.3333 15.8337C18.3333 16.474 17.7717 17.058 16.848 17.5003C15.7799 18.0118 14.2276 18.3337 12.5 18.3337C10.7724 18.3337 9.22014 18.0118 8.15202 17.5003C7.6448 17.2574 7.24674 16.9718 6.99091 16.6576M8.15202 14.167C7.22833 14.6093 6.66667 15.1934 6.66667 15.8337C6.66667 16.1223 6.78085 16.3996 6.99091 16.6576M8.15202 14.167C7.6448 13.9241 7.24674 13.6385 6.99091 13.3243M13.0091 10.0097C12.8413 10.0035 12.6715 10.0003 12.5 10.0003C9.27834 10.0003 6.66667 11.1196 6.66667 12.5003C6.66667 12.789 6.78085 13.0663 6.99091 13.3243"
                    stroke="#46C19A"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <h3 className="py-2 text-[14px] font-[500] leading-[21px] tracking-wide text-[#666D80]">
                Decline Value
              </h3>
              <div className="flex justify-between">
                <h4 className="text-[18px] font-[600] leading-[24px] tracking-wider text-[#0D0D12]">
                  N23,569.00
                </h4>
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5355 6.46479L6.46446 13.5359M13.5355 6.46479H8.23223M13.5355 6.46479V11.7681M4.10744 15.8929C0.853072 12.6385 0.853072 7.36214 4.10744 4.10777C7.36181 0.8534 12.6382 0.8534 15.8926 4.10777C19.1469 7.36214 19.1469 12.6385 15.8926 15.8929C12.6382 19.1473 7.36181 19.1473 4.10744 15.8929Z"
                      stroke="#A4ABB8"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex justify-between px-4 py-2">
              <div className="flex items-center gap-[2px]">
                <span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 13.8337V3.16699M8 13.8337L4 9.83366M8 13.8337L12 9.83366"
                      stroke="#DF1C41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="text-[14px] font-[600] leading-[21px] tracking-wide text-[#DF1C41]">
                  10,5%
                </h5>
              </div>
              <h6 className="text-[14px] font-[400] leading-[21px] tracking-wide text-[#666D80]">
                from last period
              </h6>
            </div>
          </div>
        </div>
        <RevenueChart />
      </div> */}
    </>
  );
};
export default Insight;
