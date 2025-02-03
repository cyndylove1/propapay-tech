import Button from "@/components/Button";
import Cover from "@/components/Cover";
import Input from "@/components/Input";
import InputConfirmPassword from "@/components/InputConfrimPassword";
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import Label from "@/components/Label";
import { Link } from "react-router";
const SignUp = () => {
 
  return (
    <>
      <div className="mb-[5rem] grid md:grid-cols-2 xl:m-4">
        <Cover />
        <div className="mx-4 mt-[5rem] justify-center md:mt-[10rem] xl:ml-[80px] xl:mt-[10rem] xl:w-[480px]">
          <div className="text-center">
            <h2 className="text-[30px] font-[600] leading-[48px] tracking-tighter text-[#142c07] md:text-[36px]">
              Continue with Propa Homes
            </h2>
            <h6 className="text-[16px] font-[500] leading-[24px] text-[#414444]">
              Get started by providing your valid details to set up your account
              and begin your real estate journey.
            </h6>
          </div>

          <form action="" className="">
            <div className="mt-[30px]">
              <div className="flex flex-col gap-[15px] pb-2 xl:flex-row">
                <div>
                  <Label text="First Name" htmlFor="firstName" />
                  <Input type="text" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label text="Last Name" htmlFor="lastName" />
                  <Input type="text" placeholder="Enter your last name" />{" "}
                </div>
              </div>
              <div className="pb-2">
                <Label text="Email Address" htmlFor="password" />
                <InputEmail />
              </div>
              <div className="pb-2">
                <Label text="Password" htmlFor="password" />
                <InputPassword
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="pb-2">
                <Label text="Confirm Password" htmlFor="confirmPassword" />
                <InputConfirmPassword
                  id="confirmPassword"
                  placeholder="Enter your Confirm password"
                />
              </div>
              <p className="mb-[20px] mt-[10px] text-[14px]">
                <h5 className="text-[#414444]">
                  By creating an account, you agree to our{" "}
                  <span className="text-[#12725b]">terms of service</span> and{" "}
                  <span className="text-[#12725b]">privacy policy.</span>
                </h5>
              </p>

              <Button text="Create Account" type="submit" className="mx-0" />

              <p className="flex items-center justify-center gap-[3px] pt-4 text-center text-[16px]">
                <h5 className="tracking-tighter text-[#414444]">
                  Have an account?{" "}
                </h5>
                <Link to="/login" className="font-[500] text-[#12725b]">
                  {" "}
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignUp;
