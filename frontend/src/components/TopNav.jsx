'use client';
import React from "react";
import Image from "next/image";
import { Search, Bell, ChevronDown } from "lucide-react";

export const TopNav = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center mb-6 px-4 py-4 bg-white z-50 shadow" style={{ height: '60px' }}>
      
      {/* Logo */}
      <div className="flex items-center justify-center h-full mt-5">
        <Image
          src="/Mask-group.png" 
          alt="Logo"
          width={150} 
          height={150} 
          className="mr-2"
        />
      </div>

      {/* Search Box centered */}
      <div className="flex items-center bg-[#F9FAFB] rounded-md px-4 py-2 w-full sm:w-[400px] justify-center">
        <Search className="text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search here..."
          className="ml-2 w-full outline-none text-sm"
          aria-label="Search"
        />
      </div>

      {/* Right-aligned Notification and User Profile */}
      <div className="flex items-center gap-6">
        <Bell className="text-gray-600 w-6 h-6 bg-[#F1F9FF] flex-shrink-0" />
        <div className="flex items-center gap-4">
          <Image
            src="/profile-pic.png"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium">Emily</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
