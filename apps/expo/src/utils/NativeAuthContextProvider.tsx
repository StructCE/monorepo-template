import React from "react";
import * as SecureStore from "expo-secure-store";

import { AuthContextProvider, LocalSessionHandler } from "@struct/auth-context";

import { api, defaultHeaders } from "./api";

const sessionHandler: LocalSessionHandler = {
  get: async (name) => {
    const session = await SecureStore.getItemAsync(name);
    if (session) {
      defaultHeaders[name] = session;
    }
    return session;
  },
  remove: (name) => {
    SecureStore.deleteItemAsync(name);
    delete defaultHeaders[name];
  },
  set: ({ name, value }) => {
    SecureStore.setItemAsync(name, value);
    defaultHeaders[name] = value;
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
