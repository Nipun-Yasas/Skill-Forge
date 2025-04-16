'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function SideNav() {
  const [activeItem, setActiveItem] = useState(null); // Track the active item
  const router = useRouter(); // Initialize useRouter for navigation

  const navItems = [
    { label: "Find a mentor", icon: "/findmentor.svg" },
    { label: "Questions", icon: "/help-circle.svg" },
    { label: "Begin a discussion", icon: "/discussion.svg" },
    { label: "My profile", icon: "/profile-pic.png" },
    { label: "Exchange history", icon: "/History.svg" },
    { label: "Chat", icon: "/message-circle.svg", path: "/chatinterface" }, // Add path for Chat
    { label: "Likes and votes", icon: "/vector.svg" },
  ];

  const handleClick = (label, path) => {
    setActiveItem(label); // Update the active item for styling
    if (path) {
      router.push(path); // Navigate to the specified path if it exists
    }
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white p-6 mt-[60px] z-10">
      <nav className="flex flex-col gap-6">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item.label, item.path)} // Pass label and path to handleClick
            className={`flex items-center gap-3 px-3 py-2 rounded-lg border border-[#00B4D8] text-left text-sm
              ${activeItem === item.label ? "bg-[#00B4D8] text-white" : "hover:bg-[#00B4D8] text-gray-700"}`} // Apply styles based on active state
          >
            {item.icon && (
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
            )}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}