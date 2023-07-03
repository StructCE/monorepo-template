import { Session } from "./context";

export function signInFromContext(
  setSession: React.Dispatch<React.SetStateAction<Session | null>>,
) {
  function signIn() {
    setSession({});
  }

  return signIn;
}
