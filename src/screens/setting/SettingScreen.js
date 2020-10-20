/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {userActions, withoutUserActions} from '../../redux';
import {useSelector, useDispatch} from 'react-redux';
import {MediumText, RegularText} from '../../components/text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../ultils/colors';
import {SettingBody} from './components';
import {Loader} from '../../components/loader';

const SettingScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  return (
    <View style={styles.container}>
      <Text>Hi {user !== null ? user.name : 'Guest'}</Text>
      {user !== null ? (
        <Button title="Logout" onPress={() => dispatch(userActions.logout())} />
      ) : (
        <Button
          title="Login"
          onPress={() => dispatch(withoutUserActions.toLogoutScreen())}
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
