import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "~/utils/api";
import { NativeAuthContextProvider } from "~/utils/NativeAuthContextProvider";

// This is the main layout of the app
// It wraps your pages with the providers they need
const RootLayout = () => {
  return (
    <TRPCProvider>
      <NativeAuthContextProvider>
        <SafeAreaProvider>
          {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "rgb(20,31,49)",
              },
              headerTintColor: "#ccc",
              statusBarStyle: "light",
              statusBarTranslucent: true,
            }}
          />
          <StatusBar />
        </SafeAreaProvider>
      </NativeAuthContextProvider>
    </TRPCProvider>
  );
};

export default RootLayout;
