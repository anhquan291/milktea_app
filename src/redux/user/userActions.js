export const SIGNUP_SUCCESS = 'IGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_FAIL = 'USER_REQUEST_FAIL';

export const SignUp = (name, email, password) => {
  return async (dispatch) => {
    dispatch({
      type: USER_REQUEST,
    });
    try {
      //   const response = await timeoutPromise(
      //     fetch(`${API_URL}/user/register`, {
      //       headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'application/json',
      //       },
      //       method: 'POST',
      //       body: JSON.stringify({
      //         name,
      //         email,
      //         password,
      //       }),
      //     }),
      //   );
      //   if (!response.ok) {
      //     const errorResData = await response.json();
      //     dispatch({
      //       type: AUTH_FAILURE,
      //     });
      //     throw new Error(errorResData.err);
      //   }
      dispatch({
        type: SIGNUP_SUCCESS,
      });
    } catch (err) {
      throw err;
    }
  };
};
