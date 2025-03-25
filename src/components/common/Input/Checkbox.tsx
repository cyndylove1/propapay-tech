import { Checkmark } from "@/assets/icons";
import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  className?: string;
  labelClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, labelClassName, ...props }, ref) => {
    return (
      <label className={`inline-flex cursor-pointer items-center`}>
        <input ref={ref} type="checkbox" className="peer hidden" {...props} />
        <span
          className={twMerge(
            "relative flex h-5 w-5 items-center justify-center rounded-[4px] border border-[#E0E0E0] transition-all duration-200 ease-in-out peer-checked:border-[#12725B] peer-checked:bg-[#12725B]",
            className,
          )}
        >
          <Checkmark />
        </span>
        {label && (
          <span className={twMerge("ml-2 select-none text-sm", labelClassName)}>
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
