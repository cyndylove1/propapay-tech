import { useState } from "react";
import { Link } from "react-router";
import Button from "@/components/common/Button/Button";
import Cover from "@/components/common/Cover";
import RegisterFooter from "@/components/RegisterFooter";
import Checkbox from "@/components/common/Input/Checkbox";
import Spinner from "@/components/common/Spinner";
import Input from "@/components/common/Input/Input";
import { MailIcon, PadlockIcon, ArrowIcon, HomesLogo } from "@/assets/icons";

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

      <div className="flex h-screen flex-col lg:flex-row">
        {/* L.H.S */}
        <div className="flex flex-col justify-between lg:w-[55%]">
          <header className="flex items-center justify-between px-[64px] pb-4 pt-8">
            <span className="h-10 w-10"><HomesLogo /></span>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium leading-5 text-neutral-700">
                Don't have an account?
              </p>
              <Link
                to="/signup"
                className="rounded-lg border border-neutral-200 px-2 py-[6px] text-sm font-medium leading-5 text-neutral-700 shadow-[0_1px_2px_0_#5258660F]"
              >
                Sign Up
              </Link>
            </div>
          </header>

          <div className="flex flex-col gap-8 px-[120px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-[36px] font-semibold leading-[48px] text-neutral-base">
                Sign in to Propa Homes
              </h1>
              <p className="text-center text-base font-medium leading-6 text-neutral-700">
                Please enter your email address and password to access your
                account.
              </p>
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

                <div className="flex items-center justify-between">
                  <Checkbox
                    label="Remember me"
                    labelClassName="font-medium text-sm leading-5 text-neutral-800"
                  />

                  <Link to="/forgot-password">
                    <h1 className="text-sm font-semibold leading-5 text-brand-base">
                      Forgot Password
                    </h1>
                  </Link>
                </div>
              </div>
              <Button
                text="Continue"
                type="submit"
                className="w-full"
                icon={<ArrowIcon className="h-full w-full stroke-white" />}
                iconClassName="pt-[5px] pb-1"
                iconPosition="right"
              />
            </form>
          </div>
          <RegisterFooter />
        </div>
        {/* R.H.S */}
        <div className="w-[45%] hidden lg:block py-3 pr-3">
            <Cover />
        </div>
      </div>

      
    </>
  );
};

export default Login;
