import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack/auth.stack";
import { useAuthStore } from "@zustand/useAuthStore";
import { MainStackParams } from "./main.type";
import TabBar from "./TabBar/tabBar";

const Stack = createNativeStackNavigator<MainStackParams>();

function Main() {
  const { isAuthenticated } = useAuthStore();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="TabBar" component={TabBar} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}

export default Main;
