/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MediumText, RegularText} from '../../components/Text';
import {SPACING} from '../../ultils/Constants';
import Colors from '../../themes/Colors';
import {BannerDetailBody} from './components';
import {Loader} from '../../components/Loader';
import {ArrowBack} from '../../components/Button';
import {useSelector} from 'react-redux';

const BannerDetailScreen = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <ArrowBack
        onPress={() => navigation.goBack()}
        style={styles.back}
        size={22}
        color={Colors.grey}
      />
      <BannerDetailBody item={item} />
      {/* <MediumText>Detail Banner</MediumText> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  back: {
    position: 'absolute',
    top: SPACING * 4,
    left: SPACING * 2,
  },
});

export default BannerDetailScreen;
