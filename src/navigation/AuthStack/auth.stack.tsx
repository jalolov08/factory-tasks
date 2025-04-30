import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParams } from './auth.type';
import Login from '@screens/Login/login.screen';

const Stack = createNativeStackNavigator<AuthStackParams>();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
}

export default AuthStack;
