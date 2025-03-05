import { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import Cover from "@/components/common/Cover";
import Label from "@/components/common/Label";
import RegisterFooter from "@/components/RegisterFooter";
import RegisterHeader from "@/components/RegisterHeader";
import InputPassword from "@/components/common/InputPassword";
import PasswordChecker from "@/components/PasswordChecker";
import PasswordStrength from "@/components/PasswordStrength";
import Line from "@/components/Line";


const CreateNewPassword = () => {
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
      <div className="md:mr-0 md:ml-4 md:grid-cols-2 grid h-screen grid-cols-1 mx-4 bg-white">
        <div className="">
          <RegisterHeader
            btnText="Sign Up"
            linkTo="/signup"
            account="Don't have an account?"
          />
          <span className="flex justify-center pb-[20px] pt-[7rem]">
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="87"
                height="87"
                rx="43.5"
                fill="url(#paint0_linear_1822_181369)"
              />
              <rect
                x="0.5"
                y="0.5"
                width="87"
                height="87"
                rx="43.5"
                stroke="url(#paint1_linear_1822_181369)"
              />
              <g filter="url(#filter0_d_1822_181369)">
                <rect
                  x="16"
                  y="16"
                  width="56"
                  height="56"
                  rx="28"
                  fill="white"
                />
                <rect
                  x="16.5"
                  y="16.5"
                  width="55"
                  height="55"
                  rx="27.5"
                  stroke="#E2E4E9"
                />
                <path
                  opacity="0.4"
                  d="M38.7797 39.7416C40.4462 39.665 42.1385 39.6251 44.0003 39.6251C45.8621 39.6251 47.5544 39.665 49.2209 39.7416C51.622 39.852 53.5716 41.7113 53.8884 44.0644C54.0612 45.3482 54.2087 46.6972 54.2087 48.0834C54.2087 49.4696 54.0612 50.8186 53.8884 52.1024C53.5716 54.4555 51.622 56.3148 49.2209 56.4252C47.5544 56.5018 45.8621 56.5417 44.0003 56.5417C42.1385 56.5417 40.4462 56.5018 38.7797 56.4252C36.3787 56.3148 34.4291 54.4555 34.1123 52.1024C33.9394 50.8186 33.792 49.4696 33.792 48.0834C33.792 46.6972 33.9394 45.3482 34.1123 44.0644C34.4291 41.7113 36.3787 39.852 38.7797 39.7416Z"
                  fill="#696E71"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.917 48.0834C39.917 47.439 40.4393 46.9167 41.0837 46.9167H41.0941C41.7385 46.9167 42.2608 47.439 42.2608 48.0834C42.2608 48.7277 41.7385 49.25 41.0941 49.25H41.0837C40.4393 49.25 39.917 48.7277 39.917 48.0834ZM45.7399 48.0834C45.7399 47.439 46.2622 46.9167 46.9065 46.9167H46.917C47.5613 46.9167 48.0837 47.439 48.0837 48.0834C48.0837 48.7277 47.5613 49.25 46.917 49.25H46.9065C46.2622 49.25 45.7399 48.7277 45.7399 48.0834Z"
                  fill="#696E71"
                />
                <path
                  d="M39.9173 37.875C39.9173 35.6199 41.7455 33.7917 44.0007 33.7917C46.2558 33.7917 48.084 35.6199 48.084 37.875V39.6952C48.4655 39.7088 48.844 39.7242 49.2212 39.7416C49.6354 39.7606 50.0361 39.8317 50.4173 39.9483V37.875C50.4173 34.3312 47.5445 31.4584 44.0007 31.4584C40.4568 31.4584 37.584 34.3312 37.584 37.875V39.9483C37.9652 39.8317 38.3659 39.7606 38.7801 39.7416C39.1573 39.7242 39.5358 39.7088 39.9173 39.6952V37.875Z"
                  fill="#696E71"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1822_181369"
                  x="12"
                  y="14"
                  width="64"
                  height="64"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1822_181369"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1822_181369"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1822_181369"
                  x1="44"
                  y1="0"
                  x2="44"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4E5E7" stop-opacity="0.48" />
                  <stop offset="1" stop-color="#F7F8F8" stop-opacity="0" />
                  <stop offset="1" stop-color="#E4E5E7" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1822_181369"
                  x1="44"
                  y1="0"
                  x2="44"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E4E5E7" />
                  <stop
                    offset="0.765625"
                    stop-color="#E4E5E7"
                    stop-opacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="flex justify-center">
            <div className="w-full xl:w-[480px]">
              <div className="text-center">
                <h2 className="md:text-[36px] text-[25px] font-[600] leading-[48px] tracking-tight text-[#1C1D1E]">
                  Create new password
                </h2>
                <h6 className="text-[13px] font-[500] leading-[24px] text-[#414444] md:text-[16px]">
                  Create a password with at least 6 characters that is different{" "}
                  from your previous one to secure your account. Please enter
                  your
                </h6>
              </div>
              <Line />
              <form action="">
                <div className="pt-2">
                  <Label text="New Password" htmlFor="password" />
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
                <div className="pt-2">
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

                <div className="mt-[30px]">
                  <Button
                    text="Change Password"
                    type="reset"
                    className="mx-0 my-[10px] h-[48px] w-full rounded-xl bg-[#12725b] text-white"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="px-4 pt-[18rem]">
            <RegisterFooter />
          </div>
        </div>
        <Cover />
      </div>
    </>
  );
};

export default CreateNewPassword;
