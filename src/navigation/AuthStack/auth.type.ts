import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type AuthStackParams = {
  Login: undefined;
};

export type AuthRouteProps<RouteName extends keyof AuthStackParams> = RouteProp<
  AuthStackParams,
  RouteName
>;

export type AuthNavigationProps<NavigationName extends keyof AuthStackParams> =
  NativeStackScreenProps<AuthStackParams, NavigationName>;

export type LoginScreenProps = NativeStackScreenProps<AuthStackParams, 'Login'>;
