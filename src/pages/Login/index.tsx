import Cover from "@/assets/images/Cover.png";
import Button from "@/components/Button";
import InputEmail from "@/components/InputEmail";
import InputPassword from "@/components/InputPassword";
import Label from "@/components/Label";
import { Link } from "react-router";
const Login = () => {
  

  return (
    <>
      <div className="xl:m-4 grid grid-cols-2">
        <div className="ml-[55px] mt-[5rem] items-center justify-center md:mt-[10rem] xl:w-[480px]">
          <div className="text-center">
            <h2 className="text-[36px] font-[600] leading-[48px] tracking-tighter text-[#142c07]">
              Sign in to Propa Homes
            </h2>
            <h6 className="text-[16px] font-[500] leading-[24px] text-[#414444]">
              Please enter your email address and password to <br /> access your
              account.
            </h6>
          </div>
          <form action="">
            <div className="pt-2">
              <Label text="Email Address" htmlFor="email" />
              <InputEmail />
            </div>
            <div className="pt-2">
              <Label text="Password" htmlFor="email" />
              <InputPassword id="password" placeholder="Enter your password" />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="rounded-checkbox"
                  type="checkbox"
                  className="focus:ring-green-500 w-4 h-4 text-green-600 border-gray-300 rounded-full"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="hover:underline text-sm text-green-600">
                Forgot Password?
              </a>
            </div>

            <Button text="Continue" type="submit"/>
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
        <div className="md:flex hidden w-full h-screen">
          <img
            src={Cover}
            alt="Login Cover"
            className="h-full w-full rounded-xl object-cover xl:h-[976px] xl:w-[696px]"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
