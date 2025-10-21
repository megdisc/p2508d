export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  MEMBERS: '/members',
  MEMBER_DETAIL: (id: string) => `/members/${id}`,
  STAFF: '/staff',
  STAFF_DETAIL: (id: string) => `/staff/${id}`,
  PROJECTS: '/projects', // 追加
  SETTINGS: '/settings',
} as const;
