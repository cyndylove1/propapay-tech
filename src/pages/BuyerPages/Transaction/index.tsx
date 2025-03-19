import { useState } from "react";
import Checkbox from "@/components/common/Checkbox";
import TransactionMenu from "@/components/TransactionMenu";
import ExportModal from "@/components/ExportModal";
import TableHeader from "@/components/TableHeader";


const Transaction: React.FC = () => {
  const [Open, setOpen] = useState<boolean>(false);
  const [OpenMenu, setOpenMenu] = useState(false);

  const toggleMenuDropdown = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      {/* Header title */}
      <div className="h-[1000px]">
        <div className="flex items-center justify-between px-4 pt-[20px]">
          <h2 className="text-[18px] font-[600] leading-[32px] text-neutral-950 md:text-[24px]">
            Transactions
          </h2>
          <div className="flex items-center gap-[12px]">
            <button
              className="flex items-center gap-[4px] rounded-lg border-[1px] border-neutral-200 p-2"
              onClick={() => setOpen(true)}
            >
              <span className="">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.50012 11.666L2.69499 12.2181C3.45345 14.3671 3.83269 15.4416 4.69797 16.0538C5.56325 16.666 6.7027 16.666 8.98159 16.666H11.0187C13.2975 16.666 14.437 16.666 15.3023 16.0538C16.1676 15.4416 16.5468 14.3671 17.3053 12.2181L17.5001 11.666"
                    stroke="#4E5257"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10.0001 11.6663V3.33301M10.0001 11.6663C9.41662 11.6663 8.32642 10.0044 7.91681 9.58301M10.0001 11.6663C10.5837 11.6663 11.6739 10.0044 12.0835 9.58301"
                    stroke="#4E5257"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h3 className="text-[14px] font-[600] leading-[20px] text-neutral-700">
                Export
              </h3>
            </button>

            <button className="flex items-center gap-[4px] rounded-lg bg-[#12725B] p-2">
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
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h3 className="text-[14px] font-[600] leading-[20px] text-[#FFF]">
                Synchronize
              </h3>
            </button>
          </div>
        </div>

        {/* content header */}
        <div className="m-4 rounded-xl border-[1px] border-neutral-200">
          <TableHeader/>
          {/* Table content */}
          <div className="">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-[#F7F8F9]">
                  <tr>
                    <th>
                      <Checkbox />
                    </th>
                    <th>
                      <span className="flex items-center gap-[5px]">
                        <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                          DESCRIPTION
                        </h2>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.96824 6.07339C3.06252 6.28253 3.27063 6.41699 3.50004 6.41699L10.5 6.41697C10.7294 6.41697 10.9376 6.2825 11.0318 6.07336C11.1261 5.86422 11.0891 5.61923 10.9371 5.44734L10.9359 5.44597C10.9149 5.42243 10.856 5.35665 10.8197 5.31656C10.7456 5.2348 10.6391 5.11851 10.5086 4.97917C10.2482 4.70105 9.88954 4.32851 9.49982 3.95446C9.11258 3.5828 8.68295 3.19831 8.28186 2.90298C8.08169 2.7556 7.87608 2.62104 7.67707 2.52106C7.49005 2.42711 7.25118 2.33366 7.00001 2.33366C6.74884 2.33366 6.50997 2.42711 6.32295 2.52106C6.12394 2.62104 5.91833 2.7556 5.71816 2.90299C5.31708 3.19831 4.88745 3.58281 4.50022 3.95447C4.11051 4.32852 3.75189 4.70107 3.49142 4.9792C3.36094 5.11854 3.25448 5.23483 3.18038 5.31659C3.14372 5.35703 3.08442 5.42334 3.06386 5.44633L3.06319 5.44708C2.91127 5.61898 2.87396 5.86425 2.96824 6.07339Z"
                            fill="#888D93"
                          />
                          <path
                            d="M2.96824 7.9271C3.06252 7.71796 3.27063 7.5835 3.50004 7.5835L10.5 7.58352C10.7294 7.58352 10.9376 7.71799 11.0318 7.92713C11.1261 8.13627 11.0891 8.38126 10.9371 8.55315L10.9359 8.55449C10.9149 8.57801 10.856 8.64382 10.8197 8.68393C10.7456 8.76569 10.6391 8.88198 10.5086 9.02132C10.2482 9.29944 9.88954 9.67198 9.49982 10.046C9.11258 10.4177 8.68295 10.8022 8.28186 11.0975C8.08169 11.2449 7.87608 11.3794 7.67707 11.4794C7.49005 11.5734 7.25118 11.6668 7.00001 11.6668C6.74884 11.6668 6.50997 11.5734 6.32295 11.4794C6.12394 11.3794 5.91833 11.2449 5.71816 11.0975C5.31708 10.8022 4.88745 10.4177 4.50022 10.046C4.11051 9.67197 3.75189 9.29942 3.49142 9.02129C3.36094 8.88195 3.25448 8.76566 3.18038 8.6839C3.14373 8.64347 3.08446 8.57719 3.06388 8.55418L3.06319 8.55341C2.91127 8.38151 2.87396 8.13624 2.96824 7.9271Z"
                            fill="#888D93"
                          />
                        </svg>
                      </span>
                    </th>
                    <th>
                      <span className="flex items-center gap-[5px]">
                        <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                          METHOD
                        </h2>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.96824 6.07339C3.06252 6.28253 3.27063 6.41699 3.50004 6.41699L10.5 6.41697C10.7294 6.41697 10.9376 6.2825 11.0318 6.07336C11.1261 5.86422 11.0891 5.61923 10.9371 5.44734L10.9359 5.44597C10.9149 5.42243 10.856 5.35665 10.8197 5.31656C10.7456 5.2348 10.6391 5.11851 10.5086 4.97917C10.2482 4.70105 9.88954 4.32851 9.49982 3.95446C9.11258 3.5828 8.68295 3.19831 8.28186 2.90298C8.08169 2.7556 7.87608 2.62104 7.67707 2.52106C7.49005 2.42711 7.25118 2.33366 7.00001 2.33366C6.74884 2.33366 6.50997 2.42711 6.32295 2.52106C6.12394 2.62104 5.91833 2.7556 5.71816 2.90299C5.31708 3.19831 4.88745 3.58281 4.50022 3.95447C4.11051 4.32852 3.75189 4.70107 3.49142 4.9792C3.36094 5.11854 3.25448 5.23483 3.18038 5.31659C3.14372 5.35703 3.08442 5.42334 3.06386 5.44633L3.06319 5.44708C2.91127 5.61898 2.87396 5.86425 2.96824 6.07339Z"
                            fill="#888D93"
                          />
                          <path
                            d="M2.96824 7.9271C3.06252 7.71796 3.27063 7.5835 3.50004 7.5835L10.5 7.58352C10.7294 7.58352 10.9376 7.71799 11.0318 7.92713C11.1261 8.13627 11.0891 8.38126 10.9371 8.55315L10.9359 8.55449C10.9149 8.57801 10.856 8.64382 10.8197 8.68393C10.7456 8.76569 10.6391 8.88198 10.5086 9.02132C10.2482 9.29944 9.88954 9.67198 9.49982 10.046C9.11258 10.4177 8.68295 10.8022 8.28186 11.0975C8.08169 11.2449 7.87608 11.3794 7.67707 11.4794C7.49005 11.5734 7.25118 11.6668 7.00001 11.6668C6.74884 11.6668 6.50997 11.5734 6.32295 11.4794C6.12394 11.3794 5.91833 11.2449 5.71816 11.0975C5.31708 10.8022 4.88745 10.4177 4.50022 10.046C4.11051 9.67197 3.75189 9.29942 3.49142 9.02129C3.36094 8.88195 3.25448 8.76566 3.18038 8.6839C3.14373 8.64347 3.08446 8.57719 3.06388 8.55418L3.06319 8.55341C2.91127 8.38151 2.87396 8.13624 2.96824 7.9271Z"
                            fill="#888D93"
                          />
                        </svg>
                      </span>
                    </th>
                    <th>
                      <span className="flex items-center gap-[5px]">
                        <h2 className="text-[12px] font-[500] leading-[16Px] text-neutral-600">
                          TRANSACTION ID
                        </h2>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.96824 6.07339C3.06252 6.28253 3.27063 6.41699 3.50004 6.41699L10.5 6.41697C10.7294 6.41697 10.9376 6.2825 11.0318 6.07336C11.1261 5.86422 11.0891 5.61923 10.9371 5.44734L10.9359 5.44597C10.9149 5.42243 10.856 5.35665 10.8197 5.31656C10.7456 5.2348 10.6391 5.11851 10.5086 4.97917C10.2482 4.70105 9.88954 4.32851 9.49982 3.95446C9.11258 3.5828 8.68295 3.19831 8.28186 2.90298C8.08169 2.7556 7.87608 2.62104 7.67707 2.52106C7.49005 2.42711 7.25118 2.33366 7.00001 2.33366C6.74884 2.33366 6.50997 2.42711 6.32295 2.52106C6.12394 2.62104 5.91833 2.7556 5.71816 2.90299C5.31708 3.19831 4.88745 3.58281 4.50022 3.95447C4.11051 4.32852 3.75189 4.70107 3.49142 4.9792C3.36094 5.11854 3.25448 5.23483 3.18038 5.31659C3.14372 5.35703 3.08442 5.42334 3.06386 5.44633L3.06319 5.44708C2.91127 5.61898 2.87396 5.86425 2.96824 6.07339Z"
                            fill="#888D93"
                          />
                          <path
                            d="M2.96824 7.9271C3.06252 7.71796 3.27063 7.5835 3.50004 7.5835L10.5 7.58352C10.7294 7.58352 10.9376 7.71799 11.0318 7.92713C11.1261 8.13627 11.0891 8.38126 10.9371 8.55315L10.9359 8.55449C10.9149 8.57801 10.856 8.64382 10.8197 8.68393C10.7456 8.76569 10.6391 8.88198 10.5086 9.02132C10.2482 9.29944 9.88954 9.67198 9.49982 10.046C9.11258 10.4177 8.68295 10.8022 8.28186 11.0975C8.08169 11.2449 7.87608 11.3794 7.67707 11.4794C7.49005 11.5734 7.25118 11.6668 7.00001 11.6668C6.74884 11.6668 6.50997 11.5734 6.32295 11.4794C6.12394 11.3794 5.91833 11.2449 5.71816 11.0975C5.31708 10.8022 4.88745 10.4177 4.50022 10.046C4.11051 9.67197 3.75189 9.29942 3.49142 9.02129C3.36094 8.88195 3.25448 8.76566 3.18038 8.6839C3.14373 8.64347 3.08446 8.57719 3.06388 8.55418L3.06319 8.55341C2.91127 8.38151 2.87396 8.13624 2.96824 7.9271Z"
                            fill="#888D93"
                          />
                        </svg>
                      </span>
                    </th>
                    <th>
                      <span className="flex items-center gap-[5px]">
                        <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                          DATE
                        </h2>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.96824 6.07339C3.06252 6.28253 3.27063 6.41699 3.50004 6.41699L10.5 6.41697C10.7294 6.41697 10.9376 6.2825 11.0318 6.07336C11.1261 5.86422 11.0891 5.61923 10.9371 5.44734L10.9359 5.44597C10.9149 5.42243 10.856 5.35665 10.8197 5.31656C10.7456 5.2348 10.6391 5.11851 10.5086 4.97917C10.2482 4.70105 9.88954 4.32851 9.49982 3.95446C9.11258 3.5828 8.68295 3.19831 8.28186 2.90298C8.08169 2.7556 7.87608 2.62104 7.67707 2.52106C7.49005 2.42711 7.25118 2.33366 7.00001 2.33366C6.74884 2.33366 6.50997 2.42711 6.32295 2.52106C6.12394 2.62104 5.91833 2.7556 5.71816 2.90299C5.31708 3.19831 4.88745 3.58281 4.50022 3.95447C4.11051 4.32852 3.75189 4.70107 3.49142 4.9792C3.36094 5.11854 3.25448 5.23483 3.18038 5.31659C3.14372 5.35703 3.08442 5.42334 3.06386 5.44633L3.06319 5.44708C2.91127 5.61898 2.87396 5.86425 2.96824 6.07339Z"
                            fill="#888D93"
                          />
                          <path
                            d="M2.96824 7.9271C3.06252 7.71796 3.27063 7.5835 3.50004 7.5835L10.5 7.58352C10.7294 7.58352 10.9376 7.71799 11.0318 7.92713C11.1261 8.13627 11.0891 8.38126 10.9371 8.55315L10.9359 8.55449C10.9149 8.57801 10.856 8.64382 10.8197 8.68393C10.7456 8.76569 10.6391 8.88198 10.5086 9.02132C10.2482 9.29944 9.88954 9.67198 9.49982 10.046C9.11258 10.4177 8.68295 10.8022 8.28186 11.0975C8.08169 11.2449 7.87608 11.3794 7.67707 11.4794C7.49005 11.5734 7.25118 11.6668 7.00001 11.6668C6.74884 11.6668 6.50997 11.5734 6.32295 11.4794C6.12394 11.3794 5.91833 11.2449 5.71816 11.0975C5.31708 10.8022 4.88745 10.4177 4.50022 10.046C4.11051 9.67197 3.75189 9.29942 3.49142 9.02129C3.36094 8.88195 3.25448 8.76566 3.18038 8.6839C3.14373 8.64347 3.08446 8.57719 3.06388 8.55418L3.06319 8.55341C2.91127 8.38151 2.87396 8.13624 2.96824 7.9271Z"
                            fill="#888D93"
                          />
                        </svg>
                      </span>
                    </th>
                    <th>
                      <span className="flex items-center gap-[5px]">
                        <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                          AMOUNT
                        </h2>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.96824 6.07339C3.06252 6.28253 3.27063 6.41699 3.50004 6.41699L10.5 6.41697C10.7294 6.41697 10.9376 6.2825 11.0318 6.07336C11.1261 5.86422 11.0891 5.61923 10.9371 5.44734L10.9359 5.44597C10.9149 5.42243 10.856 5.35665 10.8197 5.31656C10.7456 5.2348 10.6391 5.11851 10.5086 4.97917C10.2482 4.70105 9.88954 4.32851 9.49982 3.95446C9.11258 3.5828 8.68295 3.19831 8.28186 2.90298C8.08169 2.7556 7.87608 2.62104 7.67707 2.52106C7.49005 2.42711 7.25118 2.33366 7.00001 2.33366C6.74884 2.33366 6.50997 2.42711 6.32295 2.52106C6.12394 2.62104 5.91833 2.7556 5.71816 2.90299C5.31708 3.19831 4.88745 3.58281 4.50022 3.95447C4.11051 4.32852 3.75189 4.70107 3.49142 4.9792C3.36094 5.11854 3.25448 5.23483 3.18038 5.31659C3.14372 5.35703 3.08442 5.42334 3.06386 5.44633L3.06319 5.44708C2.91127 5.61898 2.87396 5.86425 2.96824 6.07339Z"
                            fill="#888D93"
                          />
                          <path
                            d="M2.96824 7.9271C3.06252 7.71796 3.27063 7.5835 3.50004 7.5835L10.5 7.58352C10.7294 7.58352 10.9376 7.71799 11.0318 7.92713C11.1261 8.13627 11.0891 8.38126 10.9371 8.55315L10.9359 8.55449C10.9149 8.57801 10.856 8.64382 10.8197 8.68393C10.7456 8.76569 10.6391 8.88198 10.5086 9.02132C10.2482 9.29944 9.88954 9.67198 9.49982 10.046C9.11258 10.4177 8.68295 10.8022 8.28186 11.0975C8.08169 11.2449 7.87608 11.3794 7.67707 11.4794C7.49005 11.5734 7.25118 11.6668 7.00001 11.6668C6.74884 11.6668 6.50997 11.5734 6.32295 11.4794C6.12394 11.3794 5.91833 11.2449 5.71816 11.0975C5.31708 10.8022 4.88745 10.4177 4.50022 10.046C4.11051 9.67197 3.75189 9.29942 3.49142 9.02129C3.36094 8.88195 3.25448 8.76566 3.18038 8.6839C3.14373 8.64347 3.08446 8.57719 3.06388 8.55418L3.06319 8.55341C2.91127 8.38151 2.87396 8.13624 2.96824 7.9271Z"
                            fill="#888D93"
                          />
                        </svg>
                      </span>
                    </th>
                    <th>
                      <span className="flex items-center gap-[5px]">
                        <h2 className="text-[12px] font-[500] leading-[16px] text-neutral-600">
                          STATUS
                        </h2>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.96824 6.07339C3.06252 6.28253 3.27063 6.41699 3.50004 6.41699L10.5 6.41697C10.7294 6.41697 10.9376 6.2825 11.0318 6.07336C11.1261 5.86422 11.0891 5.61923 10.9371 5.44734L10.9359 5.44597C10.9149 5.42243 10.856 5.35665 10.8197 5.31656C10.7456 5.2348 10.6391 5.11851 10.5086 4.97917C10.2482 4.70105 9.88954 4.32851 9.49982 3.95446C9.11258 3.5828 8.68295 3.19831 8.28186 2.90298C8.08169 2.7556 7.87608 2.62104 7.67707 2.52106C7.49005 2.42711 7.25118 2.33366 7.00001 2.33366C6.74884 2.33366 6.50997 2.42711 6.32295 2.52106C6.12394 2.62104 5.91833 2.7556 5.71816 2.90299C5.31708 3.19831 4.88745 3.58281 4.50022 3.95447C4.11051 4.32852 3.75189 4.70107 3.49142 4.9792C3.36094 5.11854 3.25448 5.23483 3.18038 5.31659C3.14372 5.35703 3.08442 5.42334 3.06386 5.44633L3.06319 5.44708C2.91127 5.61898 2.87396 5.86425 2.96824 6.07339Z"
                            fill="#888D93"
                          />
                          <path
                            d="M2.96824 7.9271C3.06252 7.71796 3.27063 7.5835 3.50004 7.5835L10.5 7.58352C10.7294 7.58352 10.9376 7.71799 11.0318 7.92713C11.1261 8.13627 11.0891 8.38126 10.9371 8.55315L10.9359 8.55449C10.9149 8.57801 10.856 8.64382 10.8197 8.68393C10.7456 8.76569 10.6391 8.88198 10.5086 9.02132C10.2482 9.29944 9.88954 9.67198 9.49982 10.046C9.11258 10.4177 8.68295 10.8022 8.28186 11.0975C8.08169 11.2449 7.87608 11.3794 7.67707 11.4794C7.49005 11.5734 7.25118 11.6668 7.00001 11.6668C6.74884 11.6668 6.50997 11.5734 6.32295 11.4794C6.12394 11.3794 5.91833 11.2449 5.71816 11.0975C5.31708 10.8022 4.88745 10.4177 4.50022 10.046C4.11051 9.67197 3.75189 9.29942 3.49142 9.02129C3.36094 8.88195 3.25448 8.76566 3.18038 8.6839C3.14373 8.64347 3.08446 8.57719 3.06388 8.55418L3.06319 8.55341C2.91127 8.38151 2.87396 8.13624 2.96824 7.9271Z"
                            fill="#888D93"
                          />
                        </svg>
                      </span>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="overflow-hidden">
                  {/* row 1 */}
                  <tr className="overflow-hidden border-[1px] border-neutral-200">
                    <th>
                      <Checkbox />
                    </th>
                    <td className="">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="">
                            <span>
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  fill="url(#paint0_linear_3385_50531)"
                                />
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  stroke="#C1F1D5"
                                />
                                <path
                                  d="M20 26.6664L20 13.333"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M24.1666 22.4994C24.1666 22.4994 21.0979 26.666 19.9999 26.666C18.9019 26.666 15.8333 22.4993 15.8333 22.4993"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_3385_50531"
                                    x1="20"
                                    y1="0"
                                    x2="20"
                                    y2="40"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#F1FCF5" />
                                    <stop offset="1" stop-color="#C1F1D5" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                            Send money to Farouq
                          </div>
                          <div className="text-[12px] font-[500] leading-[16px] text-neutral-700">
                            Credit
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      Bank Transfer
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      PD1468373HM1
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      October 10, 2025
                    </td>
                    <td className="whitespace-nowrap text-[14px] font-[500] leading-[20px] text-neutral-950">
                      +₦25,000,000
                    </td>

                    <th>
                      <button className="flex h-[24px] w-[96px] items-center justify-center rounded-[4px] border-[1px] border-x-[#E5F9ED] border-b-[#d1f5e0] border-t-[#E5F9ED] bg-positive-50 text-[14px] font-[500]">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="3" fill="#32B56A" />
                          </svg>
                        </span>
                        <h3 className="text-[12px] text-positive-500">
                          Completed
                        </h3>
                      </button>
                    </th>
                    <td>
                      <button
                        className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px]"
                        onClick={toggleMenuDropdown}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 10C17.5 9.30964 16.9404 8.75 16.25 8.75C15.5596 8.75 15 9.30964 15 10C15 10.6904 15.5596 11.25 16.25 11.25C16.9404 11.25 17.5 10.6904 17.5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M11.25 10C11.25 9.30964 10.6904 8.75 10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M5 10C5 9.30964 4.44036 8.75 3.75 8.75C3.05964 8.75 2.5 9.30964 2.5 10C2.5 10.6904 3.05964 11.25 3.75 11.25C4.44036 11.25 5 10.6904 5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr className="border-[1px] border-neutral-200">
                    <th>
                      <Checkbox />
                    </th>
                    <td className="">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="">
                            <span>
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  fill="url(#paint0_linear_3385_43803)"
                                />
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  stroke="#C1F1D5"
                                />
                                <path
                                  d="M20 26.6664L20 13.333"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M24.1666 22.4994C24.1666 22.4994 21.0979 26.666 19.9999 26.666C18.9019 26.666 15.8333 22.4993 15.8333 22.4993"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_3385_43803"
                                    x1="20"
                                    y1="0"
                                    x2="20"
                                    y2="40"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#F1FCF5" />
                                    <stop offset="1" stop-color="#C1F1D5" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                            Watercress Crescent Home
                          </div>
                          <div className="text-overflow text-[12px] font-[500] leading-[16px] text-neutral-700">
                            Credit
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      Bank Transfer
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      PD1468373HM1
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      October 10, 2025
                    </td>
                    <td className="whitespace-nowrap text-[14px] font-[500] leading-[20px] text-neutral-950">
                      +₦25,000,000
                    </td>

                    <th>
                      <button className="flex w-[100px] items-center justify-center rounded-[4px] bg-negative-50 p-[4px] text-[14px] font-[500] text-negative-500">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="3" fill="#D84E4E" />
                          </svg>
                        </span>
                        <h3 className="text-[12px] text-[#D84E4E]">Failed</h3>
                      </button>
                    </th>
                    <td>
                      <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 10C17.5 9.30964 16.9404 8.75 16.25 8.75C15.5596 8.75 15 9.30964 15 10C15 10.6904 15.5596 11.25 16.25 11.25C16.9404 11.25 17.5 10.6904 17.5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M11.25 10C11.25 9.30964 10.6904 8.75 10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M5 10C5 9.30964 4.44036 8.75 3.75 8.75C3.05964 8.75 2.5 9.30964 2.5 10C2.5 10.6904 3.05964 11.25 3.75 11.25C4.44036 11.25 5 10.6904 5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-[1px] border-neutral-200">
                    <th>
                      <Checkbox />
                    </th>
                    <td className="">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="">
                            <span>
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  fill="url(#paint0_linear_3385_43803)"
                                />
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  stroke="#C1F1D5"
                                />
                                <path
                                  d="M20 26.6664L20 13.333"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M24.1666 22.4994C24.1666 22.4994 21.0979 26.666 19.9999 26.666C18.9019 26.666 15.8333 22.4993 15.8333 22.4993"
                                  stroke="#32B56A"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_3385_43803"
                                    x1="20"
                                    y1="0"
                                    x2="20"
                                    y2="40"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#F1FCF5" />
                                    <stop offset="1" stop-color="#C1F1D5" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                            Watercress Crescent Home
                          </div>
                          <div className="text-overflow text-[12px] font-[500] leading-[16px] text-neutral-700">
                            Credit
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      Wallet Funds
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      PD1468373HM1
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      October 10, 2025
                    </td>
                    <td className="whitespace-nowrap text-[14px] font-[500] leading-[20px] text-neutral-950">
                      +₦25,000,000
                    </td>

                    <th>
                      <button className="flex w-[100px] items-center justify-center rounded-[4px] bg-warning-50 p-[4px] text-[14px] font-[500]">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="3" fill="#FFC107" />
                          </svg>
                        </span>
                        <h3 className="text-[12px] text-warning-500">
                          Pending
                        </h3>
                      </button>
                    </th>
                    <td>
                      <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 10C17.5 9.30964 16.9404 8.75 16.25 8.75C15.5596 8.75 15 9.30964 15 10C15 10.6904 15.5596 11.25 16.25 11.25C16.9404 11.25 17.5 10.6904 17.5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M11.25 10C11.25 9.30964 10.6904 8.75 10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M5 10C5 9.30964 4.44036 8.75 3.75 8.75C3.05964 8.75 2.5 9.30964 2.5 10C2.5 10.6904 3.05964 11.25 3.75 11.25C4.44036 11.25 5 10.6904 5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <Checkbox />
                    </th>
                    <td className="">
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="">
                            <span>
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  fill="url(#paint0_linear_3385_52429)"
                                />
                                <path
                                  d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20Z"
                                  stroke="#F8D0D0"
                                />
                                <path
                                  d="M20 13.333L20 26.6664"
                                  stroke="#D84E4E"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M24.1665 17.4996C24.1665 17.4996 21.0978 13.333 19.9998 13.333C18.9018 13.333 15.8332 17.4997 15.8332 17.4997"
                                  stroke="#D84E4E"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_3385_52429"
                                    x1="20"
                                    y1="0"
                                    x2="20"
                                    y2="40"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#FDF3F3" />
                                    <stop offset="1" stop-color="#F8D0D0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-[14px] font-[600] leading-[20px] text-neutral-950">
                            Watercress Crescent Home
                          </div>
                          <div className="text-overflow text-[12px] font-[500] leading-[16px] text-neutral-700">
                            Debit
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      Wallet Funds
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      PD1468373HM1
                    </td>
                    <td className="text-[14px] font-[500] leading-[20px] text-neutral-950">
                      October 10, 2025
                    </td>
                    <td className="whitespace-nowrap text-[14px] font-[500] leading-[20px] text-neutral-950">
                      -₦25,000,000
                    </td>

                    <th>
                      <button className="flex w-[100px] items-center justify-center rounded-[4px] bg-warning-50 p-[4px] text-[14px] font-[500]">
                        <span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="8" cy="8" r="3" fill="#FFC107" />
                          </svg>
                        </span>
                        <h3 className="text-[12px] text-warning-500">
                          Pending
                        </h3>
                      </button>
                    </th>
                    <td>
                      <button className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px]">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 10C17.5 9.30964 16.9404 8.75 16.25 8.75C15.5596 8.75 15 9.30964 15 10C15 10.6904 15.5596 11.25 16.25 11.25C16.9404 11.25 17.5 10.6904 17.5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M11.25 10C11.25 9.30964 10.6904 8.75 10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                          <path
                            d="M5 10C5 9.30964 4.44036 8.75 3.75 8.75C3.05964 8.75 2.5 9.30964 2.5 10C2.5 10.6904 3.05964 11.25 3.75 11.25C4.44036 11.25 5 10.6904 5 10Z"
                            stroke="#1C1D1E"
                            stroke-width="1.5"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {OpenMenu && <TransactionMenu CloseMenu={() => setOpenMenu(false)} />}
        <ExportModal Open={Open} Close={() => setOpen(false)} />
      </div>
    </>
  );
};
export default Transaction;
