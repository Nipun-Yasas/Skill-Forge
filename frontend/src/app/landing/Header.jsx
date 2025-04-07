import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsNavOpen(false); // Close the menu after clicking a link
  };

  return (
    <header className="flex flex-col px-0 w-full">
      <nav className="flex flex-wrap justify-between items-center w-full text-sm font-medium text-neutral-600">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c30ce2447edea85ac60f5c0738a6be1d4234e08?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain shrink-0 w-[150px]"
        />
        <button
          className="block md:hidden text-black"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>
        <div
          className={`${
            isNavOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:gap-8 items-center w-full md:w-auto`}
        >
          <a
            href="#About"
            className="grow text-black"
            onClick={() => scrollToSection("about")}
          >
            About Us
          </a>
          <a
            href="#Features"
            className="text-black"
            onClick={() => scrollToSection("features")}
          >
            Features
          </a>
          <a
            href="#Contact"
            className="text-black"
            onClick={() => scrollToSection("Footer")}
          >
            Contact Us
          </a>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm text-gray-600 font-semibold rounded-[5px] group bg-gradient-to-br from-blue-600 to-violet-600 group-hover:from-indigo-600 group-hover:to-indigo-500 hover:text-white">
            <span className="relative py-2 px-5 transition-all ease-in duration-75 bg-white rounded-[5px] group-hover:bg-opacity-0">
              <Link href="/login" className="text-black">
                Log In
              </Link>
            </span>
          </button>
          <button className="p-2.5 text-xs text-center bg-sky-600 rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-slate-50 w-[80px]">
            <Link href="/signUp">Sign Up</Link>
          </button>
        </div>
      </nav>
      <hr className="w-full border-gray-400"></hr>
    </header>
  );
}

export default Header;
