import RegisterHeader from "@/components/Header";
import Label from "@/components/common/Label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "@/components/common/Button";
import Input from "@/components/common/InputName";
import Line from "@/components/Line";
import InputEmail from "@/components/common/InputEmail";
import SelectTag from "@/components/common/SelectTag";
import BottomIcon from "@/components/common/BottomIcon";

const PersonalInformation = () => {
  return (
    <>
      <RegisterHeader />

      <div className="flex justify-center">
        <div className="mb-[5rem] rounded-xl border-[1px] border-[#c2c2c2] px-[20px]">
          <div className="flex items-center justify-between">
            <h2 className="py-[30px] text-[36px] font-[600] leading-[48px] tracking-tighter text-[#142c07]">
              Personal Information
            </h2>
            <h3>1/3</h3>
          </div>
          <Line />
          <form action="">
            <div className="flex flex-col items-center gap-[15px] pt-[20px] xl:flex-row">
              <div className="">
                <Label text="Title" htmlFor="title" />
                <br />
                <div>
                  <SelectTag
                    // onChange={(e) => setTitle(e.target.value)}
                    className="h-[56px] w-[225px] border-[1px] border-[#cfd2d1]"
                  >
                    <option value="">Choose title</option>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                  </SelectTag>
                </div>
              </div>

              <div className="">
                <Label text="Surname" htmlFor="lastName" className="" />
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full py-2"
                />
              </div>
            </div>
            <div className="mt-[5px]">
              <Label text="First Name" htmlFor="firstName" />
              <Input type="text" placeholder="Enter your first name" />
            </div>
            <div className="mt-[5px]">
              <Label text="Other Names" htmlFor="otherNames" />
              <Input type="text" placeholder="Enter your other names" />
            </div>
            <div className="mt-[5px]">
              <Label text="Email Address" htmlFor="email" />
              <InputEmail type="email" placeholder="Enter your email address" />
            </div>
            <div className="mt-[5px]">
              <Label text="Phone Number" htmlFor="phoneNumber" />
              <PhoneInput
                country={"ng"}
                containerStyle={{ height: "56px" }}
                inputStyle={{
                  height: "56px",
                  width: "100%",
                  borderRadius: "12px",
                  borderColor: "cfd2d1",
                  marginTop: "5px",
                }}
              />
            </div>
            <div className="mt-[5px]">
              <Label text="Residential Address" htmlFor="residentialAddress" />
              <Input type="text" placeholder="Enter your Address" />
            </div>
            <div className="mt-[5px]">
              <Label text="Nationality" htmlFor="nationality" /> <br />
              <div>
                <SelectTag
                  // onChange={(e) => setTitle(e.target.value)}
                  className="h-[56px] w-full border-[1px] border-[#cfd2d1]"
                >
                  <option value="">Choose Country</option>
                  <option value="Nigeria">Nigeria</option>
                </SelectTag>
              </div>
            </div>
            <div className="mt-[5px]">
              <Label text="Date Of Birth" htmlFor="dateofbirth" /> <br />
              <Input type="Date" placeholder="Enter your Place Of Work" />
            </div>
            <div className="mt-[5px]">
              <Label text="Occupation" htmlFor="occupation" />
              <Input type="text" placeholder="Enter your Occupation" />
            </div>
            <div className="mt-[5px]">
              <Label text="Place Of Work" htmlFor="place Of work" />
              <Input type="text" placeholder="Enter your Place Of Work" />
            </div>
            <div className="mt-[5px]">
              <Label text="Office Address" htmlFor="officeAddress" />
              <Input type="text" placeholder="Enter your Office Address" />
            </div>
            <div className="mt-[5px]">
              <Label
                text="Means Of Identification"
                htmlFor="means of identification"
              />{" "}
              <br />
              <div>
                <SelectTag
                  // onChange={(e) => setTitle(e.target.value)}
                  className="h-[56px] w-full border-[1px] border-[#cfd2d1]"
                >
                  <option value="">Choose Identification</option>
                  <option value="nin">NIN</option>
                  <option value="voter card">Voter's Card</option>
                  <option value="driver's licence">Driver's License</option>
                </SelectTag>
              </div>
            </div>
            <div className="mt-[5px]">
              <Label text="PassPort Number" htmlFor="passport" />
              <Input type="text" placeholder="Enter your Passport Number" />
            </div>
            <div className="mt-[5px]">
              <Label text="Upload Document" htmlFor="uploadDocument" />
              <div className="flex h-[88px] items-center gap-[10px] rounded-[12px] bg-[#E6E7E7] px-[30px]">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17V11L7 13"
                      stroke="#414444"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 11L11 13"
                      stroke="#414444"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                      stroke="#414444"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                      stroke="#414444"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[14px] font-[600] leading-[16px] text-[#414444]">
                    Click here to upload files
                  </h3>
                  <h4 className="text-[12px] font-[400] leading-[14px] text-[#414444]">
                    JPG or PNG files not more than 2MB
                  </h4>
                </div>
              </div>
            </div>
            <div className="mt-[5px]">
              <Label text="How did you hear about us?" htmlFor="" /> <br />
              <div>
                <SelectTag
                  // onChange={(e) => setTitle(e.target.value)}
                  className="h-[56px] w-full border-[1px] border-[#cfd2d1]"
                >
                  <option value="">Choose Options</option>
                  <option value="">FaceBook</option>
                  <option value="">WhatsApp</option>
                  <option value="">Twitter</option>
                </SelectTag>
              </div>
            </div>
            <div className="mt-[5px]">
              <Label text="Market ID" htmlFor="occupation" />
              <Input type="text" placeholder="Enter your Market ID" />
            </div>
            <Button text="Continue" type="submit" className="mt-[30px]" />
          </form>
          <h1 className="my-[30px] text-center text-[16px] font-[500] leading-[24px] text-[#414444]">
            I’ll do this later
          </h1>
        </div>
      </div>

      {/* bottomIcon */}
      <BottomIcon width={"406"} height={"200"} />
    </>
  );
};
export default PersonalInformation;
