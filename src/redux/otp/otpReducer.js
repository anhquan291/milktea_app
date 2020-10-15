import {OTP_FAIL, OTP_REQUEST, OTP_SUCCESS} from './otpActions';

const initialState = {
  confirmation: null,
  isLoading: false,
};

const otpReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case OTP_SUCCESS:
      return {
        ...state,
        confirmation: action.confirmation,
        isLoading: false,
      };
    case OTP_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default otpReducer;
