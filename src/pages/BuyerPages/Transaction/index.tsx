import { useState } from "react";
import TransactionMenu from "@/components/TransactionMenu";
import ExportModal from "@/components/ExportModal";
import { Column, CustomTable } from "@/components/Table";
import { ArrowIcon2 } from "@/assets/icons";

const Transaction: React.FC = () => {
  const [Open, setOpen] = useState<boolean>(false);
  const [OpenMenu, setOpenMenu] = useState(false);

  const columns: Column[] = [
    {
      id: "description",
      header: "Description",
      accessorKey: "description",
      enableSorting: true,
      cell: (item) => (
        <div className="flex gap-3">
          <span className="border-positive-200 h-10 w-10 rounded-full border bg-[linear-gradient(180deg,#F1FCF5_100%,#C1F1D5_100%)] p-[10px]">
            <ArrowIcon2 />
          </span>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold leading-5 text-neutral-base">
              {item.description}
            </h3>
            <h4 className="text-xs font-medium leading-4 text-neutral-700">
              Credit
            </h4>
          </div>
        </div>
      ),
    },
    {
      id: "method",
      header: "Method",
      accessorKey: "method",
      enableSorting: true,
    },
    {
      id: "transaction_id",
      header: "Transaction ID",
      accessorKey: "transaction_id",
      enableSorting: true,
    },
    {
      id: "date",
      header: "Date",
      accessorKey: "date",
      enableSorting: true,
    },
    {
      id: "amount",
      header: "Amount",
      accessorKey: "amount",
      enableSorting: true,
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      enableSorting: true,
      cell: (item) => (
        <div
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            item.status === "active"
              ? "bg-green-100 text-green-800"
              : item.status === "inactive"
                ? "bg-gray-100 text-gray-800"
                : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      description: "Funds added via bank transfer",
      method: "Bank Transfer",
      transaction_id: "PD1468373HM1",
      date: "Oct 10, 2025 12:15 PM",
      amount: "+ ₦25,000,000",
      status: "active",
    },
    {
      id: "2",
      description: "Funds added via bank transfer",
      method: "Bank Transfer",
      transaction_id: "PD1468373HM1",
      date: "Oct 10, 2025 12:15 PM",
      amount: "+ ₦25,000,000",
      status: "inactive",
    },
    {
      id: "3",
      description: "Funds deducted for watercress",
      method: "Bank Transfer",
      transaction_id: "PD1468373HM1",
      date: "Oct 10, 2025 12:15 PM",
      amount: "+ ₦25,000,000",
      status: "pending",
    },
    {
      id: "4",
      description: "Funds added via bank transfer",
      method: "Bank Transfer",
      transaction_id: "PD1468373HM1",
      date: "Oct 10, 2025 12:15 PM",
      amount: "+ ₦25,000,000",
      status: "active",
    },
    {
      id: "5",
      description: "Funds deducted for watercress",
      method: "Bank Transfer",
      transaction_id: "PD1468373HM1",
      date: "Oct 10, 2025 12:15 PM",
      amount: "+ ₦25,000,000",
      status: "inactive",
    },
  ];

  const handleSelectionChange = (selectedRows: string[]) => {
    console.log("Selected rows:", selectedRows);
  };

  
  return (
    <>
      {/* Header title */}
      <div className="h-[1000px]">
        <div className="flex items-center justify-between px-4 pt-[20px]">
          <h2 className="text-[18px] font-[600] leading-[32px] text-neutral-base md:text-[24px]">
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

        <div className="p-4">
          <CustomTable
            data={data}
            columns={columns}
            onRowSelectionChange={handleSelectionChange}
          />
        </div>
        {OpenMenu && <TransactionMenu CloseMenu={() => setOpenMenu(false)} />}
        <ExportModal Open={Open} Close={() => setOpen(false)} />
      </div>
    </>
  );
};
export default Transaction;
