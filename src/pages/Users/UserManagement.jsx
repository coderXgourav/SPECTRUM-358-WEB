import React, { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  MoreVertical,
  Menu,
  Plus,
  X,
  Trash2,
  Edit,
  Home,
  User,
} from "lucide-react";
import Header from "../../components/Header";

const UserManagement = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "James Anderson",
      email: "Maria.w@example.com",
      phone: "+1 9002147530",
      package: "Gold Package",
      joiningDate: "30 July 2025",
      status: "Active",
    },
    {
      id: 2,
      name: "Olivia Bennett",
      email: "priya.s@example.com",
      phone: "+1 9002147530",
      package: "Gold Package",
      joiningDate: "30 July 2025",
      status: "Active",
    },
    {
      id: 3,
      name: "Ethan Carter",
      email: "priya.s@example.com",
      phone: "+1 9002147530",
      package: "Silver Package",
      joiningDate: "30 July 2025",
      status: "Pending",
    },
    {
      id: 4,
      name: "Sophia Hughes",
      email: "priya.s@example.com",
      phone: "+1 9002147530",
      package: "Silver Package",
      joiningDate: "30 July 2025",
      status: "Rejected",
    },
    {
      id: 5,
      name: "Jacob Simmons",
      email: "priya.s@example.com",
      phone: "+1 9002147530",
      package: "Silver Package",
      joiningDate: "30 July 2025",
      status: "Active",
    },
    {
      id: 6,
      name: "Michael Taylor",
      email: "priya.s@example.com",
      phone: "+1 9002147530",
      package: "Gold Package",
      joiningDate: "30 July 2025",
      status: "Pending",
    },
    {
      id: 7,
      name: "Riley Cooper",
      email: "priya.s@example.com",
      phone: "+1 9002147530",
      package: "Silver Package",
      joiningDate: "30 July 2025",
      status: "Active",
    },
    {
      id: 8,
      name: "Alexander Ross",
      email: "priya.s@example.com",
      phone: "+1 9002147530",
      package: "Gold Package",
      joiningDate: "30 July 2025",
      status: "Active",
    },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getAvatarColor = (index) => {
    const colors = [
      "bg-blue-500",
      "bg-purple-500",
      "bg-orange-500",
      "bg-pink-500",
      "bg-green-500",
      "bg-indigo-500",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header title="User Management" icon={User} />

      {/* User Management Content */}
      <div className="p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-3 sm:p-4 md:p-6 border-b">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold poppins-semibold">
                  User Management
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1 poppins-regular">
                  Manage your team members and their account permissions here.
                </p>
              </div>
              <button
                onClick={() => setShowAddUserModal(true)}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-[#E5B700] to-[#DE8806] text-white rounded-lg text-sm font-medium poppins-medium hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </button>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Package
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joining On
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${getAvatarColor(
                            index
                          )}`}
                        >
                          {getInitials(user.name)}
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-900">
                          {user.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.package}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.joiningDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                          user.status
                        )}`}
                      >
                        <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tablet View */}
          <div className="hidden md:block lg:hidden">
            <div className="divide-y divide-gray-200">
              {users.map((user, index) => (
                <div key={user.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium ${getAvatarColor(
                          index
                        )}`}
                      >
                        {getInitials(user.name)}
                      </div>
                      <div className="ml-3 flex-1">
                        <h4 className="text-sm font-medium text-gray-900">
                          {user.name}
                        </h4>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <p className="text-xs text-gray-500">{user.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                          user.status
                        )}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1"></span>
                        {user.status}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-4 text-xs text-gray-600">
                    <div>
                      <span className="font-medium">Package:</span>{" "}
                      {user.package}
                    </div>
                    <div>
                      <span className="font-medium">Joining:</span>{" "}
                      {user.joiningDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="divide-y divide-gray-200">
              {users.map((user, index) => (
                <div key={user.id} className="p-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${getAvatarColor(
                          index
                        )}`}
                      >
                        {getInitials(user.name)}
                      </div>
                      <div className="ml-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          {user.name}
                        </h4>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(
                            user.status
                          )}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current mr-1"></span>
                          {user.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span className="font-medium">Email:</span>
                      <span className="truncate ml-2">{user.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Phone:</span>
                      <span>{user.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Package:</span>
                      <span>{user.package}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Joining:</span>
                      <span>{user.joiningDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowAddUserModal(false)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto hide-scrollbar">
            {/* Close button */}
            <button
              onClick={() => setShowAddUserModal(false)}
              className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-4 sm:p-6 lg:p-8">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Add User
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Update your photo and personal details.
                </p>
              </div>

              {/* Form */}
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mobile No
                    </label>
                    <input
                      type="text"
                      placeholder="Enter mobile number"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    Address
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Country
                        </label>
                        <div className="relative">
                          <select className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent appearance-none text-gray-400 text-sm">
                            <option>Select country</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          State
                        </label>
                        <div className="relative">
                          <select className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent appearance-none text-gray-400 text-sm">
                            <option>Select state</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        City
                      </label>
                      <div className="relative">
                        <select className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent appearance-none text-gray-400 text-sm">
                          <option>Select city</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Category
                    </label>
                    <div className="relative">
                      <select className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent appearance-none text-gray-400 text-sm">
                        <option>Select Business Category</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent placeholder-gray-400 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    className="flex-1 py-2.5 bg-[#F5A623] text-white font-medium rounded-lg hover:bg-[#E59613] transition-colors text-sm order-2 sm:order-1"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddUserModal(false)}
                    className="flex-1 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm order-1 sm:order-2"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
