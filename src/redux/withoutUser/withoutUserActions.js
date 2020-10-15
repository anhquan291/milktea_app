export const ENTER_APP_SUCCESS = 'ENTER_APP_SUCCESS';
export const TO_LOGOUT_SCEEEN = 'TO_LOGOUT_SCEEEN';

export const enterAppWithoutUser = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ENTER_APP_SUCCESS,
      });
    } catch (err) {
      throw err;
    }
  };
};
export const toLogoutScreen = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: TO_LOGOUT_SCEEEN,
      });
    } catch (err) {
      throw err;
    }
  };
};
