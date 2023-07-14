import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack, useRouter } from "expo-router";

import { useAuthContext } from "@struct/auth-context";

const Index = () => {
  const { user, signOut } = useAuthContext();

  return (
    <SafeAreaView className="bg-zinc-800">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Exemplo de <Text className="text-sky-400">Login</Text>
        </Text>

        <Button
          onPress={() => alert("alerta")}
          title="Refresh posts"
          color={"#f472b6"}
        />
        {user ? (
          <Text className="text-white">
            Olá, {user.email}{" "}
            <Text onPress={signOut}>Clique aqui para sair</Text>
          </Text>
        ) : (
          <Text className="text-white">
            Você não está logado
            <Link href="/login"> Clique aqui para logar</Link>
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Index;
