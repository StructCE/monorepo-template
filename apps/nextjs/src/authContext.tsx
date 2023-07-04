import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { api, RouterInputs } from "./utils/api";

const AuthContext = createContext<null | {
  user: null | Lucia.UserAttributes;
  login: (
    _loginInfo: RouterInputs["auth"]["login"],
  ) => Promise<Lucia.UserAttributes>;
  logout: () => Promise<unknown>;
}>(null);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<Lucia.UserAttributes | null>(null);

  const { mutate: apiLogin } = api.auth.login.useMutation();

  const { mutateAsync: getUser } = api.auth.getUser.useMutation();
  useEffect(() => {
    getUser()
      .then((usr) => setUser(usr))
      .catch(() => {});
  }, []);

  async function login(loginInfo: RouterInputs["auth"]["login"]) {
    return new Promise<Lucia.UserAttributes>((resolve, reject) => {
      apiLogin(loginInfo, {
        onError(error, variables) {
          reject({ error, variables });
        },
        onSuccess(response, variables) {
          setUser(response);
          resolve(response);
        },
      });
    });
  }

  async function logout() {}

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
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

  console.log(authContext);

  return authContext;
};
