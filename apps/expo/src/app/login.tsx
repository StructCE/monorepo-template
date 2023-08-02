import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const LoginPage = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Login" }} />
      <View>
        <Text>TODO: Login page</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
