/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {UserActions, WithoutUserActions} from '../../redux';
import {useSelector, useDispatch} from 'react-redux';
import {MediumText, RegularText} from '../../components/Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../themes/Colors';
import {SettingBody} from './components';
import {Loader} from '../../components/Loader';

const SettingScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  return (
    <View style={styles.container}>
      <Text>Hi {user !== null ? user.name : 'Guest'}</Text>
      {user !== null ? (
        <Button
          title="Logout"
          onPress={async () => await dispatch(UserActions.logout())}
        />
      ) : (
        <Button
          title="Login"
          onPress={async () =>
            await dispatch(WithoutUserActions.toLogoutScreen())
          }
        />
      )}
      <SettingBody />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 50,
  },
});

export default SettingScreen;
