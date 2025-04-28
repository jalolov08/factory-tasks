import { create } from 'zustand';
import { User } from '../types/user.type';
import { createJSONStorage, persist } from 'zustand/middleware';
import { storage } from '@utils/storage.util';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user: User) =>
        set({
          user,
          isAuthenticated: true,
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
      setUser: (user: User | null) =>
        set({
          user,
          isAuthenticated: user !== null,
        }),
    }),
    { name: 'user-storage', storage: createJSONStorage(() => storage) }
  )
);
