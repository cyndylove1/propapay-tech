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

const NextOfKin = () => {
  return (
    <>
      <RegisterHeader />

      <div className="flex justify-center">
        <div className="mb-[5rem] rounded-xl border-[1px] border-[#c2c2c2] px-[20px]">
          <div className="flex items-center justify-between py-[30px]">
            <h2 className="text-[36px] font-[600] leading-[48px] tracking-tighter text-[#142c07]">
              Next of Kin Information
            </h2>
            <h3>2/3</h3>
          </div>
          <Line />
          <form action="">
            <div className="flex flex-col items-center gap-[15px] pt-[20px] xl:flex-row">
              <div className="">
                <Label text="Title" htmlFor="title" /> <br />
                <div>
                  <SelectTag
                    // onChange={(e) => setTitle(e.target.value)}
                    className="h-[56px] w-[225px] border-[1px] border-[#cfd2d1]"
                  >
                    <option value="">Choose Title</option>
                    <option value="">Miss</option>
                    <option value="">Mrs</option>
                    <option value="">Mr</option>
                  </SelectTag>
                </div>
              </div>
              <div className="">
                <Label text="Surname" htmlFor="lastName" />
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  className=""
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
              <Label text="RelationShip" htmlFor="relationship" /> <br />
              <div>
                <SelectTag
                  // onChange={(e) => setTitle(e.target.value)}
                  className="h-[56px] w-full border-[1px] border-[#cfd2d1]"
                >
                  <option value="">Choose Options</option>
                  <option value="">Brother</option>
                  <option value="">Sister</option>
                </SelectTag>
              </div>
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
              <Input type="text" placeholder="Enter your Residential Address" />
            </div>
            <Button text="Continue" type="submit" className="my-[30px]" />
          </form>
        </div>
      </div>
      {/* bottomIcon */}
      <BottomIcon width={"406"} height={"200"} />
    </>
  );
};
export default NextOfKin;
