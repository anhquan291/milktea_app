/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MediumText, RegularText} from '../../components/text';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../ultils/colors';
import {InfoForm} from './components';
import {Loader} from '../../components/loader';
import {useSelector} from 'react-redux';

const AddInfoScreen = ({navigation, route}) => {
  const isLoading = useSelector((state) => state.otp.isLoading);
  const isLoadingUser = useSelector((state) => state.user.isLoading);
  const {phone} = route.params;
  return (
    <View style={styles.container}>
      {isLoading || isLoadingUser ? <Loader /> : <></>}
      <View style={styles.contentWrapper}>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-left"
          size={20}
          color={Colors.white}
        />
        <View style={styles.textWrapper}>
          <MediumText style={styles.text}>Thiết lập thông tin</MediumText>
          <RegularText style={{...styles.text, fontSize: 15}}>
            Số điện thoại đăng ký của bạn là {phone}
          </RegularText>
        </View>
      </View>
      <InfoForm />
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

export default AddInfoScreen;
