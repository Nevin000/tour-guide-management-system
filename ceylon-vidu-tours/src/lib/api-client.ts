import axios from 'axios';

import { refreshAccessToken } from './refresh-token';
import { useAuthStore } from '@/stores/auth.store';

const getBaseURL = () => {
  if (typeof window !== 'undefined') {
    // Browser relative path for seamless resolution regardless of host IP/port
    return '/api';
  }
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
};

export const apiClient = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes('/auth/refresh') &&
      !originalRequest.url?.includes('/auth/admin-refresh')
    ) {
      originalRequest._retry = true;

      try {
        const accessToken = await refreshAccessToken();

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return apiClient(originalRequest);
      } catch {
        useAuthStore.getState().clearAuth();

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
