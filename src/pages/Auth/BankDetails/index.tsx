import RegisterHeader from "@/components/Header";
import Label from "@/components/common/Label";
import "react-phone-input-2/lib/style.css";
import Button from "@/components/common/Button";
import Input from "@/components/common/InputName";
import Line from "@/components/Line";
import SelectTag from "@/components/common/SelectTag";
import BottomIcon from "@/components/common/BottomIcon";

const BankDetails = () => {
  return (
    <>
      <RegisterHeader />

      <div className="mt-[50px] flex justify-center">
        <div className="mb-[5rem] rounded-xl border-[1px] border-[#c2c2c2] px-[20px]">
          <div className="flex items-center justify-between">
            <h2 className="py-[20px] text-[36px] font-[600] leading-[48px] tracking-tighter text-[#142c07]">
              Bank Details
            </h2>
            <h3>3/3</h3>
          </div>
          <Line />
          <form action="">
            <div className="mt-[5px] pt-[20px]">
              <Label text="Account Number" htmlFor="accountNumber" />
              <Input type="text" placeholder="Enter your Account Number" />
            </div>
            <div className="mt-[5px]">
              <Label text="Bank Name" htmlFor="bankName" /> <br />
              <div>
                <SelectTag
                  // onChange={(e) => setTitle(e.target.value)}
                  className="h-[56px] w-full border-[1px] border-[#cfd2d1]"
                >
                  <option value="">Choose Bank</option>
                  <option value="">Access bank</option>
                  <option value="">First bank</option>
                </SelectTag>
              </div>
            </div>
            <div className="mt-[5px]">
              <Label text="BVN" htmlFor="bvn" />
              <Input type="text" placeholder="Enter your Bvn" />
            </div>
            <div className="mt-[5px]">
              <Label text="NIN" htmlFor="NIN" />
              <Input type="text" placeholder="Enter your NIN" />
            </div>
            <Button text="Continue" type="submit" className="mt-[30px]" />
          </form>
          <h1 className="mb-[30px] mt-[10px] text-center text-[16px] font-[500] leading-[24px] text-[#414444]">
            I’ll do this later
          </h1>
        </div>
      </div>
      {/* bottomIcon */}
      <BottomIcon width={"406"} height={"200"} />
    </>
  );
};
export default BankDetails;
