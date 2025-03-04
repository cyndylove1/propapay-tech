// import Modal from "@/components/Modal";
// import SearchBar from "@/components/SearchBar";
// import { useState } from "react";

// const Transactions: React.FC = () => {
//    const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <h2 className="px-[20px] pt-[30px] text-[24px] font-[600] leading-[36px]">
//         Transaction
//       </h2>
//       <div className="overflow-x-auto pt-[30px]">
//         <div className="flex items-center justify-between px-[20px] py-4">
//           <SearchBar
//             placeholder="Search for transactions..."
//             className="w-[295px]"
//           />
//           <div className="flex gap-[24px]">
//             <div
//               className="flex h-[48px] w-[94px] cursor-pointer items-center justify-center gap-[5px] rounded-[12px] border-[1px] border-[#E8E8E8] bg-white"
//               onClick={() => setIsOpen(true)}
//             >
//               <span>
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M2.5 5.8335H17.5"
//                     stroke="#303030"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                   />
//                   <path
//                     d="M5 10H15"
//                     stroke="#303030"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                   />
//                   <path
//                     d="M8.33331 14.1665H11.6666"
//                     stroke="#303030"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                   />
//                 </svg>
//               </span>
//               <h2 className="text-[14px] font-[400] leading-[21px] text-[#303030]">
//                 Filter
//               </h2>
//             </div>
//             <div className="flex h-[48px] w-[94px] cursor-pointer items-center justify-center gap-[5px] rounded-[12px] border-[1px] border-[#E8E8E8] bg-white">
//               <span>
//                 <svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M10 1.6665C5.40002 1.6665 1.66669 5.39984 1.66669 9.99984C1.66669 14.5998 5.40002 18.3332 10 18.3332C14.6 18.3332 18.3334 14.5998 18.3334 9.99984"
//                     stroke="#303030"
//                     stroke-width="1.5"
//                     stroke-miterlimit="10"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                   <path
//                     d="M10.8333 9.16683L17.6666 2.3335"
//                     stroke="#303030"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                   <path
//                     d="M18.3334 5.6915V1.6665H14.3083"
//                     stroke="#303030"
//                     stroke-width="1.5"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                 </svg>
//               </span>
//               <h2 className="text-[14px] font-[400] leading-[21px] text-[#303030]">
//                 Export
//               </h2>
//             </div>
//           </div>
//         </div>
//         <table className="table">
//           {/* head */}
//           <thead className="">
//             <tr className="mx-[20px]">
//               <th>
//                 <span className="flex items-center gap-[5px]">
//                   <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
//                     Property
//                   </h2>
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M11.3333 2V14"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M6.66666 12L4.66666 14L2.66666 12"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M4.66666 14V2"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M13.3333 4L11.3333 2L9.33333 4"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </th>
//               <th className="">
//                 <span className="flex items-center gap-[5px]">
//                   <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
//                     Date
//                   </h2>
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M11.3333 2V14"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M6.66666 12L4.66666 14L2.66666 12"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M4.66666 14V2"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M13.3333 4L11.3333 2L9.33333 4"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </th>
//               <th>
//                 <span className="flex items-center gap-[5px]">
//                   <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
//                     Invoice
//                   </h2>
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M11.3333 2V14"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M6.66666 12L4.66666 14L2.66666 12"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M4.66666 14V2"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M13.3333 4L11.3333 2L9.33333 4"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </th>
//               <th>
//                 <span className="flex items-center gap-[5px]">
//                   <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
//                     Amount
//                   </h2>
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M11.3333 2V14"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M6.66666 12L4.66666 14L2.66666 12"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M4.66666 14V2"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M13.3333 4L11.3333 2L9.33333 4"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </th>
//               <th>
//                 <span className="flex items-center gap-[5px]">
//                   <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
//                     Status
//                   </h2>
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M11.3333 2V14"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M6.66666 12L4.66666 14L2.66666 12"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M4.66666 14V2"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M13.3333 4L11.3333 2L9.33333 4"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </th>
//               <th>
//                 <span className="flex items-center gap-[5px]">
//                   <h2 className="text-[16px] font-[500] leading-[24px] text-[#718096]">
//                     Actions
//                   </h2>
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M11.3333 2V14"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M6.66666 12L4.66666 14L2.66666 12"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M4.66666 14V2"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                     <path
//                       d="M13.3333 4L11.3333 2L9.33333 4"
//                       stroke="#718096"
//                       stroke-width="1.5"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* row 1 */}
//             <tr className="">
//               <td>
//                 <div className="flex items-center gap-3">
//                   <span className="">
//                     <svg
//                       width="44"
//                       height="44"
//                       viewBox="0 0 44 44"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect width="44" height="44" rx="16" fill="#EEF8EE" />
//                       <path
//                         d="M28.0104 24.5737L28.0104 15.9894L19.4261 15.9894"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M15.9896 28.01L27.8902 16.1094"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   <div>
//                     <div className="text-[14px] font-[700] leading-[24px] text-[#000929]">
//                       Beverly Springfield
//                     </div>
//                     <div className="text-[14px] leading-[21px] text-[#718096] text-[400]">
//                       Witdraw
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <div className="text-[16px] font-[500] leading-[24px] text-[#1A202C]">
//                       Nov 15, 2024
//                     </div>
//                     <div className="text[#718096] text-[14px] leading-[21px] text-[500]">
//                       at 08.00 PM
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td className="text-[14px] font-[500] leading-[24px] text-[#1A202C]">
//                 PMX09812
//               </td>
//               <td className="text-[16px] font-[700] leading-[24px] text-[#1A202C]">
//                 N300,00.00
//               </td>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] bg-[#FFF7F5] font-[400] text-[#FF784B]">
//                   Pending
//                 </button>
//               </th>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] border-[1px] border-[#EDF2F7] text-[14px] font-[800] leading-[21px] text-[#1A202C]">
//                   details
//                 </button>
//               </th>
//             </tr>
//             <tr className="">
//               <td>
//                 <div className="flex items-center gap-3">
//                   <span>
//                     <svg
//                       width="44"
//                       height="44"
//                       viewBox="0 0 44 44"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect width="44" height="44" rx="16" fill="#EEF8EE" />
//                       <path
//                         d="M28.0104 24.5737L28.0104 15.9894L19.4261 15.9894"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M15.9896 28.01L27.8902 16.1094"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   <div>
//                     <div className="text-[14px] font-[700] leading-[24px] text-[#000929]">
//                       Beverly Springfield
//                     </div>
//                     <div className="text-[14px] leading-[21px] text-[#718096] text-[400]">
//                       Deposit
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <div className="text-[16px] font-[500] leading-[24px] text-[#1A202C]">
//                       Nov 15, 2024
//                     </div>
//                     <div className="text[#718096] text-[14px] leading-[21px] text-[500]">
//                       at 08.00 PM
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td className="text-[14px] font-[500] leading-[24px] text-[#1A202C]">
//                 PMX09812
//               </td>
//               <td className="text-[16px] font-[700] leading-[24px] text-[#1A202C]">
//                 N300,00.00
//               </td>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] bg-[#F6FDF9] font-[400] text-[#22C55E]">
//                   Success
//                 </button>
//               </th>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] border-[1px] border-[#EDF2F7] text-[14px] font-[800] leading-[21px] text-[#1A202C]">
//                   details
//                 </button>
//               </th>
//             </tr>
//             <tr className="">
//               <td>
//                 <div className="flex items-center gap-3">
//                   <span className="">
//                     <svg
//                       width="44"
//                       height="44"
//                       viewBox="0 0 44 44"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect width="44" height="44" rx="16" fill="#EEF8EE" />
//                       <path
//                         d="M28.0104 24.5737L28.0104 15.9894L19.4261 15.9894"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M15.9896 28.01L27.8902 16.1094"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   <div>
//                     <div className="text-[14px] font-[700] leading-[24px] text-[#000929]">
//                       Beverly Springfield
//                     </div>
//                     <div className="text-[14px] leading-[21px] text-[#718096] text-[400]">
//                       Advertising
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <div className="text-[16px] font-[500] leading-[24px] text-[#1A202C]">
//                       Nov 15, 2024
//                     </div>
//                     <div className="text[#718096] text-[14px] leading-[21px] text-[500]">
//                       at 08.00 PM
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td className="text-[14px] font-[500] leading-[24px] text-[#1A202C]">
//                 PMX09812
//               </td>
//               <td className="text-[16px] font-[700] leading-[24px] text-[#1A202C]">
//                 N300,00.00
//               </td>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] bg-[#F6FDF9] font-[400] text-[#22C55E]">
//                   Success
//                 </button>
//               </th>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] border-[1px] border-[#EDF2F7] text-[14px] font-[800] leading-[21px] text-[#1A202C]">
//                   details
//                 </button>
//               </th>
//             </tr>
//             <tr className="">
//               <td>
//                 <div className="flex items-center gap-3">
//                   <span>
//                     <svg
//                       width="44"
//                       height="44"
//                       viewBox="0 0 44 44"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect width="44" height="44" rx="16" fill="#EEF8EE" />
//                       <path
//                         d="M28.0104 24.5737L28.0104 15.9894L19.4261 15.9894"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M15.9896 28.01L27.8902 16.1094"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   <div>
//                     <div className="text-[14px] font-[700] leading-[24px] text-[#000929]">
//                       Beverly Springfield
//                     </div>
//                     <div className="text-[14px] leading-[21px] text-[#718096] text-[400]">
//                       Business
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <div className="text-[16px] font-[500] leading-[24px] text-[#1A202C]">
//                       Nov 15, 2024
//                     </div>
//                     <div className="text[#718096] text-[14px] leading-[21px] text-[500]">
//                       at 08.00 PM
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td className="text-[14px] font-[500] leading-[24px] text-[#1A202C]">
//                 PMX09812
//               </td>
//               <td className="text-[16px] font-[700] leading-[24px] text-[#1A202C]">
//                 N300,00.00
//               </td>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] bg-[#FFF7F5] font-[400] text-[#FF784B]">
//                   Pending
//                 </button>
//               </th>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] border-[1px] border-[#EDF2F7] text-[14px] font-[800] leading-[21px] text-[#1A202C]">
//                   details
//                 </button>
//               </th>
//             </tr>
//             <tr className="">
//               <td>
//                 <div className="flex items-center gap-3">
//                   <span>
//                     <svg
//                       width="44"
//                       height="44"
//                       viewBox="0 0 44 44"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect width="44" height="44" rx="16" fill="#EEF8EE" />
//                       <path
//                         d="M28.0104 24.5737L28.0104 15.9894L19.4261 15.9894"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M15.9896 28.01L27.8902 16.1094"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   <div>
//                     <div className="text-[14px] font-[700] leading-[24px] text-[#000929]">
//                       Beverly Springfield
//                     </div>
//                     <div className="text-[14px] leading-[21px] text-[#718096] text-[400]">
//                       Transfer
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <div className="text-[16px] font-[500] leading-[24px] text-[#1A202C]">
//                       Nov 15, 2024
//                     </div>
//                     <div className="text[#718096] text-[14px] leading-[21px] text-[500]">
//                       at 08.00 PM
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td className="text-[14px] font-[500] leading-[24px] text-[#1A202C]">
//                 PMX09812
//               </td>
//               <td className="text-[16px] font-[700] leading-[24px] text-[#1A202C]">
//                 N300,00.00
//               </td>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] bg-[#fff5f5] font-[400] text-[#FF4747]">
//                   Failed
//                 </button>
//               </th>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] border-[1px] border-[#EDF2F7] text-[14px] font-[800] leading-[21px] text-[#1A202C]">
//                   details
//                 </button>
//               </th>
//             </tr>
//             <tr className="">
//               <td>
//                 <div className="flex items-center gap-3">
//                   <span>
//                     <svg
//                       width="44"
//                       height="44"
//                       viewBox="0 0 44 44"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect width="44" height="44" rx="16" fill="#EEF8EE" />
//                       <path
//                         d="M28.0104 24.5737L28.0104 15.9894L19.4261 15.9894"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M15.9896 28.01L27.8902 16.1094"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   <div>
//                     <div className="text-[14px] font-[700] leading-[24px] text-[#000929]">
//                       Beverly Springfield
//                     </div>
//                     <div className="text-[14px] leading-[21px] text-[#718096] text-[400]">
//                       Payment
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <div className="text-[16px] font-[500] leading-[24px] text-[#1A202C]">
//                       Nov 15, 2024
//                     </div>
//                     <div className="text[#718096] text-[14px] leading-[21px] text-[500]">
//                       at 08.00 PM
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td className="text-[14px] font-[500] leading-[24px] text-[#1A202C]">
//                 PMX09812
//               </td>
//               <td className="text-[16px] font-[700] leading-[24px] text-[#1A202C]">
//                 N300,00.00
//               </td>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] bg-[#F6FDF9] font-[400] text-[#22C55E]">
//                   Success
//                 </button>
//               </th>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] border-[1px] border-[#EDF2F7] text-[14px] font-[800] leading-[21px] text-[#1A202C]">
//                   details
//                 </button>
//               </th>
//             </tr>
//             <tr className="border-[1px] border-[#DFE8F6]">
//               <td>
//                 <div className="flex items-center gap-3">
//                   <span>
//                     <svg
//                       width="44"
//                       height="44"
//                       viewBox="0 0 44 44"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect width="44" height="44" rx="16" fill="#EEF8EE" />
//                       <path
//                         d="M28.0104 24.5737L28.0104 15.9894L19.4261 15.9894"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                       <path
//                         d="M15.9896 28.01L27.8902 16.1094"
//                         stroke="#007600"
//                         stroke-width="1.5"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   <div>
//                     <div className="text-[14px] font-[700] leading-[24px] text-[#000929]">
//                       Beverly Springfield
//                     </div>
//                     <div className="text[#718096] text-[14px] leading-[21px] text-[400]">
//                       Witdraw
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td>
//                 <div className="flex items-center gap-3">
//                   <div>
//                     <div className="text-[16px] font-[500] leading-[24px] text-[#1A202C]">
//                       Nov 15, 2024
//                     </div>
//                     <div className="text[#718096] text-[14px] leading-[21px] text-[500]">
//                       at 08.00 PM
//                     </div>
//                   </div>
//                 </div>
//               </td>
//               <td className="text-[14px] font-[500] leading-[24px] text-[#1A202C]">
//                 PMX09812
//               </td>
//               <td className="text-[16px] font-[700] leading-[24px] text-[#1A202C]">
//                 N300,00.00
//               </td>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] bg-[#FFF7F5] font-[400] text-[#FF784B]">
//                   pending
//                 </button>
//               </th>
//               <th>
//                 <button className="h-[40px] w-[96px] rounded-[8px] border-[1px] border-[#EDF2F7] text-[14px] font-[800] leading-[21px] text-[#1A202C]">
//                   details
//                 </button>
//               </th>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </>
//   );
// };
// export default Transactions;
const Transaction = () => {
  return (
    <>
      <h1>Transaction</h1>
    </>
  )
}
export default Transaction;