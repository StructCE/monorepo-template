import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

import { useAuthContext } from "@struct/auth-context";

const fields = [
  {
    label: "Coloque seu email",
    attrName: "email",
    textContentType: "username",
  },
  {
    label: "Coloque sua senha",
    attrName: "password",
    textContentType: "password",
  },
] as const;

export default function LoginPage() {
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
  });

  const { signIn } = useAuthContext();

  const router = useRouter();

  function handleSubmit() {
    signIn(loginInfo)
      .then(() => {
        alert("Logado com sucesso!");
        router.replace("/");
      })
      .catch(() => alert("Erro ao logar"));
  }

  return (
    <SafeAreaView className="min-h-screen bg-zinc-800">
      <Stack.Screen options={{ title: "Entre na sua conta" }} />
      <View className="px-10">
        {fields.map(({ label, attrName, textContentType }, i) => {
          return (
            <View key={i}>
              <Text className="mt-10 text-white">{label}</Text>
              <TextInput
                autoCapitalize="none"
                secureTextEntry={textContentType === "password"}
                textContentType={textContentType}
                onChangeText={(text) =>
                  setLoginInfo((prev) => ({ ...prev, [attrName]: text }))
                }
                className="border border-zinc-200 p-2 text-white"
                id={attrName}
              />
            </View>
          );
        })}
        <TouchableOpacity
          onPress={handleSubmit}
          className="mt-14 bg-slate-100 px-3 py-2"
        >
          <Text className="mx-auto font-medium">Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
