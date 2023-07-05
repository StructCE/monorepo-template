import "../styles/globals.css";

import type { AppType } from "next/app";

import { AuthContextProvider } from "@struct/auth-context";

import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    // <SessionProvider session={session}>
    <AuthContextProvider api={api}>
      <Component {...pageProps} />
    </AuthContextProvider>
    // </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
