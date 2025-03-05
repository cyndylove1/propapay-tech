

interface InputProps {
  type?: string;
  placeholder?: string;
  id?: string;
  className?: string;
}

const InputEmail: React.FC<InputProps> = ({
  type,
  placeholder,
  id,
  className ,
}) => {
 

  return (
    <div className="">
      <div
        className={`flex bg-white h-[48px] items-center gap-[7px] rounded-xl border-[1px] border-[#cfd2d1] px-4 focus-within:border-[#23A681] ${className}`}
      >
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.6665 5L7.42735 8.26414C9.55117 9.4675 10.4485 9.4675 12.5723 8.26414L18.3332 5"
              stroke="#6A7070"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M1.67965 11.2295C1.73412 13.7842 1.76136 15.0614 2.70397 16.0077C3.64657 16.9538 4.95845 16.9868 7.5822 17.0527C9.19925 17.0933 10.8004 17.0933 12.4175 17.0527C15.0413 16.9868 16.3531 16.9538 17.2958 16.0077C18.2383 15.0614 18.2656 13.7842 18.32 11.2295C18.3376 10.4081 18.3376 9.59159 18.32 8.77017C18.2656 6.21555 18.2383 4.93825 17.2958 3.99205C16.3531 3.04586 15.0413 3.0129 12.4175 2.94698C10.8004 2.90635 9.19925 2.90635 7.58219 2.94697C4.95845 3.01289 3.64657 3.04585 2.70396 3.99205C1.76135 4.93824 1.73412 6.21555 1.67964 8.77017C1.66212 9.59159 1.66213 10.4081 1.67965 11.2295Z"
              stroke="#6A7070"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          className="w-full outline-none"
        />
      </div>
    </div>
  );
};

export default InputEmail;
