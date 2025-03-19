// import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
// import Btn from "@/components/common/Btn";
// import CircularProgressBar from "@/components/CircularProgressBar";
// import { IoPersonOutline, IoShieldOutline } from "react-icons/io5";
// import { CiCalendarDate, CiLock, CiCreditCard1 } from "react-icons/ci";
// import { useEffect } from "react";

// const Settings = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const menuItems = [
//     {
//       label: "Personal Information",
//       subtext: "View your details to receive money.",
//       icon: <IoPersonOutline />,
//       path: "/settings/profile",
//     },
//     {
//       label: "Security Settings",
//       subtext: "Set up and manage security settings.",
//       icon: <CiCreditCard1 />,
//       path: "/settings/security",
//     },
//     {
//       label: "Notifications",
//       subtext: "Manage your notifications.",
//       icon: <CiCalendarDate />,
//       path: "/settings/notifications",
//     },
//     {
//       label: "Login and Security",
//       subtext: "Manage your login details and security options.",
//       icon: <IoShieldOutline />,
//       path: "/settings/login-security",
//     },
//     {
//       label: "Preferences",
//       subtext: "Set your user preferences.",
//       icon: <CiLock />,
//       path: "/settings/preference",
//     },
//   ];

//   useEffect(() => {
//     if (location.pathname === "/settings") {
//       navigate("/settings/profile");
//     }
//   }, [location.pathname, navigate]);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="">
//         <div className="mx-[20px] my-[30px] h-[188px] w-[287px] rounded-[12px] bg-[#12725b]">
//           <div className="flex items-center gap-[20px] p-[25px]">
//             <CircularProgressBar />
//             <div>
//               <h1 className="text-[16px] font-[600] leading-[24px] tracking-wide text-white">
//                 Complete Profile
//               </h1>
//               <h6 className="text-[12px] font-[200] leading-[18px] tracking-wider text-white">
//                 Complete your profile to unlock all features
//               </h6>
//             </div>
//           </div>
//           <div className="justify-left flex">
//             <Btn
//               text="Verify Identity"
//               type="button"
//               className="mx-[25px] h-[40px] w-[239px] bg-[#fff] text-[12px] font-[500] leading-[18px] tracking-wider text-[#12725b]"
//             />
//           </div>
//         </div>

//         {/* Sidebar Navigation */}
//         <div>
//           {menuItems.map(({ label, icon, subtext, path }) => (
//             <NavLink
//               key={label}
//               to={path}
//               className={({ isActive }) =>
//                 `flex h-[96px] cursor-pointer items-center gap-[10px] px-[20px] ${
//                   isActive ? "bg-[#fafafa]" : "text-[#1A202C"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   <div
//                     className={`flex h-[48px] w-[48px] items-center justify-center rounded-full ${
//                       isActive
//                         ? "bg-white text-[#12725b]"
//                         : "bg-[#F7FAFC] text-[#1A202C]"
//                     }`}
//                   >
//                     <span className="text-xl">{icon}</span>
//                   </div>

//                   {/* Label and Subtext */}
//                   <div>
//                     <span className="text-[14px] font-[700] leading-[21px] tracking-wide text-[#1A202C]">
//                       {label}
//                     </span>
//                     <h6 className="text-[12px] font-[400] leading-[18px] tracking-wider text-[#718096]">
//                       {subtext}
//                     </h6>
//                   </div>
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

// export default Settings;
const Settings = () => {
  return (
    <>
      <div>
        <h1>Settings</h1>
      </div>
    </>
  )
}
export default Settings;