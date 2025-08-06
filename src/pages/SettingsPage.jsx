import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Menu,
  Upload
} from 'lucide-react';

const SettingsPage = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Olivia',
    lastName: 'Rhye',
    email: 'olivia@untitledul.com',
    phone: ''
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-6 py-3">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-0">
    
            <h2 className="text-base sm:text-lg font-medium text-gray-900">Settings</h2>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-4 sm:h-4" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-50 w-full sm:w-48 lg:w-64"
              />
            </div>
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="flex items-center space-x-1 sm:space-x-2 cursor-pointer">
              <img
                src="https://ui-avatars.com/api/?name=Martin+Harris&background=6366f1&color=fff"
                alt="User"
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full"
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700">Martin Harris</span>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Profile Content */}
      <div className="p-4 sm:p-6 lg:p-6">
        <div>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Profile Header with Gradient Background */}
            <div 
              className="relative h-24 sm:h-28 lg:h-32 flex items-end px-4 sm:px-6 lg:px-8 pb-0"
              style={{
                background: 'linear-gradient(to right, #FFE88B, #C8A000)'
              }}
            >
              {/* Language Selector */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <div className="relative">
                  <select className="bg-white/20 backdrop-blur-sm text-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm border border-white/30 pr-8 appearance-none cursor-pointer">
                    <option>Language</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-700 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
              <div className="flex items-end space-x-3 sm:space-x-4 pb-4 sm:pb-6">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                    alt="Profile"
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mt-8 sm:mt-10 lg:mt-12">
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">{profileData.email}</p>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Personal Info</h3>
                <p className="text-xs sm:text-sm text-gray-600">Update your photo and personal details.</p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                    Profile Photo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mx-auto mb-2 sm:mb-3" />
                    <p className="text-xs sm:text-sm text-gray-600">
                      <span className="text-yellow-600 font-medium hover:text-yellow-700">Click to upload</span>
                      {' '}or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    className="px-3 sm:px-4 py-2 bg-gray-900 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-3 sm:px-4 py-2 bg-yellow-500 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;