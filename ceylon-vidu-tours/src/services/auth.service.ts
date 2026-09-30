import { apiClient } from '@/lib/api-client';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY';

  email: string;

  phone: string;

  password: string;

  confirmPassword: string;

  country: string;

  stateProvince: string;

  profileImage?: string;
}

export const authService = {
  login: async (data: LoginRequest) => {
    const response = await apiClient.post('/auth/login', data);
    return response.data;
  },

  register: async (data: RegisterRequest) => {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  },

  logout: async () => {
    const response = await apiClient.post('/auth/logout');
    return response.data;
  },

  refresh: async () => {
    const isAdminRoute = typeof window !== 'undefined' && window.location.pathname.startsWith('/admin');
    const endpoint = isAdminRoute ? '/auth/admin-refresh' : '/auth/refresh';
    const response = await apiClient.post(endpoint);
    return response.data;
  },

  me: async () => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },
};
