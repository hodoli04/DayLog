import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import RootStack from './screens/RootStack';

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
export default App;
