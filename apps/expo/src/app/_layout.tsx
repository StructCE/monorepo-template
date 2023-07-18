import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "~/utils/api";
import { ExpoAuthContextProvider } from "~/utils/ExpoAuthContext";

// This is the main layout of the app
// It wraps your pages with the providers they need

const RootLayout = () => {
  return (
    <TRPCProvider>
      <SafeAreaProvider>
        <ExpoAuthContextProvider>
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
        </ExpoAuthContextProvider>
      </SafeAreaProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
