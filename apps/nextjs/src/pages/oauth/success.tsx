import { useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

import { useAuthContext } from "@struct/auth-context";

export default function ReceiveOAuthInfo() {
  const router = useRouter();
  const { finishOAuth } = useAuthContext();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const { user, auth_session } = router.query;

      const userJson: unknown = JSON.parse(user as string);

      finishOAuth({
        user: userJson as Lucia.UserAttributes,
        session: auth_session as string,
      });
      //   console.log(auth_session);
      router.replace("/");
    }
  }, [router]);

  return <div>Autenticado com sucesso!</div>;
}

export function getServerSideProps() {
  return {
    props: {},
  };
}
