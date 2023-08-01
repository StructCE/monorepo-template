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

import type { AppRouter, RouterInputs, RouterOutputs } from "@struct/api";

const DEFAULT_SESSION_STORED_NAME = "auth_session";

type UserAttributes = RouterOutputs["auth"]["getUser"];

// interface instead of type for better intellisense
interface AuthContextT {
  user: null | UserAttributes;
  signIn: (arg: RouterInputs["auth"]["signIn"]) => Promise<UserAttributes>;
  signOut: () => Promise<unknown>;
  signUp: (arg: RouterInputs["auth"]["signUp"]) => Promise<UserAttributes>;
}

const AuthContext = createContext<null | AuthContextT>(null);

export type LocalSessionHandler = {
  set: (sessionCookie: { name: string; value: string }) => void;
  remove: (name: string) => void;
  get: (name: string) => Promise<string | null>;
};

type AuthContextProviderProps = {
  children: ReactNode;
  // react native or nextjs api instance:
  api:
    | CreateTRPCReact<AppRouter, unknown, null>
    | CreateTRPCNext<AppRouter, NextPageContext, null>;
  // if you want to use a custom cookie manager, pass it here:
  localSessionHandler: LocalSessionHandler;
};

export const AuthContextProvider = ({
  children,
  // pass the clientside api to the context provider:
  api,
  // pass the client cookie setter to the context provider:
  localSessionHandler,
}: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserAttributes | null>(null);

  const { mutateAsync: getUser } = api.auth.getUser.useMutation();
  useEffect(() => {
    // void because we should error handle this in another layer
    void localSessionHandler
      .get(DEFAULT_SESSION_STORED_NAME)
      .then((authSession) => {
        if (authSession) {
          localSessionHandler.set({
            name: DEFAULT_SESSION_STORED_NAME,
            value: authSession,
          });
          getUser()
            .then((usr) => setUser(usr))
            .catch(() => {
              setUser(null);
              localSessionHandler.remove(DEFAULT_SESSION_STORED_NAME);
            });
        }
      });
  }, [localSessionHandler, getUser]);

  // usando mutateAsync porque fica mais fácil de lidar com o retorno da api,
  // já que o retorno é uma Promise e basta usar .then().catch()
  const { mutateAsync: apiSignIn } = api.auth.signIn.useMutation();
  async function signIn(signInInfo: RouterInputs["auth"]["signIn"]) {
    return apiSignIn(signInInfo).then((res) => {
      setUser(res.user);
      localSessionHandler.set({
        name: DEFAULT_SESSION_STORED_NAME,
        value: res.session.sessionId,
      });
      return res.user;
    });
  }

  // isso é estranho, não deveríamos depender da api para remover os cookies do
  // lado do cliente.
  const { mutateAsync: apiSignOut } = api.auth.signOut.useMutation();
  async function signOut() {
    return apiSignOut().then((res) => {
      setUser(null);
      localSessionHandler.remove(DEFAULT_SESSION_STORED_NAME);
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
