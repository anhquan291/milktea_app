import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import Colors from '../../themes/Colors';
import {WIDTH, HEIGHT} from '../../ultils/Constants';
const Loader = (props) => {
  return (
    <View style={{...styles.container, ...props.style}}>
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
    zIndex: 1001,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
});

export default Loader;
