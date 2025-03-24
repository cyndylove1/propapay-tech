import { useState } from "react";
import { Link } from "react-router";
import Button from "@/components/common/Button/Button";
import Cover from "@/components/common/Cover";
import RegisterFooter from "@/components/RegisterFooter";
import RegisterHeader from "@/components/RegisterHeader";
import Checkbox from "@/components/common/Checkbox";
import Spinner from "@/components/common/Spinner";
import Input from "@/components/common/Input/Input";
import { MailIcon, PadlockIcon, ArrowIcon } from "@/assets/icons";

const Login: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-50">
          <Spinner />
        </div>
      )}

      <div className="mx-4 grid h-screen grid-cols-1 bg-white md:ml-4 md:mr-0 md:h-full md:grid-cols-2">
        <div className="">
          <RegisterHeader
            btnText="Sign Up"
            linkTo="/signup"
            account="Don't have an account?"
          />
          <div className="flex justify-center">
            <div className="mt-[5rem] w-full md:mt-[10rem] xl:mx-0 xl:w-[480px]">
              <div className="text-center">
                <h2 className="text-neutral-base text-[25px] font-[600] leading-[48px] tracking-tight md:text-[36px]">
                  Sign in to Propa Homes
                </h2>
                <h6 className="text-[16px] font-[500] leading-[24px] text-neutral-700">
                  Please enter your email address and password to <br /> access
                  your account.
                </h6>
              </div>
              <form onSubmit={handleLogin} className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <Input
                    leftIcon={<MailIcon />}
                    leftIconClassName="top-[2px]"
                    type="email"
                    placeholder="Enter email address"
                    label="Email Address"
                  />
                
                  <Input
                    type="password"
                    leftIcon={<PadlockIcon />}
                    showPasswordToggle={true}
                    label="Password"
                    id="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter your Password"
                  />
                
                <div className="flex items-center justify-between ">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="ml-2 cursor-pointer text-[14px] font-[600] leading-[20px] text-neutral-800">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password">
                    <h1 className="text-[14px] font-[600] leading-[20px] text-brand-base">
                      Forgot Password
                    </h1>
                  </Link>
                </div>
                </div>
                <Button
                  text="Continue"
                  type="submit"
                  className="w-full"
                  icon={<ArrowIcon className="w-full h-full stroke-white" />}
                  iconClassName="pt-[5px] pb-1"
                  iconPosition="right"
                />
              </form>
            </div>
          </div>
          <div className="mx-4 mt-[20rem]">
            <RegisterFooter />
          </div>
        </div>
        <Cover />
      </div>
    </>
  );
};

export default Login;
