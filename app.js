import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import Welcome from './src/screens/Welcome';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Profil from './src/screens/Profil';
import KategoriMeditation from './src/screens/KategoriMeditation';
import KategoriYoga from './src/screens/KategoriYoga';
import Yoga from './src/screens/Yoga';
import Meditation from './src/screens/Meditation';
import BeginnerLesson from './src/screens/BeginnerLesson';
import IntermadiateLesson from './src/screens/IntermadiateLesson';
import AdvancedLesson from './src/screens/AdvancedLesson';
import KidsLesson from './src/screens/KidsLessons';
import HealingMeditation from './src/screens/HealingMeditation.js';
import BreathExercise from './src/screens/BreathExercise.js';

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
        <Stack.Screen name='KategoriYoga' component={KategoriYoga} />
        <Stack.Screen name='KategoriMeditation' component={KategoriMeditation} />
        <Stack.Screen name='BeginnerLesson' component={BeginnerLesson} />
        <Stack.Screen name='IntermadiateLesson' component={IntermadiateLesson} />
        <Stack.Screen name='AdvancedLesson' component={AdvancedLesson} />
        <Stack.Screen name='KidsLesson' component={KidsLesson} />
        <Stack.Screen name='HealingMeditation' component={HealingMeditation} />
        <Stack.Screen name='BreathExercise' component={BreathExercise} />
        <Stack.Screen name='Yoga' component={Yoga} />
        <Stack.Screen name='Meditation' component={Meditation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
