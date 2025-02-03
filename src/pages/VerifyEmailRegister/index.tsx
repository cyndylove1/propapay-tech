import Button from "@/components/Button";
import Cover from "@/components/Cover";
import Otp from "@/components/Otp";
import Timer from "@/components/Timer";

const VerifyEmailRegister = () => {
 
  return (
    <>
      <div className="md:grid-cols-2 grid">
        <Cover/>
        <div className="pt-[5rem] md:pt-[12rem] xl:mx-[75px] xl:w-[480px]">
          <div className="text-center">
            <h2 className="text-[36px] font-[600] leading-[48px] tracking-tighter text-[#142c07]">
              Verify your email
            </h2>
            <h6 className="pt-[5px] text-[16px] font-[500] leading-[24px] text-[#414444]">
              A confirmation code has been sent to your email address
              <span className="text-[#12725b]"> josiahovo@gmail.com</span> to
              complete your registration.
            </h6>
          </div>

          <Otp/>
          <Button text="Verify Account" type="submit" />

         <Timer/>
        </div>
      </div>
    </>
  );
};
export default VerifyEmailRegister;
