import { createContext, useContext, useState, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthValue {
  isAuthed: boolean;
  login: (email: string, password: string, remember?: boolean) => Promise<boolean>;
  logout: () => void;
}

const KEY = 'admin_auth';
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = 'admin@123';
const AuthContext = createContext<AuthValue | null>(null);

const readStored = () => {
  try {
    return localStorage.getItem(KEY) === '1' || sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(readStored);

  // Static login (no backend). Credentials are in this file, so they are visible in the built JS.
  // "Remember me" keeps the session after the browser closes; otherwise it ends with the tab.
  const login = async (email: string, password: string, remember = false) => {
    const ok = email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD;
    if (ok) {
      try {
        (remember ? localStorage : sessionStorage).setItem(KEY, '1');
      } catch {
        /* storage blocked: session lasts until refresh */
      }
      setIsAuthed(true);
    }
    return ok;
  };

  const logout = () => {
    try {
      localStorage.removeItem(KEY);
      sessionStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
    setIsAuthed(false);
  };

  return <AuthContext.Provider value={{ isAuthed, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthed } = useAuth();
  const location = useLocation();
  if (!isAuthed) return <Navigate to="/admin/login" state={{ from: location }} replace />;
  return <>{children}</>;
}