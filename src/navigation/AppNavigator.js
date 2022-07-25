import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NewTaskScreen, LoginScreen} from '../screens';
import MainTab from './MainStack';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
      initialRouteName={'LoginScreen'}>
      <AppStack.Screen name="LoginScreen" component={LoginScreen} />
      <AppStack.Screen name="Main" component={MainTab} />
      <AppStack.Screen name="NewTaskScreen" component={NewTaskScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
