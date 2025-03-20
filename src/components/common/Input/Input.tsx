import { InputErrorIcon } from "@/assets/icons";
import { InputHTMLAttributes, ReactNode, forwardRef, useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  showPasswordToggle?: boolean;
  leftIconClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      leftIcon,
      rightIcon,
      className,
      error,
      errorMessage,
      type = "text",
      showPasswordToggle = false,
      label,
      leftIconClassName,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    // Determine the effective input type
    const inputType = showPassword ? "text" : type;

    // Only show password toggle if explicitly enabled and type is password
    const shouldShowPasswordToggle = showPasswordToggle && type === "password";

    const togglePasswordVisibility = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    };

    return (
      <div className="w-full">
        {label && (
          <label className="text-neutral-base mb-1 block text-sm font-semibold">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div
              className={`pointer-events-none absolute inset-y-0 left-3 flex items-center ${leftIconClassName}`}
            >
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            className={`h-12 w-full rounded-lg border bg-white px-4 py-3 ${leftIcon ? "pl-9" : "pl-4"} ${rightIcon || shouldShowPasswordToggle ? "pr-8" : "pr-4"} ${error ? "border-negative-500 focus:border-negative-500 focus:shadow-[0_1px_2px_0_#E4E5E73D]" : "border-neutral-200 focus-within:border-brand-500"} text-sm font-medium leading-5 placeholder:text-neutral-500 focus-within:border-brand-500 focus:outline-0 focus:shadow-[0_0_0_4px_#EEFBF6] ${className || ""} `}
            {...props}
          />

          <div className="absolute inset-y-0 right-3 flex items-center">
            {shouldShowPasswordToggle && (
              <button
                type="button"
                className="text-gray-500 hover:text-gray-700 p-1 focus:outline-none"
                onClick={togglePasswordVisibility}
                tabIndex={-1}
              >
                {showPassword ? (
                  <FiEyeOff className="h-5 w-5" />
                ) : (
                  <FiEye className="h-5 w-5" />
                )}
              </button>
            )}
            {rightIcon && !shouldShowPasswordToggle && (
              <div className="pointer-events-none">{rightIcon}</div>
            )}
          </div>
        </div>
        {error && errorMessage && (
          <div className="flex items-center gap-1">
            <span>
              <InputErrorIcon />
            </span>
            <p className="text-negative-500 mt-1 text-xs leading-4 font-medium">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
