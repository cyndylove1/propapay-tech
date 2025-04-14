import { ArrowIcon, CustomOtpIcon, HomesLogo } from "@/assets/icons";
import Button from "@/components/common/Button/Button";
import Cover from "@/components/common/Cover";
import OTPInput from "@/components/common/Input/OTPInput";
import RegisterFooter from "@/components/RegisterFooter";
import { Link } from "react-router";

export default function VerifyEmail() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="hidden w-[45%] py-3 pl-3 lg:block">
          <Cover />
        </div>

        {/* R.H.S */}
        <div className="flex flex-col justify-between overflow-auto lg:w-[55%]">
          <header className="flex items-center justify-between px-[64px] pb-4 pt-8">
            <span className="h-10 w-10">
              <HomesLogo />
            </span>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium leading-5 text-neutral-700">
                Have an account?
              </p>
              <Link
                to="/login"
                className="rounded-lg border border-neutral-200 px-2 py-[6px] text-sm font-medium leading-5 text-neutral-700 shadow-[0_1px_2px_0_#5258660F]"
              >
                Sign In
              </Link>
            </div>
          </header>

          <div className="flex flex-col items-center gap-8 px-[120px]">
            <div className="border-linear-[25deg,red_5%,yellow_60%,lime_90%,teal] h-[88px] w-[88px] rounded-full border">
              <CustomOtpIcon />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="leading-12 text-center text-[36px] font-semibold text-neutral-base">
                Enter 6-digits code
              </h1>
              <p className="text-center text-base font-medium text-neutral-700">
                A confirmation code has been sent to your email address,{" "}
                <span className="text-brand-base">josiahovo@gmail.com</span> to
                verify your identity.
              </p>
            </div>
            <div className="flex w-full flex-col gap-10">
              <div className="flex items-center gap-4">
                <div className="w-full border border-neutral-200"></div>
                <div className="w-full border border-neutral-200"></div>
              </div>

              <OTPInput length={6} onComplete={() => {}} />

              <div className="flex flex-col gap-5">
                <Button
                  text="Verify Account"
                  className="w-full"
                  icon={<ArrowIcon className="h-full w-full stroke-white" />}
                  iconClassName="pt-[5px] pb-1"
                  iconPosition="right"
                />

                <p className="text-center text-base font-medium">
                  Don&apos;t receive the code?{" "}
                  <span className="cursor-pointer text-brand-base">Resend</span>
                </p>
              </div>
            </div>
          </div>

          <RegisterFooter />
        </div>
      </div>
    </>
  );
}
