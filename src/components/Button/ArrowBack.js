/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import propTypes from 'prop-types';

const ArrowBack = (props) => {
  return (
    <View
      style={{
        ...styles.icon,
        ...props.style,
      }}>
      <Icon
        name="arrow-left"
        color={props.color}
        size={props.size}
        onPress={props.onPress}
      />
    </View>
  );
};

ArrowBack.propTypes = {};
const styles = StyleSheet.create({
  icon: {
    zIndex: 999,
  },
});

export default ArrowBack;
