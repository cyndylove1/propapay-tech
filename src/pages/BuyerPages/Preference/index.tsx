import SelectTag from "@/components/common/SelectTag";
import ToggleSwitch from "@/components/ToggleSwitch";

const Preference = () => {
  return (
    <>
      <h2 className="px-[20px] pt-[30px] text-[24px] font-[500] leading-[31px] text-[#1A202C]">
        Preference
      </h2>
      <div className="flex w-full items-center justify-between gap-[9rem] border-b-[1px] border-[#DFE1E6] px-4">
        <div className="pb-[20px] pt-[30px]">
          <h2 className="text-[16px] font-[600] leading-[24px]">Currency</h2>
          <h6 className="text-[14px] font-[400] leading-[21px] text-[#727272]">
            Change the language used in their user interface.
          </h6>
        </div>
        <div className="ml-auto">
          <SelectTag className="h-[40px] w-[143px] rounded-[10px] border-[1px] border-[#DFE1E6] font-[500]">
            <option value="">Nigeria Naira</option>
          </SelectTag>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-[9rem] border-b-[1px] border-[#DFE1E6] px-4">
        <div className="pb-[20px] pt-[30px]">
          <h2 className="text-[16px] font-[600] leading-[24px]">Language</h2>
          <h6 className="text-[14px] font-[400] leading-[21px] text-[#727272]">
            Change the language used in their user interface.
          </h6>
        </div>
        <div className="ml-auto">
          <SelectTag className="h-[40px] w-[143px] rounded-[10px] border-[1px] border-[#DFE1E6] font-[500]">
            <option value="">English</option>
          </SelectTag>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-[9rem] border-b-[1px] border-[#DFE1E6] px-4">
        <div className="pb-[20px] pt-[30px]">
          <h2 className="text-[16px] font-[600] leading-[24px]">Nationality</h2>
          <h6 className="text-[14px] font-[400] leading-[21px] text-[#727272]">
            Choose what region that you used this app.
          </h6>
        </div>
        <div className="ml-auto">
          <SelectTag className="h-[40px] w-[143px] rounded-[10px] border-[1px] border-[#DFE1E6] font-[500]">
            <option value="">United State</option>
          </SelectTag>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-[9rem] border-b-[1px] border-[#DFE1E6] px-4">
        <div className="pb-[20px] pt-[30px]">
          <h2 className="text-[16px] font-[600] leading-[24px]">
            Enable Virtual Account
          </h2>
          <h6 className="text-[14px] font-[400] leading-[21px] text-[#727272]">
            this will change how all calendars in your app look
          </h6>
        </div>
        <div className="">
          <ToggleSwitch className="h-[16px] w-[34px]" />
        </div>
      </div>
    </>
  );
};
export default Preference;
