import SelectTag from "@/components/common/SelectTag";
import SearchBar from "@/components/SearchBar";
import FilterModal from "./FilterModal";
import DateSortingModal from "./DateSortingModal";
import SortByModal from "./SortByModal";
import { useState } from "react";


const TableHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
      const [isDateOpen, setIsDateOpen] = useState(false);
      const [isSortOpen, setIsSortOpen] = useState(false);
    
  return (
    <>
      <div className="md:flex-row flex flex-col items-center justify-between px-4 py-4">
        <div className="w-full md:w-[295px]">
          <SearchBar
            placeholder="Search transactions..."
            showShortcut={false}
            className=""
          />
        </div>

        <div className="mt-4 flex w-full flex-col gap-[16px] md:mt-0 md:w-fit md:flex-row">
          <div
            className="relative flex h-[36px] w-full items-center gap-[8px] rounded-lg border-[1px] border-[#E5E6E8] md:w-[158px]"
            onClick={() => setIsDateOpen(true)}
          >
            <span className="absolute flex items-center px-2">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.6665V3.33317M4 1.6665V3.33317"
                  stroke="#6B6F75"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.99622 10.833H9.0037M8.99622 14.1663H9.0037M12.3258 10.833H12.3333M5.66663 10.833H5.6741M5.66663 14.1663H5.6741"
                  stroke="#6B6F75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.91663 6.6665H16.0833"
                  stroke="#6B6F75"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.08331 10.2027C1.08331 6.57161 1.08331 4.75607 2.12675 3.62803C3.17018 2.5 4.84956 2.5 8.20831 2.5H9.79165C13.1504 2.5 14.8298 2.5 15.8732 3.62803C16.9166 4.75607 16.9166 6.57161 16.9166 10.2027V10.6306C16.9166 14.2617 16.9166 16.0773 15.8732 17.2053C14.8298 18.3333 13.1504 18.3333 9.79165 18.3333H8.20831C4.84956 18.3333 3.17018 18.3333 2.12675 17.2053C1.08331 16.0773 1.08331 14.2617 1.08331 10.6306V10.2027Z"
                  stroke="#6B6F75"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.5 6.6665H16.5"
                  stroke="#6B6F75"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <SelectTag className="w-full border-none bg-transparent px-8 text-[14px] font-[500] leading-[20px] text-neutral-700">
              <option className="">Last 30 Days</option>
            </SelectTag>
          </div>

          <button
            className="flex h-[36px] w-full items-center gap-[4px] rounded-lg border-[1px] border-neutral-200 p-2 md:w-[97px]"
            onClick={() => setIsOpen(true)}
          >
            <span className="">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 3.83301H4"
                  stroke="#6D7177"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.5 12.166H6.5"
                  stroke="#6D7177"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 12.166L16.5 12.166"
                  stroke="#6D7177"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.5 3.83301L16.5 3.83301"
                  stroke="#6D7177"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 3.83301C4 3.05644 4 2.66815 4.12687 2.36187C4.29602 1.95349 4.62048 1.62903 5.02886 1.45988C5.33515 1.33301 5.72343 1.33301 6.5 1.33301C7.27657 1.33301 7.66485 1.33301 7.97114 1.45988C8.37952 1.62903 8.70398 1.95349 8.87313 2.36187C9 2.66815 9 3.05644 9 3.83301C9 4.60958 9 4.99786 8.87313 5.30415C8.70398 5.71253 8.37952 6.03698 7.97114 6.20614C7.66485 6.33301 7.27657 6.33301 6.5 6.33301C5.72343 6.33301 5.33515 6.33301 5.02886 6.20614C4.62048 6.03698 4.29602 5.71253 4.12687 5.30415C4 4.99786 4 4.60958 4 3.83301Z"
                  stroke="#6D7177"
                  stroke-width="1.5"
                />
                <path
                  d="M9 12.166C9 11.3894 9 11.0012 9.12687 10.6949C9.29602 10.2865 9.62048 9.96204 10.0289 9.79288C10.3351 9.66602 10.7234 9.66602 11.5 9.66602C12.2766 9.66602 12.6649 9.66602 12.9711 9.79288C13.3795 9.96204 13.704 10.2865 13.8731 10.6949C14 11.0012 14 11.3894 14 12.166C14 12.9426 14 13.3309 13.8731 13.6372C13.704 14.0455 13.3795 14.37 12.9711 14.5391C12.6649 14.666 12.2766 14.666 11.5 14.666C10.7234 14.666 10.3351 14.666 10.0289 14.5391C9.62048 14.37 9.29602 14.0455 9.12687 13.6372C9 13.3309 9 12.9426 9 12.166Z"
                  stroke="#6D7177"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <h3 className="px-2 text-[14px] font-[500] leading-[20px] text-neutral-700">
              Filter
            </h3>
          </button>
          <div
            className="relative flex h-[36px] w-full items-center gap-[8px] rounded-lg border-[1px] border-[#E5E6E8] md:w-[122px]"
            onClick={() => setIsSortOpen(true)}
          >
            <span className="absolute flex items-center px-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.16669 5.66699L16.5 5.66705"
                  stroke="#6D7177"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.16669 9H16.5"
                  stroke="#6D7177"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.16669 12.333H16.5"
                  stroke="#6D7177"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.16669 2.33301H16.5"
                  stroke="#6D7177"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.58333 16.5V1.5M3.58333 16.5C2.99981 16.5 1.90961 14.8381 1.5 14.4167M3.58333 16.5C4.16686 16.5 5.25706 14.8381 5.66667 14.4167"
                  stroke="#6D7177"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <SelectTag className="w-full border-none bg-transparent px-8 text-[14px] font-[500] leading-[20px] text-neutral-700">
              <option className="">Sort By</option>
            </SelectTag>
          </div>
        </div>
      </div>
      <FilterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <DateSortingModal
        isDateOpen={isDateOpen}
        onCloseDate={() => setIsDateOpen(false)}
      />
      <SortByModal
        isSortOpen={isSortOpen}
        onCloseSort={() => setIsSortOpen(false)}
      />
    </>
  );
};
export default TableHeader;
