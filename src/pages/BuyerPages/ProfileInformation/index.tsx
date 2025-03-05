import Btn from "@/components/common/Btn";
import profile from "@/assets/images/Avatar.png";
import Label from "@/components/common/Label";
import Input from "@/components/common/Input";
const ProfileInformation = () => {
  return (
    <>
      <div className="px-[20px]">
        <div>
          <h2 className="pt-[30px] text-[24px] font-[500] leading-[31px] text-[#1A202C]">
            Personal Information
          </h2>
        </div>
        <div className="flex items-center gap-[20px] pt-[30px]">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full border-[1px] border-[#12725B]">
            <img
              src={profile}
              alt=""
              className="h-[88px] w-[88px] rounded-full"
            />
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="justify-left flex">
              <Btn
                type="button"
                text="Upload new pictures"
                className="h-[40px] w-[183px] bg-[#12725B] text-[12px] font-[700] leading-[18px] tracking-wide text-[white]"
              />
            </div>
            <div>
              <Btn
                type="button"
                text="Delete"
                className="h-[40px] w-[110px] border-[1px] border-[#E2E8F0] bg-[#fff] text-[12px] font-[800] leading-[18px] tracking-wide"
              />
            </div>
          </div>
        </div>
        <form action="">
          <div className="mt-[40px] flex gap-[24px]">
            <div>
              <Label text="Full legal first name" />
              <Input className="w-[290px]" />
            </div>
            <div>
              <Label text="Full legal last name" />
              <Input className="w-[290px]" />
            </div>
          </div>
          <div className="mt-[30px] flex gap-[24px]">
            <div>
              <Label text="Date of Birth" />
              <Input className="w-[290px]" />
            </div>
            <div>
              <Label text="Phone Number" />
              <Input className="w-[290px]" />
            </div>
          </div>
          <div className="mt-[30px]">
            <h2 className="text-[20px] font-[800] leading-[27px] text-[#1A202C]">
              Personal Address
            </h2>
            <div className="mt-[30px] flex gap-[24px]">
              <div>
                <Label text="Country" />
                <Input className="w-[290px]" />
              </div>
              <div>
                <Label text="State" />
                <Input className="w-[290px]" />
              </div>
            </div>
            <div className="mt-[30px] flex gap-[24px]">
              <div>
                <Label text="Address" />
                <Input className="w-[290px]" />
              </div>
              <div>
                <Label text="Postal code" />
                <Input className="w-[290px]" />
              </div>
            </div>
          </div>

          <div className="mt-[20px] flex justify-end">
            <Btn
              type="submit"
              className="h-[48px] w-[145px] rounded-[12px] bg-[#12725B] text-[#fff]"
              text="Edit Details"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default ProfileInformation;
