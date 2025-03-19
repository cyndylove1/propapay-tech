import { useState } from "react";
import Button from "../common/Button";
import Line from "../Line";
import Input from "../common/Input";
import Label from "../common/Label";
import SelectTag from "../common/SelectTag";
import PaymentMethod, { paymentMethods} from "./data";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddMoneyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null,
  );

  if (!isOpen) return null;

 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000] opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-[480px] rounded-xl bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {selectedMethod ? (
              <button onClick={() => setSelectedMethod(null)}>
                {/* Back Arrow */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_3410_26026)">
                    <path
                      d="M2 23C2 10.8497 11.8497 1 24 1C36.1503 1 46 10.8497 46 23C46 35.1503 36.1503 45 24 45C11.8497 45 2 35.1503 2 23Z"
                      fill="white"
                    />
                    <path
                      d="M2.5 23C2.5 11.1259 12.1259 1.5 24 1.5C35.8741 1.5 45.5 11.1259 45.5 23C45.5 34.8741 35.8741 44.5 24 44.5C12.1259 44.5 2.5 34.8741 2.5 23Z"
                      stroke="#DEE1E4"
                    />
                    <path
                      d="M17.333 22.999L30.6664 22.999"
                      stroke="#1C1D1E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.4996 27.1663C21.4996 27.1663 17.333 24.0976 17.333 22.9996C17.333 21.9016 21.4997 18.833 21.4997 18.833"
                      stroke="#1C1D1E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_3410_26026"
                      x="0"
                      y="0"
                      width="48"
                      height="48"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_3410_26026"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3410_26026"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            ) : (
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_3410_23026)">
                  <path
                    d="M2 23C2 10.8497 11.8497 1 24 1C36.1503 1 46 10.8497 46 23C46 35.1503 36.1503 45 24 45C11.8497 45 2 35.1503 2 23Z"
                    fill="white"
                  />
                  <path
                    d="M2.5 23C2.5 11.1259 12.1259 1.5 24 1.5C35.8741 1.5 45.5 11.1259 45.5 23C45.5 34.8741 35.8741 44.5 24 44.5C12.1259 44.5 2.5 34.8741 2.5 23Z"
                    stroke="#DEE1E4"
                  />
                  <path
                    d="M27.335 24.25C27.335 24.9404 27.8946 25.5 28.585 25.5C29.2753 25.5 29.835 24.9404 29.835 24.25C29.835 23.5596 29.2753 23 28.585 23C27.8946 23 27.335 23.5596 27.335 24.25Z"
                    stroke="#4E5257"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.668 22.1667C15.668 19.024 15.668 17.4526 16.6443 16.4763C17.6206 15.5 19.1919 15.5 22.3346 15.5H25.668C26.4429 15.5 26.8304 15.5 27.1483 15.5852C28.0111 15.8164 28.6849 16.4902 28.9161 17.353C29.0013 17.6709 29.0013 18.0584 29.0013 18.8333M22.3346 18.8333H27.3346C29.6917 18.8333 30.8702 18.8333 31.6024 19.5656C32.3346 20.2978 32.3346 21.4763 32.3346 23.8333V25.5C32.3346 27.857 32.3346 29.0355 31.6024 29.7678C30.8702 30.5 29.6917 30.5 27.3346 30.5H24.4167"
                    stroke="#4E5257"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M22.3332 27.1663H18.9998M18.9998 27.1663H15.6665M18.9998 27.1663V30.4997M18.9998 27.1663L18.9998 23.833"
                    stroke="#4E5257"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_3410_23026"
                    x="0"
                    y="0"
                    width="48"
                    height="48"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                      result="effect1_dropShadow_3410_23026"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3410_23026"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            )}
            <div>
              <h2 className="text-[20px] font-[600] leading-[19px] text-neutral-950">
                Add funds to your wallet
              </h2>
              <h6 className="text-[14px] font-[500] leading-[20px] text-neutral-700">
                Top up your wallet for seamless transactions.
              </h6>
            </div>
          </div>

          <button onClick={onClose}>
            {/* Close Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8337 6.16699L6.16699 17.8337M6.16699 6.16699L17.8337 17.8337"
                stroke="#1C1D1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {/* line */}
        <div className="mx-2">
          <Line />
        </div>

        {selectedMethod ? (
          <div className="">
            <div className="flex items-center gap-2 rounded-[12px] border-[1px] border-brand-base p-4">
              {selectedMethod.icon}
              <div>
                <h2 className="text-[16px] font-[600] leading-[24px] text-neutral-950">
                  {selectedMethod.title}
                </h2>
                <p className="text-[14px] font-[500] leading-[20px] text-neutral-700">
                  {selectedMethod.description}
                </p>
              </div>
            </div>

            {/* select currency */}
            <div className="mt-4">
              <Label text="Currency" htmlFor="Currency" className="" />
              <div className="">
                <SelectTag className="h-[48px] w-full rounded-xl border-neutral-200 px-4 py-3 text-[14px] font-[600] leading-[20px] text-neutral-950 focus:border-brand-500">
                  <option className="">Naira</option>
                  <option>Nigeria</option>
                </SelectTag>
              </div>
            </div>

            <div className="mt-4">
              <Label text="Amount" htmlFor="Amount" className="" />
              <Input
                placeholder="Enter your amount"
                className="h-[48px] w-full"
              />
            </div>
            <div className="my-6">
              <Button
                type="button"
                text="Continue"
                className="h-[48px] w-full rounded-[8px] bg-brand-base text-[14px] font-[600] leading-[20px] text-white"
              />
            </div>
          </div>
        ) : (
          // Show payment method options when none is selected
          <div className="px-2 mt-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method)}
                className="mb-4 flex cursor-pointer items-center gap-2 rounded-lg border-[1px] border-neutral-200 p-4"
              >
                {method.icon}
                <div>
                  <h2 className="text-[16px] font-[600] leading-[24px] text-neutral-950">
                    {method.title}
                  </h2>
                  <p className="text-[14px] font-[500] leading-[20px] text-neutral-700">
                    {method.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="my-6">
              <Button
                type="button"
                text="Continue"
                className="h-[48px] w-full rounded-[8px] bg-brand-base text-[14px] font-[600] leading-[20px] text-white"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddMoneyModal;
