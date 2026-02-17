import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiService } from './api';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, firstName: string, lastName: string, role?: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedUser = apiService.getUser();
    const storedToken = apiService.getToken();

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }

    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await apiService.login({ email, password });

      if (response.data?.token && response.data?.user) {
        apiService.setToken(response.data.token);
        apiService.setUser(response.data.user);
        setToken(response.data.token);
        setUser(response.data.user);
      } else {
        throw new Error('Invalid response from server');
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    role?: string
  ) => {
    setLoading(true);
    try {
      const response = await apiService.register({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
        role,
      });

      if (response.data?.token && response.data?.user) {
        apiService.setToken(response.data.token);
        apiService.setUser(response.data.user);
        setToken(response.data.token);
        setUser(response.data.user);
      } else {
        throw new Error('Invalid response from server');
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    apiService.logout();
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated: !!token && !!user,
        login,
        register,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
