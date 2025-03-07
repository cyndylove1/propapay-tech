interface SearchProps {
  placeholder: string;
  className?: string;
  showShortcut?: boolean;
}
const SearchBar: React.FC<SearchProps> = ({
  placeholder,
  className,
  showShortcut = true,
}) => {
  return (
    <>
      <div className="relative overflow-hidden rounded-lg border-[1px] border-[#E5E6E8]">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#84898C]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.58334 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58332C17.5 5.21107 13.9556 1.66666 9.58334 1.66666C5.21108 1.66666 1.66667 5.21107 1.66667 9.58332C1.66667 13.9556 5.21108 17.5 9.58334 17.5Z"
              stroke="#84898C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.3333 18.3333L16.6667 16.6667"
              stroke="#84898C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          type="text"
          placeholder={placeholder}
          className={`py-2 pl-10 pr-4 text-[14px] bg-transparent text-[#84898C] outline-none ${className}`}
        />
        {showShortcut && (
          <span className="mx-[10px] h-[20px] w-[36px] rounded-[4px] border-[1px] border-[#E5E6E8] px-[6px] text-[14px] font-[500] leading-[20px] text-[#84898C]">
            ⌘K
          </span>
        )}
      </div>
    </>
  );
};
export default SearchBar;
