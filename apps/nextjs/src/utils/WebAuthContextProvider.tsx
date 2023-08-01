import React from "react";
import Cookie from "js-cookie";

import {
  AuthContextProvider,
  type LocalSessionHandler,
} from "@struct/auth-context";

import { api, defaultHeaders } from "~/utils/api";

const sessionHandler: LocalSessionHandler = {
  // eslint-disable-next-line @typescript-eslint/require-await
  get: async (name: string) => {
    return Cookie.get(name) || null;
  },
  set: ({ name, value }) => {
    defaultHeaders[name] = value;
    Cookie.set(name, value, { sameSite: "strict", expires: 365 });
  },
  remove: (name: string) => {
    Cookie.remove(name);
    delete defaultHeaders[name];
  },
};

export const WebAuthContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <AuthContextProvider api={api} localSessionHandler={sessionHandler}>
      {children}
    </AuthContextProvider>
  );
};
