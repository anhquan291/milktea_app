import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {
  IntroStackScreens,
  HomeTabScreens,
  AuthStackScreens,
} from './SoupNavigation';
import auth from '@react-native-firebase/auth';
import {userActions} from '../redux';

const AppNavigation = () => {
  const dispatch = useDispatch();
  const firstOpenApp = useSelector((state) => state.firstOpenApp.firstOpenApp);
  const enterAppWithoutUser = useSelector(
    (state) => state.withoutUser.enterAppWithoutUser,
  );
  const user = useSelector((state) => state.user.user);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged(async function (current) {
      if (current && current.displayName !== null) {
        setCurrentUser(current._user);
        dispatch(
          userActions.autoLogin({
            name: current.displayName,
            phone: current.phoneNumber,
          }),
        );
      } else {
        setCurrentUser(null);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      {!firstOpenApp ? (
        <IntroStackScreens />
      ) : user !== null ||
        currentUser !== null ||
        enterAppWithoutUser === true ? (
        <HomeTabScreens />
      ) : (
        <AuthStackScreens />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
