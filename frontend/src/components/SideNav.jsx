'use client';
import React, { useState } from "react";
import Link from "next/link";

export const SideNav = () => {
  const [activeItem, setActiveItem] = useState(null);

  const navItems = [
    { label: "Find a mentor", icon: "/findmentor.svg", link: "/Mentor" },
    { label: "Questions", icon: "/help-circle.svg", link: "/AskQuestions" },
    { label: "Begin a discussion", icon: "/discussion.svg" },
    { label: "My profile", icon: "/profile-pic.png" },
    { label: "Exchange history", icon: "/History.svg" },
    { label: "Chat", icon: "/message-circle.svg" },
    { label: "Likes and votes", icon: "/vector.svg" },
  ];

  const handleClick = (label) => {
    setActiveItem(label);
  };

  return (
    <aside className="fixed top-10 left-0 h-screen w-84 p-6 mt-[60px] z-10">
      <nav className="flex flex-col gap-6">
        {navItems.map((item, index) => {
          const buttonContent = (
            <button
              onClick={() => handleClick(item.label)}
              className={`flex items-center gap-3 w-full px-3 py-4 rounded-lg border border-[#00B4D8] text-left text-sm ${
                activeItem === item.label
                  ? "bg-[#00B4D8] text-white"
                  : "hover:bg-[#00B4D8] text-gray-700"
              }`}
            >
              {item.icon && (
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
              )}
              {item.label}
            </button>
          );

          // If there's a link, wrap the button in a Link
          return item.link ? (
            <Link key={index} href={item.link}>
              {buttonContent}
            </Link>
          ) : (
            <div key={index}>{buttonContent}</div>
          );
        })}
      </nav>
    </aside>
  );
};
