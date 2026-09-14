'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminUser } from '@/types';

interface AuthContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  isAdminLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  authError: string | null;
  setAuthError: (err: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_STORAGE_KEY = 'edutest_admin_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.email === 'admin@edutest.id') {
          setUser(parsed);
        }
      }
    } catch {
      console.error('Failed to load admin auth session');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    // Validating predefined credentials
    if (email.trim().toLowerCase() === 'admin@edutest.id' && pass === 'admin123') {
      const adminData: AdminUser = {
        email: 'admin@edutest.id',
        name: 'Super Administrator',
        role: 'admin',
        token: 'edu-jwt-mock-' + Date.now(),
      };
      setUser(adminData);
      setAuthError(null);
      try {
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(adminData));
      } catch (e) {
        console.error('Storage write error', e);
      }
      return { success: true };
    } else {
      const err = 'Email atau kata sandi tidak valid. Gunakan admin@edutest.id dan admin123';
      setAuthError(err);
      return { success: false, error: err };
    }
  };

  const logout = () => {
    setUser(null);
    setAuthError(null);
    try {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
    } catch (e) {
      console.error('Storage remove error', e);
    }
  };

  const isAdminLoggedIn = !!user && user.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdminLoggedIn,
        isLoading,
        login,
        logout,
        authError,
        setAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
