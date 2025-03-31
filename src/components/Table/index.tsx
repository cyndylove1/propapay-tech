/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
// import { useSearchParams } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowDownAZ,
  ArrowUpAZ,
  Search,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";
import { SortIcon, CalendarIcon, FilterIcon } from "@/assets/icons";
import { ShadButton } from "../ui/button";

// Types for our data and columns
export interface DataItem {
  id: string;
  [key: string]: any;
}

export interface Column {
  id: string;
  header: string;
  accessorKey: string;
  enableSorting?: boolean;
  cell?: (item: DataItem) => React.ReactNode;
  icon?: React.ReactNode;
}

export interface CustomTableProps {
  data: DataItem[];
  columns: Column[];
  searchPlaceholder?: string;
  timeframeOptions?: { label: string; value: string }[];
  defaultTimeframe?: string;
  onRowSelectionChange?: (selectedRows: string[]) => void;
}

export const CustomTable: React.FC<CustomTableProps> = ({
  data,
  columns,
  searchPlaceholder = "Search...",
  timeframeOptions = [
    { label: "Last 7 days", value: "7days" },
    { label: "Last 30 days", value: "30days" },
    { label: "Last 90 days", value: "90days" },
  ],
  defaultTimeframe = "30days",
  onRowSelectionChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTimeframe, setSelectedTimeframe] = useState(defaultTimeframe);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc" | null;
  }>({ key: "", direction: null });

  // Handle row selection
  const handleRowSelection = (id: string) => {
    setSelectedRows((prev) => {
      const newSelection = prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id];

      // Call the callback if provided
      if (onRowSelectionChange) {
        onRowSelectionChange(newSelection);
      }

      return newSelection;
    });
  };

  // Handle header click for sorting
  const handleSort = (columnId: string) => {
    setSortConfig((prev) => {
      if (prev.key === columnId) {
        const nextDirection =
          prev.direction === "asc"
            ? "desc"
            : prev.direction === "desc"
              ? null
              : "asc";
        return { key: columnId, direction: nextDirection };
      }
      return { key: columnId, direction: "asc" };
    });
  };

  // Filter data based on search query
  const filteredData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase()),
    );
  });

  // Sort data based on sort config
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.direction === null) {
      return 0;
    }

    const column = columns.find((col) => col.id === sortConfig.key);
    if (!column) return 0;

    const aValue = a[column.accessorKey];
    const bValue = b[column.accessorKey];

    if (aValue < bValue) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Handle select all rows
  const handleSelectAll = () => {
    if (selectedRows.length === sortedData.length) {
      setSelectedRows([]);
      if (onRowSelectionChange) {
        onRowSelectionChange([]);
      }
    } else {
      const allIds = sortedData.map((item) => item.id);
      setSelectedRows(allIds);
      if (onRowSelectionChange) {
        onRowSelectionChange(allIds);
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Table controls */}
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 pl-8"
          />
        </div>

        <div className="flex items-center space-x-3">
          {/* Timeframe dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <ShadButton
                variant="outline"
                className="flex items-center gap-2 border-neutral-200 py-2 pl-3 pr-2 font-medium text-sm leading-5 text-neutral-700"
              >
                <span className="h-5 w-5 px-[2.08px] py-[1.67px]">
                  <CalendarIcon className=" stroke-neutral-600" />
                </span>
                {timeframeOptions.find(
                  (option) => option.value === selectedTimeframe,
                )?.label || "Select timeframe"}
                <ChevronDown className="h-4 w-4" />
              </ShadButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {timeframeOptions.map((option) => (
                <DropdownMenuCheckboxItem
                  key={option.value}
                  checked={selectedTimeframe === option.value}
                  onCheckedChange={() => setSelectedTimeframe(option.value)}
                >
                  {option.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Filter button */}
          <ShadButton variant="outline" className="flex items-center gap-2 font-medium text-sm leading-5 text-neutral-700">
            <span className="w-5 h-5 px-[2.5px] py-[3.33px]">
            <FilterIcon  />
            </span>
            Filter
          </ShadButton>

          {/* Sort button */}
          <ShadButton variant="outline" className="flex items-center gap-2 font-medium text-sm leading-5 text-neutral-700">
            {sortConfig.direction === "asc" ? (
              <ArrowUpAZ className=" h-4 w-4" />
            ) : (
              <ArrowDownAZ className=" h-4 w-4" />
            )}
            Sort
          </ShadButton>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader className="bg-[#F7F8F9]">
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={
                    selectedRows.length === sortedData.length &&
                    sortedData.length > 0
                  }
                  onCheckedChange={handleSelectAll}
                  aria-label="Select all rows"
                />
              </TableHead>
              {columns.map((column) => (
                <TableHead
                  key={column.id}
                  className="text-xs font-medium uppercase leading-6 text-neutral-600"
                >
                  <div
                    className={`flex items-center ${column.enableSorting ? "cursor-pointer" : ""}`}
                    onClick={() =>
                      column.enableSorting && handleSort(column.id)
                    }
                  >
                    {column.header}
                    {column.enableSorting && (
                      <span className="ml-2">
                        {sortConfig.key === column.id ? (
                          sortConfig.direction === "asc" ? (
                            <ArrowUpAZ className="h-4 w-4" />
                          ) : sortConfig.direction === "desc" ? (
                            <ArrowDownAZ className="h-4 w-4" />
                          ) : (
                            <span className="h-[14px] w-[14px] px-[2.92px] py-[2.33px]">
                              <SortIcon />
                            </span>
                          )
                        ) : (
                          <span className="h-[14px] w-[14px] px-[2.92px] py-[2.33px]">
                            <SortIcon />
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                </TableHead>
              ))}
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + 2}
                  className="py-6 text-center text-gray-500"
                >
                  No results found
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(row.id)}
                      onCheckedChange={() => handleRowSelection(row.id)}
                      aria-label={`Select row ${row.id}`}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell key={`${row.id}-${column.id}`}>
                      {column.cell ? (
                        column.cell(row)
                      ) : (
                        <div className="flex items-center">
                          {column.icon && (
                            <span className="mr-2">{column.icon}</span>
                          )}
                          {row[column.accessorKey]}
                        </div>
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    <ShadButton variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </ShadButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
