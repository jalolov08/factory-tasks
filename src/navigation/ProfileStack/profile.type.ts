import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type ProfileStackParams = {
  Profile: undefined;
  EditProfile: undefined;
};

export type ProfileRouteProps<RouteName extends keyof ProfileStackParams> =
  RouteProp<ProfileStackParams, RouteName>;

export type ProfileStackNavigationProps<
  NavigationName extends keyof ProfileStackParams
> = NativeStackScreenProps<ProfileStackParams, NavigationName>;

export type ProfileScreenProps = NativeStackScreenProps<
  ProfileStackParams,
  'Profile'
>;

export type EditProfileScreenProps = NativeStackScreenProps<
  ProfileStackParams,
  'EditProfile'
>;
