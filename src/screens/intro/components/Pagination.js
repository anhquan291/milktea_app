/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {WIDTH} from '../../../ultils/constant';
import Colors from '../../../ultils/colors';
//PropTypes check
import propTypes from 'prop-types';

const DOT_SIZE = 20;

export const Pagination = ({scrollX, slides}) => {
  const translateX = scrollX.interpolate({
    inputRange: [0, WIDTH, WIDTH * 2],
    outputRange: [-DOT_SIZE, DOT_SIZE - 10, DOT_SIZE * 3 - 10],
    extrapolate: 'clamp',
  });
  return (
    <View style={styles.pagination}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            transform: [{translateX}],
          },
        ]}
      />
      {slides.map((item, index) => {
        return (
          <View key={index} style={styles.paginationDotContainer}>
            <View style={[styles.paginationDot]} />
          </View>
        );
      })}
    </View>
  );
};

Pagination.propTypes = {
  scrollX: propTypes.object.isRequired,
  slides: propTypes.array.isRequired,
};

const styles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    flexDirection: 'row',
    height: DOT_SIZE,
    width: DOT_SIZE * 4,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  paginationDot: {
    width: DOT_SIZE * 0.5,
    height: DOT_SIZE * 0.5,
    borderRadius: DOT_SIZE * 0.5,
    backgroundColor: Colors.light_grey,
    marginRight: 30,
  },
  paginationIndicator: {
    width: DOT_SIZE * 1.5,
    height: DOT_SIZE * 0.5,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: Colors.primary,
    left: 20,
    zIndex: 1000,
  },
});
