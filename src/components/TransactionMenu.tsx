import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

interface DropdownMenuProps {
  CloseMenu: () => void;
}

const TransactionMenu: React.FC<DropdownMenuProps> = ({ CloseMenu }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

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
      <div className="absolute right-10 top-[19rem] z-50 w-[200px] translate-x-0 transform rounded-md bg-white shadow-md transition-transform">
        <ul className="flex flex-col">
          <li
            className={`justify-left flex cursor-pointer items-center gap-[12px] rounded-md px-6 py-2 ${
              activeItem === "view-details"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => {
              setModalOpen(true);
              setActiveItem("view-details");
            }}
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
            className={`justify-left flex cursor-pointer items-center gap-[12px] rounded-md px-6 py-2 ${
              activeItem === "synchronize"
                ? "bg-brand-50 font-[600]"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
            onClick={() => setActiveItem("synchronize")}
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
                  d="M16.6744 1.66699V4.27715C16.6744 4.52204 16.3682 4.6329 16.2114 4.44477C14.6855 2.73991 12.4681 1.66699 10 1.66699C5.39765 1.66699 1.66669 5.39795 1.66669 10.0003C1.66669 14.6027 5.39765 18.3337 10 18.3337C14.6024 18.3337 18.3334 14.6027 18.3334 10.0003"
                  stroke={activeItem === "synchronize" ? "#12725B" : "#6B6F75"}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2
              className={`text-[12px] font-[600] leading-[16px] ${
                activeItem === "synchronize"
                  ? "text-[#12725B]"
                  : "text-neutral-700"
              }`}
            >
              Synchronize
            </h2>
          </li>
        </ul>
      </div>
      <Modal
        title="Transaction Details"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default TransactionMenu;
