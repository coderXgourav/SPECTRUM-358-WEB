// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// API endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/auth/register`,
    ADMIN_REGISTER_USER: `${API_BASE_URL}/api/auth/admin/register-user`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
    PROFILE: (uid) => `${API_BASE_URL}/api/auth/profile/${uid}`,
    USERS: `${API_BASE_URL}/api/auth/users`,
    DELETE_USER: (userId) => `${API_BASE_URL}/api/auth/users/${userId}`,
    UPDATE_USER: (userId) => `${API_BASE_URL}/api/auth/users/${userId}`,
    FORGOT_PASSWORD: `${API_BASE_URL}/api/auth/forgot-password`,
    RESET_PASSWORD: `${API_BASE_URL}/api/auth/reset-password`,
    UPDATE_PASSWORD: `${API_BASE_URL}/api/auth/update-password`,
  },

  // Tickets endpoints
  TICKETS: {
    BASE: `${API_BASE_URL}/api/tickets`,
    BY_ID: (id) => `${API_BASE_URL}/api/tickets/${id}`,
    BY_USER: (userId) => `${API_BASE_URL}/api/tickets/user/${userId}`,
    COMMENTS: (id) => `${API_BASE_URL}/api/tickets/${id}/comments`,
    STATS: `${API_BASE_URL}/api/tickets/stats`,
  },

  // Packages endpoints
  PACKAGES: {
    BASE: `${API_BASE_URL}/api/packages`,
    BY_ID: (id) => `${API_BASE_URL}/api/packages/${id}`,
    ACTIVE: `${API_BASE_URL}/api/packages/active/list`,
    STATS: `${API_BASE_URL}/api/packages/stats/overview`,
  },

  // Reports endpoints
  REPORTS: {
    BASE: `${API_BASE_URL}/api/reports`,
    BY_ID: (id) => `${API_BASE_URL}/api/reports/${id}`,
    USER_ANALYTICS: `${API_BASE_URL}/api/reports/generate/user-analytics`,
    TICKET_SUMMARY: `${API_BASE_URL}/api/reports/generate/ticket-summary`,
  },
};

// HTTP client configuration
export const httpConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
};

export { API_BASE_URL };
