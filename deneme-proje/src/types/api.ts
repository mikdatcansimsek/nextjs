export interface User {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface CreateUserData {
  name: string;
  email: string;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
}