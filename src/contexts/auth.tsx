import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextInterface {
  name: string | null;
  setName: (name: string) => void;
  logout: () => void;
  login: (name: string) => void;
}

type AuthProviderProps = {
  children: ReactNode;
};

const AuthCtx = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [name, setName] = useState<string | null>(null);

  const logout = () => {
    setName(null);
  };

  const login = (name: string) => {
    setName(name);
  };

  return (
    <AuthCtx.Provider value={{ name, setName, logout, login }}>
      {children}
    </AuthCtx.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthCtx);
};
