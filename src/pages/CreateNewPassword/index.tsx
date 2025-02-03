import Button from "@/components/Button";
import Cover from "@/components/Cover";
import InputConfirmPassword from "@/components/InputConfrimPassword";
import InputPassword from "@/components/InputPassword";
import Label from "@/components/Label";
import { Link } from "react-router";
const CreateNewPassword = () => {
  
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="mx-[70px] mt-[10rem] block w-[480px] justify-center">
          <div className="text-center">
            <h2 className="text-[36px] font-[600] leading-[48px] tracking-tighter text-[#142c07]">
              Create new password
            </h2>
            <h6 className="pb-[10px] text-[16px] font-[500] leading-[24px] text-[#414444]">
              Create a password with at least 6 characters that is different{" "}
              <br />
              from your previous one to secure your account. Please enter your
            </h6>
          </div>
          <form action="">
            <div className="pt-2">
              <Label text="New Password" htmlFor="password" />
              <InputPassword id="password" placeholder="Enter your password" />
            </div>
            <div className="pt-2">
              <Label text="Confirm Password" htmlFor="confirmPassword" />
              <InputConfirmPassword
                id="confirmPassword"
                placeholder="Enter your password"
              />
            </div>

            <div className="mt-[30px]">
              <Button text="Reset Password" type="reset" />
            </div>
            <p className="flex items-center justify-center gap-[3px] pt-4 text-center text-[16px]">
              <h5 className="tracking-tighter text-[#414444]">
                Don't have an account?{" "}
              </h5>
              <Link to="/signup" className="font-[500] text-[#12725b]">
                {" "}
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        <Cover />
      </div>
    </>
  );
};

export default CreateNewPassword;