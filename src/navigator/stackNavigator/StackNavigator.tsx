import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { RootStackParamList } from '../../routes';
import { DetailScreen, HomeScreen } from '../../screens';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const StackNavigator = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Detail" component={DetailScreen} />
    </Navigator>
  );
};

export { StackNavigator };
