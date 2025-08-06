import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Settings,
  FileText,
  Package,
  LogOut,
  Menu,
  X,
  User,
  LayoutDashboard,
  UserCog,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarItems = [
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <UserCog className="w-6 h-6" />,
      label: "User Management",
      path: "/users",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: "Ticket Management",
      path: "/tickets",
    },
    {
      icon: <Package className="w-6 h-6" />,
      label: "Package Management",
      path: "/packages",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: "Report",
      path: "/reports",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      label: "Settings",
      path: "/settings",
    },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 p-2 bg-[#E5B700] text-white rounded-md shadow-lg sm:hidden"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed sm:relative inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0 w-72 bg-white shadow-lg border-r border-gray-200 flex flex-col h-screen
      `}
      >
        <div className="p-8 border-b border-gray-100">
          <h1 className="text-3xl font-bold text-[#E5B700] text-center">
            Spectrum 358
          </h1>
        </div>

        <nav className="flex-1 py-6 space-y-2 px-4">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(item.path);
              }}
              className={`flex items-center px-5 py-4 text-base font-medium rounded-xl transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-[#E5B700] to-[#F7931E] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-[#E5B700]"
              }`}
            >
              <span
                className={`flex-shrink-0 ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {item.icon}
              </span>
              <span className="ml-4 font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="p-6 border-t border-gray-100">
          <div
            className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer mb-4"
            onClick={() => handleNavigate("/profile")}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#E5B700]/20">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Martin Harris"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-gray-800 truncate">
                Martin Harris
              </p>
              <p className="text-sm text-gray-500 truncate">Administrator</p>
            </div>
            <User className="w-5 h-5 text-gray-400" />
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full p-4 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 border border-gray-200 hover:border-red-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="ml-3 text-base font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
