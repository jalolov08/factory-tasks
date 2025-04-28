import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskOrders from "@screens/TaskOrders/taskOrders.screen";

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TaskOrders" component={TaskOrders} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
