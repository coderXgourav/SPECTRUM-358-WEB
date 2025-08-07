import React, { useState, useRef, useEffect } from "react";

import { Search, Bell, ChevronDown } from "lucide-react";

// ProfileDropdown component for dropdown menu with logout button
const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 w-[11.5rem] h-[2.5rem] px-2 py-1 rounded-[1.5rem] bg-[rgba(212,212,212,0.3)] focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="whitespace-nowrap text-sm font-medium text-black">
          Martin Harris
        </span>
        <ChevronDown className="w-4 h-4 text-black" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
          <button
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg"
            onClick={() => {
              setOpen(false);
              // Add your logout logic here
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const Header = ({ title, icon: Icon }) => {
  return (
    <div className="w-full flex justify-between items-center px-10 py-3 bg-white">
      {/* Left section: Icon + Title */}
      <div className="flex items-center gap-6">
        {Icon && <Icon className="w-5 h-5" />}
        <span className="text-sm font-medium">{title}</span>
      </div>

      {/* Right section: Search, Bell, Profile */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div
          className="flex items-center gap-2 w-[12.5rem] h-[2.25rem] px-2 py-1 
          rounded-[1.5rem] bg-[rgba(0,0,0,0.04)]"
        >
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm outline-none w-full placeholder:text-gray-500"
          />
        </div>

        {/* Notification Icon */}
        <Bell className="w-5 h-5 text-black" />

        {/* Profile */}
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Header;
