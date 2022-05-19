import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="Write" component={WriteScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
