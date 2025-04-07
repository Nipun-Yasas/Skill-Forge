"use client";

import React from "react";
import { Search } from "./Search";
import { Filter, Clock, ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <div className="relative w-[1200px] mb-10 h-44 rounded-[19px] overflow-hidden shadow-[0px_4px_10px_-3px_rgba(0,0,0,0.83),-4px_4px_10px_-3px_rgba(0,0,0,0.06)]">
    <div className="inline-flex flex-wrap items-center justify-start gap-10 relative">
      <div className="relative w-[636px] h-16 p-10 text-shadow-[0px_4px_4px_#00000021] bg-gradient-to-r from-[#03045e] to-[#00b4d8] text-transparent bg-clip-text font-bold text-4xl tracking-wide leading-normal">
        Find Your Perfect Mentor
      </div>
    </div>

      <div className="flex gap-4 mt-8 mb-3 ml-10">
        <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 w-full max-w-md mr-60">
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
            className="bg-white border border-gray-300 text-sm rounded-md px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
          >
            {filter === "Category" && (
              <Filter className="text-gray-600 w-4 h-4" />
            )}
            {filter === "Availability" && (
              <Clock className="text-gray-600 w-4 h-4" />
            )}
            {filter === "Preference" && (
              <ChevronDown className="text-gray-600 w-4 h-4" />
            )}

            <span>{filter}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
