import React from "react";

type AuthState =
  | {
      accessToken: string;
      refreshToken: string;
    }
  | undefined;

type AuthContextValue = {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
};
const AuthContext = React.createContext({} as AuthContextValue);

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = React.useState<AuthState>(undefined);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);
const useIsAuthenticated = () => {
  const { auth } = useAuth();
  return !!auth;
};
const useIsNotAuthenticated = () => {
  const { auth } = useAuth();
  return !auth;
};

export { AuthProvider, useAuth, useIsAuthenticated, useIsNotAuthenticated };
