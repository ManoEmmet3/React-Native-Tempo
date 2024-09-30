// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherCard from './app/TelaInicial';
import DestinosScreen from './app/DestinosScreen';
import CityDetails from './app/CityDetails'; // Importa o novo componente

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WeatherCard">
        <Stack.Screen
          name="WeatherCard"
          component={WeatherCard}
          options={{ title: 'Previsão do Tempo' }}
        />
        <Stack.Screen
          name="DestinosScreen"
          component={DestinosScreen}
          options={{ title: 'Destinos' }}
        />
        <Stack.Screen
          name="CityDetails" 
          component={CityDetails}
          options={{ title: 'Detalhes da Cidade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
