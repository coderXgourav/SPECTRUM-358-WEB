import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  MoreVertical,
  Menu,
  Plus,
  X,
  Trash2,
  Edit
} from 'lucide-react';

const UserManagement = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: 'James Anderson', email: 'Maria.w@example.com', phone: '+1 9002147530', package: 'Gold Package', joiningDate: '30 July 2025', status: 'Active' },
    { id: 2, name: 'Olivia Bennett', email: 'priya.s@example.com', phone: '+1 9002147530', package: 'Gold Package', joiningDate: '30 July 2025', status: 'Active' },
    { id: 3, name: 'Ethan Carter', email: 'priya.s@example.com', phone: '+1 9002147530', package: 'Silver Package', joiningDate: '30 July 2025', status: 'Pending' },
    { id: 4, name: 'Sophia Hughes', email: 'priya.s@example.com', phone: '+1 9002147530', package: 'Silver Package', joiningDate: '30 July 2025', status: 'Rejected' },
    { id: 5, name: 'Jacob Simmons', email: 'priya.s@example.com', phone: '+1 9002147530', package: 'Silver Package', joiningDate: '30 July 2025', status: 'Active' },
    { id: 6, name: 'Michael Taylor', email: 'priya.s@example.com', phone: '+1 9002147530', package: 'Gold Package', joiningDate: '30 July 2025', status: 'Pending' },
    { id: 7, name: 'Riley Cooper', email: 'priya.s@example.com', phone: '+1 9002147530', package: 'Silver Package', joiningDate: '30 July 2025', status: 'Active' },
    { id: 8, name: 'Alexander Ross', email: 'priya.s@example.com', phone: '+1 9002147530', package: 'Gold Package', joiningDate: '30 July 2025', status: 'Active' },
  ]);

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getAvatarColor = (index) => {
    const colors = ['bg-blue-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-green-500', 'bg-indigo-500'];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">User Management</h2>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] bg-gray-50 w-full sm:w-48 lg:w-64 text-sm sm:text-base"
              />
            </div>
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <img
                src="https://ui-avatars.com/api/?name=Martin+Harris&background=E5B700&color=fff"
                alt="User"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
              />
              <span className="text-xs sm:text-sm font-medium">Martin Harris</span>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* User Management Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 sm:p-6 border-b">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-semibold">User Management</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Manage your team members and their account permissions here.</p>
              </div>
              <button 
                onClick={() => setShowAddUserModal(true)}
                className="flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[#E5B700] to-[#DE8806] text-white rounded-lg text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity mt-2 sm:mt-0"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joining On</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium ${getAvatarColor(index)}`}>
                          {getInitials(user.name)}
                        </div>
                        <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-medium text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {user.phone}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {user.package}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                      {user.joiningDate}
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(user.status)}`}>
                        <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <button className="text-gray-400 hover:text-gray-600">
                          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowAddUserModal(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg sm:max-w-xl lg:max-w-2xl mx-4">
            {/* Close button */}
            <button
              onClick={() => setShowAddUserModal(false)}
              className="absolute right-4 sm:right-6 top-4 sm:top-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="p-4 sm:p-6 lg:p-8">
              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Add User</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Update your photo and personal details.</p>
              </div>

              {/* Form */}
              <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      placeholder="example@email.com"
                      className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent placeholder-gray-400 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Mobile No
                    </label>
                    <input
                      type="text"
                      placeholder="example@email.com"
                      className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent placeholder-gray-400 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-3 sm:mb-4">Address</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                          Country
                        </label>
                        <div className="relative">
                          <select className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent appearance-none text-gray-400 text-xs sm:text-sm">
                            <option>example@email.com</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                          State
                        </label>
                        <div className="relative">
                          <select className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent appearance-none text-gray-400 text-xs sm:text-sm">
                            <option>example@email.com</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                        City
                      </label>
                      <div className="relative">
                        <select className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent appearance-none text-gray-400 text-xs sm:text-sm">
                          <option>City</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Business Category
                    </label>
                    <div className="relative">
                      <select className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent appearance-none text-gray-400 text-xs sm:text-sm">
                        <option>Select Business Category</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent placeholder-gray-400 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent placeholder-gray-400 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <select className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] focus:border-transparent appearance-none text-gray-400 text-xs sm:text-sm">
                        <option>Confirm Password</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    className="flex-1 py-2 sm:py-2.5 bg-[#F5A623] text-white font-medium rounded-lg hover:bg-[#E59613] transition-colors text-xs sm:text-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddUserModal(false)}
                    className="flex-1 py-2 sm:py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-xs sm:text-sm"
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