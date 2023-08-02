import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

const HomePage = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex min-h-screen justify-center bg-slate-800 pt-16 text-sky-50">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Página Inicial" }} />
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-4xl font-bold text-white">
          App <Text className="text-blue-400">Strucc</Text>, Po##a
        </Text>

        <View className="py-2">
          <Text className="font-semibold italic text-white">
            Essa página só está aqui para exemplificar uso do React Native
          </Text>
          <TouchableOpacity
            className="mt-10"
            onPress={() => router.push("/login")}
          >
            <Text className="p-10 text-sky-200 underline">Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
