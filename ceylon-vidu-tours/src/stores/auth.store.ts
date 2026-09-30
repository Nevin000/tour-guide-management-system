import { create } from 'zustand';

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;

  isAuthenticated: boolean;
  initialized: boolean;
  loading: boolean;

  setAuth: (user: AuthUser, accessToken: string) => void;
  clearAuth: () => void;

  setLoading: (loading: boolean) => void;
  setInitialized: (initialized: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,

  isAuthenticated: false,
  initialized: false,
  loading: false,

  setAuth: (user, accessToken) =>
    set({
      user,
      accessToken,
      isAuthenticated: true,
    }),

  clearAuth: () =>
    set({
      user: null,
      accessToken: null,
      isAuthenticated: false,
    }),

  setLoading: (loading) =>
    set({
      loading,
    }),

  setInitialized: (initialized) =>
    set({
      initialized,
    }),
}));
