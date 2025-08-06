import React, { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  MoreVertical,
  Users,
  Clock,
  TrendingUp,
  DollarSign,
  Calendar,
  Activity,
  FileText,
} from "lucide-react";

const Dashboard = () => {
  const [timeFilter, setTimeFilter] = useState("12 months");
  const [daysFilter, setDaysFilter] = useState("This month");
  const [chartDays, setChartDays] = useState("7 days");

  // Sample chart data - unchanged
  const chartData = [
    { month: "Jan", total: 10000, active: 8000 },
    { month: "Feb", total: 12000, active: 9000 },
    { month: "Mar", total: 13000, active: 9500 },
    { month: "Apr", total: 15000, active: 10000 },
    { month: "May", total: 17000, active: 11000 },
    { month: "Jun", total: 19000, active: 11500 },
    { month: "Jul", total: 20000, active: 12000 },
    { month: "Aug", total: 19500, active: 12500 },
    { month: "Sep", total: 20500, active: 13000 },
    { month: "Oct", total: 21000, active: 13000 },
    { month: "Nov", total: 22000, active: 13500 },
    { month: "Dec", total: 23000, active: 14000 },
  ];

  const notifications = [
    {
      id: 1,
      user: "Martin William",
      action: "Redeem $50 from token balance",
      time: "05 min ago",
    },
    {
      id: 2,
      user: "Martin William",
      action: "Redeem $50 from token balance",
      time: "05 min ago",
    },
    {
      id: 3,
      user: "Martin William",
      action: "Redeem $50 from token balance",
      time: "05 min ago",
    },
    {
      id: 4,
      user: "Martin William",
      action: "Redeem $50 from token balance",
      time: "05 min ago",
    },
    {
      id: 5,
      user: "Martin William",
      action: "Redeem $50 from token balance",
      time: "05 min ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">Dashboards</h2>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5B700] w-full sm:w-48 lg:w-64 text-sm sm:text-base"
              />
            </div>
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-1 sm:space-x-2 cursor-pointer">
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

      {/* Dashboard Content */}
      <div className="p-4 sm:p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-6">
          <StatCard
            title="Total User"
            value="22,653"
            icon={<Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5B700]" />}
            bgColor="bg-[#011F3F]"
          />
          <StatCard
            title="Active User"
            value="3,671"
            icon={<Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5B700]" />}
            bgColor="bg-[#011F3F]"
          />
          <StatCard
            title="Total Ticket"
            value="4,318"
            icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5B700]" />}
            bgColor="bg-[#011F3F]"
          />
          <StatCard
            title="Active Ticket"
            value="2,318"
            icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5B700]" />}
            bgColor="bg-[#011F3F]"
          />
          <StatCard
            title="Close Ticket"
            value="1,218"
            icon={<FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#E5B700]" />}
            bgColor="bg-[#011F3F]"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Chart Section */}
          <div className="lg:col-span-2 space-y-4">
            {/* Onboarding User Chart */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                <h3 className="text-base sm:text-lg font-semibold">Onboarding User</h3>
                <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                  <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
                    <button
                      onClick={() => setTimeFilter("12 months")}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 min-w-[70px] sm:min-w-[80px] ${
                        timeFilter === "12 months"
                          ? "bg-gradient-to-r from-[#E5B700] to-[#DE8806] text-white shadow-md"
                          : "bg-transparent text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      12 months
                    </button>
                    <button
                      onClick={() => setTimeFilter("30 days")}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 min-w-[60px] sm:min-w-[70px] ${
                        timeFilter === "30 days"
                          ? "bg-gradient-to-r from-[#E5B700] to-[#DE8806] text-white shadow-md"
                          : "bg-transparent text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      30 days
                    </button>
                    <button
                      onClick={() => setTimeFilter("7 days")}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 min-w-[50px] sm:min-w-[60px] ${
                        timeFilter === "7 days"
                          ? "bg-gradient-to-r from-[#E5B700] to-[#DE8806] text-white shadow-md"
                          : "bg-transparent text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      7 days
                    </button>
                  </div>
                  <button className="p-2">
                    <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </button>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 pb-3 mb-4 border-b border-gray-200">
                Compare spending over time.
              </p>
              <div className="flex items-center justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm mb-4">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-[#E5B700] rounded-full mr-2"></span>
                  Total User 12,653
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  Active User 3,671
                </span>
              </div>
              <SimpleLineChart data={chartData} />
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Ticket Resolved Rate */}
              <div className="bg-[#FFFAEF] rounded-xl p-4 sm:p-6 border-2 border-[#E5B700]">
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  Ticket Resolved Rate
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  Manage your team members and their account permissions here.
                </p>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#E5E5E5"
                        strokeWidth="12"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#E5B700"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56 * 0.8} ${
                          2 * Math.PI * 56
                        }`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xs text-gray-500">
                        Resolved Rate
                      </span>
                      <span className="text-xl sm:text-2xl font-bold">+10%</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E5B700] rounded-full mr-2"></span>
                    <div>
                      <p className="text-gray-600">Total Ticket</p>
                      <p className="font-bold">180</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                    <div>
                      <p className="text-gray-600">Resolved Tickets</p>
                      <p className="font-bold">144</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#E5B700] rounded-full mr-2"></span>
                    <div>
                      <p className="text-gray-600">Resolution Rate</p>
                      <p className="font-bold">80%</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                    <div>
                      <p className="text-gray-600">Avg. Resolution Time</p>
                      <p className="font-bold">14 hrs</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <div>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Change from Last Month
                      </p>
                      <p className="font-bold text-green-600">+6%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Token Revenue Overview */}
              <div className="bg-[#FFFAEF] rounded-xl p-4 sm:p-6 border-2 border-[#E5B700]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Token Revenue Overview
                  </h3>
                  <div className="flex items-center bg-white rounded-full p-0.5 shadow-sm border border-gray-200 mt-2 sm:mt-0">
                    <button
                      onClick={() => setDaysFilter("This month")}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 min-w-[70px] ${
                        daysFilter === "This month"
                          ? "bg-gradient-to-r from-[#E5B700] to-[#DE8806] text-white shadow-sm"
                          : "bg-transparent text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      This month
                    </button>
                    <button
                      onClick={() => setDaysFilter("Last month")}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 min-w-[70px] ${
                        daysFilter === "Last month"
                          ? "bg-gradient-to-r from-[#E5B700] to-[#DE8806] text-white shadow-sm"
                          : "bg-transparent text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      Last month
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <DonutChart />
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <span className="w-3 h-3 bg-[#E5B700] rounded-full mr-2"></span>
                      <span>Token Revenue</span>
                    </div>
                    <div className="flex items-center mb-2 sm:mb-0">
                      <span className="w-3 h-3 bg-[#FFC107] rounded-full mr-2"></span>
                      <span>Redeems</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-[#FF9800] rounded-full mr-2"></span>
                      <span>Claimed Revenue</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-gray-600">Token Worth</p>
                      <p className="font-bold">$3,750</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Token Balance</p>
                      <p className="font-bold">$5,400</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Token Earned</p>
                      <p className="font-bold">$9,100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Recent Activity */}
            <div className="bg-[#FFFAEF] rounded-xl shadow-sm p-4 sm:p-6 border-2 border-[#E5B700]">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold">Recent Activity</h3>
                <a href="#" className="text-xs sm:text-sm text-[#E5B700] font-medium">
                  View All
                </a>
              </div>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start space-x-3"
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${notification.user}&background=E5B700&color=fff`}
                      alt={notification.user}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm font-medium">{notification.user}</p>
                      <p className="text-xs text-gray-500">{notification.action}</p>
                    </div>
                    <span className="text-xs text-gray-400">{notification.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-[#FAFAFA] rounded-xl shadow-sm p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4">Notifications</h3>
              <div className="space-y-3">
                <NotificationItem
                  icon={<Bell className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />}
                  text="You fixed a bug."
                  time="Just now"
                />
                <NotificationItem
                  icon={<Users className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />}
                  text="New user registered."
                  time="59 minutes ago"
                />
                <NotificationItem
                  icon={<Bell className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />}
                  text="You fixed a bug."
                  time="2 hours ago"
                />
                <NotificationItem
                  icon={<DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />}
                  text="Andi Lane subscribed to you."
                  time="Today, 11:59 AM"
                />
                <NotificationItem
                  icon={<DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />}
                  text="Andi Lane subscribed to you."
                  time="Today, 11:59 AM"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-xl p-4 text-white relative overflow-hidden`}
    >
      <svg
        width="396"
        height="406"
        viewBox="0 0 396 406"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 right-0 opacity-50 transform scale-75 translate-x-1/4 translate-y-1/4"
      >
        <g opacity="0.5">
          <mask
            id="mask0_1560_15760"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="64"
            y="43"
            width="226"
            height="301"
          >
            <path
              d="M166.454 248.149C30.4109 166.553 36.9495 79.0824 181.303 52.8278C325.657 26.5732 324.493 62.791 178.811 133.605C33.1288 204.419 26.4908 291.935 163.962 328.926C301.434 365.918 302.498 329.746 166.454 248.149Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M166.928 243.067C54.0991 169.041 60.1757 89.2318 180.485 64.8928C300.795 40.5538 299.823 73.5114 178.215 138.535C56.6062 203.558 50.5296 283.367 164.657 316.709C278.785 350.05 279.809 317.207 166.928 243.067Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M167.549 238.096C75.7168 171.584 81.2164 99.4798 179.78 77.0649C278.343 54.65 277.522 84.5077 177.697 143.733C77.8731 202.958 72.4729 275.016 165.467 304.764C258.46 334.512 259.381 304.609 167.549 238.096Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M168.018 233.058C95.0782 173.93 99.9488 109.417 179.022 89.1232C258.043 68.7157 257.221 95.4056 177.175 148.657C97.1298 201.908 92.2072 266.307 166.172 292.591C240.136 318.876 241.058 292.14 168.018 233.058Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M168.638 228.087C112.386 176.261 116.679 119.453 178.315 101.296C239.95 83.1385 239.174 106.501 176.704 153.695C114.233 200.89 109.84 257.743 167.027 280.487C224.213 303.231 224.838 279.801 168.638 228.087Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M169.109 223.049C127.393 178.554 131.109 129.451 177.46 113.4C223.81 97.349 223.184 117.611 176.037 158.825C128.838 199.926 125.121 249.028 167.686 268.474C210.252 287.921 210.825 267.545 169.109 223.049Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M169.68 217.965C140.243 180.605 143.482 139.161 176.803 125.413C210.124 111.665 209.498 128.759 175.517 163.75C141.536 198.741 138.396 240.138 168.393 256.302C198.39 272.466 199.017 255.372 169.68 217.965Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M170.201 213.041C150.991 182.799 153.601 148.947 175.946 137.517C198.29 126.088 197.814 140.082 174.995 168.675C152.076 197.313 149.565 231.119 169.25 244.198C188.934 257.277 189.41 243.282 170.201 213.041Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M170.769 207.956C159.682 184.705 161.615 158.604 175.187 149.576C188.811 140.662 188.434 151.443 174.425 173.759C160.415 196.075 158.482 222.176 170.006 232.139C181.53 242.103 181.856 231.208 170.769 207.956Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M171.292 203.032C166.024 186.733 167.428 168.177 174.384 161.794C181.34 155.411 181.161 162.932 173.857 178.843C166.553 194.753 165.197 213.15 170.765 220.081C176.333 227.011 176.56 219.33 171.292 203.032Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
            <path
              d="M171.86 197.948C170.306 188.473 171.133 177.622 173.725 173.807C176.317 169.991 176.188 174.459 173.433 183.721C170.679 192.984 169.852 203.835 171.568 207.862C173.285 211.89 173.414 207.423 171.86 197.948Z"
              stroke="white"
              strokeWidth="0.866653"
              strokeMiterlimit="10"
            />
          </mask>
          <g mask="url(#mask0_1560_15760)">
            <rect
              opacity="1"
              x="303.508"
              y="319.285"
              width="348.38"
              height="414.597"
              transform="rotate(156.959 303.508 319.285)"
              fill="white"
              stroke="white"
              strokeWidth="0.433326"
            />
          </g>
        </g>
      </svg>
      <div className="flex items-center space-x-3 relative z-10">
        <div className="p-2 bg-white/10 rounded-lg">{icon}</div>
        <div>
          <p className="text-xs opacity-80">{title}</p>
          <p className="text-lg sm:text-xl font-bold text-[#E5B700]">{value}</p>
        </div>
      </div>
    </div>
  );
};

// Simple Line Chart Component
const SimpleLineChart = ({ data }) => {
  const maxValue = 25000;
  const height = 300;
  const width = 800; // Default width for desktop
  const padding = 60;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  const xScale = (index) => (index * chartWidth) / (data.length - 1) + padding;
  const yScale = (value) => height - padding - (value / maxValue) * chartHeight;

  // Create smooth curve path
  const createPath = (values) => {
    return values
      .map((d, i) => {
        if (i === 0) return `M ${xScale(i)} ${yScale(d)}`;

        // Control points for bezier curve
        const x0 = xScale(i - 1);
        const y0 = yScale(values[i - 1]);
        const x1 = xScale(i);
        const y1 = yScale(d);
        const mx = (x0 + x1) / 2;

        return `C ${mx} ${y0}, ${mx} ${y1}, ${x1} ${y1}`;
      })
      .join(" ");
  };

  const totalPath = createPath(data.map((d) => d.total));
  const activePath = createPath(data.map((d) => d.active));

  // Create area fill for total line
  const areaPath =
    totalPath +
    ` L ${xScale(data.length - 1)} ${height - padding} L ${xScale(0)} ${
      height - padding
    } Z`;

  return (
    <div className="w-full overflow-x-auto">
      <svg
        width="100%"
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible min-w-[300px]"
      >
        {/* Y-axis labels and grid lines */}
        {[0, 5000, 10000, 15000, 20000, 25000].map((value) => (
          <g key={value}>
            <line
              x1={padding}
              y1={yScale(value)}
              x2={width - padding}
              y2={yScale(value)}
              stroke="#E5E5E5"
              strokeWidth="1"
            />
            <text
              x={padding - 10}
              y={yScale(value) + 5}
              textAnchor="end"
              className="text-xs sm:text-xs text-gray-500"
              fill="#6B7280"
            >
              {value === 0 ? "0" : `${value.toLocaleString()}`}
            </text>
          </g>
        ))}

        {/* Area fill under total line */}
        <path d={areaPath} fill="#E5B700" opacity="0.1" />

        {/* Lines */}
        <path d={totalPath} fill="none" stroke="#E5B700" strokeWidth="3" />
        <path d={activePath} fill="none" stroke="#1F2937" strokeWidth="3" />

        {/* X-axis labels */}
        {data.map((d, i) => (
          <text
            key={i}
            x={xScale(i)}
            y={height - padding + 25}
            textAnchor="middle"
            className="text-xs sm:text-xs"
            fill="#6B7280"
          >
            {d.month}
          </text>
        ))}

        {/* X-axis label */}
        <text
          x={width / 2}
          y={height - 15}
          textAnchor="middle"
          className="text-xs sm:text-sm"
          fill="#6B7280"
        >
          Month
        </text>

        {/* Y-axis label */}
        <text
          x={-height / 2}
          y={15}
          textAnchor="middle"
          className="text-xs sm:text-sm"
          fill="#6B7280"
          transform={`rotate(-90 15 ${height / 2})`}
        >
          Total User 12,653
        </text>
      </svg>
    </div>
  );
};

// Donut Chart Component
const DonutChart = () => {
  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32 sm:w-40 sm:h-40">
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="#E5E5E5"
        strokeWidth="20"
      />
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="#E5B700"
        strokeWidth="20"
        strokeDasharray="176 440"
        transform="rotate(-90 100 100)"
      />
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="#FFC107"
        strokeWidth="20"
        strokeDasharray="88 440"
        strokeDashoffset="-176"
        transform="rotate(-90 100 100)"
      />
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="#FF9800"
        strokeWidth="20"
        strokeDasharray="88 440"
        strokeDashoffset="-264"
        transform="rotate(-90 100 100)"
      />
      <text x="100" y="90" textAnchor="middle" className="text-xl sm:text-2xl font-bold">
        $9k
      </text>
      <text
        x="100"
        y="110"
        textAnchor="middle"
        className="text-xs text-gray-500"
      >
        $1,900
      </text>
    </svg>
  );
};

// Notification Item Component
const NotificationItem = ({ icon, text, time }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
      <div className="flex-1">
        <p className="text-xs sm:text-sm">{text}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default Dashboard;