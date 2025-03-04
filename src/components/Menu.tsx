import { useState, useRef } from "react";
import ToggleSwitch from "./ToggleSwitch";
import Input from "./common/Input";
import TextArea from "./TextArea";
import Btn from "./common/Btn";
import DateSelection from "./DateSelection";

interface AppointmentModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Menu: React.FC<AppointmentModalProps> = ({ isOpen, closeModal }) => {
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const startTimeRef = useRef<HTMLInputElement>(null);
  const endTimeRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`bg-black fixed inset-0 bg-opacity-40 transition-opacity ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      } flex justify-end`}
      onClick={closeModal}
    >
      {/* Modal Content */}
      <div
        className={`flex h-screen w-[500px] transform flex-col overflow-y-auto bg-white shadow-lg transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 p-4">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66667 2.49984H5C3.61929 2.49984 2.5 3.61913 2.5 4.99984V7.49984M6.66667 2.49984V1.6665M6.66667 2.49984H13.3333M6.66667 2.49984V3.33317M13.3333 2.49984H15C16.3807 2.49984 17.5 3.61913 17.5 4.99984V7.49984M13.3333 2.49984V1.6665M13.3333 2.49984V3.33317M2.5 7.49984V15.8332C2.5 17.2139 3.61929 18.3332 5 18.3332H15C16.3807 18.3332 17.5 17.2139 17.5 15.8332V7.49984M2.5 7.49984H17.5"
                  stroke="#808897"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            <h2 className="text-[16px] leading-[24px] tracking-wide text-[#666D80]">
              Book an Appointment
            </h2>
          </div>
          <button onClick={closeModal}>
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#808897"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="border-[1px] border-[#DFE1E6]"></div>

        <div className="my-4 px-4">
          <Input placeholder="Title" />
        </div>

        {/* Time Selection */}
        <div className="mx-4 rounded-[12px] border-[1px] border-[#DFE1E6] px-4">
          <div className="my-4">
            <div className="flex items-center justify-between rounded-lg p-2">
              {/* Start Time */}
              <div
                className="flex cursor-pointer items-center gap-2"
                onClick={() => startTimeRef.current?.showPicker()}
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
                      d="M9.99984 5.83317V10.4165C9.99984 10.6466 10.1864 10.8332 10.4165 10.8332H12.4998M9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332Z"
                      stroke="#808897"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <span className="text-[16px] font-[400] leading-[24px] tracking-wide text-[#0D0D12]">
                  {startTime ? startTime : "Start Time"}
                </span>
              </div>
              <input
                ref={startTimeRef}
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="hidden"
              />

              {/* End Time */}
              <div
                className="flex cursor-pointer items-center gap-2"
                onClick={() => endTimeRef.current?.showPicker()}
              >
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1851_6645)">
                      <path
                        d="M14.9998 9.99984H4.99984M14.9998 9.99984L11.2498 6.24984M14.9998 9.99984L11.2498 13.7498M1.6665 9.99984C1.6665 5.39746 5.39746 1.6665 9.99984 1.6665C14.6022 1.6665 18.3332 5.39746 18.3332 9.99984C18.3332 14.6022 14.6022 18.3332 9.99984 18.3332C5.39746 18.3332 1.6665 14.6022 1.6665 9.99984Z"
                        stroke="#808897"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1851_6645">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="text-[16px] font-[400] leading-[24px] tracking-wide text-[#0D0D12]">
                  {endTime ? endTime : "End Time"}
                </span>
              </div>
              <input
                ref={endTimeRef}
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="hidden"
              />
            </div>

            {/* Date Selection */}
            <DateSelection />

            {/* Toggle days */}
            <div className="flex justify-between p-2">
              <div className="flex items-center gap-2">
                <span>
                  <ToggleSwitch className="h-[16px] w-[34px]" />
                </span>
                <span className="text-[16px] font-[400] leading-[24px] tracking-wide text-[#A4ABB8]">
                  All days
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0002 3.33317C6.31826 3.33317 3.3335 6.31794 3.3335 9.99984C3.3335 12.4674 4.67416 14.6219 6.66683 15.7746M10.0002 3.33317L8.3335 1.6665M10.0002 3.33317L8.75016 5.4165M10.0002 16.6665C13.6821 16.6665 16.6668 13.6817 16.6668 9.99984C16.6668 7.53223 15.3262 5.37775 13.3335 4.22505M10.0002 16.6665L11.6668 18.3332M10.0002 16.6665L11.2502 14.5832"
                      stroke="#808897"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[16px] font-[400] leading-[24px] tracking-wide text-[#A4ABB8]">
                  Repeat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* participant */}
        <div className="m-4 rounded-[12px] border-[1px] border-[#DFE1E6] p-4">
          <div className="flex items-center gap-3 pb-2">
            <span>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.6665 10.6667H5.33317C3.03198 10.6667 1.1665 12.5321 1.1665 14.8333V15.6667C1.1665 16.1269 1.5396 16.5 1.99984 16.5H11.9998C12.4601 16.5 12.8332 16.1269 12.8332 15.6667V14.8333C12.8332 12.5321 10.9677 10.6667 8.6665 10.6667Z"
                  stroke="#808897"
                  stroke-width="1.66667"
                />
                <path
                  d="M6.99984 8.16667C8.84079 8.16667 10.3332 6.67428 10.3332 4.83333C10.3332 2.99238 8.84079 1.5 6.99984 1.5C5.15889 1.5 3.6665 2.99238 3.6665 4.83333C3.6665 6.67428 5.15889 8.16667 6.99984 8.16667Z"
                  stroke="#808897"
                  stroke-width="1.66667"
                />
              </svg>
            </span>
            <h5 className="text-[16px] font-[400] leading-[24px] tracking-wide text-[#A4ABB8]">
              Participant
            </h5>
          </div>
          <div className="flex items-center gap-3 py-2">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 10.0002V8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335H5C3.61929 5.8335 2.5 6.95278 2.5 8.3335V11.6668C2.5 13.0475 3.61929 14.1668 5 14.1668H10C11.3807 14.1668 12.5 13.0475 12.5 11.6668V10.0002ZM12.5 10.0002L16.1332 6.97251C16.676 6.5202 17.5 6.90617 17.5 7.6127V12.3876C17.5 13.0942 16.676 13.4801 16.1332 13.0278L12.5 10.0002Z"
                  stroke="#808897"
                  stroke-width="1.66667"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="text-[16px] font-[400] leading-[24px] tracking-wide text-[#A4ABB8]">
              Conferencing
            </h2>
          </div>
          <div className="flex items-center gap-3 py-2">
            <span>
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.1665 7.43313C1.1665 10.5568 2.28972 12.1999 6.3107 17.9762C6.64204 18.4522 7.35763 18.4522 7.68897 17.9762C11.71 12.1999 12.8332 10.5568 12.8332 7.43313C12.8332 4.24831 10.2215 1.6665 6.99984 1.6665C3.77818 1.6665 1.1665 4.24831 1.1665 7.43313Z"
                  stroke="#808897"
                  stroke-width="1.66667"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="text-[16px] font-[400] leading-[24px] tracking-wide text-[#A4ABB8]">
              Location
            </h2>
          </div>
          <div className="flex items-center gap-3 py-2">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0002 1.84401C9.77043 1.72855 9.51454 1.6665 9.25172 1.6665H5.8335C4.45278 1.6665 3.3335 2.78579 3.3335 4.1665V15.8332C3.3335 17.2139 4.45278 18.3332 5.8335 18.3332H14.1668C15.5475 18.3332 16.6668 17.2139 16.6668 15.8332V9.80017C16.6668 9.581 16.6236 9.36592 16.5417 9.1665M10.0002 1.84401C10.1866 1.93768 10.3557 2.06652 10.4974 2.2259L16.2458 8.6929C16.3714 8.83417 16.471 8.99452 16.5417 9.1665M10.0002 1.84401V6.6665C10.0002 8.04722 11.1195 9.1665 12.5002 9.1665H16.5417"
                  stroke="#808897"
                  stroke-width="1.66667"
                />
              </svg>
            </span>
            <h2 className="text-[16px] font-[400] leading-[24px] tracking-wide text-[#A4ABB8]">
              Docs and link
            </h2>
          </div>
        </div>

        {/* Other Inputs */}
        <div className="mx-4 mb-[50px]">
          <TextArea
            placeholder="Descriptions..."
            className="rounded-[12px] border-[1px] border-[#DFE1E6] p-4"
          />
        </div>

        {/* Buttons */}
        <div
          className="m-4 mt-auto flex justify-between border-t-[1px] border-[#DFE1E6]"
          onClick={closeModal}
        >
          <Btn
            className="mt-6 h-[48px] w-[218px] border-[1px] border-[#DFE1E6] text-[16px] leading-[24px]"
            text="Cancel"
          />
          <Btn
            className="mt-6 h-[48px] w-[218px] rounded-md bg-[#12725b] text-[16px] leading-[24px] text-white"
            text="Save"
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
