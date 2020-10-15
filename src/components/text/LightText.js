import React from 'react';
import {Text, StyleSheet} from 'react-native';
// Text.defaultProps.allowFontScaling = false;
const LightText = (props) => {
  return (
    <Text
      onPress={props.onPress}
      allowFontScaling={false}
      selectable={props.selectable}
      style={{...styles.text, ...props.style}}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Roboto-ThinItalic',
  },
});

export default LightText;
