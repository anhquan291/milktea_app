/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../../themes/Colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Timer from './Timer';
import {useDispatch, useSelector} from 'react-redux';
import {UserActions} from '../../../redux';
import propTypes from 'prop-types';

export const OtpForm = ({phone}) => {
  const dispatch = useDispatch();
  const isNewUser = useSelector((state) => state.user.isNewUser);
  const navigation = useNavigation();

  useEffect(() => {
    if (isNewUser) {
      navigation.navigate('AddInfoScreen', {phone});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNewUser]);
  // OTP confirm

  const verify = async (code) => {
    try {
      await dispatch(UserActions.login(code));
    } catch (err) {
      Alert.alert('Invalid OTP', 'Mã OTP không hợp lệ', [{text: 'Nhập lại'}]);
    }
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <ScrollView>
        <View style={styles.container}>
          <OTPInputView
            style={styles.otpForm}
            pinCount={6}
            selectionColor={Colors.white}
            autoFocusOnLoad={true}
            codeInputFieldStyle={styles.underlineStyleBase}
            onCodeFilled={(code) => {
              verify(code);
            }}
          />
        </View>
      </ScrollView>
      <Timer phone={phone} />
    </KeyboardAvoidingView>
  );
};

OtpForm.propTypes = {
  phone: propTypes.string.isRequired,
};
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  otpForm: {
    width: '70%',
    height: 150,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 1,
    fontSize: 20,
    color: Colors.white,
  },
  underlineStyleHighLighted: {
    borderColor: Colors.bluefb,
  },
});
