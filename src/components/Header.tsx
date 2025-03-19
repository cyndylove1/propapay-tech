import Logo from "./common/Logo";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex h-[80px] items-center justify-between bg-white px-2 xl:px-[60px]">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-[16px]">
          <h2 className="text-[12px] font-[500] leading-[20px] text-neutral-700 md:text-[14px]">
            Need help?
          </h2>
          <div className="flex h-[36px] w-[121px] items-center justify-center gap-[4px] rounded-[8px] border-[1px] border-neutral-200">
            <h2>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1667 9.83672C14.1667 9.5487 14.1667 9.4047 14.2101 9.27631C14.3361 8.90337 14.6682 8.75864 15.001 8.60708C15.3751 8.43669 15.5621 8.3515 15.7474 8.33651C15.9578 8.31949 16.1686 8.36482 16.3484 8.46575C16.5868 8.59954 16.7531 8.85378 16.9233 9.06052C17.7095 10.0154 18.1025 10.4928 18.2464 11.0193C18.3624 11.4442 18.3624 11.8885 18.2464 12.3134C18.0366 13.0813 17.3738 13.725 16.8832 14.3208C16.6323 14.6256 16.5068 14.778 16.3484 14.8669C16.1686 14.9679 15.9578 15.0132 15.7474 14.9962C15.5621 14.9812 15.3751 14.896 15.001 14.7256C14.6682 14.574 14.3361 14.4293 14.2101 14.0564C14.1667 13.928 14.1667 13.784 14.1667 13.496V9.83672Z"
                  stroke="#4E5257"
                  stroke-width="1.5"
                />
                <path
                  d="M5.83342 9.83686C5.83342 9.47415 5.82323 9.14818 5.53001 8.89317C5.42335 8.80042 5.28196 8.73602 4.99917 8.60721C4.62509 8.43683 4.43805 8.35163 4.25272 8.33665C3.69668 8.29168 3.39751 8.67118 3.07685 9.06066C2.29071 10.0155 1.89763 10.4929 1.7538 11.0194C1.63773 11.4443 1.63773 11.8886 1.7538 12.3135C1.96358 13.0814 2.62635 13.7251 3.11692 14.321C3.42615 14.6966 3.72156 15.0393 4.25272 14.9963C4.43805 14.9813 4.62509 14.8961 4.99917 14.7257C5.28196 14.5969 5.42335 14.5325 5.53001 14.4398C5.82323 14.1848 5.83342 13.8588 5.83342 13.4961V9.83686Z"
                  stroke="#4E5257"
                  stroke-width="1.5"
                />
                <path
                  d="M16.6668 8.74984V7.49984C16.6668 4.27818 13.6821 1.6665 10.0002 1.6665C6.31826 1.6665 3.3335 4.27818 3.3335 7.49984V8.74984"
                  stroke="#4E5257"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6667 14.583C16.6667 18.333 13.3333 18.333 10 18.333"
                  stroke="#4E5257"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h2>
            <span className="text-[14px] font-[600] leading-[20px] text-neutral-700">
              Contact Us
            </span>
          </div>
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8337 4.1665L4.16699 15.8332M4.16699 4.1665L15.8337 15.8332"
                stroke="#4E5257"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};
export default Header;
