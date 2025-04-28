import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type TaskOrderStackParams = {
  TaskOrders: undefined;
};

export type TaskOrderRouteProps<RouteName extends keyof TaskOrderStackParams> =
  RouteProp<TaskOrderStackParams, RouteName>;

export type TaskOrderStackNavigationProps<
  NavigationName extends keyof TaskOrderStackParams
> = NativeStackScreenProps<TaskOrderStackParams, NavigationName>;

export type TaskOrdersScreenProps = NativeStackScreenProps<
  TaskOrderStackParams,
  'TaskOrders'
>;
