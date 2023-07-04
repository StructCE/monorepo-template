import "../styles/globals.css";

import type { AppType } from "next/app";

import { api } from "~/utils/api";
import { AuthContextProvider } from "~/authContext";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    // <SessionProvider session={session}>
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
    // </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
