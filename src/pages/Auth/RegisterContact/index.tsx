import Header from "@/components/Header";
import Label from "@/components/common/Label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "@/components/common/Button/Button";
import Line from "@/components/Line";
import { Link } from "react-router";
import { useNavigate } from 'react-router';
import { useForm, Controller } from 'react-hook-form';
import { useRegistration } from '@/context/RegistrationContext';
import BottomIcon from "@/components/common/BottomIcon";
import SelectTag from "@/components/common/SelectTag";

interface ContactFormData {
  country: string;
  phoneNumber: string;
}

const RegisterContact = () => {
  const { registrationData, updateRegistrationData } = useRegistration();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      country: registrationData.country,
      phoneNumber: registrationData.phoneNumber,
    },
  });

  const onSubmit = (data: ContactFormData) => {
    updateRegistrationData(data);
    navigate('/signup');
  };

  // Pre-register phoneNumber field to handle it manually
  register("phoneNumber");



  return (
    <>
      <Header />
      <div className="mx-4  flex justify-center bg-white">
        <div className="mb-[5rem] h-[644px] w-full rounded-xl border-[1px] border-neutral-200 md:w-[500px]">
          <span className="flex justify-center pt-[30px]">
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
                stroke="url(#paint0_linear_1773_229151)"
              />
              <g filter="url(#filter0_i_1773_229151)">
                <rect
                  x="16"
                  y="16"
                  width="56"
                  height="56"
                  rx="28"
                  fill="#23A681"
                />
                <rect
                  x="16"
                  y="16"
                  width="56"
                  height="56"
                  rx="28"
                  fill="white"
                  fill-opacity="0.1"
                />
                <path
                  d="M44.0001 48.9416C42.8021 46.9027 41.0972 45.1977 39.0582 43.9997C41.0972 42.8017 42.8021 41.0967 44.0001 39.0577C45.1982 41.0967 46.9031 42.8017 48.9421 43.9997C46.9031 45.1977 45.1982 46.9027 44.0001 48.9416Z"
                  fill="url(#paint1_linear_1773_229151)"
                  stroke="url(#paint2_linear_1773_229151)"
                  stroke-linecap="round"
                />
                <g filter="url(#filter1_d_1773_229151)">
                  <path
                    d="M62.6154 42.6002C61.9336 33.407 54.5936 26.0669 45.4004 25.3853V32.0535C45.4004 37.8783 50.1222 42.6002 55.9471 42.6002H62.6154Z"
                    fill="url(#paint3_linear_1773_229151)"
                    fill-opacity="0.8"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M45.9004 32.0535V25.9317C54.4158 26.8165 61.1841 33.5847 62.0689 42.1002H55.9471C50.3984 42.1002 45.9004 37.6022 45.9004 32.0535Z"
                    stroke="url(#paint4_linear_1773_229151)"
                    stroke-linecap="round"
                    shape-rendering="crispEdges"
                  />
                </g>
                <g filter="url(#filter2_d_1773_229151)">
                  <path
                    d="M42.6002 25.3853C33.407 26.0669 26.0669 33.407 25.3853 42.6002H32.0535C37.8783 42.6002 42.6002 37.8783 42.6002 32.0535V25.3853Z"
                    fill="url(#paint5_linear_1773_229151)"
                    fill-opacity="0.8"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M32.0535 42.1002H25.9317C26.8165 33.5847 33.5847 26.8165 42.1002 25.9317V32.0535C42.1002 37.6022 37.6022 42.1002 32.0535 42.1002Z"
                    stroke="url(#paint6_linear_1773_229151)"
                    stroke-linecap="round"
                    shape-rendering="crispEdges"
                  />
                </g>
                <path
                  d="M55.9471 45.8999H62.0689C61.1841 54.4154 54.4159 61.1836 45.9004 62.0684V55.9466C45.9004 50.398 50.3984 45.8999 55.9471 45.8999Z"
                  fill="url(#paint7_linear_1773_229151)"
                  fill-opacity="0.8"
                  stroke="url(#paint8_linear_1773_229151)"
                  stroke-linecap="round"
                />
                <path
                  d="M42.1002 55.9466V62.0684C33.5847 61.1836 26.8165 54.4154 25.9317 45.8999H32.0535C37.6022 45.8999 42.1002 50.398 42.1002 55.9466Z"
                  fill="url(#paint9_linear_1773_229151)"
                  fill-opacity="0.8"
                  stroke="url(#paint10_linear_1773_229151)"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_1773_229151"
                  x="16"
                  y="12"
                  width="56"
                  height="60"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="-4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.64 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1773_229151"
                  />
                </filter>
                <filter
                  id="filter1_d_1773_229151"
                  x="40.9559"
                  y="25.3853"
                  width="21.6593"
                  height="24.9926"
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
                  <feOffset dx="-2.22222" dy="5.55556" />
                  <feGaussianBlur stdDeviation="1.11111" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.1728 0 0 0 0 0.7872 0 0 0 0 0.273338 0 0 0 0.32 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1773_229151"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1773_229151"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_1773_229151"
                  x="25.3853"
                  y="25.3853"
                  width="21.6595"
                  height="24.9926"
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
                  <feOffset dx="2.22222" dy="5.55556" />
                  <feGaussianBlur stdDeviation="1.11111" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.1728 0 0 0 0 0.7872 0 0 0 0 0.273338 0 0 0 0.32 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1773_229151"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1773_229151"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1773_229151"
                  x1="44"
                  y1="0"
                  x2="44"
                  y2="88"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E5E6E8" />
                  <stop offset="0.7" stop-color="#E5E6E8" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1773_229151"
                  x1="44.0002"
                  y1="38.0103"
                  x2="44.0002"
                  y2="56.1745"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1773_229151"
                  x1="65.144"
                  y1="8.93611"
                  x2="29.8992"
                  y2="37.5282"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1773_229151"
                  x1="54.0079"
                  y1="25.3853"
                  x2="54.0079"
                  y2="51.4893"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1773_229151"
                  x1="84.3939"
                  y1="-16.3976"
                  x2="33.7431"
                  y2="24.6925"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_1773_229151"
                  x1="33.9928"
                  y1="25.3853"
                  x2="33.9928"
                  y2="51.4893"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_1773_229151"
                  x1="64.3788"
                  y1="-16.3976"
                  x2="13.728"
                  y2="24.6926"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_1773_229151"
                  x1="54.0079"
                  y1="45.3999"
                  x2="54.0079"
                  y2="71.5039"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_1773_229151"
                  x1="84.3939"
                  y1="3.61714"
                  x2="33.7432"
                  y2="44.7072"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint9_linear_1773_229151"
                  x1="33.9928"
                  y1="45.3999"
                  x2="33.9928"
                  y2="71.5039"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.313079" stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint10_linear_1773_229151"
                  x1="64.3788"
                  y1="3.61714"
                  x2="13.7281"
                  y2="44.7073"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="py-[30px] text-center">
            <h2 className="text-[25px] font-[600] leading-[48px] tracking-tight text-neutral-base md:text-[36px]">
              Sign up for Propa Homes
            </h2>
            <h3 className="pt-2 text-[13px] font-[500] leading-[24px] text-neutral-700 md:text-[16px]">
              Get started by providing your valid details to set up your <br />
              account and begin your real estate journey.
            </h3>
          </div>
          <div className="md:px-8 px-4">
            <Line />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-[20px]">
                <Label text="Select Country" htmlFor="Country" /> <br />
                <div className="w-full">
                  <div className="relative">
                    <span className="absolute left-3 top-[14px] flex items-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="10.0001"
                          cy="9.99984"
                          r="8.33333"
                          stroke="#888D93"
                          stroke-width="1.5"
                        />
                        <path
                          d="M6.66675 9.99984C6.66675 14.9998 10.0001 18.3332 10.0001 18.3332C10.0001 18.3332 13.3334 14.9998 13.3334 9.99984C13.3334 4.99984 10.0001 1.6665 10.0001 1.6665C10.0001 1.6665 6.66675 4.99984 6.66675 9.99984Z"
                          stroke="#888D93"
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 12.5L2.5 12.5"
                          stroke="#888D93"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5 7.5L2.5 7.5"
                          stroke="#888D93"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <select
              id="country"
              className={`w-full rounded-lg border ${
                errors.country ? 'border-red-500' : 'border-gray-300'
              } p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary`}
              {...register('country', { required: 'Country is required' })}
            >
              <option value="">Select your country</option>
              
                <option value={"Nigeria"}>Nigeria</option>
            </select>
                  </div>
                </div>
              </div>
              <div className="mt-[5px]">
                <Label text="Phone Number" htmlFor="phoneNumber" />
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    required: 'Phone number is required',
                    
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      country={"ng"}
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      containerStyle={{ height: "48px", borderRadius: "12px" }}
                      inputStyle={{
                        height: "48px",
                        width: "100%",
                        borderRadius: "12px",
                        borderColor: "#CFD2D1",
                        marginTop: "5px",
                        color: "#888D93",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#33A691")}
                      onBlur={field.onBlur}
                    />
                  )}
                />
                <span>{errors.phoneNumber?.message}</span>
                <span>{errors.country?.message}</span>
              </div>
              <Button
                text="Get Started - It&apos;s free"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="bg-brand-base mt-[30px] h-[48px] w-full rounded-xl text-white"
              />
              <p className="flex items-center justify-center gap-[3px] pb-10 pt-4 text-center text-[16px]">
                <h5 className="text-neutral-800 tracking-tighter">
                  Have an account?{" "}
                </h5>
                <Link to="/login" className="text-brand-base font-[600]">
                  {" "}
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div className="md:flex hidden">
        <BottomIcon width={"406"} height={"200"} />
      </div>
    </>
  );
};
export default RegisterContact;
