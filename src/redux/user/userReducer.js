import {
  AUTOLOGIN_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  MOVETOADDINFO,
  SIGNUP_SUCCESS,
  USER_REQUEST,
  USER_REQUEST_FAIL,
} from './userActions';

const initialState = {
  user: null,
  isLoading: false,
  isNewUser: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    case AUTOLOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case USER_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case MOVETOADDINFO:
      return {
        ...state,
        user: null,
        isNewUser: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
