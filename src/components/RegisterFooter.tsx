import SelectTag from "./common/SelectTag";

const RegisterFooter = () => {
  return (
    <>
      <footer className="mt-auto flex w-full items-center justify-between py-4 text-[12px] text-neutral-500">
        {/* Left Side - Copyright */}
        <p>© 2025 PropaPay - All Rights Reserved</p>

        {/* Right Side - Language Selector */}
        <div className="relative  hidden w-[92px] items-center md:flex md:h-[32px]">
          <span className="absolute flex items-center px-2">
            <svg
              width="15"
              height="15"
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

          {/* Select Dropdown */}
          <SelectTag className="w-full border-none pl-7 text-[14px] font-[500] leading-[20px] text-neutral-500">
            <option className="">ENG</option>
          </SelectTag>
        </div>
      </footer>
      <div></div>
    </>
  );
};
export default RegisterFooter;
