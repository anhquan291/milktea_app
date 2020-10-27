/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MediumText, RegularText} from '../../components/Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../themes/Colors';
import {Loader} from '../../components/Loader';
import {OtpForm} from './components';
import {useSelector} from 'react-redux';

const OtpScreen = ({navigation, route}) => {
  const isLoading = useSelector((state) => state.user.isLoading);
  const isLoadingOTP = useSelector((state) => state.otp.isLoading);
  const {phone} = route.params;
  return (
    <View style={styles.container}>
      {isLoading || isLoadingOTP ? <Loader /> : <></>}
      <View style={styles.contentWrapper}>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-left"
          size={20}
          color={Colors.white}
        />
        <View style={styles.textWrapper}>
          <RegularText style={{...styles.text, fontSize: 15}}>
            Xác nhận mã OTP được gửi về số
          </RegularText>
          <MediumText style={styles.text}>{phone}</MediumText>
        </View>
      </View>
      <OtpForm phone={phone} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 50,
  },
  contentWrapper: {
    marginHorizontal: 10,
  },
  textWrapper: {marginVertical: 20, alignItems: 'center'},

  text: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default OtpScreen;
