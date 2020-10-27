/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {WIDTH, HEIGHT, SPACING} from '../../../ultils/Constants';
import {ButtonWithBG} from '../../../components/Button';
import {MediumText, RegularText} from '../../../components/Text';
import Colors from '../../../themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FastImage from 'react-native-fast-image';
import propTypes from 'prop-types';

const BANNER_HEIGHT = HEIGHT * 0.3;

export const BannerDetailBody = ({item}) => {
  console.log(item.title);
  return (
    <View>
      <FastImage
        style={styles.bannerImage}
        source={{uri: item.img}}
        resizeMode={FastImage.resizeMode.stretch}
      />
    </View>
  );
};

BannerDetailBody.propTypes = {
  item: propTypes.object.isRequired,
};
const styles = StyleSheet.create({
  bannerImage: {
    resizeMode: 'stretch',
    width: WIDTH,
    height: BANNER_HEIGHT,
  },
});
