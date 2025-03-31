import {
  ArrowIcon,
  ArrowIcon2,
  NigeriaIcon,
  PlusIcon,
  HorizontalMoreIcon,
  LineChart,
  Pattern,
  WalletLine,
} from "@/assets/icons";
import Button from "@/components/common/Button/Button";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function WalletCard() {
  const [showBalance, setShowBalance] = useState(false);
  const toggleBalanceVisibility = () => setShowBalance((prev) => !prev);

  return (
    <div className="wallet-card flex w-2/3 flex-col gap-6 rounded-2xl p-6">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h4 className="text-base font-semibold leading-6 text-white">
              Available Balance
            </h4>
            <button
              onClick={toggleBalanceVisibility}
              className="flex h-5 w-5 items-center justify-center"
            >
              {showBalance ? (
                <LuEyeOff className="h-full w-full text-white" />
              ) : (
                <LuEye className="h-full w-full text-white" />
              )}
            </button>
          </div>
          {/* Extract dropdown to a component later */}
          <div className="flex w-[92px] items-center gap-[6px] rounded-full border border-brand-200 bg-brand-50 py-[6px] pl-[10px] pr-[6px]">
            <span>
              <NigeriaIcon />
            </span>
            <div className="flex items-center gap-[2px]">
              <span className="text-sm font-semibold leading-5 text-neutral-700">
                NGN
              </span>
              <span className="h-5 w-5 px-[5px] py-[2px]">
                <ArrowIcon className="h-full w-full rotate-90 stroke-neutral-600" />
              </span>
            </div>
          </div>
        </div>
        <h1 className="flex items-center gap-[2px] font-semibold text-white">
          {showBalance ? (
            <>
              <span className="text-[24px] leading-8">₦</span>
              <span className="text-[36px] font-semibold leading-9">
                891,735.42
              </span>
            </>
          ) : (
            <span className="text-[36px] font-semibold leading-9">
              * * * * * * *
            </span>
          )}
        </h1>
      </div>
      {/* Buttons */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button
            text="Add Money"
            className="h-auto w-[144px] rounded-full bg-white px-3 py-[10px] text-sm font-semibold leading-5 text-brand-base shadow-[0_1px_2px_0_#375DFB14]"
            iconPosition="left"
            icon={<PlusIcon />}
            iconClassName="p-[3.33px]"
          />

          <Button
            text="Receive"
            className="h-auto w-[144px] rounded-full bg-white px-3 py-[10px] text-sm font-semibold leading-5 text-brand-base shadow-[0_1px_2px_0_#375DFB14]"
            iconPosition="left"
            icon={<ArrowIcon2 />}
            iconClassName="p-[3.33px]"
          />

          <Button
            className="h-10 w-10 rounded-full bg-white p-[10px] shadow-[0_1px_2px_0_#375DFB14]"
            iconPosition="left"
            icon={<HorizontalMoreIcon />}
            iconClassName="px-[2.5px]"
          />
        </div>
        <div>
        <LineChart />
        </div>
      </div>

      <span className="absolute right-[60px] top-4 bottom-4">
        <Pattern />
      </span>
      <span className="absolute right-0 top-4 bottom-4">
        <WalletLine />
      </span>
    </div>
  );
}
