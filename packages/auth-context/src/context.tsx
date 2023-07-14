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

// interface instead of type for better intellisense
interface AuthContextT {
  user: null | Lucia.UserAttributes;
  signIn: (
    arg: RouterInputs["auth"]["signIn"],
  ) => Promise<Lucia.UserAttributes>;
  signOut: () => Promise<unknown>;
  signUp: (
    arg: RouterInputs["auth"]["signUp"],
  ) => Promise<Lucia.UserAttributes>;
}

const AuthContext = createContext<null | AuthContextT>(null);

type CookieHandler = {
  set: (cookie: { name: string; value: string; expireDate: string }) => void;
  remove: (cookie: { name: string }) => void;
  get: (cookie: { name: string }) => string | undefined;
};

type AuthContextProviderProps = {
  children: ReactNode;
  // react native or nextjs api instance:
  api:
    | CreateTRPCReact<AppRouter, unknown, null>
    | CreateTRPCNext<AppRouter, NextPageContext, null>;
  manualCookieManager?: {
    cookieHandler: CookieHandler;
    addAuthSessionToHeaders: (authSession: string | undefined) => void;
  };
};

export const AuthContextProvider = ({
  children,
  // pass the clientside api to the context provider:
  api,
  // pass the client cookie setter to the context provider:
  manualCookieManager,
}: AuthContextProviderProps) => {
  const [user, setUser] = useState<Lucia.UserAttributes | null>(null);

  const { mutateAsync: getUser } = api.auth.getUser.useMutation();
  useEffect(() => {
    if (manualCookieManager) {
      const authSession = manualCookieManager.cookieHandler.get({
        name: "authSession",
      });
      manualCookieManager.addAuthSessionToHeaders(authSession);
      if (authSession) {
        getUser()
          .then((usr) => setUser(usr))
          .catch(() => {
            setUser(null);
          });
      }
    } else {
      getUser()
        .then((usr) => setUser(usr))
        .catch(() => {
          setUser(null);
        });
    }
  }, [getUser]);

  // usando mutateAsync porque fica mais fácil de lidar com o retorno da api,
  // já que o retorno é uma Promise e basta usar .then().catch()
  const { mutateAsync: apiSignIn } = api.auth.signIn.useMutation();
  async function signIn(signInInfo: RouterInputs["auth"]["signIn"]) {
    return apiSignIn(signInInfo).then((res) => {
      setUser(res.user);
      return res.user;
    });
  }

  // isso é estranho, não deveríamos depender da api para remover os cookies do
  // lado do cliente.
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

  return authContext;
};
