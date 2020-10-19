/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {WIDTH} from '../../../ultils/constant';
import {ButtonWithBG} from '../../../components/button';
import {MediumText, RegularText} from '../../../components/text';
import Colors from '../../../ultils/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Form
import {useForm, Controller} from 'react-hook-form';
// Action
import {otpActions} from '../../../redux';
import {useDispatch} from 'react-redux';
// import propTypes from 'prop-types';

export const PhoneForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {handleSubmit, control, errors} = useForm();
  const inputPhoneRef = useRef(null);
  useEffect(() => {
    Platform.OS === 'ios'
      ? inputPhoneRef.current.focus()
      : setTimeout(() => inputPhoneRef.current.focus(), 10);
  }, []);
  const onSubmit = async (data) => {
    const phone = data.phone;
    try {
      await dispatch(otpActions.otpRequest(phone));
      navigation.navigate('OtpScreen', {phone});
    } catch (err) {
      Alert.alert('Invalid phone number', 'Số điện thoại không hợp lệ', [
        {text: 'Nhập lại'},
      ]);
    }
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.phoneContainer}>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{
                required: 'Không được bỏ trống',
                validate: (value) =>
                  value.length === 10 || 'Số điện thoại phải 10 số',
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  name="phone"
                  placeholder="0000000000"
                  placeholderTextColor={Colors.white_light}
                  keyboardType="numeric"
                  clearButtonMode="always"
                  maxLength={10}
                  returnKeyType="done"
                  onChangeText={(text) => {
                    props.onChange(text);
                  }}
                  style={styles.input}
                  selectionColor={Colors.white}
                  ref={inputPhoneRef}
                />
              )}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            {errors.phone ? (
              <RegularText style={styles.error}>
                {errors.phone.message}
                {'  '}
                <Icon name="sad-tear" size={20} color={Colors.red} />
              </RegularText>
            ) : (
              <></>
            )}
          </View>
        </View>
      </ScrollView>
      <ButtonWithBG
        color={Colors.bluefb}
        style={styles.loginButton}
        onPress={handleSubmit(onSubmit)}>
        <MediumText style={styles.loginText}>tiếp tục</MediumText>
      </ButtonWithBG>
    </KeyboardAvoidingView>
  );
};

// PhoneForm.propTypes = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phoneContainer: {
    height: 50,
    width: WIDTH,
    marginBottom: 10,
    alignItems: 'center',
  },
  input: {
    height: '100%',
    width: WIDTH - 20,
    paddingHorizontal: 10,
    fontSize: 18,
    color: Colors.white,
    borderWidth: 1,
    borderColor: Colors.light_grey,
    borderRadius: 5,
    fontFamily: 'Roboto-Bold',
  },
  loginButton: {
    width: WIDTH,
    height: 60,
    borderRadius: 0,
  },
  loginText: {
    color: Colors.white,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  error: {
    marginLeft: 10,
    color: Colors.red,
    marginBottom: 10,
  },
});
