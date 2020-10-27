import {OTP_FAIL, OTP_REQUEST, OTP_SUCCESS} from './Otp.actions';

const initialState = {
  confirmation: null,
  isLoading: false,
};

const OtpReducer = (state = initialState, action) => {
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

export default OtpReducer;
