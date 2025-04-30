import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '@screens/Profile/profile.screen';
import { ProfileStackParams } from './profile.type';

const Stack = createNativeStackNavigator<ProfileStackParams>();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
