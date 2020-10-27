import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {WIDTH} from '../../ultils/Constants';
const ButtonWithBG = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          ...styles.button,
          ...props.style,
          backgroundColor: props.color,
        }}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: WIDTH - 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default ButtonWithBG;
