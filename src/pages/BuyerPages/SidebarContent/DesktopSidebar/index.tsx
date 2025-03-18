import { NavLink } from "react-router";
import profile from "@/assets/images/Avatar.png"

interface DesktopSidebarProps {
  isCollapsed: boolean;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  isCollapsed,
}) => {
  return (
    <>
      <div
        className={`hidden h-full flex-col border-r-[1px] border-neutral-200 bg-neutral-50 transition-all duration-300 lg:flex ${
          isCollapsed ? "w-[80px]" : "w-[250px]"
        }`}
      >
        {/* Logo */}
        <div className="flex h-[72px] items-center justify-between gap-6 border-b-[1px] border-neutral-200 px-6">
          <div className="flex items-center justify-center gap-2">
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.6315 0C10.2391 0 2.34725 6.37621 0.111651 15.0047C5.89497 18.1876 12.5502 20 19.6319 20C26.7134 20 33.3684 18.1877 39.1514 15.0051C36.916 6.37638 29.0241 0 19.6315 0ZM20.1116 20C13.1677 20 6.42885 20.8713 0 22.5096C1.244 32.3707 9.72243 40 19.9965 40C30.29 40 38.7811 32.3416 40 22.4531C33.6385 20.8512 26.9752 20 20.1116 20Z"
                  fill="#12725B"
                />
              </svg>
            </span>
            {!isCollapsed && (
              <span className="text-[25px] text-brand-base">PropaPay</span>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <div className="h-[50px] w-[250px] flex-1">
          <h2 className="px-6 pt-[20px] text-[12px] font-[600] leading-[16px] text-neutral-500">
            MAIN
          </h2>
          <div className="py-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[4px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 14.1665H10.0075"
                          stroke={isActive ? "#fff" : "#595D61"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.6666 7.08325V11.2499C16.6666 14.3926 16.6666 15.964 15.6903 16.9403C14.714 17.9166 13.1427 17.9166 9.99998 17.9166C6.85728 17.9166 5.28593 17.9166 4.30962 16.9403C3.33331 15.964 3.33331 14.3926 3.33331 11.2499V7.08325"
                          stroke={isActive ? "#fff" : "#595D61"}
                          strokeWidth="1.5"
                        />
                        <path
                          d="M18.3333 8.74992L14.714 5.27949C12.4918 3.14866 11.3807 2.08325 9.99999 2.08325C8.61928 2.08325 7.50817 3.14866 5.28595 5.27949L1.66666 8.74992"
                          stroke={isActive ? "#fff" : "#595D61"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>

                    {/* Dashboard Text */}
                    <h2 className="fw-bold text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Dashboard</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>
            <NavLink
              to="/wallet"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.3333 11.6667C13.3333 12.3571 13.893 12.9167 14.5833 12.9167C15.2737 12.9167 15.8333 12.3571 15.8333 11.6667C15.8333 10.9764 15.2737 10.4167 14.5833 10.4167C13.893 10.4167 13.3333 10.9764 13.3333 11.6667Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                        <path
                          d="M15.75 6.66675C15.8046 6.39749 15.8333 6.1188 15.8333 5.83341C15.8333 3.53223 13.9678 1.66675 11.6666 1.66675C9.36546 1.66675 7.49998 3.53223 7.49998 5.83341C7.49998 6.1188 7.52867 6.39749 7.58333 6.66675"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                        <path
                          d="M5.83332 6.66119H13.3333C15.6903 6.66119 16.8689 6.66119 17.6011 7.39378C18.3333 8.12637 18.3333 9.30545 18.3333 11.6636V13.3311C18.3333 15.6892 18.3333 16.8683 17.6011 17.6009C16.8689 18.3335 15.6903 18.3335 13.3333 18.3335H8.33332C5.19063 18.3335 3.61928 18.3335 2.64297 17.3567C1.66666 16.3799 1.66666 14.8078 1.66666 11.6636V9.99614C1.66666 6.85192 1.66666 5.27982 2.64297 4.30303C3.42887 3.51675 4.60035 3.3634 6.66666 3.3335H8.33332"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>

                    {/* Document Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Wallet</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>
            <NavLink
              to="/flex-payment"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="12.9167"
                          cy="9.16667"
                          rx="5.41667"
                          ry="1.66667"
                          stroke="#595D61"
                          stroke-width="1.5"
                        />
                        <path
                          d="M18.3333 12.9167C18.3333 13.8372 15.9082 14.5834 12.9167 14.5834C9.92512 14.5834 7.5 13.8372 7.5 12.9167"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                        <path
                          d="M18.3333 9.16675V16.5001C18.3333 17.5126 15.9082 18.3334 12.9167 18.3334C9.92512 18.3334 7.5 17.5126 7.5 16.5001V9.16675"
                          stroke="#595D61"
                          stroke-width="1.5"
                        />
                        <ellipse
                          cx="7.08332"
                          cy="3.33341"
                          rx="5.41667"
                          ry="1.66667"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                        <path
                          d="M4.99999 9.16667C3.42348 8.97481 1.97492 8.47878 1.66666 7.5M4.99999 13.3333C3.42348 13.1415 1.97492 12.6455 1.66666 11.6667"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M4.99999 17.5002C3.42348 17.3083 1.97492 16.8123 1.66666 15.8335L1.66666 3.3335"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12.5 5.00016V3.3335"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>

                    {/* Document Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Flex Payment</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/transactions"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.59835 16.4017C2.5 15.3033 2.5 13.5355 2.5 10C2.5 6.46447 2.5 4.6967 3.59835 3.59835C4.6967 2.5 6.46447 2.5 10 2.5C13.5355 2.5 15.3033 2.5 16.4017 3.59835C17.5 4.6967 17.5 6.46447 17.5 10C17.5 13.5355 17.5 15.3033 16.4017 16.4017C15.3033 17.5 13.5355 17.5 10 17.5C6.46447 17.5 4.6967 17.5 3.59835 16.4017Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.83334 11.6666L8.16076 9.33917C8.48619 9.01374 9.01383 9.01374 9.33927 9.33917L10.6608 10.6607C10.9862 10.9861 11.5138 10.9861 11.8393 10.6607L14.1667 8.33325"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>

                    {/* Document Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Transaction</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>
            <NavLink
              to="/assets"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.25 7.54646H13.5625C15.1425 7.54646 15.9325 7.54646 16.5 7.92097C16.7457 8.0831 16.9567 8.29144 17.1208 8.53408C17.5 9.09458 17.5 9.87483 17.5 11.4353C17.5 14.0362 17.5 15.3366 16.868 16.2708C16.5944 16.6752 16.2429 17.0224 15.8334 17.2926C14.8875 17.9168 13.5709 17.9168 10.9375 17.9168H10C6.46447 17.9168 4.6967 17.9168 3.59835 16.832C2.5 15.7473 2.5 14.0013 2.5 10.5094V8.24592C2.5 6.90038 2.5 6.22762 2.78524 5.7228C2.98857 5.36295 3.2892 5.06603 3.65355 4.86521C4.16467 4.5835 4.84585 4.5835 6.2082 4.5835C7.08102 4.5835 7.51742 4.5835 7.89944 4.72498C8.77167 5.04803 9.13134 5.83059 9.52492 6.60803L10 7.54646"
                          stroke={isActive ? "#fff" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M2.5 2.08344H7.08333C7.89174 2.08344 8.68182 2.05984 9.36558 2.54612C10.2417 3.16918 10.5917 4.33102 11.4677 4.95408C12.1515 5.44036 12.9416 5.41677 13.75 5.41677H17.5"
                          stroke={isActive ? "#fff" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>

                    {/* Assets Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>My Assets</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>
          </div>
          <div>
            <h2 className="px-4 py-[10px] text-[12px] font-[600] leading-[16px] text-neutral-500">
              OTHERS
            </h2>
            <NavLink
              to="/properties"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66666 18.3333L18.3333 18.3333"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M15 7.5L11.6667 7.5C9.59832 7.5 9.16666 7.93167 9.16666 10L9.16666 18.3333H17.5V10C17.5 7.93167 17.0683 7.5 15 7.5Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.5 18.3333L2.5 18.3333L2.5 4.16663C2.5 2.09829 2.93167 1.66663 5 1.66663L10 1.66663C12.0683 1.66663 12.5 2.09829 12.5 4.16663L12.5 7.49996"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 5L5 5M2.5 8.33333H5M2.5 11.6667H5"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12.5 10.8333H14.1667M12.5 13.3333H14.1667"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M13.3333 18.3333L13.3333 15.8333"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>

                    {/* Properties Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span> Properties </span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>
            <NavLink
              to="/favourite"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.2188 2.32846C13.9841 0.957691 12.0336 1.51009 10.8619 2.39001C10.3815 2.7508 10.1413 2.93119 9.99999 2.93119C9.85866 2.93119 9.61845 2.7508 9.13803 2.39001C7.96634 1.51009 6.01589 0.957691 3.78119 2.32846C0.84838 4.12745 0.184757 10.0624 6.9496 15.0695C8.23809 16.0232 8.88233 16.5 9.99999 16.5C11.1176 16.5 11.7619 16.0232 13.0504 15.0695C19.8152 10.0624 19.1516 4.12745 16.2188 2.32846Z"
                          stroke={isActive ? "#fff" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>

                    {/* Favourites Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Favourites</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>
            <NavLink
              to="/document"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.66669 14.1665H11.3334"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.66669 10.833H8.00002"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.83334 2.08317V2.49984C8.83334 4.85686 8.83334 6.03537 9.56558 6.7676C10.2978 7.49984 11.4763 7.49984 13.8333 7.49984H14.25M14.6667 8.88055V11.6665C14.6667 14.8092 14.6667 16.3806 13.6904 17.3569C12.7141 18.3332 11.1427 18.3332 8.00001 18.3332C4.85731 18.3332 3.28596 18.3332 2.30965 17.3569C1.33334 16.3806 1.33334 14.8092 1.33334 11.6665V7.87971C1.33334 5.17552 1.33334 3.82343 2.07174 2.90761C2.22091 2.7226 2.38944 2.55407 2.57445 2.4049C3.49027 1.6665 4.84236 1.6665 7.54655 1.6665C8.13449 1.6665 8.42846 1.6665 8.69766 1.76151C8.75365 1.78127 8.80854 1.80401 8.8621 1.82963C9.11964 1.9528 9.32751 2.16067 9.74325 2.57641L13.6904 6.52353C14.1721 7.00524 14.4129 7.2461 14.5398 7.55239C14.6667 7.85867 14.6667 8.1993 14.6667 8.88055Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>

                    {/* Document Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Document</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/insight"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.83334 14.1666L5.83334 10.8333"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M10 14.1666L10 5.83325"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M14.1667 14.1665L14.1667 9.1665"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M2.08334 9.99992C2.08334 6.26797 2.08334 4.40199 3.24271 3.24262C4.40208 2.08325 6.26806 2.08325 10 2.08325C13.732 2.08325 15.5979 2.08325 16.7573 3.24262C17.9167 4.40199 17.9167 6.26797 17.9167 9.99992C17.9167 13.7319 17.9167 15.5978 16.7573 16.7572C15.5979 17.9166 13.732 17.9166 10 17.9166C6.26806 17.9166 4.40208 17.9166 3.24271 16.7572C2.08334 15.5978 2.08334 13.7319 2.08334 9.99992Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>

                    {/* Document Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Insights</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>
          </div>
          <div className="pt-[20rem]">
            <NavLink
              to="/settings"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.7646 5.95108L16.3533 5.23725C16.0422 4.69739 15.8866 4.42746 15.622 4.31982C15.3573 4.21218 15.058 4.29712 14.4594 4.46699L13.4426 4.7534C13.0604 4.84153 12.6594 4.79154 12.3105 4.61225L12.0297 4.45027C11.7305 4.25861 11.5003 3.97603 11.3729 3.64387L11.0946 2.81272C10.9117 2.2627 10.8202 1.98769 10.6024 1.83039C10.3846 1.6731 10.0952 1.6731 9.5166 1.6731L8.58762 1.6731C8.00899 1.6731 7.71968 1.6731 7.50186 1.83039C7.28405 1.98769 7.19256 2.2627 7.00958 2.81272L6.73129 3.64387C6.60388 3.97603 6.37372 4.25861 6.07448 4.45027L5.79375 4.61225C5.44479 4.79154 5.04383 4.84153 4.66166 4.7534L3.6448 4.46699C3.04619 4.29712 2.74688 4.21218 2.48224 4.31982C2.21759 4.42746 2.06205 4.69739 1.75097 5.23725L1.33965 5.95108C1.04806 6.45712 0.902263 6.71014 0.930558 6.97949C0.958855 7.24884 1.15403 7.4659 1.54439 7.90002L2.4036 8.86061C2.61359 9.12646 2.76268 9.58976 2.76268 10.0063C2.76268 10.4231 2.61364 10.8863 2.40362 11.1522L1.5444 12.1128C1.15404 12.5469 0.958857 12.7639 0.93056 13.0333C0.902263 13.3026 1.04806 13.5557 1.33965 14.0617L1.75096 14.7755C2.06203 15.3154 2.21759 15.5853 2.48224 15.693C2.74689 15.8006 3.0462 15.7157 3.64482 15.5458L4.66163 15.2594C5.04387 15.1712 5.4449 15.2212 5.7939 15.4006L6.07459 15.5626C6.37377 15.7542 6.60388 16.0368 6.73126 16.3689L7.00958 17.2001C7.19256 17.7502 7.28405 18.0252 7.50186 18.1825C7.71968 18.3398 8.00899 18.3398 8.58762 18.3398H9.5166C10.0952 18.3398 10.3846 18.3398 10.6024 18.1825C10.8202 18.0252 10.9117 17.7502 11.0946 17.2001L11.373 16.3689C11.5003 16.0368 11.7305 15.7542 12.0296 15.5626L12.3103 15.4006C12.6593 15.2212 13.0604 15.1712 13.4426 15.2594L14.4594 15.5458C15.058 15.7157 15.3573 15.8006 15.622 15.693C15.8866 15.5853 16.0422 15.3154 16.3533 14.7755L16.3533 14.7755L16.7646 14.0617C17.0562 13.5557 17.202 13.3026 17.1737 13.0333C17.1454 12.7639 16.9502 12.5469 16.5598 12.1128L15.7006 11.1522C15.4906 10.8863 15.3415 10.4231 15.3415 10.0063C15.3415 9.58976 15.4906 9.12646 15.7006 8.86061L16.5598 7.90002C16.9502 7.4659 17.1454 7.24884 17.1737 6.97949C17.202 6.71014 17.0562 6.45712 16.7646 5.95108Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.9329 9.99992C11.9329 11.6107 10.6271 12.9166 9.01628 12.9166C7.40545 12.9166 6.09961 11.6107 6.09961 9.99992C6.09961 8.38909 7.40545 7.08325 9.01628 7.08325C10.6271 7.08325 11.9329 8.38909 11.9329 9.99992Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                      </svg>
                    </span>

                    {/* Document Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Settings</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/integration"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.08331 5.00008C2.08331 3.71638 2.08331 3.07453 2.37225 2.60303C2.53393 2.33919 2.75576 2.11737 3.01959 1.95569C3.4911 1.66675 4.13295 1.66675 5.41665 1.66675C6.70034 1.66675 7.34219 1.66675 7.8137 1.95569C8.07754 2.11737 8.29936 2.33919 8.46104 2.60303C8.74998 3.07453 8.74998 3.71638 8.74998 5.00008C8.74998 6.28378 8.74998 6.92563 8.46104 7.39714C8.29936 7.66097 8.07754 7.8828 7.8137 8.04447C7.34219 8.33341 6.70034 8.33341 5.41665 8.33341C4.13295 8.33341 3.4911 8.33341 3.01959 8.04447C2.75576 7.8828 2.53393 7.66097 2.37225 7.39714C2.08331 6.92563 2.08331 6.28378 2.08331 5.00008Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                        <path
                          d="M3.15137 12.3182C4.02375 11.4458 4.45995 11.0096 4.97674 10.8856C5.26591 10.8161 5.56741 10.8161 5.85658 10.8856C6.37337 11.0096 6.80956 11.4458 7.68194 12.3182C8.55433 13.1906 8.99052 13.6268 9.11459 14.1436C9.18401 14.4327 9.18401 14.7342 9.11459 15.0234C8.99052 15.5402 8.55433 15.9764 7.68194 16.8488C6.80956 17.7212 6.37337 18.1574 5.85658 18.2814C5.56741 18.3509 5.26591 18.3509 4.97674 18.2814C4.45995 18.1574 4.02375 17.7212 3.15137 16.8488C2.27899 15.9764 1.84279 15.5402 1.71872 15.0234C1.6493 14.7342 1.6493 14.4327 1.71872 14.1436C1.8428 13.6268 2.27899 13.1906 3.15137 12.3182Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                        <path
                          d="M11.6667 15.0001C11.6667 13.7164 11.6667 13.0745 11.9556 12.603C12.1173 12.3392 12.3391 12.1174 12.6029 11.9557C13.0744 11.6667 13.7163 11.6667 15 11.6667C16.2837 11.6667 16.9255 11.6667 17.397 11.9557C17.6609 12.1174 17.8827 12.3392 18.0444 12.603C18.3333 13.0745 18.3333 13.7164 18.3333 15.0001C18.3333 16.2838 18.3333 16.9256 18.0444 17.3971C17.8827 17.661 17.6609 17.8828 17.397 18.0445C16.9255 18.3334 16.2837 18.3334 15 18.3334C13.7163 18.3334 13.0744 18.3334 12.6029 18.0445C12.3391 17.8828 12.1173 17.661 11.9556 17.3971C11.6667 16.9256 11.6667 16.2838 11.6667 15.0001Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                        <path
                          d="M15 1.66675V8.33341M18.3333 5.00008L11.6667 5.00008"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>

                    {/* Document Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Integration</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>
            <NavLink
              to="/help-center"
              className={({ isActive }: { isActive: boolean }) =>
                `relative flex h-[40px] w-[250px] items-center gap-4 ${
                  isActive ? "font-bold text-white" : "text-neutral-700"
                }`
              }
            >
              {({ isActive }: { isActive: boolean }) => (
                <div className="relative flex items-center w-full">
                  {/* Green Left Border when Active */}
                  {isActive && (
                    <div className="absolute left-0 h-[24px] w-[5px] rounded-[5px] bg-brand-base"></div>
                  )}
                  {/* Green Background  */}
                  <div
                    className={`flex items-center gap-2 rounded-[8px] px-3 ${
                      isActive
                        ? isCollapsed
                          ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                          : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                        : "mx-4 text-neutral-700"
                    }`}
                  >
                    {/* Icon */}
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 9.83721C14.1667 9.54919 14.1667 9.40518 14.21 9.2768C14.336 8.90386 14.6681 8.75913 15.0009 8.60757C15.375 8.43718 15.562 8.35198 15.7474 8.337C15.9577 8.31998 16.1685 8.36531 16.3483 8.46623C16.5867 8.60003 16.753 8.85427 16.9232 9.06101C17.7094 10.0159 18.1024 10.4933 18.2463 11.0198C18.3623 11.4447 18.3623 11.889 18.2463 12.3139C18.0365 13.0818 17.3737 13.7255 16.8831 14.3213C16.6322 14.6261 16.5067 14.7785 16.3483 14.8674C16.1685 14.9683 15.9577 15.0137 15.7474 14.9967C15.562 14.9817 15.375 14.8965 15.0009 14.7261C14.6681 14.5745 14.336 14.4298 14.21 14.0569C14.1667 13.9285 14.1667 13.7845 14.1667 13.4965V9.83721Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                        <path
                          d="M5.83332 9.83734C5.83332 9.47464 5.82314 9.14867 5.52992 8.89366C5.42326 8.80091 5.28187 8.73651 4.99908 8.6077C4.625 8.43732 4.43795 8.35212 4.25262 8.33713C3.69659 8.29216 3.39742 8.67167 3.07676 9.06115C2.29062 10.016 1.89754 10.4934 1.75371 11.0199C1.63764 11.4448 1.63764 11.8891 1.75371 12.314C1.96349 13.0819 2.62626 13.7256 3.11683 14.3215C3.42606 14.6971 3.72146 15.0398 4.25262 14.9968C4.43795 14.9818 4.625 14.8966 4.99908 14.7262C5.28187 14.5974 5.42326 14.533 5.52992 14.4403C5.82314 14.1853 5.83332 13.8593 5.83332 13.4966V9.83734Z"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                        />
                        <path
                          d="M16.6666 8.75008V7.50008C16.6666 4.27842 13.6819 1.66675 9.99998 1.66675C6.31808 1.66675 3.33331 4.27842 3.33331 7.50008V8.75008"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.6667 14.5835C16.6667 18.3335 13.3333 18.3335 10 18.3335"
                          stroke={isActive ? "#12725b" : "#595D61"}
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>

                    {/* Document Text */}
                    <h2 className="text-[14px] font-[600] leading-[20px]">
                      {!isCollapsed && <span>Help Center</span>}
                    </h2>
                  </div>
                </div>
              )}
            </NavLink>
          </div>
          <div className="my-[30px]"></div>
        </div>

        {/* User Info */}
        <div className="flex items-center border-t-[1px] border-neutral-200">
          <div className="mx-4 flex h-[72px] gap-3 py-[20px]">
            <div className="relative">
              <div className="h-[40px] w-[40px] rounded-full">
                <img src={profile} alt="" />
              </div>
              <span className="absolute right-0 top-[25px] h-[10px] w-[10px] rounded-full border-2 border-white bg-[#32B56A]"></span>
            </div>
            {!isCollapsed && (
              <div>
                <h3 className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                  Joshiah Ovo
                </h3>
                <h4 className="text-[12px] font-[500] leading-[12px] text-neutral-700">
                  Joshiahovo@gmail.com
                </h4>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <span>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.50004 1C1.50004 1 6.49999 4.68244 6.5 6.00004C6.50001 7.31763 1.5 11 1.5 11"
                  stroke="#696E71"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </>
  );
};
export default DesktopSidebar;
