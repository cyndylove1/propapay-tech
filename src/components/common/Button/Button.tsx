import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  type,
  className,
  icon,
  iconPosition = "left",
  iconClassName,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(
        `flex h-12 items-center justify-center gap-2 rounded-xl px-4 py-3 text-base leading-6 text-white bg-brand-base font-medium`,
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={twMerge("h-5 w-5", iconClassName)}>{icon}</span>
      )}
      <span>{text}</span>
      {icon && iconPosition === "right" && (
        <span className={twMerge("h-5 w-5", iconClassName)}>{icon}</span>
      )}
    </button>
  );
}
