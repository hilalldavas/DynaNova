import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import Welcome from './src/screens/Welcome';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Profil from './src/screens/Profil';
import Yoga from './src/screens/Yoga'; // Yoga sayfasını ekledik
import Meditation from './src/screens/Meditation'; // Meditation sayfasını ekledik

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profil' component={Profil} />
        <Stack.Screen name='Yoga' component={Yoga} />
        <Stack.Screen name='Meditation' component={Meditation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
