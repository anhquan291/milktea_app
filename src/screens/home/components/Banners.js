/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {WIDTH} from '../../../ultils/constant';
import {ButtonWithBG} from '../../../components/button';
import {MediumText, RegularText} from '../../../components/text';
import Colors from '../../../ultils/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import propTypes from 'prop-types';

const BANNERS = [
  {id: '1', name: 'Trà đào', img: ''},
  {id: '2', name: 'Trà đào', img: ''},
  {id: '3', name: 'Trà đào', img: ''},
  {id: '4', name: 'Trà đào', img: ''},
];

export const Banners = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={BANNERS}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={WIDTH}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={({item}) => (
          <View style={styles.bannerWrapper}>
            <View style={styles.banner}>
              <MediumText>{item.name}</MediumText>
            </View>
          </View>
        )}
      />
    </View>
  );
};

Banners.propTypes = {};
const styles = StyleSheet.create({
  container: {},
  bannerWrapper: {
    width: WIDTH,
    height: 200,
    borderRadius: 0,
    alignItems: 'center',
  },
  banner: {
    width: WIDTH - 40,
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255,0.5)',
  },
});
