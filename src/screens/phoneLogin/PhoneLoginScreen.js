import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MediumText} from '../../components/text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../ultils/colors';
import {PhoneForm} from './components';
import {Loader} from '../../components/loader';
import {useSelector} from 'react-redux';

const PhoneLoginScreen = ({navigation}) => {
  const isLoading = useSelector((state) => state.otp.isLoading);
  return (
    <View style={styles.container}>
      {isLoading ? <Loader /> : <></>}
      <View style={styles.contentWrapper}>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-left"
          size={20}
          color={Colors.white}
        />
        <View style={styles.textWrapper}>
          <MediumText style={styles.text}>Xin chào,</MediumText>
          <MediumText style={styles.text}>
            Vui lòng nhập số điện thoại
          </MediumText>
        </View>
      </View>
      <PhoneForm />
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
  textWrapper: {marginVertical: 20},

  text: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default PhoneLoginScreen;
