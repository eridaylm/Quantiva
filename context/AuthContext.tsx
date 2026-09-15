'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppUser } from '@/types';

interface AuthContextType {
  user: AppUser | null;
  isAuthenticated: boolean;
  isAdminLoggedIn: boolean;
  isLoading: boolean;
  allUsers: AppUser[];
  addUser: (u: AppUser) => void;
  updateUser: (u: AppUser) => void;
  deleteUser: (email: string) => void;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (updates: Partial<AppUser>) => void;
  changePassword: (oldPass: string, newPass: string) => { success: boolean; error?: string };
  authError: string | null;
  setAuthError: (err: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_STORAGE_KEY = 'edutest_admin_session';
const USERS_DB_KEY = 'edutest_users_db';

const defaultDummyUsers: AppUser[] = [
  { email: 'admin@edutest.id', name: 'Super Administrator', firstName: 'Super', lastName: 'Administrator', username: 'admin', role: 'admin', pass: 'admin123' },
  { email: 'arjuna@remath.id', name: 'I Komang Arjuna Tudung Negara', firstName: 'Arjuna', lastName: 'Negara', username: 'arjuna_admin', role: 'admin', pass: 'admin123' },
  { email: 'erida@remath.id', name: 'Eridayalma Zahra Yohar', firstName: 'Erida', lastName: 'Yohar', username: 'erida_admin', role: 'admin', pass: 'admin123' },
  { email: 'calizha@remath.id', name: 'Calizha', firstName: 'Calizha', lastName: '', username: 'calizha_user', role: 'user', pass: 'user123' },
  { email: 'michelle@remath.id', name: 'Michelle', firstName: 'Michelle', lastName: '', username: 'michelle_user', role: 'user', pass: 'user123' },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<AppUser | null>(null);
  const [allUsers, setAllUsers] = useState<AppUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Load Users DB
      const storedUsers = localStorage.getItem(USERS_DB_KEY);
      let usersToUse = defaultDummyUsers;
      if (storedUsers) {
        usersToUse = JSON.parse(storedUsers);
      } else {
        localStorage.setItem(USERS_DB_KEY, JSON.stringify(defaultDummyUsers));
      }
      setAllUsers(usersToUse);

      // Load Session
      const storedSession = localStorage.getItem(ADMIN_STORAGE_KEY);
      if (storedSession) {
        const parsed: AppUser = JSON.parse(storedSession);
        // Validasi apakah user ada di DB
        const matched = usersToUse.find(u => u.email === parsed.email);
        if (matched) {
          setUser(parsed);
        } else {
          localStorage.removeItem(ADMIN_STORAGE_KEY);
        }
      }
    } catch {
      console.error('Failed to load auth data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveUsersDB = (newUsers: AppUser[]) => {
    setAllUsers(newUsers);
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(newUsers));
  };

  const addUser = (u: AppUser) => {
    if (!allUsers.find(x => x.email === u.email)) {
      saveUsersDB([...allUsers, u]);
    }
  };

  const updateUser = (u: AppUser) => {
    saveUsersDB(allUsers.map(x => x.email === u.email ? u : x));
  };

  const deleteUser = (email: string) => {
    saveUsersDB(allUsers.filter(x => x.email !== email));
  };

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    const e = email.trim().toLowerCase();
    
    const matchedUser = allUsers.find(u => u.email.toLowerCase() === e && u.pass === pass);

    if (matchedUser) {
      const now = new Date().toLocaleString('id-ID');
      const updatedUser: AppUser = {
        ...matchedUser,
        lastAccess: now,
        token: 'edu-jwt-mock-' + Date.now(),
      };
      
      // Update in DB
      updateUser(updatedUser);
      
      setUser(updatedUser);
      setAuthError(null);
      try {
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(updatedUser));
      } catch (err) {
        console.error('Storage write error', err);
      }
      return { success: true };
    } else {
      const err = 'Email atau kata sandi tidak valid.';
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
    router.push('/');
  };

  const isAdminLoggedIn = !!user && user.role === 'admin';

  const updateProfile = (updates: Partial<AppUser>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates };
    // update current session
    setUser(updatedUser);
    try {
      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(updatedUser));
    } catch (e) {
      console.error(e);
    }
    // update in DB
    updateUser(updatedUser);
  };

  const changePassword = (oldPass: string, newPass: string) => {
    if (!user) return { success: false, error: 'User not logged in' };
    
    if (user.pass !== oldPass) {
      return { success: false, error: 'Sandi Lama tidak sesuai.' };
    }
    
    const updatedUser = { ...user, pass: newPass };
    // update current session
    setUser(updatedUser);
    try {
      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(updatedUser));
    } catch (e) {
      console.error(e);
    }
    // update in DB
    updateUser(updatedUser);
    
    return { success: true };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        allUsers,
        addUser,
        updateUser,
        deleteUser,
        isAuthenticated: !!user,
        isAdminLoggedIn,
        isLoading,
        login,
        logout,
        updateProfile,
        changePassword,
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
