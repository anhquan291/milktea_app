/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {MediumText, RegularText} from '../../../components/text';
import {useDispatch} from 'react-redux';
import {otpActions} from '../../../redux';
import moment from 'moment';
import Colors from '../../../ultils/colors';
import propTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Timer = ({phone}) => {
  const unmounted = useRef(false);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);
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
      initialTime = moment.duration().add({minutes: 1, seconds: 30});
      updateTimer(initialTime);
      await dispatch(otpActions.otpRequest(phoneNum));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.buttonWrapper}>
      <MediumText style={styles.timerText}>
        Bạn không nhận được mã OTP?{' '}
      </MediumText>
      <TouchableOpacity
        disabled={seconds === 0 && minutes === 0 ? false : true}
        onPress={() => reSendOTP(phone)}>
        <MediumText
          style={{
            fontSize: 16,
            textDecorationLine: 'underline',
            color: seconds === 0 && minutes === 0 ? Colors.bluefb : Colors.grey,
          }}>
          GỬI LẠI
        </MediumText>
      </TouchableOpacity>
      <RegularText style={styles.timerText}>
        {''} ( {minutes}:{seconds} )
      </RegularText>
    </View>
  );
};

Timer.propTypes = {
  phone: propTypes.string.isRequired,
};

const styles = StyleSheet.create({
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
  button: {
    backgroundColor: 'transparent',
  },
});

export default Timer;
