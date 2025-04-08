"use client";

import * as React from "react";
import { TablePagination } from "./TablePagination";

interface Contact {
  receivedBy: string;
  offeredBy: string;
  receivedSkill: string;
  offeredSkill: string;
  date: string;
  mode: string;
}

export const ContactTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Sample data - in production this would come from an API
  const contacts: Contact[] = [
    {
      receivedBy: "Me",
      offeredBy: "John",
      receivedSkill: "Java",
      offeredSkill: "ML",
      date: "2025-03-20",
      mode: "Online",
    },
    {
      receivedBy: "Me",
      offeredBy: "John",
      receivedSkill: "Java",
      offeredSkill: "ML",
      date: "2025-03-20",
      mode: "Online",
    },
    {
      receivedBy: "Me",
      offeredBy: "John",
      receivedSkill: "Java",
      offeredSkill: "ML",
      date: "2025-03-20",
      mode: "Online",
    },
    {
      receivedBy: "Me",
      offeredBy: "John",
      receivedSkill: "Java",
      offeredSkill: "ML",
      date: "2025-03-20",
      mode: "Online",
    },
    {
      receivedBy: "Me",
      offeredBy: "John",
      receivedSkill: "Java",
      offeredSkill: "ML",
      date: "2025-03-20",
      mode: "Online",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col h-[516px] w-[1036px] rounded-b-[20px] bg-white shadow-md max-md:w-full">
        <div className="flex justify-between items-start w-full rounded-t-[20px] bg-[#F6F5FF] shadow-md">
          {[
            "Received By",
            "Offered BY",
            "Recevied Skill",
            "Offered Skill",
            "Date",
            "Mode",
          ].map((header) => (
            <div
              key={header}
              className="text-[#1E293B] font-roboto text-sm font-medium leading-6 tracking-[0.17px] p-4 w-[120px]"
            >
              {header}
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-1">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full border-[rgba(0,0,0,0.12)]"
            >
              <div className="text-[#1E293B] font-roboto text-sm leading-5 tracking-[0.17px] p-4 w-[120px]">
                {contact.receivedBy}
              </div>
              <div className="text-[#1E293B] font-roboto text-sm leading-5 tracking-[0.17px] p-4 w-[120px]">
                {contact.offeredBy}
              </div>
              <div className="text-[rgba(0,0,0,0.87)] font-roboto text-sm leading-5 tracking-[0.17px] p-4 w-[120px]">
                {contact.receivedSkill}
              </div>
              <div className="text-[rgba(0,0,0,0.87)] font-roboto text-sm leading-5 tracking-[0.17px] p-4 w-[120px]">
                {contact.offeredSkill}
              </div>
              <div className="text-[rgba(0,0,0,0.87)] font-roboto text-sm leading-5 tracking-[0.17px] p-4 w-[120px]">
                {contact.date}
              </div>
              <div className="text-[rgba(0,0,0,0.87)] font-roboto text-sm leading-5 tracking-[0.17px] p-4 w-[120px]">
                {contact.mode}
              </div>
            </div>
          ))}
        </div>
        <TablePagination
          rowsPerPage={rowsPerPage}
          totalRows={13}
          currentPage={page}
          onPageChange={setPage}
          onRowsPerPageChange={setRowsPerPage}
        />
      </div>
    </div>
  );
};
