export const API = {
  BASE_URL: '/api',
  AUTH: {
    LOGIN: '/auth/login',
  },
  MEMBERS: {
    LIST: '/members',
    DETAIL: (id: string) => `/members/${id}`,
  },
  STAFF: {
    LIST: '/staff',
    DETAIL: (id: string) => `/staff/${id}`,
  },
} as const;
