import { api } from './api';
import { ENDPOINTS } from './endpoints';
import type { User, ApiResponse, CreateUserData, UpdateUserData } from '@/types/api';

export const userService = {
  getAll: (): Promise<ApiResponse<User[]>> => 
    api.get(ENDPOINTS.USERS),
    
  getById: (id: string): Promise<ApiResponse<User>> => 
    api.get(ENDPOINTS.USER_BY_ID(id)),
    
  create: (userData: CreateUserData): Promise<ApiResponse<User>> => 
    api.post(ENDPOINTS.USERS, userData),
    
  update: (id: string, userData: UpdateUserData): Promise<ApiResponse<User>> => 
    api.put(ENDPOINTS.USER_BY_ID(id), userData),
    
  delete: (id: string): Promise<ApiResponse<{ message: string }>> => 
    api.delete(ENDPOINTS.USER_BY_ID(id)),
};