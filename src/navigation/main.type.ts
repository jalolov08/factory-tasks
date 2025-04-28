import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackParams = {
  TabBar: undefined;
  AuthStack: undefined;
  EditProfile: undefined;
};

export type MainStackNavigationProps<
  NavigationName extends keyof MainStackParams
> = NativeStackScreenProps<MainStackParams, NavigationName>;
