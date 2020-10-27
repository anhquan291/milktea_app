/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {WIDTH} from '../../../ultils/Constants';
import {useNavigation} from '@react-navigation/native';
import {MediumText, RegularText} from '../../../components/Text';
import Colors from '../../../themes/Colors';
import {ButtonWithBG, ButtonWithBorder} from '../../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {WithoutUserActions, UserActions} from '../../../redux';
// import propTypes from 'prop-types';

export const LoginOptionsBody = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const exprerienceApp = async () => {
    try {
      await dispatch(WithoutUserActions.enterAppWithoutUser());
    } catch (err) {
      console.log(err);
    }
  };
  const fbLogin = async () => {
    try {
      await dispatch(UserActions.loginWithFb());
    } catch (err) {
      Alert.alert('Thông báo', 'Đăng nhập không thành công', [
        {text: 'Thử lại'},
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <ButtonWithBG
        onPress={fbLogin}
        color={Colors.bluefb}
        style={styles.button}>
        <Icon
          name="facebook"
          size={25}
          color={Colors.white}
          style={styles.icon}
        />
        <MediumText style={styles.buttonTitle}>
          Đăng nhập bằng Facebook
        </MediumText>
      </ButtonWithBG>
      <ButtonWithBG
        onPress={() => navigation.navigate('PhoneLoginScreen')}
        color={Colors.primary}
        style={styles.button}>
        <Icon
          name="mobile"
          size={25}
          color={Colors.white}
          style={styles.icon}
        />
        <MediumText style={styles.buttonTitle}>
          Đăng nhập bằng số điện thoại
        </MediumText>
      </ButtonWithBG>
      <View style={styles.policy}>
        <RegularText style={styles.policyText}>
          Bằng việc đăng nhập, bạn đã đồng ý{' '}
          <MediumText
            onPress={() => console.log('Policy')}
            style={{...styles.policyText, textDecorationLine: 'underline'}}>
            điều khoản sử dụng
          </MediumText>{' '}
          của Soup Tatua
        </RegularText>
      </View>
      <ButtonWithBorder
        onPress={exprerienceApp}
        color={Colors.primary}
        style={styles.button}>
        <MediumText
          style={{
            ...styles.buttonTitle,
            color: Colors.black,
            textTransform: 'uppercase',
          }}>
          trải nghiệm ngay
        </MediumText>
      </ButtonWithBorder>
    </View>
  );
};

// LoginOptionsBody.propTypes = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
  },
  buttonTitle: {
    fontSize: 16,
    color: Colors.white,
  },
  icon: {
    position: 'absolute',
    left: 20,
  },
  policy: {
    width: WIDTH - 20,
  },
  policyText: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 25,
    color: Colors.grey,
  },
});
