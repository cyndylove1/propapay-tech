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
        className={`flex h-[48px] items-center justify-between gap-[7px] rounded-xl border-[1px] border-[#cfd2d1] px-4 focus-within:border-[#23A681] ${className}`}
      >
        <span className="flex w-full gap-[5px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.55667 15.7039C3.74407 17.0958 4.89694 18.1863 6.29988 18.2508C7.48039 18.305 8.67958 18.3333 10.0002 18.3333C11.3207 18.3333 12.5199 18.305 13.7004 18.2508C15.1034 18.1863 16.2562 17.0958 16.4437 15.7039C16.566 14.7956 16.6668 13.8647 16.6668 12.9167C16.6668 11.9687 16.566 11.0378 16.4437 10.1294C16.2562 8.7375 15.1034 7.64707 13.7004 7.58257C12.5199 7.52831 11.3207 7.5 10.0002 7.5C8.67958 7.5 7.48039 7.52831 6.29988 7.58257C4.89694 7.64707 3.74407 8.7375 3.55667 10.1294C3.43436 11.0378 3.3335 11.9687 3.3335 12.9167C3.3335 13.8647 3.43436 14.7956 3.55667 15.7039Z"
              stroke="#6A7070"
              strokeWidth="1.5"
            />
            <path
              d="M6.25 7.50008V5.41675C6.25 3.34568 7.92893 1.66675 10 1.66675C12.0711 1.66675 13.75 3.34568 13.75 5.41675V7.50008"
              stroke="#6A7070"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99658 12.9167H10.0041"
              stroke="#6A7070"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            id={id}
            value={value}
            onChange={onChange}
            type={showVisibility ? "text" : "password"}
            placeholder={placeholder}
            className="w-full outline-none"
          />
        </span>
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-[#6a7070]"
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
