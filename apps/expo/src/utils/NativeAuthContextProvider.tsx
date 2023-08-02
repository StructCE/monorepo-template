import React from "react";
import * as SecureStore from "expo-secure-store";

import {
  AuthContextProvider,
  type LocalSessionHandler,
} from "@struct/auth-context";

import { api, defaultHeaders } from "./api";

const sessionHandler: LocalSessionHandler = {
  get: async (name) => {
    const session = await SecureStore.getItemAsync(name).catch(() => null);
    if (session) {
      defaultHeaders[name] = session;
    }
    return session;
  },
  remove: (name) => {
    SecureStore.deleteItemAsync(name).catch(() => null);
    delete defaultHeaders[name];
  },
  set: ({ name, value }) => {
    SecureStore.setItemAsync(name, value)
      .then(() => {
        defaultHeaders[name] = value;
      })
      .catch(() => null);
  },
};

export const NativeAuthContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <AuthContextProvider api={api} localSessionHandler={sessionHandler}>
      {children}
    </AuthContextProvider>
  );
};
