import { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  isAdmin: boolean;
  toggleAdmin: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => {
    setIsAdmin((prevIsAdmin) => !prevIsAdmin);
  };

  return <UserContext.Provider value={{ isAdmin, toggleAdmin }}>{children}</UserContext.Provider>;
};
