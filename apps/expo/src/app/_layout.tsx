import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { AuthContextProvider, type SessionHandler } from "@struct/auth-context";

import { api, defaultHeaders, TRPCProvider } from "~/utils/api";

// This is the main layout of the app
// It wraps your pages with the providers they need

const sessionManager: SessionHandler = {
  get: () => "EVvac8rBorUmpUjxOzLkdWoqVQ3hmacF8GURi3Wp",
  set: (sessionInfo) => {
    defaultHeaders[sessionInfo.name] = sessionInfo.value;
  },
  remove: () => {},
};

const RootLayout = () => {
  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <AuthContextProvider api={api} sessionHandler={sessionManager}>
          {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#ffffaa",
              },
            }}
          />
          <StatusBar />
        </AuthContextProvider>
      </SafeAreaProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
