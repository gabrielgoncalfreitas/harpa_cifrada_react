import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ViewRoutes } from './app/Routes/ViewRoutes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ViewRoutes.home.name}>

        <Stack.Screen name={ViewRoutes.home.name} component={ViewRoutes.home.component} options={{
          headerShown: false
        }} />

        <Stack.Screen name={ViewRoutes.search.name} component={ViewRoutes.search.component} options={{
          headerShown: false,
          animation: 'slide_from_right'
        }} />

        <Stack.Screen name={ViewRoutes.favorites.name} component={ViewRoutes.favorites.component} options={{
          headerShown: false,
          animation: 'slide_from_right'
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;