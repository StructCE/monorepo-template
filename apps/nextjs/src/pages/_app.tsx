import { WebAuthContextProvider } from "~/utils/webAuthContext";
import "../styles/globals.css";

import type { AppType } from "next/app";
import { api } from "~/utils/api";


const MyApp: AppType = ({
  Component,
  pageProps,
}) => {
  return (
    <WebAuthContextProvider>
      <Component {...pageProps} />
    </WebAuthContextProvider>
  );
};

export default api.withTRPC(MyApp);
