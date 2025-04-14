import { Link } from "react-router";
import { useForm } from "react-hook-form";
import Button from "@/components/common/Button/Button";
import Cover from "@/components/common/Cover";
import RegisterFooter from "@/components/RegisterFooter";
import Spinner from "@/components/common/Spinner";
import Input from "@/components/common/Input/Input";
import {
  MailIcon,
  PadlockIcon,
  ArrowIcon,
  HomesLogo,
  ProfileIcon,
} from "@/assets/icons";
import PasswordChecker from "@/components/PasswordChecker";
import PasswordStrength from "@/components/PasswordStrength";
import { RegisterData } from "@/context/AuthContext";
import { useAuth } from "@/hooks/useAuth";
import { useRegistration } from "@/context/RegistrationContext";

export default function Signup() {
  const { registrationData, updateRegistrationData, resetRegistrationData } = useRegistration();
  const { registerUser, isLoading } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterData>({
    defaultValues: {
      firstName: registrationData.firstName,
      lastName: registrationData.lastName,
      email: registrationData.email,
      password: registrationData.password,
      confirmPassword: registrationData.confirmPassword,
    }
  });

  const password = watch("password");



  const onSubmit = async (data: RegisterData) => {
    // Update registration data with form values
    updateRegistrationData(data);
    
    // Combine all registration data
    const completeRegistrationData = {
      ...data,
      userType: registrationData.userType,
      country: registrationData.country,
      phoneNumber: registrationData.phoneNumber
    };

    console.log("registration Data", completeRegistrationData)
    
    try {
      await registerUser(completeRegistrationData);
      // Reset registration data on successful registration
      resetRegistrationData();
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-50">
          <Spinner />
        </div>
      )}

      <div className="flex h-screen flex-col overflow-hidden lg:flex-row">
        {/* L.H.S */}
        <div className="hidden w-[45%] py-3 pl-3 lg:block">
          <Cover />
        </div>

        {/* R.H.S */}
        <div className="flex flex-col justify-between overflow-auto lg:w-[55%]">
          <header className="flex items-center justify-between px-[64px] pb-4 pt-8">
  
              <span className="h-10 w-10 ">
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

          <div className="flex flex-col gap-8 px-5 md:px-12 lg:px-[120px]">
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-[36px] font-semibold leading-[48px] text-neutral-base">
                Register with Propa Homes
              </h1>
              <p className="text-center text-base font-medium leading-6 text-neutral-700">
                Get started by providing your valid details to set up your
                account and begin your real estate journey.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Input
                    label="First Name"
                    placeholder="Josiah"
                    leftIcon={<ProfileIcon className="h-5 w-5" />}
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    error={!!errors.firstName}
                    errorMessage={errors.firstName?.message}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Ovo"
                    leftIcon={<ProfileIcon className="h-5 w-5" />}
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    error={!!errors.lastName}
                    errorMessage={errors.lastName?.message}
                  />
                </div>
                <Input
                  leftIcon={<MailIcon />}
                  leftIconClassName="top-[2px]"
                  type="email"
                  placeholder="Enter email address"
                  label="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  error={!!errors.email}
                  errorMessage={errors.email?.message}
                />

                <Input
                  type="password"
                  leftIcon={<PadlockIcon />}
                  showPasswordToggle={true}
                  label="Password"
                  id="password"
                  placeholder="Enter your Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                      message:
                        "Password must contain at least one uppercase letter and one number",
                    },
                  })}
                  error={!!errors.password}
                  errorMessage={errors.password?.message}
                />

                <div className="flex flex-col gap-2">
                  <Input
                    type="password"
                    leftIcon={<PadlockIcon />}
                    showPasswordToggle={true}
                    label="Confirm Password"
                    id="confirmPassword"
                    placeholder="Enter your Password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) => {
                        if (value !== password) {
                          return "Passwords do not match";
                        }
                      },
                    })}
                    error={!!errors.confirmPassword}
                    errorMessage={errors.confirmPassword?.message}
                  />

                    <PasswordStrength password={password} />
                    <PasswordChecker password={password} />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <Button
                  text="Create Account"
                  type="submit"
                  className="w-full"
                  icon={<ArrowIcon className="h-full w-full stroke-white" />}
                  iconClassName="pt-[5px] pb-1"
                  iconPosition="right"
                />

                <p className="text-center text-sm font-medium leading-5 text-neutral-700">
                  By clicking create account, you agree to accept Propapay's{" "}
                  <br />
                  <span className="text-brand-base">
                    Terms of Service
                  </span> and{" "}
                  <span className="text-brand-base">Privacy Policy.</span>
                </p>
              </div>
            </form>
          </div>
          <RegisterFooter />
        </div>
      </div>
    </>
  );
}
