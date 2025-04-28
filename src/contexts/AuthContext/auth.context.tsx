import React, { createContext, useContext, useEffect } from 'react';
import { api } from '@api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '@zustand/useAuthStore';
import { User } from '../../types/user.type';

interface AuthContextProps {
  onLogin: (username: string, password: string) => Promise<boolean>;
  onLogout: () => Promise<void>;
}

const defaultContext: AuthContextProps = {
  onLogin: async () => false,
  onLogout: async () => {},
};

const AuthContext = createContext<AuthContextProps>(defaultContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, setUser, logout, login } = useAuthStore();

  useEffect(() => {
    const getUser = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        try {
          const response = await api.get<User>('/app/me');
          setUser(response.data);
        } catch (error) {
          console.error('Failed to fetch user', error);
        }
      }
    };

    getUser();
  }, []);

  const onLogin = async (username: string, password: string) => {
    try {
      const response = await api.post<{ token: string; user: User }>(
        '/app/login',
        {
          username,
          password,
        }
      );
      const { token, user } = response.data;

      await AsyncStorage.setItem('token', token);
      setUser(user);
      login(user);

      return true;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  };

  const onLogout = async () => {
    try {
      await AsyncStorage.clear();
      setUser(null);
      logout();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
