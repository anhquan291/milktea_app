import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {IntroStackScreens, HomeTabScreens} from './SoupNavigation';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <IntroStackScreens />
    </NavigationContainer>
  );
};

export default AppNavigation;
