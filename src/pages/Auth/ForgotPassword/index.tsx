import Button from "@/components/common/Button/Button";
import Cover from "@/components/common/Cover";
import Spinner from "@/components/common/Loaders/Spinner";
import Line from "@/components/Line";
import RegisterFooter from "@/components/RegisterFooter";
import { Link } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { HomesLogo, MailIcon } from "@/assets/icons";
import { useForm } from "react-hook-form";
import Input from "@/components/common/Input/Input";

interface ForgotPasswordData {
  email: string;
}

const ForgotPassword = () => {
  const { isLoading, forgotPassword } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>();

  const onSubmit = async (data: ForgotPasswordData) => {
    await forgotPassword(data.email);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-50">
          <Spinner />
        </div>
      )}

      <div className="flex h-screen overflow-hidden flex-col lg:flex-row">
        {/* L.H.S */}
        <div className="flex flex-col justify-between lg:w-[55%]">
          <header className="flex items-center justify-between px-[64px] pb-4 pt-8">
            <span className="h-10 w-10">
              <HomesLogo />
            </span>
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium leading-5 text-neutral-700">
                Don't have an account?
              </p>
              <Link
                to="/user-type"
                className="rounded-lg border border-neutral-200 px-2 py-[6px] text-sm font-medium leading-5 text-neutral-700 shadow-[0_1px_2px_0_#5258660F]"
              >
                Sign Up
              </Link>
            </div>
          </header>

          <div className="flex flex-col gap-5 px-[120px]">
          <span className="flex justify-center">
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
                fill="url(#paint0_linear_1822_180287)"
              />
              <rect
                x="0.5"
                y="0.5"
                width="87"
                height="87"
                rx="43.5"
                stroke="url(#paint1_linear_1822_180287)"
              />
              <g filter="url(#filter0_d_1822_180287)">
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
                  d="M38.7794 39.7415C40.4459 39.6649 42.1382 39.625 44 39.625C45.8618 39.625 47.554 39.6649 49.2205 39.7415C51.6216 39.8519 53.5712 41.7112 53.888 44.0644C54.0609 45.3482 54.2083 46.6971 54.2083 48.0833C54.2083 49.4695 54.0609 50.8185 53.888 52.1023C53.5712 54.4555 51.6216 56.3148 49.2205 56.4251C47.554 56.5017 45.8618 56.5417 44 56.5417C42.1382 56.5417 40.4459 56.5017 38.7794 56.4251C36.3783 56.3148 34.4287 54.4555 34.1119 52.1023C33.939 50.8185 33.7916 49.4695 33.7916 48.0833C33.7916 46.6971 33.939 45.3482 34.1119 44.0644C34.4287 41.7112 36.3783 39.8519 38.7794 39.7415Z"
                  fill="#696E71"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M39.9166 48.0833C39.9166 47.439 40.439 46.9166 41.0833 46.9166H41.0938C41.7381 46.9166 42.2604 47.439 42.2604 48.0833C42.2604 48.7276 41.7381 49.25 41.0938 49.25H41.0833C40.439 49.25 39.9166 48.7276 39.9166 48.0833ZM45.7395 48.0833C45.7395 47.439 46.2618 46.9166 46.9062 46.9166H46.9166C47.561 46.9166 48.0833 47.439 48.0833 48.0833C48.0833 48.7276 47.561 49.25 46.9166 49.25H46.9062C46.2618 49.25 45.7395 48.7276 45.7395 48.0833Z"
                  fill="#696E71"
                />
                <path
                  d="M39.9166 37.875C39.9166 35.6198 41.7448 33.7916 43.9999 33.7916C46.2551 33.7916 48.0833 35.6198 48.0833 37.875V39.6952C48.4648 39.7087 48.8433 39.7242 49.2205 39.7415C49.6346 39.7606 50.0354 39.8316 50.4166 39.9483V37.875C50.4166 34.3312 47.5437 31.4583 43.9999 31.4583C40.4561 31.4583 37.5833 34.3312 37.5833 37.875V39.9483C37.9645 39.8316 38.3652 39.7606 38.7793 39.7415C39.1565 39.7242 39.5351 39.7087 39.9166 39.6952V37.875Z"
                  fill="#696E71"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1822_180287"
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
                    result="effect1_dropShadow_1822_180287"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1822_180287"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1822_180287"
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
                  id="paint1_linear_1822_180287"
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
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-[36px] font-semibold leading-[48px] text-neutral-base">
              Forgot Password
              </h1>
              <p className="text-center text-base font-medium leading-6 text-neutral-700">
              Enter your email address, and we'll send you a 6-digit code to
              verify your identity and reset your password.
              </p>
            </div>
            <Line />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                <Input
                  leftIcon={<MailIcon />}
                  leftIconClassName="top-[2px]"
                  type="email"
                  placeholder="Enter email address"
                  label="Email Address"
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                  errorMessage={errors.email?.message}
                />
              </div>
              <Button
                text="Continue"
                type="submit"
                className="w-full"
                iconClassName="pt-[5px] pb-1"
              />
              <p className="flex items-center justify-center gap-[3px] text-center text-[16px]">
                  <h5 className="font-[500] tracking-tighter text-neutral-700">
                    Remember password?{" "}
                  </h5>
                  <Link to="/login" className="font-[600] text-brand-base">
                    {" "}
                    Sign In
                  </Link>
                </p>
            </form>
          </div>
          <RegisterFooter />
        </div>
        {/* R.H.S */}
        <div className="hidden w-[45%] py-3 pr-3 lg:block">
          <Cover />
        </div>
      </div>

    </>
  );
};
export default ForgotPassword;
