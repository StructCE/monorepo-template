import {
  createContext,
  useCallback,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

import { signInFromContext } from "./signIn";
import { signOutFromContext } from "./signOut";

type SignInType = "email" | "google";

type SignInInfo<T extends SignInType> = T extends "email"
  ? {
      email: string;
      password: string;
    }
  : {};

export interface ContextT {
  session: {} | null;
  signIn: (type: SignInType, signInInfo: SignInInfo<SignInType>) => void;
  signOut: () => void;
}

export type Session = object;

const SessionContext = createContext<ContextT>({
  session: null,
  signIn: () => {},
  signOut: () => {},
});

// This hook can be used to access the session info.
export function useSession() {
  return useContext(SessionContext);
}

export const SessionProvider: FC<PropsWithChildren> = (props) => {
  const [session, setSession] = useState<Session | null>(null);

  const signIn = useCallback(signInFromContext(setSession), [setSession]);
  const signOut = useCallback(signOutFromContext(setSession), [setSession]);

  return (
    <SessionContext.Provider
      value={{
        session,
        signIn,
        signOut,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};
