import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './Routes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.home.name}>

        <Stack.Screen name={Routes.home.name} component={Routes.home.component} options={{
          headerShown: false
        }} />

        <Stack.Screen name={Routes.search.name} component={Routes.search.component} options={{
          headerShown: false,
          animation: 'slide_from_right'
        }} />

        <Stack.Screen name={Routes.favorites.name} component={Routes.favorites.component} options={{
          headerShown: false,
          animation: 'slide_from_right'
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;