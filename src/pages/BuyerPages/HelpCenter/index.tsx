// import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
// import Btn from "@/components/common/Btn";
// import { TbCreditCardPay } from "react-icons/tb";
// import {
//   IoPersonOutline,
//   IoBagRemoveOutline,
//   IoChevronForward,
// } from "react-icons/io5";
// import { AiOutlineDollarCircle } from "react-icons/ai";
// import { useEffect } from "react";
// import SearchBar from "@/components/SearchBar";

// const HelpCenter = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuItems = [
//     {
//       label: "Sending Money",
//       subtext: "Setting up, paying for editing and cancelling transfers.",
//       icon: <TbCreditCardPay />,
//       path: "",
//     },
//     {
//       label: "Managing Your Account",
//       subtext: "Setting up your account and getting verified.",
//       icon: <IoPersonOutline />,
//       path: "",
//     },
//     {
//       label: "Buying Landed Properties",
//       subtext: "Holding balances, setting up cards debits and using assets.",
//       icon: <AiOutlineDollarCircle />,
//       path: "/help",
//     },
//     {
//       label: "Instalment Payment",
//       subtext: "Multi-users access, accounting and using out API.",
//       icon: <IoBagRemoveOutline />,
//       path: "",
//     },
//   ];

//   useEffect(() => {
//     if (location.pathname === "/help-center") {
//       navigate("/help-center/buy");
//     }
//   }, [location.pathname, navigate]);

//   return (
//     <div className="mx-[30px] flex">
//       {/* Sidebar */}
//       <div className="pr-4">
//         <div className="rounded-[16px] bg-[#EEFBF6]">
//           <div className="mt-[30px] px-[30px] pt-[30px]">
//             <h2 className="text-[24px] font-[800] leading-[31px] text-[#1A202C]">
//               Hi, how can we help?
//             </h2>
//             <h6 className="pt-2 text-[14px] font-[400] leading-[21px] tracking-wide text-[#718096]">
//               Type your question or search keyword
//             </h6>
//             <div className="mt-[20px]">
//               <SearchBar placeholder="Search...." className="w-[355px]" />
//             </div>
//           </div>

//           <div className="p-[30px]">
//             <h2 className="pb-2">Popular search</h2>
//             <div className="flex gap-[12px]">
//               <div className="justify-left flex">
//                 <Btn
//                   className="h-[32px] w-[97px] rounded-[8px] border-[1px] border-[#12725B] text-[12px] font-[600] leading-[18px] text-[#12725B]"
//                   text="Save Money"
//                 />
//               </div>
//               <div className="justify-left flex">
//                 <Btn
//                   className="h-[32px] w-[97px] rounded-[8px] border-[1px] border-[#12725B] text-[12px] font-[600] leading-[18px] text-[#12725B]"
//                   text="Buy Land"
//                 />
//               </div>
//               <div className="justify-left flex">
//                 <Btn
//                   className="h-[32px] w-[97px] rounded-[8px] border-[1px] border-[#12725B] text-[12px] font-[600] leading-[18px] text-[#12725B]"
//                   text="Buy House"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar Navigation */}
//         <div className="mt-6">
//           {menuItems.map(({ label, icon, subtext, path }) => (
//             <NavLink
//               key={label}
//               to={path}
//               className={({ isActive }) =>
//                 `my-[20px] flex h-[96px] cursor-pointer items-center gap-[10px] rounded-[8px] border px-[20px] ${
//                   isActive
//                     ? "border-[#EDF2F7] bg-[#fff]"
//                     : "order-[1px] border-[#12725b] text-[#1A202C]"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   {/* Icon */}
//                   <div
//                     className={`flex h-[48px] w-[48px] items-center justify-center rounded-full ${
//                       isActive
//                         ? "bg-[#F7FAFC] text-[#1A202C]"
//                         : "bg-[#12725b] text-[#FFF]"
//                     }`}
//                   >
//                     {icon}
//                   </div>

//                   {/* Label and Subtext */}
//                   <div className="flex-1">
//                     <span className="text-[14px] font-[700] text-[#1A202C]">
//                       {label}
//                     </span>
//                     <h6 className="text-[12px] font-[400] text-[#718096]">
//                       {subtext}
//                     </h6>
//                   </div>

//                   {/* Arrow Icon */}
//                   <IoChevronForward className="text-[#718096]" />
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//       <div className="h-[65rem] border-[1px] border-[#EDF2F7]"></div>
//       {/* Main Content */}
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default HelpCenter;
const HelpCenter = () => {
  return(
    <>
      <div>
        <h2>Help Center</h2>
      </div>
    </>
  )
}
export default HelpCenter;