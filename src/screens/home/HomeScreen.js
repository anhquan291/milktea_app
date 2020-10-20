import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userActions, withoutUserActions} from '../../redux';
import {Banners} from './components';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Banners />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeScreen;
