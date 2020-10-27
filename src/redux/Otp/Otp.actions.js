import auth from '@react-native-firebase/auth';
export const OTP_REQUEST = 'OTP_REQUEST';
export const OTP_SUCCESS = 'OTP_SUCCESS';
export const OTP_FAIL = 'OTP_FAIL';

export const otpRequest = (phone) => {
  return async (dispatch) => {
    dispatch({
      type: OTP_REQUEST,
    });
    try {
      const confirmation = await auth().signInWithPhoneNumber(`+84${phone}`);
      dispatch({
        type: OTP_SUCCESS,
        confirmation,
      });
    } catch (err) {
      dispatch({
        type: OTP_FAIL,
      });
      throw err;
    }
  };
};
