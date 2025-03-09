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
          className="absolute inset-0 bg-[#000] opacity-50"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="relative z-10 w-[390px] rounded-xl bg-white shadow-md">
          {/* Modal Header */}
          <div className="border-b-[1px] border-neutral-200">
            <div className="item-center flex justify-between p-4">
              <h2 className="text-[16px] font-[600] leading-[19px] text-neutral-950">
                Filter Transaction
              </h2>
              <button onClick={onClose}>
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
