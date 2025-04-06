"use client";

import React from "react";
import { FindPerfect } from "./FindPerfect";
import { Search } from "./Search";


export const Header = () => {
  return (
    <div className="relative m-[50px] w-[1294px] h-64 rounded-[19px] overflow-hidden border border-solid border-[#0000000f]">
      <FindPerfect />

      <div className="flex gap-4 mb-6">
        <div className="flex items-center bg-white border rounded-md px-4 py-2 w-full max-w-md">
          <Search className="text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search for skills (e.g, 'Web Development')"
            className="ml-2 w-full outline-none text-sm"
          />
        </div>
        {["Category", "Availability", "Preference"].map((filter, i) => (
          <button
            key={i}
            className="bg-white border border-gray-300 text-sm rounded-md px-4 py-2 hover:bg-gray-100"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};
