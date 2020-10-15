import {ENTER_APP_SUCCESS, TO_LOGOUT_SCEEEN} from './withoutUserActions';

const initialState = {
  enterAppWithoutUser: false,
};

const withoutUserReducer = (state = initialState, action) => {
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

export default withoutUserReducer;
