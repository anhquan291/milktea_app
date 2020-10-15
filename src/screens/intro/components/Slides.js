import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {HEIGHT, WIDTH} from '../../../ultils/constant';
import {MediumText} from '../../../components/text';
import propTypes from 'prop-types';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const Slides = ({
  imageUrl,
  subtitle,
  des,
  nextHandler,
  last,
  enterApp,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageUrl} />
      <View style={styles.textContainer}>
        <MediumText style={styles.title}>{subtitle}</MediumText>
        <MediumText style={styles.title}>{des}</MediumText>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={last ? enterApp : nextHandler}>
        <MediumText style={styles.nextText}>
          {last ? 'xong' : 'tiếp'}
        </MediumText>
      </TouchableOpacity>
    </View>
  );
};

Slides.propTypes = {
  subtitle: propTypes.string.isRequired,
  des: propTypes.string.isRequired,
  enterApp: propTypes.func.isRequired,
  nextHandler: propTypes.func.isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    width: WIDTH,
    height: WIDTH,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 10 : HEIGHT > 736 ? 40 : 20,
  },
  title: {
    fontSize: 21,
    color: Colors.primary,
  },
  button: {
    position: 'absolute',
    right: 52.5,
    bottom: 39,
    zIndex: 2,
  },
  nextText: {
    fontSize: 18,
    color: Colors.white,
    textTransform: 'uppercase',
  },
});
