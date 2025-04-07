import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsNavOpen(false); // Close the menu after clicking a link
  };

  return (
    <header className="flex flex-col px-4 w-full">
      <nav className="flex flex-wrap justify-between items-center w-full text-sm font-medium text-neutral-600 h-auto md:h-[65px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c30ce2447edea85ac60f5c0738a6be1d4234e08?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain shrink-0 w-[120px] md:w-[150px]"
        />
        <button
          className="block md:hidden text-black"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>
        <div
          className={`${
            isNavOpen ? "flex flex-col gap-4 items-center" : "hidden"
          } md:flex md:flex-row md:gap-8 items-center w-full md:w-auto`}
        >
          <a
            href="#About"
            className="grow text-black hover:text-blue-600 transition duration-300"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </a>
          <a
            href="#Features"
            className="text-black hover:text-blue-600 transition duration-300"
            onClick={() => scrollToSection("features")}
          >
            Features
          </a>
          <a
            href="#Footer"
            className="text-black hover:text-blue-600 transition duration-300"
            onClick={() => scrollToSection("Footer")}
          >
            Contact Us
          </a>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4">
            <Link href="/login">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-4 md:mb-0 mr-0 md:mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-[5px] group bg-gradient-to-r from-blue-600 to-violet-600 group-hover:from-indigo-600 group-hover:to-indigo-500 hover:text-black transition duration-300 transform hover:scale-105">
                <span className="relative px-4 py-1.5 transition-all ease-in duration-75 bg-white rounded-[5px] group-hover:bg-opacity-0">
                  Log In
                </span>
              </button>
            </Link>
            <Link href="/signUp">
              <button className="p-2.5 text-xs text-center bg-sky-600 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-slate-50 w-[70px] md:w-[80px] hover:bg-sky-700 transition duration-300 transform hover:scale-105">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <hr className="w-full border-gray-400"></hr>
    </header>
  );
}

export default Header;
