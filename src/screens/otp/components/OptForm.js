/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Button,
  Alert,
} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {MediumText, RegularText} from '../../../components/text';
import moment from 'moment';
import Colors from '../../../ultils/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useDispatch, useSelector} from 'react-redux';
import {userActions, otpActions} from '../../../redux';
import propTypes from 'prop-types';

export const OtpForm = ({phone}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const unmounted = useRef(false);
  const isFocused = useIsFocused();
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);
  // OTP confirm
  const isNewUser = useSelector((state) => state.user.isNewUser);
  const verify = async (code) => {
    try {
      await dispatch(userActions.login(code));
      if (isNewUser === true) {
        navigation.navigate('AddInfoScreen', {phone});
      }
    } catch (err) {
      Alert.alert('Invalid OTP', 'Mã OTP không hợp lệ', [{text: 'Nhập lại'}]);
    }
  };

  // Timer
  let initialTime = moment.duration().add({minutes: 1, seconds: 30});
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const updateTimer = (timer) => {
    const x = setInterval(() => {
      if (timer <= 0 || !isFocused) {
        clearInterval(x);
      } else {
        timer.subtract(1, 's');
        if (!unmounted.current) {
          setMinutes(timer.minutes());
          setSeconds(timer.seconds());
        }
      }
    }, 1000);
  };
  useEffect(() => {
    updateTimer(initialTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Resend OTP
  const reSendOTP = async (phoneNum) => {
    try {
      await dispatch(otpActions.otpRequest(phoneNum));
      updateTimer(initialTime);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.container}>
          <OTPInputView
            style={styles.otpForm}
            pinCount={6}
            selectionColor={Colors.white}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            onCodeFilled={(code) => {
              verify(code);
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <MediumText style={styles.timerText}>
          Bạn không nhận được mã OTP?{' '}
        </MediumText>
        <Button
          title="GỬI LẠI"
          onPress={() => reSendOTP(phone)}
          disabled={seconds === 0 ? false : true}
        />
        <RegularText style={styles.timerText}>
          ( {minutes}:{seconds} )
        </RegularText>
      </View>
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
  },
  underlineStyleHighLighted: {
    borderColor: Colors.bluefb,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timerText: {
    color: Colors.white,
    fontSize: 16,
  },
});
