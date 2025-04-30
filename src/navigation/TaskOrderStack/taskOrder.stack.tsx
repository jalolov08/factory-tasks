import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskOrderStackParams } from './taskOrder.type';
import TaskOrders from '@screens/TaskOrders/taskOrders.screen';
import Filters from '@screens/Filters/filters.screen';

const Stack = createNativeStackNavigator<TaskOrderStackParams>();

function TaskOrderStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='TaskOrders' component={TaskOrders} />
      <Stack.Screen name='Filters' component={Filters} />
    </Stack.Navigator>
  );
}

export default TaskOrderStack;
