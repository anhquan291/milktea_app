/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MediumText, RegularText} from '../../components/text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../ultils/colors';
import {StoreChainBody} from './components';
import {Loader} from '../../components/loader';
import {useSelector} from 'react-redux';

const StoreChainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StoreChainBody />
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

export default StoreChainScreen;
