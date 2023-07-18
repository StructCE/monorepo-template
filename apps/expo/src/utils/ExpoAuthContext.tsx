import React from "react";
import * as SecureStore from "expo-secure-store";

import {
  AuthContextProvider,
  type LocalSessionHandler,
} from "@struct/auth-context";

import { api, defaultHeaders } from "~/utils/api";

const sessionManager: LocalSessionHandler = {
  get: async (key) => await SecureStore.getItemAsync(key),
  set: ({ name, value }) => {
    SecureStore.setItemAsync(name, value);
    defaultHeaders[name] = value;
    console.log(defaultHeaders);
  },
  remove: (key) => {
    delete defaultHeaders[key];
    SecureStore.deleteItemAsync(key).catch(() => {});
  },
};

// This is a wrapper around the AuthContextProvider
// It provides the localSessionHandler to the AuthContextProvider, which is used to store the session token
export function ExpoAuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthContextProvider api={api} localSessionHandler={sessionManager}>
      {children}
    </AuthContextProvider>
  );
}
