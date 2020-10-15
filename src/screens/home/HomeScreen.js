import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userActions, withoutUserActions} from '../../redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  // console.log(user.user);
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeScreen;
