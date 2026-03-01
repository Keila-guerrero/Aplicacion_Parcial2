import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ExampleEvent from '../screens/ExampleEvent';
import Counter from '../screens/Counter';
import AboutMeScreen from '../screens/AboutMeScreen';
import FoodFavScreen from '../screens/FoodFavScreen';
import MoviesFavScreen from '../screens/MoviesFavScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#1B263B' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Mi Portafolio' }} />
      <Stack.Screen name="ExampleEvent" component={ExampleEvent} options={{ title: 'Eventos' }} />
      <Stack.Screen name="Counter" component={Counter} options={{ title: 'Contador' }} />
      <Stack.Screen name="AboutMe" component={AboutMeScreen} options={{ title: 'Sobre Mí' }} />
      <Stack.Screen name="FoodFav" component={FoodFavScreen} options={{ title: 'Mis Comidas' }} />
      <Stack.Screen name="MoviesFav" component={MoviesFavScreen} options={{ title: 'Mis Pelis' }} />
    </Stack.Navigator>
  );
}