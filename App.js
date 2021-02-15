import React from 'react';
import HomeScreen from './screens/HomeScreen'
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: 'DDDDDD',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

