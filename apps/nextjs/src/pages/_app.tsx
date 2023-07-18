import "../styles/globals.css";

import type { AppType } from "next/app";

import { api } from "~/utils/api";
import AuthWebContextProvider from "~/utils/AuthWebContext";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <AuthWebContextProvider>
      <Component {...pageProps} />
    </AuthWebContextProvider>
  );
};

export default api.withTRPC(MyApp);
