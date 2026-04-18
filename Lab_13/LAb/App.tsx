import React from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src//screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator <RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
    </NavigationContainer>  )
}