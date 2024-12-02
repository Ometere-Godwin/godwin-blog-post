import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  token: string | null;
  login: (userData: any, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      login: (userData, token) => {
        localStorage.setItem('blog_token', token);
        set({ isAuthenticated: true, user: userData, token });
      },
      logout: () => {
        localStorage.removeItem('blog_token');
        set({ isAuthenticated: false, user: null, token: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);