"use client";

import * as React from "react";

interface TablePaginationProps {
  rowsPerPage: number;
  totalRows: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  rowsPerPage,
  totalRows,
  currentPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const startRow = (currentPage - 1) * rowsPerPage + 1;
  const endRow = Math.min(currentPage * rowsPerPage, totalRows);

  return (
    <div className="flex p-[2px] justify-end items-center gap-[26px]">
      <div className="flex items-center gap-2">
        <div className="text-[rgba(0,0,0,0.60)] font-roboto text-xs leading-5 tracking-[0.4px]">
          Rows per page:
        </div>
        <div className="relative w-[38px] h-6">
          <select
            className="absolute left-0 top-[3px] appearance-none bg-transparent text-[rgba(0,0,0,0.87)] font-roboto text-xs leading-5 tracking-[0.4px] w-full cursor-pointer"
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          >
            <option value="5">05</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
          <svg
            className="w-6 h-6 absolute left-[14px] top-0 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 9.5L12 14.5L17 9.5H7Z"
              fill="black"
              fillOpacity="0.56"
            />
          </svg>
        </div>
      </div>
      <div className="text-[rgba(0,0,0,0.87)] font-roboto text-xs leading-5 tracking-[0.4px]">
        {startRow}-{endRow} of {totalRows}
      </div>
      <div className="flex items-start">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex p-2 justify-center items-center rounded-full hover:bg-gray-100 disabled:opacity-50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59L11.1249 12L15.7049 7.41Z"
              fill="black"
              fillOpacity="0.56"
            />
          </svg>
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={endRow >= totalRows}
          className="flex p-2 justify-center items-center rounded-full hover:bg-gray-100 disabled:opacity-50"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z"
              fill="black"
              fillOpacity="0.56"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
