import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { NextPageContext } from "next";
import type { CreateTRPCNext } from "@trpc/next/dist/createTRPCNext";
import type { CreateTRPCReact } from "@trpc/react-query/dist/createTRPCReact";

import type { AppRouter, RouterInputs } from "@struct/api";

const AuthContext = createContext<null | {
  user: null | Lucia.UserAttributes;
  login: (
    _loginInfo: RouterInputs["auth"]["login"],
  ) => Promise<Lucia.UserAttributes>;
  logout: () => Promise<unknown>;
  signup: (
    signUpInfo: RouterInputs["auth"]["signUp"],
  ) => Promise<Lucia.UserAttributes>;
}>(null);

export const AuthContextProvider = ({
  children,
  api,
}: {
  children: ReactNode;
  api:
    | CreateTRPCReact<AppRouter, unknown, null>
    | CreateTRPCNext<AppRouter, NextPageContext, null>;
}) => {
  const [user, setUser] = useState<Lucia.UserAttributes | null>(null);

  const { mutateAsync: apiLogin } = api.auth.login.useMutation();

  const { mutateAsync: getUser } = api.auth.getUser.useMutation();
  useEffect(() => {
    getUser()
      .then((usr) => setUser(usr))
      .catch(() => {});
  }, []);

  async function login(loginInfo: RouterInputs["auth"]["login"]) {
    return apiLogin(loginInfo).then((res) => {
      setUser(res);
      return res;
    });
  }

  const { mutateAsync: apiLogout } = api.auth.logout.useMutation();
  async function logout() {
    return apiLogout().then((res) => {
      setUser(null);
      return res;
    });
  }

  const { mutateAsync: signupMutation } = api.auth.signUp.useMutation();
  async function signup(signUpInfo: RouterInputs["auth"]["signUp"]) {
    return signupMutation(signUpInfo);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
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
