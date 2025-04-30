import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackParams = {
  TabBar: undefined;
  AuthStack: undefined;
  EditProfile: undefined;
  TaskOrder: { id: string };
};

export type MainStackNavigationProps<NavigationName extends keyof MainStackParams> =
  NativeStackScreenProps<MainStackParams, NavigationName>;
