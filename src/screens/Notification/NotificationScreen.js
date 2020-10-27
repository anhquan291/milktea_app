/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MediumText, RegularText} from '../../components/Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../themes/Colors';
import {NotificationBody} from './components';
import {Loader} from '../../components/Loader';
import {useSelector} from 'react-redux';

const NotificationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NotificationBody />
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

export default NotificationScreen;
