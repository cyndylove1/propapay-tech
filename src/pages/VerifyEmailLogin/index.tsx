import Button from "@/components/Button";
import Cover from "@/components/Cover";
import Otp from "@/components/Otp";
import Timer from "@/components/Timer";

const VerifyEmailLogin = () => {
  
  return (
    <>
      <div className="md:grid-cols-2 grid">
        <div className="pt-[5rem] md:pt-[12rem] xl:ml-[70px] xl:w-[480px]">
          <div className="text-center">
            <h2 className="text-[36px] font-[600] leading-[48px] tracking-tighter text-[#142c07]">
              Verify it’s you
            </h2>
            <h6 className="pt-[5px] text-[16px] font-[500] leading-[24px] text-[#414444]">
              Please enter the 6 digit code that was sent to <br />
              <span className="text-[#12725b]"> josiahovo@gmail.com</span> to
              verify your identity.
            </h6>
          </div>

         <Otp/>
          <Button text="Verify Account" type="submit" />
          <Timer/>
        </div>
        <Cover />
      </div>
    </>
  );
};
export default VerifyEmailLogin;
