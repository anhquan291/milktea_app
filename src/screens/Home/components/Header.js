/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import Animated, {Extrapolate} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {HEIGHT, WIDTH} from '../../../ultils/Constants';
import MenuItem from './MenuItem';
import {MediumText, RegularText} from '../../../components/Text';
import {ShadowView} from '../../../components/Shadow';
import Colors from '../../../themes/Colors';
import propTypes from 'prop-types';

const HEADER_HEIGHT = 170;
const HEADER_MIN = 90;
const HEADER_DISTANCE = HEADER_HEIGHT - HEADER_MIN;

export const Header = ({scrollY}) => {
  const user = useSelector((state) => state.user.user);
  const headerTranslateY = Animated.interpolate(scrollY, {
    inputRange: [0, HEADER_DISTANCE],
    outputRange: [0, Platform.OS === 'android' ? -80 : -HEADER_MIN / 2],
    extrapolate: Extrapolate.CLAMP,
  });
  const menuListTranslateY = Animated.interpolate(scrollY, {
    inputRange: [0, HEADER_DISTANCE],
    // outputRange: [0, HEIGHT > 684 ? -HEADER_MIN / 3 : -HEADER_MIN / 3],
    outputRange: [0, -HEADER_MIN / 3],
    extrapolate: Extrapolate.CLAMP,
  });
  const menuListBorder = Animated.interpolate(scrollY, {
    inputRange: [0, HEADER_DISTANCE],
    outputRange: [20, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const infoOpacity = Animated.interpolate(scrollY, {
    inputRange: [0, HEADER_DISTANCE],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const menuColor = Animated.interpolateColors(scrollY, {
    inputRange: [0, HEADER_DISTANCE],
    outputColorRange: [Colors.white, 'transparent'],
    extrapolate: Extrapolate.CLAMP,
  });
  const menuShadow = Animated.interpolate(scrollY, {
    inputRange: [0, HEADER_DISTANCE],
    outputRange: [2, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const menuWidth = Animated.interpolate(scrollY, {
    inputRange: [0, HEADER_DISTANCE],
    outputRange: [WIDTH - 40, WIDTH],
    extrapolate: Extrapolate.CLAMP,
  });
  const MENULIST = [
    {name: 'Tích điểm', icon: 'wallet'},
    {name: 'Đặt hàng', icon: 'motorcycle'},
    {name: 'Vouchers', icon: 'card-giftcard'},
    {name: 'Lịch sử', icon: 'history'},
  ];
  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{translateY: headerTranslateY}],
      }}>
      <Animated.View
        style={{
          ...styles.mainBackground,
          borderBottomRightRadius: menuListBorder,
          borderBottomLeftRadius: menuListBorder,
        }}>
        <View style={styles.circle} />
        <View style={styles.circleSmall} />
      </Animated.View>
      <Animated.View
        style={{
          ...styles.listWrapper,

          transform: [{translateY: menuListTranslateY}],
        }}>
        <Animated.View
          style={{
            ...styles.list,
            elevation: menuShadow,
            backgroundColor: menuColor,
            width: menuWidth,
          }}>
          {MENULIST.map((item, index) => (
            <MenuItem key={index} item={item} scrollY={scrollY} />
          ))}
        </Animated.View>
      </Animated.View>
      <Animated.View style={{...styles.infoWrapper, opacity: infoOpacity}}>
        <Image
          style={styles.user}
          source={require('../../../assets/images/userDefault.png')}
        />
        {user !== null && (
          <ShadowView style={styles.point}>
            <FontAwesome5 name="gift" size={24} color={Colors.primary} />
            <MediumText style={styles.pointCount}>0</MediumText>
          </ShadowView>
        )}
        <View>
          {user !== null ? (
            <>
              <MediumText style={styles.text}>{user.name}</MediumText>
              <View style={styles.userInfo}>
                <Foundation name="crown" size={20} color={Colors.yellow} />
                <RegularText style={{...styles.text, marginLeft: 5}}>
                  Thành viên mới
                </RegularText>
              </View>
            </>
          ) : (
            <TouchableOpacity>
              <MediumText style={{...styles.text, marginRight: 5}}>
                Đăng nhập
              </MediumText>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    </Animated.View>
  );
};

Header.propTypes = {
  scrollY: propTypes.object.isRequired,
};
const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    position: 'absolute',
    height: HEADER_HEIGHT,
    width: WIDTH,
  },
  mainBackground: {
    position: 'absolute',
    height: HEADER_HEIGHT,
    width: WIDTH,
    backgroundColor: Colors.primary,
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    height: 500,
    width: 500,
    borderRadius: 250,
    bottom: 20,
    right: 100,
    backgroundColor: '#4fa5a5',
  },
  circleSmall: {
    position: 'absolute',
    height: 100,
    width: 100,
    borderRadius: 50,
    bottom: -30,
    right: -50,
    backgroundColor: '#86cece',
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 50,
    marginHorizontal: 10,
  },
  user: {
    resizeMode: Platform.OS === 'ios' ? 'contain' : 'cover',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.white,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
  },
  text: {
    color: Colors.white,
  },
  listWrapper: {
    height: 90,
    width: WIDTH,
    position: 'absolute',
    alignItems: 'center',
    bottom: -30,
  },
  list: {
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    //shadow
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  point: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    right: 15,
    height: 35,
    width: 80,
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  pointCount: {
    fontSize: 18,
    marginLeft: 10,
  },
});
