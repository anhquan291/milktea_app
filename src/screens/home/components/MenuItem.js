import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {Extrapolate} from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../themes/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import propTypes from 'prop-types';

const HEADER_HEIGHT = 170;
const HEADER_MIN = 90;
const HEADER_DISTANCE = HEADER_HEIGHT - HEADER_MIN;

const MenuItem = ({item, scrollY}) => {
  const iconWrapperColor = Animated.interpolateColors(scrollY, {
    inputRange: [0, HEADER_DISTANCE],
    outputColorRange: ['rgba(130, 197, 197,0.3)', Colors.white],
    extrapolate: Extrapolate.CLAMP,
  });
  const textColor = Animated.interpolateColors(scrollY, {
    inputRange: [0, HEADER_DISTANCE],
    outputColorRange: [Colors.black, Colors.white],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <View style={styles.menuItem}>
      <Animated.View
        style={{...styles.iconWrapper, backgroundColor: iconWrapperColor}}>
        <TouchableOpacity>
          {item.icon === 'motorcycle' ? (
            <Fontisto name={item.icon} size={24} color={Colors.primary_dark} />
          ) : item.icon === 'card-giftcard' ? (
            <MaterialIcons
              name={item.icon}
              size={24}
              color={Colors.primary_dark}
            />
          ) : item.icon === 'history' ? (
            <MaterialIcons
              name={item.icon}
              size={24}
              color={Colors.primary_dark}
            />
          ) : (
            <AntDesign name="wallet" size={22} color={Colors.primary_dark} />
          )}
        </TouchableOpacity>
      </Animated.View>
      <Animated.Text style={{...styles.text, color: textColor}}>
        {item.name}
      </Animated.Text>
    </View>
  );
};

MenuItem.propTypes = {
  scrollY: propTypes.object.isRequired,
  item: propTypes.object.isRequired,
};

const styles = StyleSheet.create({
  menuItem: {
    alignItems: 'center',
  },
  iconWrapper: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    marginBottom: 5,
  },
  text: {
    fontFamily: 'Roboto-regular',
  },
});

export default MenuItem;
