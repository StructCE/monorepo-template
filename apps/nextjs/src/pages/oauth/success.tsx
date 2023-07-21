import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { useAuthContext } from "@struct/auth-context";

export default function ReceiveOAuthInfo() {
  const router = useRouter();
  const { finishOAuth } = useAuthContext();
  useEffect(() => {
    if (typeof window !== "undefined" && router.isReady) {
      const { user } = router.query;
      console.log("user", user);

      const auth_session = Cookies.get("auth_session");
      if (!auth_session) {
        throw new Error(
          "auth_session cookie not found. Error on OAuth callback.",
        );
      }

      const userJson = JSON.parse(user as string) as Lucia.UserAttributes;

      finishOAuth({
        user: userJson,
        session: auth_session as string,
      });

      router.replace("/");
    }
  }, [router, router.isReady]);

  return (
    <>
      <Head>
        {/* scraping engines should ignore the page: */}
        <meta name="robots" content="noindex" />
      </Head>
    </>
  );
}
