import { useEffect, useState, createContext, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  currentUser: User | null;
  updateUser: (data: User | { userInfo: User } | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const savedUser = localStorage.getItem('user');
      return savedUser && savedUser !== 'null' ? JSON.parse(savedUser) as User : null;
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null;
    }
  });

  const updateUser = (data: User | { userInfo: User } | null) => {
    const userData = data && typeof data === 'object' && 'userInfo' in data 
      ? data.userInfo 
      : data;
    setCurrentUser(userData);
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('user');
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};