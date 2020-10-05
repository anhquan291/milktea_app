import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Intro SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IntroScreen;
