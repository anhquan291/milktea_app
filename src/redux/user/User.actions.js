import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTOLOGIN_SUCCESS = 'AUTOLOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const MOVE_TO_ADDINFO = 'MOVE_TO_ADDINFO';
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
          type: MOVE_TO_ADDINFO,
        });
      }
      const user = await firestore()
        .collection('users')
        .doc(userConfirm.user.udi)
        .get();

      dispatch({
        type: LOGIN_SUCCESS,
        user: user._data,
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
      firestore()
        .collection('users')
        .doc(`${user.uid}`)
        .set({
          uid: user.uid,
          name,
          phone: user.phoneNumber,
          point: 0,
        })
        .then(() => {
          console.log('User added!');
        });

      await user.updateProfile({
        displayName: name,
      });

      dispatch({
        type: SIGNUP_SUCCESS,
        user: {name, phone: user.phoneNumber, point: 0},
      });
    } catch (err) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
      throw err;
    }
  };
};

export const loginWithFb = () => {
  return async (dispatch) => {
    dispatch({
      type: USER_REQUEST,
    });
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
      throw 'Something went wrong obtaining access token';
    }
    try {
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      const fbUser = await auth().signInWithCredential(facebookCredential);
      if (fbUser.additionalUserInfo.isNewUser) {
        firestore()
          .collection('users')
          .doc(`${fbUser.user._user.uid}`)
          .set({
            uid: fbUser.user._user.uid,
            name: fbUser.user._user.displayName,
            phone: '',
            point: 0,
          })
          .then(() => {
            console.log('User added!');
          });
      }
      const user = await firestore()
        .collection('users')
        .doc(fbUser.user._user.uid)
        .get();
      dispatch({
        type: LOGIN_SUCCESS,
        user: user._data,
      });
    } catch (err) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
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

export const autoLogin = (uid) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      const user = await firestore().collection('users').doc(uid).get();
      dispatch({
        type: AUTOLOGIN_SUCCESS,
        user: user._data,
      });
    } catch (err) {
      dispatch({
        type: USER_REQUEST_FAIL,
      });
      throw err;
    }
  };
};
