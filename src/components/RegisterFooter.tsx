import SelectTag from "./common/SelectTag";

const RegisterFooter = () => {
  return (
    <>
      <footer className="mt-auto flex w-full bg-white items-center justify-between py-4 text-[12px] text-[#595D61]">
        {/* Left Side - Copyright */}
        <p>© 2025 PropaPay - All Rights Reserved</p>

        {/* Right Side - Language Selector */}
        <div className="md:flex gap-[2px] relative items-center rounded-lg">
          <span>
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
                stroke="#84898C"
                stroke-width="1.5"
              />
              <path
                d="M6.66675 9.99984C6.66675 14.9998 10.0001 18.3332 10.0001 18.3332C10.0001 18.3332 13.3334 14.9998 13.3334 9.99984C13.3334 4.99984 10.0001 1.6665 10.0001 1.6665C10.0001 1.6665 6.66675 4.99984 6.66675 9.99984Z"
                stroke="#84898C"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 12.5L2.5 12.5"
                stroke="#84898C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 7.5L2.5 7.5"
                stroke="#84898C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <SelectTag className="border-none pr-8 bg-transparent text-[14px] font-[500] leading-[20px] text-[#4E5257]">
            <option className="">ENG</option>
            <option>SPANISH</option>
          </SelectTag>
        </div>
      </footer>
      <div></div>
    </>
  );
};
export default RegisterFooter;
