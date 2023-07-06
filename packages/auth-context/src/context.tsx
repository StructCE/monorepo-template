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

type AuthContextT = {
  user: null | Lucia.UserAttributes;
  signIn: (
    arg: RouterInputs["auth"]["signIn"],
  ) => Promise<Lucia.UserAttributes>;
  signOut: () => Promise<unknown>;
  signUp: (
    arg: RouterInputs["auth"]["signUp"],
  ) => Promise<Lucia.UserAttributes>;
};

const AuthContext = createContext<null | AuthContextT>(null);

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

  const { mutateAsync: apiSignIn } = api.auth.signIn.useMutation();

  const { mutateAsync: getUser } = api.auth.getUser.useMutation();
  useEffect(() => {
    getUser()
      .then((usr) => setUser(usr))
      .catch(() => {
        setUser(null);
      });
  }, [getUser]);

  async function signIn(signInInfo: RouterInputs["auth"]["signIn"]) {
    return apiSignIn(signInInfo).then((res) => {
      setUser(res);
      return res;
    });
  }

  const { mutateAsync: apiSignOut } = api.auth.signOut.useMutation();
  async function signOut() {
    return apiSignOut().then((res) => {
      setUser(null);
      return res;
    });
  }

  const { mutateAsync: signUpMutation } = api.auth.signUp.useMutation();
  async function signUp(signUpInfo: RouterInputs["auth"]["signUp"]) {
    return signUpMutation(signUpInfo);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        signUp,
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
