import { useEffect, useRef, useState } from "react";


interface DropdownMenuProps {
  CloseMenu: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ CloseMenu }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
   const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       if (
         dropdownRef.current &&
         !dropdownRef.current.contains(event.target as Node)
       ) {
         CloseMenu();
       }
     };

     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, [CloseMenu]);

  return (
    <>
      {/* Black background overlay */}
      <div
        className="fixed inset-0 bg-[#000] bg-opacity-50 transition-opacity"
        onClick={CloseMenu}
      ></div>

      {/* Dropdown menu */}
      <div className="absolute right-10 top-[19rem] z-50 w-[200px] translate-x-0 transform rounded-xl bg-white shadow-md transition-transform">
        <ul className="flex flex-col">
          <li
            className={`flex cursor-pointer items-center justify-center gap-[12px] rounded-md p-2 ${
              activeItem === "view-details"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => setActiveItem("view-details")}
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
                  d="M17.9536 9.20399C18.207 9.55926 18.3337 9.73689 18.3337 9.99984C18.3337 10.2628 18.207 10.4404 17.9536 10.7957C16.8152 12.392 13.908 15.8332 10.0003 15.8332C6.09264 15.8332 3.18541 12.392 2.04703 10.7957C1.79367 10.4404 1.66699 10.2628 1.66699 9.99984C1.66699 9.73689 1.79367 9.55926 2.04703 9.20399C3.18541 7.60771 6.09264 4.1665 10.0003 4.1665C13.908 4.1665 16.8152 7.6077 17.9536 9.20399Z"
                  stroke={activeItem === "view-details" ? "#12725B" : "#6B6F75"}
                  stroke-width="1.5"
                />
                <path
                  d="M12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
                  stroke={activeItem === "view-details" ? "#12725B" : "#6B6F75"}
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "view-details"
                  ? "text-brand-base"
                  : "text-neutral-700"
              }`}
            >
              View Details
            </h2>
          </li>
          <li
            className={`flex cursor-pointer items-center justify-center gap-[12px] rounded-md p-2 ${
              activeItem === "download"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => setActiveItem("download")}
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
                  d="M2.50012 11.667L2.69499 12.2191C3.45345 14.3681 3.83269 15.4426 4.69797 16.0548C5.56325 16.667 6.7027 16.667 8.98159 16.667H11.0187C13.2975 16.667 14.437 16.667 15.3023 16.0548C16.1676 15.4426 16.5468 14.3681 17.3053 12.2191L17.5001 11.667"
                  stroke={activeItem === "download" ? "#12725B" : "#6d7177"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M10.0001 11.6668V3.3335M10.0001 11.6668C9.41662 11.6668 8.32642 10.0049 7.91681 9.5835M10.0001 11.6668C10.5837 11.6668 11.6739 10.0049 12.0835 9.5835"
                  stroke={activeItem === "download" ? "#12725B" : "#6d7177"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "download"
                  ? "text-brand-base"
                  : "text-neutral-700"
              }`}
            >
              Download
            </h2>
          </li>
          <li
            className={`flex cursor-pointer items-center justify-center gap-[12px] rounded-md p-2 ${
              activeItem === "share"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => setActiveItem("share")}
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
                  d="M15.9931 7.86781L14.3554 6.22432C13.1754 5.04016 12.7128 4.40314 12.0738 4.62834C11.2771 4.90914 11.5394 6.68093 11.5394 7.27909C10.3006 7.27909 9.01264 7.16899 7.79154 7.39839C3.76049 8.1557 2.5 11.4296 2.5 15.0002C3.64091 14.192 4.7807 13.331 6.15194 12.9565C7.86364 12.4889 9.77532 12.712 11.5394 12.712C11.5394 13.3101 11.2771 15.082 12.0738 15.3628C12.7979 15.6179 13.1754 14.9509 14.3554 13.7668L15.9931 12.1233C16.9977 11.1152 17.5 10.6111 17.5 9.99555C17.5 9.37996 16.9977 8.87591 15.9931 7.86781Z"
                  stroke={activeItem === "share" ? "#12725B" : "#6d7177"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "share" ? "text-[#12725B]" : "text-neutral-700"
              }`}
            >
              Share Document
            </h2>
          </li>
          <li
            className={`flex cursor-pointer items-center justify-center gap-[12px] rounded-md p-2 ${
              activeItem === "delivery"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => setActiveItem("delivery")}
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
                  d="M16.2507 14.5833C16.2507 15.7339 15.3179 16.6667 14.1673 16.6667C13.0167 16.6667 12.084 15.7339 12.084 14.5833C12.084 13.4327 13.0167 12.5 14.1673 12.5C15.3179 12.5 16.2507 13.4327 16.2507 14.5833Z"
                  stroke={activeItem === "delivery" ? "#12725b" : "#6d7177"}
                  stroke-width="1.5"
                />
                <path
                  d="M7.91667 14.5833C7.91667 15.7339 6.98393 16.6667 5.83333 16.6667C4.68274 16.6667 3.75 15.7339 3.75 14.5833C3.75 13.4327 4.68274 12.5 5.83333 12.5C6.98393 12.5 7.91667 13.4327 7.91667 14.5833Z"
                  stroke={activeItem === "delivery" ? "#12725b" : "#6d7177"}
                  stroke-width="1.5"
                />
                <path
                  d="M12.0837 14.5835H7.91699M16.2503 14.5835H16.8863C17.0696 14.5835 17.1613 14.5835 17.2383 14.5739C17.806 14.5031 18.2533 14.0559 18.3241 13.4881C18.3337 13.4111 18.3337 13.3194 18.3337 13.1361V10.8335C18.3337 7.84195 15.9085 5.41683 12.917 5.41683M1.66699 3.3335L10.0003 3.3335C11.1788 3.3335 11.7681 3.3335 12.1342 3.69961C12.5003 4.06573 12.5003 4.65498 12.5003 5.8335L12.5003 12.9168M1.66699 10.6252L1.66699 12.5002C1.66699 13.279 1.66699 13.6684 1.83446 13.9585C1.94417 14.1485 2.10197 14.3063 2.29199 14.416C2.58206 14.5835 2.97148 14.5835 3.75033 14.5835"
                  stroke={activeItem === "delivery" ? "#12725b" : "#6d7177"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.66699 5.8335L6.66699 5.8335M1.66699 8.3335H5.00033"
                  stroke={activeItem === "delivery" ? "12725b" : "#6d7177"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "delivery"
                  ? "text-brand-base"
                  : "text-neutral-700"
              }`}
            >
              Request Delivery
            </h2>
          </li>
          <li
            className={`flex cursor-pointer items-center justify-center gap-[12px] rounded-md p-2 ${
              activeItem === "document"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => setActiveItem("document")}
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
                  d="M6.12862 14.9998C4.35936 14.9998 3.47472 14.9998 2.8449 14.6222C2.43327 14.3754 2.10164 14.0224 1.88762 13.6033C1.56015 12.9621 1.64818 12.1143 1.82423 10.4186C1.97119 9.00305 2.04467 8.29529 2.40602 7.77551C2.64327 7.43425 2.96415 7.15454 3.3403 6.96111C3.91322 6.6665 4.65169 6.6665 6.12862 6.6665H13.872C15.349 6.6665 16.0874 6.6665 16.6604 6.96111C17.0365 7.15454 17.3574 7.43425 17.5946 7.77551C17.956 8.29529 18.0295 9.00305 18.1764 10.4186C18.3525 12.1143 18.4405 12.9621 18.113 13.6033C17.899 14.0224 17.5674 14.3754 17.1557 14.6222C16.5259 14.9998 15.6413 14.9998 13.872 14.9998"
                  stroke={activeItem === "document" ? "#12725b" : "#6d7177"}
                  stroke-width="1.5"
                />
                <path
                  d="M14.1673 6.6665V4.99984C14.1673 3.42849 14.1673 2.64281 13.6792 2.15466C13.191 1.6665 12.4053 1.6665 10.834 1.6665H9.16732C7.59597 1.6665 6.8103 1.6665 6.32214 2.15466C5.83398 2.64281 5.83398 3.42849 5.83398 4.99984V6.6665"
                  stroke={activeItem === "document" ? "#12725b" : "#6d7177"}
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6579 13.333L8.34342 13.333C7.77233 13.333 7.48679 13.333 7.24384 13.4237C6.91991 13.5447 6.64254 13.7796 6.45582 14.0913C6.31578 14.325 6.24652 14.6256 6.10802 15.2267C5.89159 16.1659 5.78338 16.6355 5.85698 17.0121C5.95511 17.5141 6.26096 17.9392 6.68608 18.1642C7.00492 18.333 7.45109 18.333 8.34342 18.333L11.6579 18.333C12.5502 18.333 12.9964 18.333 13.3152 18.1642C13.7403 17.9392 14.0462 17.5141 14.1443 17.0121C14.2179 16.6355 14.1097 16.1659 13.8933 15.2267C13.7548 14.6256 13.6855 14.325 13.5455 14.0913C13.3588 13.7796 13.0814 13.5447 12.7575 13.4237C12.5145 13.333 12.229 13.333 11.6579 13.333Z"
                  stroke={activeItem === "document" ? "#12725b" : "#6d7177"}
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 10H15.0075"
                  stroke={activeItem === "document" ? "#12725b" : "#6d7177"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "document" ? "text-brand-base" : "text-neutral-700"
              }`}
            >
              Print Document
            </h2>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
