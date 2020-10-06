import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {IntroStackScreens, HomeTabScreens} from './SoupNavigation';

const AppNavigation = () => {
  const firstOpenApp = useSelector((state) => state.firstOpenApp.firstOpenApp);
  return (
    <NavigationContainer>
      {firstOpenApp ? <HomeTabScreens /> : <IntroStackScreens />}
    </NavigationContainer>
  );
};

export default AppNavigation;
