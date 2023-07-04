import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "./utils/api";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState({
    userId: "",
  });

  const { data } = api.auth.getUser.useQuery();

  useEffect(() => {
    setUser(data);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: null,
        login: () => {},
        logout: () => {},
        authReady: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error(
      "You may only call useAuthContext inside its provider. Make sure you're wrapping <AuthProvider /> around your app.",
    );
  }

  return authContext;
};
