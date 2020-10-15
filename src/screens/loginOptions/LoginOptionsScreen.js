import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import {HEIGHT, WIDTH} from '../../ultils/constant';
import {LightText} from '../../components/text';
import Colors from '../../ultils/colors';
import {LoginOptionsBody} from './components';

const LoginOptionsScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/treebackground.png')}
        style={styles.bg}
      />
      <View>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <LoginOptionsBody />
      <LightText style={styles.version}>Phiên bản 1.0.0</LightText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: 50,
  },
  bg: {
    width: WIDTH,
    height: HEIGHT / 2,
    position: 'absolute',
    bottom: 0,
    resizeMode: 'contain',
  },
  logo: {
    width: WIDTH - 100,
    height: 200,
    resizeMode: 'contain',
  },
  version: {
    position: 'absolute',
    bottom: 20,
  },
});

export default LoginOptionsScreen;
