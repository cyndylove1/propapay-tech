import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputPasswordProps {
  id: string;
  placeholder?: string;
  className?: string;
  showVisibility: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  togglePasswordVisibility: () => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  id,
  placeholder,
  className,
  showVisibility,
  onChange,
  value,
  togglePasswordVisibility,
}) => {
  return (
    <div className="">
      <div
        className={`focus-within:border-brand-500 flex h-[48px] items-center justify-between gap-[7px] rounded-xl border-[1px] border-neutral-200 px-4 ${className}`}
      >
        <span className="flex w-full gap-[5px]">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0762 12.9167H10.0837M5.91699 12.9167H5.92446"
              stroke="#888D93"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.55667 15.704C1.74407 17.0958 2.89694 18.1863 4.29988 18.2508C5.48039 18.305 6.67958 18.3333 8.00016 18.3333C9.32074 18.3333 10.5199 18.305 11.7004 18.2508C13.1034 18.1863 14.2563 17.0958 14.4437 15.704C14.566 14.7956 14.6668 13.8647 14.6668 12.9167C14.6668 11.9686 14.566 11.0378 14.4437 10.1294C14.2563 8.73752 13.1034 7.64707 11.7004 7.58258C10.5199 7.52831 9.32074 7.5 8.00016 7.5C6.67958 7.5 5.48039 7.52831 4.29988 7.58258C2.89694 7.64707 1.74407 8.73752 1.55667 10.1294C1.43437 11.0378 1.3335 11.9686 1.3335 12.9167C1.3335 13.8647 1.43437 14.7956 1.55667 15.704Z"
              stroke="#888D93"
              stroke-width="1.5"
            />
            <path
              d="M4.25 7.50008V5.41675C4.25 3.34568 5.92893 1.66675 8 1.66675C10.0711 1.66675 11.75 3.34568 11.75 5.41675V7.50008"
              stroke="#888D93"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input
            id={id}
            value={value}
            onChange={onChange}
            type={showVisibility ? "text" : "password"}
            placeholder={placeholder}
            className="text-neutral-500 w-full bg-transparent outline-none"
          />
        </span>
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-[#888D93]"
        >
          {showVisibility ? (
            <FiEyeOff className="w-5 h-5" />
          ) : (
            <FiEye className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default InputPassword;
