import {
  AUTOLOGIN_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  MOVE_TO_ADDINFO,
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
        isNewUser: false,
        isLoading: false,
      };
    case AUTOLOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case MOVE_TO_ADDINFO:
      return {
        ...state,
        isNewUser: true,
        isLoading: false,
      };
    case USER_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
