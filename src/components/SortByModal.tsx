import React from "react";
import Label from "./common/Label";
import SelectTag from "./common/SelectTag";

interface ModalProps {
  isSortOpen: boolean;
  onCloseSort: () => void;
}

const SortByModal: React.FC<ModalProps> = ({ isSortOpen, onCloseSort }) => {
  if (!isSortOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#000] opacity-50"
          onClick={onCloseSort}
        ></div>

        {/* Modal */}
        <div className="relative z-10 w-[390px] rounded-xl bg-white shadow-md">
          {/* Modal Header */}
          <div className="border-b-[1px] border-neutral-200">
            <div className="item-center flex justify-between p-4">
              <h2 className="text-[16px] font-[600] leading-[19px] text-neutral-base">
                Date Sorting
              </h2>
              <button onClick={onCloseSort}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8337 6.1665L6.16699 17.8332M6.16699 6.1665L17.8337 17.8332"
                    stroke="#888D93"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="py-4">
            <div className="mx-4 mb-4">
              <Label text="Status" htmlFor="status" />
              <SelectTag
                // onChange={(e) => setTitle(e.target.value)}
                className="h-[56px] w-full rounded-[12px] border-neutral-200 px-2"
              >
                <option
                  value=""
                  className="text-[16px] font-[400] leading-[19px]"
                >
                  Completed
                </option>
                <option
                  value=""
                  className="text-[16px] font-[400] leading-[19px]"
                >
                  Pending
                </option>
                <option
                  value=""
                  className="text-[16px] font-[400] leading-[19px]"
                >
                  Cancelled
                </option>
                <option
                  value=""
                  className="text-[16px] font-[400] leading-[19px]"
                >
                  Processing
                </option>
              </SelectTag>
            </div>

            <div>
              <div className="mx-4">
                <Label text="Property" htmlFor="status" />
                <SelectTag
                  // onChange={(e) => setTitle(e.target.value)}
                  className="h-[56px] w-full rounded-[12px] border-neutral-200 px-2"
                >
                  <option
                    value=""
                    className="text-[16px] font-[400] leading-[19px]"
                  >
                    Angle Blue, Lekki
                  </option>
                </SelectTag>
              </div>
            </div>
            <div>
              <div className="mx-4">
                <Label text="Property" htmlFor="status" />
                <SelectTag
                  // onChange={(e) => setTitle(e.target.value)}
                  className="h-[56px] w-full rounded-[12px] border-neutral-200 px-2"
                >
                  <option
                    value=""
                    className="text-[16px] font-[400] leading-[19px]"
                  >
                    Angle Blue, Lekki
                  </option>
                </SelectTag>
              </div>
            </div>
            <div>
              <div className="mx-4">
                <Label text="Property" htmlFor="status" />
                <SelectTag
                  // onChange={(e) => setTitle(e.target.value)}
                  className="h-[56px] w-full rounded-[12px] border-neutral-200 px-2"
                >
                  <option
                    value=""
                    className="text-[16px] font-[400] leading-[19px]"
                  >
                    Angle Blue, Lekki
                  </option>
                </SelectTag>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t">
            <button
              onClick={onCloseSort}
              className="px-4 py-2 text-gray-600 border rounded-md"
            >
              Reset
            </button>
            <button className="px-4 py-2 text-white bg-green-600 rounded-md">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortByModal;
