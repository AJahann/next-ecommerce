'use client';
import type { ReactNode } from 'react';

import { createContext, useContext, useState } from 'react';

interface AuthState {
  loggedIn: boolean;
  user: { username?: string; email?: string } | null;
}

interface AuthContextType extends AuthState {
  setAuthState: (state: AuthState) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
  initialAuthState,
}: {
  children: ReactNode;
  initialAuthState: AuthState;
}) => {
  const [authState, setAuthState] = useState<AuthState>(initialAuthState);

  return (
    // eslint-disable-next-line @eslint-react/no-unstable-context-value
    <AuthContext.Provider value={{ ...authState, setAuthState }}>
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
