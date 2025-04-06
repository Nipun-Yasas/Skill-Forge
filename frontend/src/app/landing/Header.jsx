import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex flex-col px-0 w-full">
      <nav className="flex flex-wrap gap-5 justify-between w-full text-sm font-medium text-neutral-600 bg-blue-500">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c30ce2447edea85ac60f5c0738a6be1d4234e08?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain shrink-0 w-[150px]"
        />
        <div className="flex flex-wrap gap-8 items-center">
          <a href="#about" className="grow text-white">
            About Us
          </a>
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#contact" className="text-white">
            Contact Us
          </a>
          <button className="p-2.5 w-16 text-xs text-center rounded-md">
            <Link href="/login" className="text-blue-500">
              Log In
            </Link>
          </button>
          <button className="p-2.5 text-xs text-center bg-sky-600 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-slate-50 w-[80px]">
            <Link href="/signUp">
              Sign Up
            </Link>
          </button>
        </div>
      </nav>
      <hr className="w-full border-gray-400"></hr>
    </header>
  );
}

export default Header;
