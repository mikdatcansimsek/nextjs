export const ENDPOINTS = {
  USERS: '/users',
  USER_BY_ID: (id: string) => `/users/${id}`,
  POSTS: '/posts',
  POST_BY_SLUG: (slug: string) => `/posts/${slug}`,
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
} as const;