import { useEffect } from "react";
import { useRouter } from "next/router";

export default function OAuthError() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 5000);
  }, []);

  return <div>Ocorreu um erro na sua autenticação por terceiros.</div>;
}
