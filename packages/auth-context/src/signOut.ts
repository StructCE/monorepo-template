import { Session } from "./context";

export function signOutFromContext(
  setSession: React.Dispatch<React.SetStateAction<Session | null>>,
) {
  function signOut() {
    setSession(null);
  }

  return signOut;
}
