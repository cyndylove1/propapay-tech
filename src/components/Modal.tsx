import React from "react";
import Label from "./common/Label";
import SelectTag from "./common/SelectTag";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#000] opacity-70"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="relative left-[17rem] z-10 w-[390px] rounded-xl bg-white shadow-md">
          {/* Modal Header */}
          <div className="border-b-[1px] border-[#E8E8E8]">
            <div className="item-center flex justify-between p-4">
              <h2 className="text-[16px] font-[600] leading-[19px] text-[#1A1A1A]">
                Filter Transaction
              </h2>
              <button onClick={onClose} className="text-[#1A1A1A]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
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
                className="h-[56px] w-full rounded-[12px] border-[1px] border-[#cfd2d1] px-2"
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
                  className="h-[56px] w-full rounded-[12px] border-[1px] border-[#cfd2d1] px-2"
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
              <label className="block mb-1 text-sm text-gray-600">
                Start Date
              </label>
              <input
                type="date"
                className="focus:ring-green-500 focus:outline-none w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-600">
                End Date
              </label>
              <input
                type="date"
                className="focus:ring-green-500 focus:outline-none w-full p-2 border rounded-md"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t">
            <button
              onClick={onClose}
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

export default Modal;
