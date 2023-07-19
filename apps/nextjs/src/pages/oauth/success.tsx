import { useRouter } from "next/router";

import { useAuthContext } from "@struct/auth-context";

export default function ReceiveOAuthInfo() {
  const router = useRouter();
  const { finishOAuth } = useAuthContext();

  if (typeof window !== "undefined") {
    const { user, auth_session } = router.query;
    const userJson: unknown = JSON.parse(user as string);

    finishOAuth({
      user: userJson as Lucia.UserAttributes,
      session: auth_session as string,
    });

    router.replace("/");
  }

  return <div>Autenticado com sucesso!</div>;
}
