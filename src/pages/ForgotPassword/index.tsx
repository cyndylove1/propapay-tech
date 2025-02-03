import Cover from "@/assets/images/Cover.png"
import Button from "@/components/Button";
import InputEmail from "@/components/InputEmail";
import Label from "@/components/Label";
import { Link } from "react-router";
// import { PiWarningCircle } from "react-icons/pi";
const ForgotPassword = () => {
  
    return (
      <>
        <div className="md:grid-cols-2 grid">
          <div className="mt-[5rem] justify-center md:mt-[10rem] md:w-[480px] xl:ml-[75px]">
            <div className="text-center">
              <h2 className="text-[36px] font-[600] leading-[48px] tracking-tighter text-[#142c07]">
                Forgot Password
              </h2>
              <h6 className="text-[16px] font-[500] leading-[24px] text-[#414444]">
                Enter your email address, and we'll send you a 6-digit code to
                verify your identity and reset your password.
              </h6>
            </div>
            <form action="">
              <div className="pt-2">
                <Label text="Email Address" htmlFor="email" />
                <InputEmail />
              </div>
              <div className="mt-[30px]">
                <Button text="Continue" type="submit" />
              </div>

              <p className="flex items-center justify-center gap-[3px] pt-4 text-center text-[16px]">
                <h5 className="tracking-tighter text-[#414444]">
                  Remember password?{" "}
                </h5>
                <Link to="/login" className="font-[500] text-[#12725b]">
                  {" "}
                  Sign In
                </Link>
              </p>
            </form>
          </div>
          <div className="md:flex hidden w-full h-screen">
            <img
              src={Cover}
              alt="Login Cover"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </>
    );
}
export default ForgotPassword;