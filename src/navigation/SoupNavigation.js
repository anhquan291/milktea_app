import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import IntroScreen from '../screens/intro';
// Home
import HomeScreen from '../screens/home';
//Auth
import LoginOptionsScreen from '../screens/loginOptions';
import PhoneLoginScreen from '../screens/phoneLogin';
import OtpScreen from '../screens/otp';
import AddInfoScreen from '../screens/addInfo';

const IntroStack = createStackNavigator();

export const IntroStackScreens = () => (
  <IntroStack.Navigator screenOptions={{headerShown: false}}>
    <IntroStack.Screen name="IntroScreen" component={IntroScreen} />
  </IntroStack.Navigator>
);

const AuthStack = createStackNavigator();

export const AuthStackScreens = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen
      name="LoginOptionsScreen"
      component={LoginOptionsScreen}
    />
    <AuthStack.Screen name="PhoneLoginScreen" component={PhoneLoginScreen} />
    <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
    <AuthStack.Screen name="AddInfoScreen" component={AddInfoScreen} />
  </AuthStack.Navigator>
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
