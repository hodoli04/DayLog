import React from 'react';
// import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedsScreen from './FeedsScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';
// import {MaterialIcons} from '@expo/vector-icons';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        actibeTintColor: '#009688',
      }}>
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: () => (
            <Icons name="view-stream" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: () => <Icons name="event" size={24} color="green" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: () => <Icons name="search" size={24} color="tomato" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
