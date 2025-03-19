import { NavLink } from "react-router";
import profile from "@/assets/images/Avatar.png";
import { sidebarItems } from "../data";

interface DesktopSidebarProps {
  isCollapsed: boolean;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ isCollapsed }) => {
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
            <span className="">
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
        <aside className="text-white">
          {sidebarItems.map((section) => (
            <div key={section.title} className="mb-4">
              <h2
                className={`py-[20px] text-[12px] font-[600] leading-[16px] text-neutral-500 ${
                  section.title === "MAIN"
                    ? "px-6"
                    : section.title === "OTHERS"
                      ? "px-4"
                      : ""
                }`}
              >
                {section.title}
              </h2>
              <ul>
                {section.items.map((item) => (
                  <li
                    key={item.id}
                    className={item.id === 10 ? "pt-[20rem]" : ""}
                  >
                    <NavLink
                      to={item.path}
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
                          {/* Icon & Label */}
                          <div
                            className={`flex items-center gap-2 rounded-[8px] px-3 ${
                              isActive
                                ? isCollapsed
                                  ? "mx-4 h-[44px] w-[44px] bg-gradient-to-r from-brand-base to-[#23A681] text-center"
                                  : "mx-4 h-[40px] w-[240px] bg-gradient-to-r from-brand-base to-[#23A681]"
                                : "mx-4 text-neutral-700"
                            }`}
                          >
                            <span className="">{item.icon(isActive)}</span>

                            {!isCollapsed && (
                              <h2 className="text-[14px] font-[600] leading-[20px]">
                                {item.Label}
                              </h2>
                            )}
                          </div>
                        </div>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

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
