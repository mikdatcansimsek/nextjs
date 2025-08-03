import { api } from './api';
import { ENDPOINTS } from './endpoints';

export const userService = {
  getAll: () => api.get(ENDPOINTS.USERS),
  getById: (id: string) => api.get(ENDPOINTS.USER_BY_ID(id)),
  create: (userData: { name: string; email: string }) => 
    api.post(ENDPOINTS.USERS, userData),
  update: (id: string, userData: { name?: string; email?: string }) => 
    api.put(ENDPOINTS.USER_BY_ID(id), userData),
  delete: (id: string) => api.delete(ENDPOINTS.USER_BY_ID(id)),
};

export const authService = {
  login: (credentials: { email: string; password: string }) => 
    api.post(ENDPOINTS.LOGIN, credentials),
  register: (userData: { name: string; email: string; password: string }) => 
    api.post(ENDPOINTS.REGISTER, userData),
};