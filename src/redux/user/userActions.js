import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTOLOGIN_SUCCESS = 'AUTOLOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const MOVETOADDINFO = 'MOVETOADDINFO';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_FAIL = 'USER_REQUEST_FAIL';

export const login = (code) => {
  return async (dispatch, getState) => {
    const confirmation = getState().otp.confirmation;
    let userConfirm;
    dispatch({
      type: USER_REQUEST,
    });
    try {
      userConfirm = await confirmation.confirm(code);
    } catch (err) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
      throw err;
    }
    try {
      if (userConfirm.additionalUserInfo.isNewUser) {
        return dispatch({
          type: MOVETOADDINFO,
        });
      }
      const user = {
        uid: userConfirm.user.udi,
        name: userConfirm.user.displayName,
        phone: userConfirm.user.phoneNumber,
      };
      dispatch({
        type: LOGIN_SUCCESS,
        user,
      });
    } catch (err) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
      throw err;
    }
  };
};

export const signup = (name) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      const user = auth().currentUser;
      await database().ref(`/users/${user.uid}`).set({
        uid: user.uid,
        name,
        phone: user.phoneNumber,
      });

      await user.updateProfile({
        displayName: name,
      });

      dispatch({
        type: SIGNUP_SUCCESS,
        user: {name, phone: user.phoneNumber},
      });
    } catch (err) {
      throw err;
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      await auth().signOut();
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
      throw err;
    }
  };
};

export const autoLogin = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: AUTOLOGIN_SUCCESS,
        user,
      });
    } catch (err) {
      throw err;
    }
  };
};
