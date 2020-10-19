/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
} from 'react-native';
import {WIDTH} from '../../../ultils/constant';
import {ButtonWithBG} from '../../../components/button';
import {MediumText, RegularText} from '../../../components/text';
import Colors from '../../../ultils/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Form
import {useForm, Controller} from 'react-hook-form';
// Action
import {userActions} from '../../../redux';
import {useDispatch} from 'react-redux';
// import propTypes from 'prop-types';

export const InfoForm = () => {
  const dispatch = useDispatch();
  const {handleSubmit, control, errors} = useForm();
  const inputNameRef = useRef(null);
  useEffect(() => {
    inputNameRef.current.focus();
  }, []);
  const onSubmit = async (data) => {
    try {
      await dispatch(userActions.signup(data.name));
    } catch (err) {
      console.log(err);
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
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: 'Không được bỏ trống',
                validate: (value) =>
                  value.length >= 6 || 'Tên phải nhiều hơn 6 ký tự',
              }}
              render={(props) => (
                <TextInput
                  {...props}
                  name="name"
                  placeholder="Your Name"
                  placeholderTextColor={Colors.white_light}
                  clearButtonMode="always"
                  maxLength={30}
                  returnKeyType="done"
                  onChangeText={(text) => {
                    props.onChange(text);
                  }}
                  style={styles.input}
                  selectionColor={Colors.white}
                  ref={inputNameRef}
                />
              )}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            {errors.name ? (
              <RegularText style={styles.error}>
                {errors.name.message}
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

// InfoForm.propTypes = {};
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
