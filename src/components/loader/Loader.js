import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Colors from '../../ultils/colors';
import {WIDTH, HEIGHT} from '../../ultils/constant';
const Loader = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
});

export default Loader;
