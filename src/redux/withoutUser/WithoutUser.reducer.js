import {ENTER_APP_SUCCESS, TO_LOGOUT_SCEEEN} from './WithoutUser.actions';

const initialState = {
  enterAppWithoutUser: false,
};

const WithoutUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTER_APP_SUCCESS:
      return {
        ...state,
        enterAppWithoutUser: true,
      };
    case TO_LOGOUT_SCEEEN:
      return {
        ...state,
        enterAppWithoutUser: false,
      };
    default:
      return state;
  }
};

export default WithoutUserReducer;
