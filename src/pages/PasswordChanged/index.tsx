import BottomIcon from "@/components/common/BottomIcon";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import { Link } from "react-router";

const PasswordChanged = () => {
  return (
    <>
      <div className="">
        <div className="px-4 pt-[20px]">
          <Logo className="h-[40px] w-[150px]" />
        </div>

        <div className="flex items-center justify-center pt-[50px]">
          <svg
            width="182"
            height="125"
            viewBox="0 0 182 125"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M175.113 124.5C185.847 97.6844 182.6 67.7418 168.756 44.7452L23.8348 64.7955L162.715 35.8746C104.183 -37.0584 -9.74152 11.3172 1.24023 103.4L175.113 124.5Z"
              fill="#F5F6F6"
            />
            <rect
              x="55.5"
              y="52.5"
              width="72"
              height="72"
              rx="36"
              fill="url(#paint0_linear_332_104693)"
            />
            <path
              d="M79.5 88.5L87.5 96.5L103.5 80.5"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_332_104693"
                x1="55.5"
                y1="52.5"
                x2="127.5"
                y2="52.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#12725B" />
                <stop offset="1" stop-color="#46C19A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="text-center">
          <h2 className="pt-[30px] md:text-[36px] text-[25px] font-[600] leading-[48px] tracking-tight text-[#142c07]">
            Great! your password <br />
            has been changed.
          </h2>
          <h5 className="pt-[5px] text-[16px] font-[500] leading-[24px] text-[#414444]">
            Your password has been successfully reset. Please <br /> use your
            new password to access your account.
          </h5>
        </div>
        <Link to="/login">
          <div className="flex justify-center">
            <Button
              text="Sign In"
              type="submit"
              className="mt-[30px] h-[48px] w-[250px] rounded-xl bg-[#12725b] text-white"
            />
          </div>
        </Link>
      </div>

      {/* bottomIcon */}
      <div className="md:flex hidden">
        <BottomIcon width={"406"} height={"200"} />
      </div>
      
    </>
  );
};
export default PasswordChanged;
