import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import Cover from "@/components/common/Cover";
import InputEmail from "@/components/common/InputEmail";
import InputPassword from "@/components/common/InputPassword";
import Label from "@/components/common/Label";
import RegisterHeader from "@/components/RegisterHeader";
import RegisterFooter from "@/components/RegisterFooter";
import PasswordChecker from "@/components/PasswordChecker";
import PasswordStrength from "@/components/PasswordStrength"
import InputName from "@/components/common/InputName";


const SignUp: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);

    if (password && e.target.value !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };
  useEffect(() => {
    if (password === "") {
      setIsTyping(false);
    }
  }, [password]);
  return (
    <>
      <div className="md:grid-cols-2 md:mr-4 md:ml-0 grid h-screen grid-cols-1 mx-4">
       <Cover />
        <div className="h-full bg-white">
          <RegisterHeader />
          <div className=" flex justify-center">
            <div className="pt-[50px] xl:w-[480px] w-full ">
            <div className="text-center">
              <h2 className="text-[25px] font-[600] leading-[48px] md:tracking-tight text-[#1C1D1E] md:text-[36px]">
                Register with Propa Homes
              </h2>
              <h6 className="mb-[30px] text-[16px] font-[500] leading-[24px] text-[#414444]">
                Get started by providing your valid details to set up your
                account and begin your real estate journey.
              </h6>
            </div>
            <form action="" className="">
              <div className="">
                <div className="flex flex-col gap-[15px] xl:flex-row">
                  <div className="mt-[5px]">
                    <Label text="First Name" htmlFor="firstName" />
                    <InputName type="text" placeholder="Enter your first name" />
                  </div>
                  <div className="mt-[5px]">
                    <Label text="Last Name" htmlFor="lastName" />
                    <InputName
                      type="text"
                      placeholder="Enter your last name"
                    />{" "}
                  </div>
                </div>
                <div className="my-[5px]">
                  <Label text="Email Address" htmlFor="address" className="" />
                  <InputEmail
                    type="email"
                    placeholder="Enter your email Address"
                    id="email"
                  />
                </div>
                <div className="mt-[5px]">
                  <Label text="Password" htmlFor="password" />
                  <InputPassword
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPassword(e.target.value);
                      if (!isTyping) setIsTyping(true);
                    }}
                    showVisibility={passwordVisible}
                    togglePasswordVisibility={() =>
                      setPasswordVisible(!passwordVisible)
                    }
                  />
                </div>
                <div className="my-6">
                  <Label text="Confirm Password" htmlFor="confirmPassword" />
                  <InputPassword
                    id="confirm-password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    showVisibility={confirmPasswordVisible}
                    togglePasswordVisibility={() =>
                      setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                    className={
                      error
                        ? "border-[#D84E4E] focus-within:border-[#D84E4E]"
                        : "border-[#23A681]"
                    }
                  />
                  {error && (
                    <div className="flex items-center gap-1 mt-1">
                      <span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.729492 6.99984C0.729492 3.53655 3.53704 0.729004 7.00033 0.729004C10.4636 0.729004 13.2712 3.53655 13.2712 6.99984C13.2712 10.4631 10.4636 13.2707 7.00033 13.2707C3.53704 13.2707 0.729492 10.4631 0.729492 6.99984ZM6.41699 9.33317C6.41699 9.011 6.67699 8.74984 6.99772 8.74984H7.00293C7.32366 8.74984 7.58366 9.011 7.58366 9.33317C7.58366 9.65534 7.32366 9.9165 7.00293 9.9165H6.99772C6.67699 9.9165 6.41699 9.65534 6.41699 9.33317ZM6.41699 6.99984C6.41699 7.322 6.67816 7.58317 7.00033 7.58317C7.32249 7.58317 7.58366 7.322 7.58366 6.99984V4.6665C7.58366 4.34434 7.32249 4.08317 7.00033 4.08317C6.67816 4.08317 6.41699 4.34434 6.41699 4.6665V6.99984Z"
                            fill="#D84E4E"
                          />
                        </svg>
                      </span>
                      <p className="text-[12px] font-[500] leading-[16px] text-[#D84E4E]">
                        {error}
                      </p>
                    </div>
                  )}
                  {!isTyping && (
                    <div className="flex items-center gap-[2px] pt-[5px]">
                      <span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.729004 7.00008C0.729004 3.5368 3.53655 0.729248 6.99984 0.729248C10.4631 0.729248 13.2707 3.5368 13.2707 7.00008C13.2707 10.4634 10.4631 13.2709 6.99984 13.2709C3.53655 13.2709 0.729004 10.4634 0.729004 7.00008ZM6.4165 9.33341C6.4165 9.01125 6.6765 8.75008 6.99723 8.75008H7.00245C7.32317 8.75008 7.58317 9.01125 7.58317 9.33341C7.58317 9.65558 7.32317 9.91675 7.00245 9.91675H6.99723C6.6765 9.91675 6.4165 9.65558 6.4165 9.33341ZM6.4165 7.00008C6.4165 7.32225 6.67767 7.58342 6.99984 7.58342C7.322 7.58342 7.58317 7.32225 7.58317 7.00008V4.66675C7.58317 4.34458 7.322 4.08341 6.99984 4.08341C6.67767 4.08341 6.4165 4.34458 6.4165 4.66675V7.00008Z"
                            fill="#84898C"
                          />
                        </svg>
                      </span>
                      <h6 className="text-[12px] font-[500] leading-[16px] text-[#696E71]">
                        Must contain 1 uppercase letter, 1 number, min. 8
                        characters.
                      </h6>
                    </div>
                  )}

                  {isTyping && (
                    <div>
                      <PasswordStrength password={password} />
                      <PasswordChecker password={password} />
                    </div>
                  )}
                </div>
                <Button
                  text="Create Account"
                  type="submit"
                  className="mx-0 bg-[#12725b] text-white h-[48px] rounded-xl w-full"
                />
              </div>
            </form>
            <div className="text-center pt-4 text-[12px] md:text-[14px] font-[500] leading-[20px]">
              <h6 className="text-[#434547]">
                By clicking create account, you agree to accept Propapay's{" "}
                <br />{" "}
              </h6>
              <span className="text-[#12725B]"> Terms of Service </span>
              and
              <span className="text-[#12725B]"> Privacy Policy.</span>
            </div>
          </div>
          </div>
          <div className="mt-[12rem] mx-4">
            <RegisterFooter />
          </div>
        </div>
      
      </div>
    </>
  );
};
export default SignUp;
