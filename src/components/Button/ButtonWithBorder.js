import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {WIDTH} from '../../ultils/Constants';
const ButtonWithBorder = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{...styles.button, ...props.style, borderColor: props.color}}>
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
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default ButtonWithBorder;
