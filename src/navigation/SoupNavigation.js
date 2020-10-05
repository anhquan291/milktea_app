import React from 'react';
import {Platform} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import IntroScreen from '../screens/intro';
import HomeScreen from '../screens/home';

const IntroStack = createStackNavigator();

export const IntroStackScreens = () => (
  <IntroStack.Navigator screenOptions={{headerShown: false}}>
    <IntroStack.Screen name="IntroScreen" component={IntroScreen} />
  </IntroStack.Navigator>
);

const HomeStack = createStackNavigator();

export const HomeStackScreens = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
);

const HomeTab = createBottomTabNavigator();

export const HomeTabScreens = () => (
  <HomeTab.Navigator screenOptions={{headerShown: false}}>
    <HomeTab.Screen name="HomeTab" component={HomeStackScreens} />
  </HomeTab.Navigator>
);
